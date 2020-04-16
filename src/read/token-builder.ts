import * as tokens from "./tokens";
import { SourceSpan, range, span } from "../span";
import { unwrap } from "./utils";

export type CurriedOptionalToken<T extends tokens.Token = tokens.Token> = (
  builder: TokenBuilder
) => T | null;
export type CurriedToken<T extends tokens.Token = tokens.Token> = (
  builder: TokenBuilder
) => T;
export type CurriedAttributeToken = (
  builder: TokenBuilder
) => tokens.AttributeToken;
export type CurriedPresentTokens = [CurriedToken, ...CurriedToken[]];

export function buildPresentTokens(
  tok: CurriedPresentTokens,
  builder: TokenBuilder
): tokens.PresentTokens {
  return tok.map(token => token(builder)) as tokens.PresentTokens;
}

export function str(name: string): CurriedToken<tokens.StringToken> {
  return builder => {
    let start = builder.consume(name[0]);
    let data = builder.consume(name.slice(1, -1));
    let end = builder.consume(name.slice(-1));

    let quote =
      name[0] === `'` ? tokens.QuoteType.Single : tokens.QuoteType.Double;

    return tokens.stringToken({ data, quote }, range(start, end));
  };
}

export function int(num: string): CurriedToken<tokens.NumberToken> {
  if (num[0] === "-") {
    return builder => {
      let negative = builder.consume("-");
      let head = builder.consume(num.slice(1));

      return tokens.numberToken(
        { head, tail: null, negative },
        range(negative, head)
      );
    };
  } else {
    return builder => {
      let head = builder.consume(num);
      return tokens.numberToken({ head, tail: null, negative: null }, head);
    };
  }
}

export function decimal(num: string): CurriedToken<tokens.NumberToken> {
  let [, negative, head, tail] = unwrap(num.match(/^(-?)([0-9]+)\.([0-9]+)$/));

  return builder => {
    let negativeSpan = negative ? builder.consume("-") : null;
    let headSpan = builder.consume(head);
    let tailSpan: SourceSpan | null = null;

    if (tail) {
      builder.consume(".");
      tailSpan = builder.consume(tail);
    }

    return tokens.numberToken(
      {
        head: headSpan,
        tail: tailSpan,
        negative: negativeSpan,
      },
      range(negativeSpan, headSpan, tailSpan)
    );
  };
}

export function id(name: string): CurriedToken<tokens.IdentifierToken> {
  return builder => tokens.id(builder.consume(name));
}

export function arg(name: string): CurriedToken<tokens.ArgumentToken> {
  return builder => tokens.arg(builder.consume(name));
}

export const dot: CurriedToken<tokens.DotToken> = builder =>
  tokens.dot(builder.consume("."));
export const eq: CurriedToken<tokens.EqToken> = builder =>
  tokens.eq(builder.consume("="));
export const sp: CurriedToken<tokens.WSToken> = builder =>
  tokens.ws(builder.consume(" "));

export function ws(space: string): CurriedToken<tokens.WSToken> {
  return builder => tokens.ws(builder.consume(space));
}

export function block(
  name: string | CurriedPresentTokens,
  head: CurriedToken[],
  ...body: CurriedToken[]
): CurriedToken<tokens.BlockToken> {
  let curriedName =
    typeof name === "string" ? ([id(name)] as CurriedPresentTokens) : name;

  return builder => {
    let openToken = builder.consume("{{#");
    let nameTokens = buildTokens(curriedName, builder);
    let headTokens = buildTokens(head, builder);
    let endOpen = builder.consume("}}");

    let bodyTokens = body.map(tok => tok(builder));

    let close = builder.consume("{{/");
    let closeName = buildTokens(curriedName, builder);
    let endClose = builder.consume("}}");

    return tokens.block({
      open: tokens.openBlock(
        {
          name: nameTokens,
          head: headTokens,
        },
        range(openToken, endOpen)
      ),
      body: bodyTokens,
      close: tokens.closeBlock(closeName, range(close, endClose)),
    });
  };
}

export function as(
  ...params: Array<string | CurriedToken<tokens.BlockParamToken>>
): CurriedToken<tokens.BlockParamsToken> {
  return builder => {
    let start = builder.consume("as |");

    let head = params.slice(0, -1);
    let tail = params.slice(-1)[0] as string;

    let tokenList: tokens.BlockParamToken[] = head.flatMap(param =>
      typeof param === "function"
        ? [param(builder)]
        : [id(param)(builder), sp(builder)]
    );
    tokenList.push(id(tail)(builder));

    let end = builder.consume("|");

    return tokens.blockParams(tokenList, range(start, end));
  };
}

