import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { err, ok, ParserArrow, recurse, Result } from "../../shape";
import { ExpressionArrow } from "../expression";
import { HeadArrow } from "../interpolate";
import { MaybeWsArrow, WsArrow } from "./ws";

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
    list.length > 0 ? ok(list) : err("unknown", { type: "empty" })
  );
}

export const NamedArgumentsArrow = WsArrow.named("leadingWS")
  .extend("args", NamedArgumentArrow.repeat().andThen(assertPresent()))
  .atomic()
  .ifOk(({ leadingWS, args }) =>
    ast.namedArgs(args, { span: range(...args), before: leadingWS })
  )
  .label("NamedArguments");

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
