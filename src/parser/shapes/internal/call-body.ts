import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { atomic, token, label, present, repeat } from "../../tokens-iterator";
import { recurse as recurseLegacy } from "../abstract";
import { ExpressionSequence, ExpressionArrow } from "../expression";
import { HeadSequence, HeadArrow } from "../interpolate";
import { MaybeWsSequence, WsSequence, MaybeWsArrow, WsArrow } from "./ws";
import {
  ParserArrow,
  recurse,
  ParserArrowEvaluateCore,
  Result,
  err,
  ok,
} from "../../shape";
import { NamedArgumentNode } from "../../nodes/call";

export const PositionalSequence = recurseLegacy(() =>
  label(
    "Positional",
    repeat(
      atomic(
        WsSequence.named("before")
          .extend("expr", ExpressionSequence)
          .andThen(({ before, expr }) => ast.extendNode(expr, { before }))
      )
    )
      .check(present("any args"))
      .andThen(out => ast.positional(out, { span: range(...out) }))
  )
);

export const PositionalArrow = recurse(() =>
  WsArrow.named("before")
    .extend("expr", ExpressionArrow)
    .ifOk(({ before, expr }) => ast.extendNode(expr, { before }))
    .atomic()
    .repeat()
    .andThen(assertPresent())
    .ifOk(out => ast.positional(out, { span: range(...out) }))
    .label("Positional")
);

export const NamedArgumentSequence = recurseLegacy(() =>
  label(
    "NamedArgument",
    atomic(
      token("id", TokenType.Identifier)
        .extend("eq", token(TokenType.Eq))
        .extend("expr", ExpressionSequence)
        .extend("trailingWS", MaybeWsSequence)
        .andThen(({ id, expr, trailingWS }) => {
          return ast.namedArg(
            { name: id, value: expr },
            {
              span: range(id, expr),
              after: trailingWS || undefined,
            }
          );
        })
    )
  )
);

export const NamedArgumentArrow = recurse(() =>
  ParserArrow.start()
    .token(TokenType.Identifier)
    .named("id")
    .extend("eq", ParserArrow.start().token(TokenType.Eq))
    .extend("expr", ExpressionArrow)
    .extend("trailingWS", MaybeWsArrow.fallible())
    .ifOk(({ id, expr, trailingWS }) =>
      ast.namedArg(
        { name: id, value: expr },
        {
          span: range(id, expr),
          after: trailingWS || undefined,
        }
      )
    )
    .label("NamedArgument")
);

function assertPresent<T>(): ParserArrow<T[], Result<T[]>> {
  return ParserArrow.start().lift<T[], Result<T[]>>(list =>
    list.length > 0 ? ok(list) : err(undefined, "empty")
  );
}

export const NamedArgumentsArrow = WsArrow.named("leadingWS")
  .extend("args", NamedArgumentArrow.repeat().andThen(assertPresent()))
  .atomic()
  .ifOk(({ leadingWS, args }) =>
    ast.namedArgs(args, { span: range(...args), before: leadingWS })
  )
  .label("NamedArguments");

export const NamedArgumentsSequence = label(
  "NamedArguments",
  atomic(
    WsSequence.named("leadingWS")
      .extend("args", repeat(NamedArgumentSequence).check(present("any args")))
      .andThen(({ leadingWS, args }) =>
        ast.namedArgs(args, { span: range(...args), before: leadingWS })
      )
  )
);

export const CallBodySequence = recurseLegacy(() =>
  label(
    "CallBody",
    MaybeWsSequence.named("before")
      .extend("head", HeadSequence)
      .extend("positional", PositionalSequence.or(null))
      .extend("named", NamedArgumentsSequence.or(null))
      .extend("after", MaybeWsSequence)
      .andThen(({ before, after, head, positional, named }) =>
        ast.callBody(
          { head, positional, named },
          {
            span: range(head, positional, named),
            before,
            after,
          }
        )
      )
  )
);

export const CallBodyArrow = recurse(() =>
  MaybeWsArrow.fallible()
    .named("before")
    .extend("head", HeadArrow)
    .extend("positional", PositionalArrow.or(null).fallible())
    .extend("named", NamedArgumentsArrow.or(null).fallible())
    .extend("after", MaybeWsArrow.fallible())
    .ifOk(({ before, after, head, positional, named }) =>
      ast.callBody(
        { head, positional, named },
        {
          span: range(head, positional, named),
          before,
          after,
        }
      )
    )
    .label("CallBody")
);