function buildTokens(
  input: CurriedPresentTokens,
  builder: TokenBuilder
): tokens.PresentTokens;
function buildTokens(
  input: CurriedToken[],
  builder: TokenBuilder
): tokens.Token[];
function buildTokens(
  input: CurriedToken[],
  builder: TokenBuilder
): tokens.Token[] {
  return input.map(tok => tok(builder));
}

export function interpolate(
  ...children: CurriedToken[]
): CurriedToken<tokens.InterpolateToken> {
  return builder => {
    let open = builder.consume("{{");
    let out = children.map(child => child(builder));
    let close = builder.consume("}}");
    return tokens.interpolate(out, range(open, close));
  };
}

export function stringInterpolate(
  children: Array<CurriedToken<tokens.StringInterpolationPart>>,
  quote: `"` | `'`
): CurriedToken<tokens.AttributeValueToken> {
  return builder => {
    let open = builder.consume(quote);
    let out = children.map(child => child(builder));
    let close = builder.consume(quote);
    return tokens.attrValue(
      {
        type: quoteType(quote),
        value: tokens.stringInterpolation(out, range(...out)),
      },
      range(open, close)
    );
  };
}

export function attrInterpolate(
  ...tokenList: CurriedToken[]
): CurriedToken<tokens.AttributeValueToken> {
  return builder => {
    let value = interpolate(...tokenList)(builder);

    return tokens.attrValue(
      {
        type: tokens.AttributeValueType.Interpolate,
        value,
      },
      value.span
    );
  };
}

export function sexp(children: CurriedToken[]): CurriedToken {
  return builder => {
    let open = builder.consume("(");
    let innerStart = builder.pos;
    let out = children.map(child => child(builder));
    let innerEnd = builder.pos;
    let close = builder.consume(")");
    return tokens.sexp(
      { children: out, inner: span(innerStart, innerEnd) },
      range(open, close)
    );
  };
}

export function text(chars: string): CurriedToken<tokens.TextToken> {
  return builder => {
    let out = builder.consume(chars);
    return tokens.text(out);
  };
}

export function comment(chars: string): CurriedToken {
  return builder => {
    let start = builder.consume("<!--");
    let data = builder.consume(chars);
    let end = builder.consume("-->");
    return tokens.comment(data, range(start, end));
  };
}

export type TagName =
  | string
  | CurriedToken
  | [string, ...string[]]
  | [CurriedToken, ...CurriedToken[]];

function isTagName(input: TagName | object): input is TagName {
  return (
    typeof input === "string" ||
    Array.isArray(input) ||
    typeof input === "function"
  );
}

function buildTagName(name: TagName): CurriedPresentTokens {
  if (Array.isArray(name)) {
    let toks: CurriedToken[] = [];

    for (let part of name) {
      if (typeof part === "function") {
        toks.push(part);
      } else {
        switch (part[0]) {
          case "@":
            toks.push(arg(part));
            break;
          default:
            toks.push(id(part));
        }
      }
    }

    return toks as CurriedPresentTokens;
  } else {
    if (typeof name === "function") {
      return [name];
    } else {
      switch (name[0]) {
        case "@":
          return [arg(name)];
        default:
          return [id(name)];
      }
    }
  }
}

export function startTag(
  options:
    | TagName
    | { name: TagName; attrs: CurriedAttributeToken[]; selfClosing?: true }
): CurriedToken {
  if (isTagName(options)) {
    return builder => {
      let start = builder.consume("<");
      let nameTokens = buildPresentTokens(buildTagName(options), builder);
      let end = builder.consume(">");

      return tokens.startTag({ name: nameTokens }, range(start, end));
    };
  } else {
    return builder => {
      let { name, attrs, selfClosing } = options;

      let start = builder.consume("<");
      let nameTokens = buildPresentTokens(buildTagName(name), builder);
      let children = attrs.map(a => a(builder));

      if (selfClosing) {
        builder.consume("/");
      }

      let end = builder.consume(">");
      return tokens.startTag(
        { name: nameTokens, attrs: children, selfClosing },
        range(start, end)
      );
    };
  }
}

