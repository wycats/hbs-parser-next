import { ok, Result, Snippet } from "../snippet";
import { range, SourceSpan } from "../span";
import {
  any,
  Combinator,
  pattern,
  seq,
  tag,
  Debuggable,
  combinatorName
} from "./combinators";
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
  arg,
  PresentTokens
} from "./tokens";
import { complete, map, mapResult } from "./utils";
// import { TEXT, START_TAG, END_TAG } from "./html";

export const SPACED_TOKENS: Combinator<PresentTokens> = {
  name: "SPACED_TOKENS",
  invoke(input) {
    let out: Token[] = [];
    let tk = any("token", wrap(SEXP), NAMED, SIMPLE_PATH, wrap(WS));
    let current = input;

    while (true) {
      if (current.isEOF()) {
        break;
      }

      let result = input.invoke(tk, current);

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

    return ok([current, out as PresentTokens]);
  }
};

export const INTERPOLATE = map(
  seq("INTERPOLATE", tag("{{"), SPACED_TOKENS, tag("}}")),
  ([open, path, close]) => {
    return ok(interpolate(path, range(open, close)));
  }
);

export const SEXP = map(
  seq("SEXP", tag("("), SPACED_TOKENS, tag(")")),
  ([open, path, close]) => {
    return ok(sexp(path, range(open, close)));
  }
);

const ID_SNIPPET: Combinator<Snippet> = pattern(
  /^\p{ID_Start}[\p{ID_Continue}-]*/u,
  "ID_SNIPPET"
);

export const ID = token(ID_SNIPPET, TokenType.Identifier);
export const DOT = token(tag("."), TokenType.Dot);
export const WS = token(
  pattern(/^[\u0009\u000A\u000C\u0020]+/u, "WS"),
  TokenType.WS
);
export const EQ = token(tag("="), TokenType.Eq);

const ARG: Combinator<Token> = map(
  seq("@id", tag("@"), ID_SNIPPET),
  ([at, id]) => ok(arg(range(at, id)))
);

export function wrap<T extends Debuggable>(
  combinator: Combinator<T>
): Combinator<T[]> {
  return {
    name: "wrap",
    invoke(input) {
      let result = input.invoke(combinator, input);

      if (result.kind === "err") {
        return result;
      } else {
        return ok([result.value[0], [result.value[1]]]);
      }
    }
  };
}

export function token<T extends LeafTokenType>(
  combinator: Combinator<Snippet>,
  type: T
): Combinator<LeafToken<T>> {
  return {
    name: `token (${combinatorName(combinator)})`,
    invoke(input) {
      let result = input.invoke(combinator, input, { forceTransparent: true });

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
    }
  };
}

export const SIMPLE_PATH: Combinator<PresentTokens> = {
  name: "PATH",
  invoke(input) {
    let result = input.invoke(SIMPLE_HEAD, input);

    if (result.kind === "err") {
      return result;
    }

    let [current, head] = result.value;
    let out: Token[] & PresentTokens = [head];

    while (true) {
      if (current.isEOF()) {
        return ok([current, out]);
      }

      let resultDot = input.invoke(DOT, current);

      if (resultDot.kind === "err") {
        return ok([current, out]);
      }

      current = resultDot.value[0];
      let nextDot = resultDot.value[1];

      let resultMember = input.invoke(MEMBER, current);

      if (resultMember.kind === "err") {
        return resultMember;
      }

      current = resultMember.value[0];
      let nextMember = resultMember.value[1];

      out.push(nextDot, nextMember);
    }
  }
};

export const NAMED = seq("NAMED", ID, EQ, SIMPLE_PATH);

export const SIMPLE_HEAD = any("HEAD", ARG, ID);

// TODO: Allow `[]` or string members
export const MEMBER = ID;
