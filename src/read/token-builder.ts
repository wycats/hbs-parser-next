import * as read from "./read";
import * as tokens from "./tokens";
import { SourceSpan, range, span } from "../span";

export type CurriedToken = (builder: TokenBuilder) => tokens.Token;
export type CurriedAttributeToken = (
  builder: TokenBuilder
) => tokens.AttributeToken;

export function id(name: string): CurriedToken {
  return builder => tokens.id(builder.consume(name));
}

export function arg(name: string): CurriedToken {
  return builder => tokens.arg(builder.consume(name));
}

export const dot: CurriedToken = builder => tokens.dot(builder.consume("."));
export const eq: CurriedToken = builder => tokens.eq(builder.consume("="));
export const sp: CurriedToken = builder => tokens.ws(builder.consume(" "));

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

export function startTag(name: string): CurriedToken;
export function startTag(options: {
  name: string;
  attrs: CurriedAttributeToken[];
}): CurriedToken;
export function startTag(
  options: string | { name: string; attrs: CurriedAttributeToken[] }
): CurriedToken {
  if (typeof options === "string") {
    return builder => {
      let start = builder.consume("<");
      let nameSpan = builder.consume(options);
      let end = builder.consume(">");

      return tokens.startTag({ name: nameSpan }, range(start, end));
    };
  } else {
    return builder => {
      let { name, attrs } = options;

      let start = builder.consume("<");
      let nameSpan = builder.consume(name);
      let children = attrs.map(attr => attr(builder));
      let end = builder.consume(">");
      return tokens.startTag(
        { name: nameSpan, attrs: children },
        range(start, end)
      );
    };
  }
}

export function endTag(name: string): CurriedToken {
  return builder => {
    let start = builder.consume("</");
    let tagName = builder.consume(name);
    let end = builder.consume(">");

    return tokens.endTag(tagName, range(start, end));
  };
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
