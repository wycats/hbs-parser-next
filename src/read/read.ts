import { SourceSpan, span, range } from "../span";
import { tag, seq, Combinator, pattern } from "./combinators";
import { Snippet, Result, ok } from "../snippet";
import { Identifier } from "src/ast";

export function read(source: string): Result<RootToken> {
  let input = Snippet.input(source);
  let result = seq(tag("{{"), PATH, tag("}}"))(input);

  if (result.kind === "err") {
    return result;
  }

  let [next, [open, path, close]] = result.value;

  return ok(
    root([interpolate(path, range(open, close))], range(open.span, close.span))
  );
}

const ID_SNIPPET: Combinator<Snippet> = pattern(
  /^\p{ID_Start}[\p{ID_Continue}-]*/u
);
const DOT_SNIPPET: Combinator<Snippet> = tag(".");

const ID = token(ID_SNIPPET, LeafTokenType.Identifier);
const DOT = token(DOT_SNIPPET, LeafTokenType.Dot);

export function token(
  combinator: Combinator<Snippet>,
  type: LeafTokenType
): Combinator<LeafToken> {
  return input => {
    let result = combinator(input);

    if (result.kind === "err") {
      return result;
    } else {
      return ok([
        result.value[0],
        {
          type,
          span: result.value[1].span
        }
      ]);
    }
  };
}

export function PATH(input: Snippet): Result<[Snippet, [Token, ...Token[]]]> {
  let result = ID(input);

  if (result.kind === "err") {
    return result;
  }

  let [current, head] = result.value;
  let out: Token[] & [Token, ...Token[]] = [head];

  while (true) {
    let resultDot = DOT(current);

    if (resultDot.kind === "err") {
      return ok([current, out]);
    }

    current = resultDot.value[0];
    let nextDot = resultDot.value[1];

    let resultId = ID(current);

    if (resultId.kind === "err") {
      return resultId;
    }

    current = resultId.value[0];
    let nextId = resultId.value[1];

    out.push(nextDot, nextId);
  }
}

export interface BaseToken {
  span: SourceSpan;
}

export interface LeafToken extends BaseToken {
  type: LeafTokenType;
}

export function leaf<T extends LeafToken>(
  type: T["type"]
): (span: SourceSpan) => T {
  return span => ({ type, span } as T);
}

export const id = leaf(LeafTokenType.Identifier);
export const dot = leaf(LeafTokenType.Dot);

export const enum LeafTokenType {
  Identifier = "Identifier",
  Dot = "Dot"
}

export const enum ParentTokenType {
  Root = "Root",
  Interpolate = "Interpolate",
  TrustedInterpolate = "TrustedInterpolate"
}

export interface InterpolateToken extends BaseToken {
  type: ParentTokenType.Interpolate | ParentTokenType.TrustedInterpolate;
  children: readonly Token[];
}

export function interpolate(
  children: readonly Token[],
  span: SourceSpan
): InterpolateToken {
  return {
    type: ParentTokenType.Interpolate,
    span,
    children
  };
}

export function trustedInterpolate(
  children: readonly Token[],
  span: SourceSpan
): InterpolateToken {
  return {
    type: ParentTokenType.TrustedInterpolate,
    span,
    children
  };
}

export interface RootToken extends BaseToken {
  type: ParentTokenType.Root;
  children: readonly Token[];
}

export function root(children: readonly Token[], span: SourceSpan): RootToken {
  return {
    type: ParentTokenType.Root,
    span,
    children
  };
}

export type Token = LeafToken | InterpolateToken;
