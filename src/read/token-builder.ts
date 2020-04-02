import * as read from "./hbs";
import * as tokens from "./tokens";
import { SourceSpan, range, span } from "../span";

export type CurriedToken = (builder: TokenBuilder) => tokens.Token;
export type CurriedAttributeToken = (
  builder: TokenBuilder
) => tokens.AttributeToken;
export type CurriedPresentTokens = [CurriedToken, ...CurriedToken[]];

export function buildPresentTokens(
  tokens: CurriedPresentTokens,
  builder: TokenBuilder
): tokens.PresentTokens {
  return tokens.map(token => token(builder)) as tokens.PresentTokens;
}

export function id(name: string): CurriedToken {
  return builder => tokens.id(builder.consume(name));
}

export function arg(name: string): CurriedToken {
  return builder => tokens.arg(builder.consume(name));
}

export const dot: CurriedToken = builder => tokens.dot(builder.consume("."));
export const eq: CurriedToken = builder => tokens.eq(builder.consume("="));
export const sp: CurriedAttributeToken = builder =>
  tokens.ws(builder.consume(" "));

export function ws(space: string): CurriedAttributeToken {
  return builder => tokens.ws(builder.consume(space));
}

export function interpolate(children: CurriedToken[]): CurriedToken {
  return builder => {
    let open = builder.consume("{{");
    let out = children.map(child => child(builder));
    let close = builder.consume("}}");
    return tokens.interpolate(out, range(open, close));
  };
}

export function sexp(children: CurriedToken[]): CurriedToken {
  return builder => {
    let open = builder.consume("(");
    let out = children.map(child => child(builder));
    let close = builder.consume(")");
    return tokens.sexp(out, range(open, close));
  };
}

export function text(chars: string): CurriedToken {
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
    let tokens: CurriedToken[] = [];

    for (let part of name) {
      if (typeof part === "function") {
        tokens.push(part);
      } else {
        switch (part[0]) {
          case "@":
            tokens.push(arg(part));
          default:
            tokens.push(id(part));
        }
      }
    }

    return tokens as CurriedPresentTokens;
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

export function startTag(name: TagName): CurriedToken;
export function startTag(options: {
  name: TagName;
  attrs: CurriedAttributeToken[];
  selfClosing?: true;
}): CurriedToken;
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
      let children = attrs.map(attr => attr(builder));

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

export function attr(name: string): CurriedAttributeToken;
export function attr(options: {
  name: string;
  value: string;
}): CurriedAttributeToken;
export function attr(
  options:
    | string
    | {
        name: string;
        value: string;
      }
): CurriedAttributeToken {
  if (typeof options === "string") {
    return builder => {
      let nameSpan = builder.consume(options);
      return tokens.attrName(nameSpan);
    };
  } else {
    return builder => {
      let { name, value: rawValue } = options;

      let value: string;
      let quote: `"` | `'` | undefined;

      switch (rawValue[0]) {
        case `"`:
          value = rawValue.slice(1, -1);
          quote = `"`;
          break;
        case `'`:
          value = rawValue.slice(1, -1);
          quote = `'`;
          break;
        default:
          value = rawValue;
          quote = undefined;
      }

      let start = builder.pos;
      let nameSpan = builder.consume(name);
      builder.consume("=");
      let valueStart = builder.pos;
      if (quote) {
        builder.consume(quote);
      }
      let valueSpan = builder.consume(value);
      if (quote) {
        builder.consume(quote);
      }
      let valueEnd = builder.pos;
      let end = builder.pos;

      let nameToken = tokens.attrName(nameSpan);
      let valueToken = tokens.attrValue(
        { type: quoteType(quote), value: valueSpan },
        { start: valueStart, end: valueEnd }
      );
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

export function root(children: CurriedToken[]): tokens.RootToken {
  let builder = new TokenBuilder();
  let start = builder.pos;
  let out = children.map(child => child(builder));
  let end = builder.pos;

  return tokens.root(out, span(start, end));
}

class TokenBuilder {
  constructor(public pos = 0) {}

  consume(chars: string): SourceSpan {
    let start = this.pos;
    this.pos += chars.length;
    return { start, end: this.pos };
  }
}
