import { ok, Result, Snippet } from "../snippet";
import { range, SourceSpan } from "../span";
import {
  any,
  Combinator,
  pattern,
  seq,
  tag,
  Debuggable,
  combinatorName,
  maybe
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
  PresentTokens,
  stringToken,
  QuoteType,
  StringToken,
  numberToken,
  SexpToken
} from "./tokens";
import { complete, map, mapResult } from "./utils";

export const SINGLE_QUOTED: Combinator<StringToken> = map(
  seq(
    "SINGLE_QUOTED",
    tag(`'`),
    pattern(/^(\\'|[^'])*/u, "single quote body"),
    tag(`'`)
  ),
  ([open, body, close]) =>
    ok(
      stringToken(
        { data: body.span, quote: QuoteType.Single },
        range(open, close)
      )
    )
);

export const DOUBLE_QUOTED: Combinator<StringToken> = map(
  seq(
    "DOUBLE_QUOTED",
    tag(`"`),
    pattern(/^(\\"|[^"])*/u, "double quote body"),
    tag(`"`)
  ),
  ([open, body, close]) =>
    ok(
      stringToken(
        { data: body.span, quote: QuoteType.Double },
        range(open, close)
      )
    )
);

export const NUMBER = map(
  seq(
    "NUMBER",
    maybe(tag("-")),
    pattern(/^[0-9]+/, "digits"),
    maybe(
      map(seq("decimal", tag("."), pattern(/^[0-9]+/, "digits")), ([, tail]) =>
        ok(tail)
      )
    )
  ),
  ([negative, head, tail]) =>
    ok(
      numberToken(
        {
          head: head.span,
          tail: tail ? tail.span : null,
          negative: negative ? negative.span : null
        },
        range(negative, head, tail ? tail : null)
      )
    )
);

export const SPACED_TOKENS: Combinator<PresentTokens> = {
  name: "SPACED_TOKENS",
  invoke(input) {
    let out: Token[] = [];
    let tk = any(
      "token",
      wrap(SEXP),
      wrap(DOUBLE_QUOTED),
      wrap(SINGLE_QUOTED),
      wrap(NUMBER),
      NAMED,
      SIMPLE_PATH,
      wrap(WS)
    );
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

      for (let tok of tokens) {
        if (Array.isArray(tok)) {
          out.push(...tok);
        } else {
          out.push(tok);
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

export const SEXP: Combinator<Token> = {
  name: "SEXP",
  invoke(input) {
    return input.invoke(
      map(
        seq("SEXP", tag("("), SPACED_TOKENS, tag(")")),
        ([open, path, close]) => {
          return ok(sexp(path, range(open, close)));
        }
      ),
      input
    );
  }
};

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

export const EXPRESSION = any(
  "EXPRESSION",
  SEXP,
  SIMPLE_PATH,
  DOUBLE_QUOTED,
  SINGLE_QUOTED,
  NUMBER
);

export const NAMED = seq("NAMED", ID, EQ, EXPRESSION);

export const SIMPLE_HEAD = any("HEAD", ARG, ID);

// TODO: Allow `[]` or string members
export const MEMBER = ID;
