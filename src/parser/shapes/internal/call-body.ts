import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import {
  atomic,
  consumeToken,
  label,
  present,
  repeat,
} from "../../tokens-iterator";
import { recurse } from "../abstract";
import { ExpressionSequence } from "../expression";
import { HeadSequence } from "../interpolate";
import { MaybeWsSequence, WsSequence } from "./ws";

export const PositionalSequence = recurse(() =>
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

export const NamedArgumentSequence = recurse(() =>
  label(
    "NamedArgument",
    atomic(
      consumeToken("id", TokenType.Identifier)
        .extend("eq", consumeToken(TokenType.Eq))
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

export const CallBodySequence = recurse(() =>
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
