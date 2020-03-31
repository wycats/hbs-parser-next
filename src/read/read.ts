import { ok, Result, Snippet } from "../snippet";
import { range, SourceSpan } from "../span";
import { any, Combinator, pattern, seq, tag } from "./combinators";
import { many } from "./multi";
import {
  ArgumentToken,
  interpolate,
  LeafToken,
  LeafTokenType,
  root,
  RootToken,
  sexp,
  Token,
  TokenType
} from "./tokens";
import { complete, map, mapResult } from "./utils";

export function read(source: string): Result<RootToken> {
  let input = Snippet.input(source);

  let result = complete(
    map(many(INTERPOLATE), tokens => {
      return ok(root(tokens, range(...tokens)));
    })
  )(input);

  debugger;

  return mapResult(result, ([, token]) => ok(token));
}

export function INTERPOLATE(input: Snippet): Result<[Snippet, Token]> {
  return map(
    seq(tag("{{"), SPACED_TOKENS, tag("}}")),
    ([open, path, close]) => {
      return ok(interpolate(path, range(open, close)));
    }
  )(input);
}

export function SEXP(input: Snippet): Result<[Snippet, Token]> {
  return map(seq(tag("("), SPACED_TOKENS, tag(")")), ([open, path, close]) => {
    return ok(sexp(path, range(open, close)));
  })(input);
}

const ID_SNIPPET: Combinator<Snippet> = pattern(
  /^\p{ID_Start}[\p{ID_Continue}-]*/u
);

const ID = token(ID_SNIPPET, TokenType.Identifier);
const DOT = token(tag("."), TokenType.Dot);
const WS = token(pattern(/^[ ]+/), TokenType.WS);
const EQ = token(tag("="), TokenType.Eq);

const ARG: Combinator<Token> = map(seq(tag("@"), ID_SNIPPET), ([at, id]) =>
  ok(arg(range(at, id)))
);

export function wrap<T>(combinator: Combinator<T>): Combinator<T[]> {
  return input => {
    let result = combinator(input);

    if (result.kind === "err") {
      return result;
    } else {
      return ok([result.value[0], [result.value[1]]]);
    }
  };
}

export function token<T extends LeafTokenType>(
  combinator: Combinator<Snippet>,
  type: T
): Combinator<LeafToken<T>> {
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

export function SPACED_TOKENS(
  input: Snippet
): Result<[Snippet, [Token, ...Token[]]]> {
  let out: Token[] = [];
  let tk = any(wrap(SEXP), NAMED, PATH, wrap(WS));
  let current = input;

  while (true) {
    if (current.isEOF()) {
      break;
    }

    let result = tk(current);

    if (result.kind === "err") {
      break;
    }

    let [next, tokens] = result.value;

    for (let token of tokens) {
      if (Array.isArray(token)) {
        out.push(...token);
      } else {
        out.push(token);
      }
    }

    current = next;
  }

  if (out.length === 0) {
    return {
      kind: "err",
      reason: "present",
      snippet: input
    };
  }

  return ok([current, out as [Token, ...Token[]]]);
}

export const NAMED = seq(ID, EQ, PATH);

export const HEAD = any(ARG, ID);

// TODO: Allow `[]` or string members
export const MEMBER = ID;

export function PATH(input: Snippet): Result<[Snippet, [Token, ...Token[]]]> {
  let result = HEAD(input);

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

    let resultMember = MEMBER(current);

    if (resultMember.kind === "err") {
      return resultMember;
    }

    current = resultMember.value[0];
    let nextMember = resultMember.value[1];

    out.push(nextDot, nextMember);
  }
}

export interface BaseToken {
  span: SourceSpan;
}

export function leaf<T extends Token>(
  type: T["type"]
): (span: SourceSpan) => T {
  return span => ({ type, span } as T);
}

export const id = leaf(TokenType.Identifier);
export const dot = leaf(TokenType.Dot);
export const eq = leaf(TokenType.Eq);

export const ws = leaf(TokenType.WS);

export function arg(span: SourceSpan): ArgumentToken {
  return {
    type: TokenType.Argument,
    name: { start: span.start + 1, end: span.end },
    span
  };
}
