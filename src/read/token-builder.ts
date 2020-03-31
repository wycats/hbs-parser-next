import * as read from "./read";
import { SourceSpan, range, span } from "../span";

export type CurriedToken = (builder: TokenBuilder) => read.Token;

export function id(name: string): CurriedToken {
  return builder => read.id(builder.consume(name));
}

export const dot: CurriedToken = builder => read.dot(builder.consume("."));

export function interpolate(children: CurriedToken[]): CurriedToken {
  return builder => {
    let open = builder.consume("{{");
    let out = children.map(child => child(builder));
    let close = builder.consume("}}");
    return read.interpolate(out, range(open, close));
  };
}

export function root(children: CurriedToken[]): read.RootToken {
  let builder = new TokenBuilder();
  let start = builder.pos;
  let out = children.map(child => child(builder));
  let end = builder.pos;

  return read.root(out, span(start, end));
}

class TokenBuilder {
  constructor(public pos = 0) {}

  consume(chars: string): SourceSpan {
    let start = this.pos;
    this.pos += chars.length;
    return { start, end: this.pos };
  }
}
