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
  TokenType,
  arg
} from "./tokens";
import { complete, map, mapResult } from "./utils";
import { TEXT, START_TAG, END_TAG } from "./html";

export function read(source: string): Result<RootToken> {
  let input = Snippet.input(source);

  let result = complete(
    map(many(any(INTERPOLATE, CONTENT)), tokens => {
      return ok(root(tokens, range(...tokens)));
    })
  )(input);

  return mapResult(result, ([, token]) => ok(token));
}

export const CONTENT = any(END_TAG, START_TAG, TEXT);

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

export const ID = token(ID_SNIPPET, TokenType.Identifier);
export const DOT = token(tag("."), TokenType.Dot);
export const WS = token(pattern(/^[\u0009\u000A\u000C\u0020]+/u), TokenType.WS);
export const EQ = token(tag("="), TokenType.Eq);

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
    if (current.isEOF()) {
      return ok([current, out]);
    }

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
