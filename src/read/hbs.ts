import { ok, Snippet } from "../snippet";
import { range } from "../span";
import { any, maybe, pattern, seq, tag } from "./combinators";
import { many } from "./multi";
import { TOP_LEVEL } from "./read";
import {
  arg,
  block,
  BlockToken,
  closeBlock,
  interpolate,
  LeafTokenMap,
  numberToken,
  openBlock,
  PresentTokens,
  QuoteType,
  sexp,
  stringToken,
  StringToken,
  TokenType,
  Token,
} from "./tokens";
import { map } from "./utils";
import type { Debuggable } from "./logger";
import type { CombinatorType } from "./combinators/types";
import Wrap from "./combinators/wrap";
import SomeToken from "./combinators/hbs/token";

export const token = <T extends keyof LeafTokenMap>(
  combinator: CombinatorType<Snippet>,
  type: T
) => new SomeToken(combinator, type);

export const SINGLE_QUOTED: CombinatorType<StringToken> = seq(
  "SINGLE_QUOTED",
  tag(`'`),
  pattern(/^(\\'|[^'])*/u, "single quote body"),
  tag(`'`)
).map(([open, body, close]) =>
  ok(
    stringToken(
      { data: body.span, quote: QuoteType.Single },
      range(open, close)
    )
  )
);

export const DOUBLE_QUOTED: CombinatorType<StringToken> = seq(
  "DOUBLE_QUOTED",
  tag(`"`),
  pattern(/^(\\"|[^"])*/u, "double quote body"),
  tag(`"`)
).map(([open, body, close]) =>
  ok(
    stringToken(
      { data: body.span, quote: QuoteType.Double },
      range(open, close)
    )
  )
);

export const NUMBER = seq(
  "NUMBER",
  maybe(tag("-")),
  pattern(/^[0-9]+/, "digits"),
  maybe(
    map(seq("decimal", tag("."), pattern(/^[0-9]+/, "digits")), ([, tail]) =>
      ok(tail)
    )
  )
).map(([negative, head, tail]) =>
  ok(
    numberToken(
      {
        head: head.span,
        tail: tail ? tail.span : null,
        negative: negative ? negative.span : null,
      },
      range(negative, head, tail ? tail : null)
    )
  )
);

export const SPACED_TOKENS: CombinatorType<PresentTokens> = {
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

      let result = current.invoke(tk);

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
        snippet: input,
      };
    }

    return ok([current, out as PresentTokens]);
  },
};

export const SIMPLE_PATH: CombinatorType<PresentTokens> = {
  name: "PATH",
  invoke(input) {
    let result = input.invoke(SIMPLE_HEAD);

    if (result.kind === "err") {
      return result;
    }

    let [current, head] = result.value;
    let out: Token[] & PresentTokens = [head];

    while (true) {
      if (current.isEOF()) {
        return ok([current, out]);
      }

      let resultDot = current.invoke(DOT);

      if (resultDot.kind === "err") {
        return ok([current, out]);
      }

      current = resultDot.value[0];
      let nextDot = resultDot.value[1];

      let resultMember = current.invoke(MEMBER);

      if (resultMember.kind === "err") {
        return resultMember;
      }

      current = resultMember.value[0];
      let nextMember = resultMember.value[1];

      out.push(nextDot, nextMember);
    }
  },
};

export const BLOCK: CombinatorType<BlockToken> = {
  name: "BLOCK",
  invoke(input) {
    return input.invoke(
      map(
        seq("BLOCK", OPEN_BLOCK, many(TOP_LEVEL), CLOSE_BLOCK),
        ([open, body, close]) => ok(block({ open, body, close }))
      )
    );
  },
};

export const OPEN_BLOCK = map(
  seq("OPEN_BLOCK", tag("{{#"), SIMPLE_PATH, SPACED_TOKENS, tag("}}")),
  ([open, path, head, close]) =>
    ok(openBlock({ name: path, head, blockParams: null }, range(open, close)))
);

export const CLOSE_BLOCK = map(
  seq("CLOSE_BLOCK", tag("{{/"), SIMPLE_PATH, tag("}}")),
  ([open, path, close]) => ok(closeBlock(path, range(open, close)))
);

export const INTERPOLATE = map(
  seq("INTERPOLATE", tag("{{"), SPACED_TOKENS, tag("}}")),
  ([open, path, close]) => {
    return ok(interpolate(path, range(open, close)));
  }
);

export const SEXP: CombinatorType<Token> = {
  name: "SEXP",
  invoke(input) {
    return input.invoke(
      map(
        seq("SEXP", tag("("), SPACED_TOKENS, tag(")")),
        ([open, path, close]) => {
          return ok(sexp(path, range(open, close)));
        }
      )
    );
  },
};

const ID_SNIPPET: CombinatorType<Snippet> = pattern(
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

const ARG: CombinatorType<Token> = map(
  seq("@id", tag("@"), ID_SNIPPET),
  ([at, id]) => ok(arg(range(at, id)))
);

export const wrap = <T extends Debuggable>(combinator: CombinatorType<T>) =>
  new Wrap(combinator);

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