export function endTag(
  options: TagName | { name: TagName; trailing: string }
): CurriedToken {
  let tagName = isTagName(options) ? options : options.name;
  let trailing = isTagName(options) ? undefined : options.trailing;

  return builder => {
    let start = builder.consume("</");
    let tagTokens = buildPresentTokens(buildTagName(tagName), builder);
    let trailingToken = trailing ? ws(trailing)(builder) : undefined;
    let end = builder.consume(">");

    return tokens.endTag(
      { name: tagTokens, trailing: trailingToken },
      range(start, end)
    );
  };
}

export function argName(name: string): CurriedToken<tokens.ArgNameToken> {
  return builder => {
    let startSpan = builder.consume(name[0]);
    let nameSpan = builder.consume(name.slice(1));

    return tokens.argName(nameSpan, range(startSpan, nameSpan));
  };
}

export function attr(
  options:
    | string
    | CurriedToken<tokens.AnyAttrNameToken>
    | {
        name:
          | string
          | CurriedToken<tokens.AttributeNameToken>
          | CurriedToken<tokens.ArgNameToken>;
        value: string | CurriedToken<tokens.AttributeValueToken>;
        arg?: true;
      }
): CurriedAttributeToken {
  if (typeof options === "string") {
    return builder => {
      let nameSpan = builder.consume(options);
      return tokens.attrName(nameSpan);
    };
  } else if (typeof options === "function") {
    return options;
  } else {
    return builder => {
      let { name, value: rawValue } = options;

      let start = builder.pos;

      let nameToken =
        typeof name === "string"
          ? tokens.attrName(builder.consume(name))
          : name(builder);

      builder.consume("=");

      let valueToken: tokens.AttributeValueToken;

      if (typeof rawValue === "string") {
        switch (rawValue[0]) {
          case `"`: {
            let quoteStart = builder.consume(`"`);
            let valueSpan = builder.consume(rawValue.slice(1, -1));
            let quoteEnd = builder.consume(`"`);
            let interpolation = tokens.stringInterpolation(
              [tokens.text(valueSpan)],
              valueSpan
            );
            valueToken = tokens.attrValue(
              {
                type: tokens.AttributeValueType.DoubleQuoted,
                value: interpolation,
              },
              range(quoteStart, quoteEnd)
            );
            break;
          }
          case `'`: {
            let quoteStart = builder.consume(`'`);
            let valueSpan = builder.consume(rawValue.slice(1, -1));
            let quoteEnd = builder.consume(`'`);
            let interpolation = tokens.stringInterpolation(
              [tokens.text(valueSpan)],
              valueSpan
            );
            valueToken = tokens.attrValue(
              {
                type: tokens.AttributeValueType.SingleQuoted,
                value: interpolation,
              },
              range(quoteStart, quoteEnd)
            );
            break;
          }
          default: {
            let valueSpan = builder.consume(rawValue);
            let interpolation = tokens.stringInterpolation(
              [tokens.text(valueSpan)],
              valueSpan
            );
            valueToken = tokens.attrValue(
              {
                type: tokens.AttributeValueType.Unquoted,
                value: interpolation,
              },
              valueSpan
            );
          }
        }
      } else {
        valueToken = rawValue(builder);
      }
      let end = builder.pos;

      return tokens.valuedAttr(
        { name: nameToken, value: valueToken },
        { start, end }
      );
    };
  }
}

function quoteType(quote?: `"` | `'`): tokens.AttributeValueType {
  switch (quote) {
    case `"`:
      return tokens.AttributeValueType.DoubleQuoted;
    case `'`:
      return tokens.AttributeValueType.SingleQuoted;
    default:
      return tokens.AttributeValueType.Unquoted;
  }
}

export class TokenBuilder {
  private output = "";

  constructor(public pos = 0) {}

  consume(chars: string): SourceSpan {
    this.output += chars;
    let start = this.pos;
    this.pos += chars.length;
    return { start, end: this.pos };
  }

  /**
   * This method is used by the AstBuilder to share an output
   */
  updateOutput(output: string): void {
    this.output = output;
  }

  get source(): string {
    return this.output;
  }
}

export function root(
  ...children: CurriedToken[]
): { root: tokens.RootToken; source: string } {
  let builder = new TokenBuilder();
  let start = builder.pos;
  let out = children.map(child => child(builder));
  let end = builder.pos;

  return { root: tokens.root(out, span(start, end)), source: builder.source };
}
