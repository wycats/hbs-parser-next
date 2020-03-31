import { SourceSpan, span, range } from "./span";
import { tag, seq, Combinator, pattern } from "./combinators";
import { Snippet, Result, ok } from "./snippet";

export function read(source: string): Result<RootToken> {
  let input = Snippet.input(source);
  debugger;
  let result = seq(tag("{{"), ID, tag("}}"))(input);

  if (result.kind === "err") {
    return result;
  }

  let [next, [open, ident, close]] = result.value;

  return ok(
    root(
      [interpolate([id(ident.span)], range(open.span, close.span))],
      range(open.span, close.span)
    )
  );
}

const ID: Combinator<Snippet> = pattern(/^\p{ID_Start}[\p{ID_Continue}-]*/u);

export interface BaseToken {
  span: SourceSpan;
}

export interface LeafToken extends BaseToken {
  type: LeafTokenType;
}

export function leaf(type: LeafTokenType): (span: SourceSpan) => LeafToken {
  return span => ({ type, span });
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
