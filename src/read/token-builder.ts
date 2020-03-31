import * as read from "./read";
import * as tokens from "./tokens";
import { SourceSpan, range, span } from "../span";

export type CurriedToken = (builder: TokenBuilder) => tokens.Token;

export function id(name: string): CurriedToken {
  return builder => read.id(builder.consume(name));
}

export function arg(name: string): CurriedToken {
  return builder => read.arg(builder.consume(name));
}

export const dot: CurriedToken = builder => read.dot(builder.consume("."));
export const eq: CurriedToken = builder => read.eq(builder.consume("="));

export const sp: CurriedToken = builder => read.ws(builder.consume(" "));

export function ws(space: string): CurriedToken {
  return builder => read.ws(builder.consume(space));
}

export function interpolate(children: CurriedToken[]): CurriedToken {
  return builder => {
    let open = builder.consume("{{");
    let out = children.map(child => child(builder));
    let close = builder.consume("}}");
    return tokens.interpolate(out, range(open, close));
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
