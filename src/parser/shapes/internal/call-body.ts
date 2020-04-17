import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { ok } from "../../shape";
import { shape } from "../abstract";
import { ExpressionShape } from "../expression";
import { HeadShape } from "../interpolate";
import { maybe } from "./maybe";
import { MaybeWS, Ws } from "./ws";

export const PositionalShape = shape("Positional", iterator =>
  iterator
    .assertNotEOF()
    .andThen(() =>
      iterator.repeat(iterator =>
        iterator.atomic(iterator =>
          iterator
            .expand(Ws)
            .andThen(ws => ({ before: ws }))
            .extend("expr", () => iterator.expand(ExpressionShape))
            .andThen(({ before, expr }) => ast.extendNode(expr, { before }))
        )
      )
    )
    .andCheck(iterator.present("any args"))
    .andThen(out => ok(ast.positional(out, { span: range(...out) })))
);

export const NamedArgumentShape = shape("NamedArgument", iterator =>
  iterator.assertNotEOF().andThen(() =>
    iterator.atomic(iterator =>
      iterator
        .consume("id", token => {
          if (token.type === TokenType.Identifier) {
            return { id: token };
          }
        })
        .andCheck(() =>
          iterator.consume("eq", token => {
            if (token.type === TokenType.Eq) {
              return { eq: token };
            }
          })
        )
        .extend("expr", () => iterator.expand(ExpressionShape))
        .andThen(({ id, expr }) => {
          let trailingWS = iterator.expandInfallible(MaybeWS);

          return ast.namedArg(
            { name: id, value: expr },
            { span: range(id, expr), after: trailingWS || undefined }
          );
        })
    )
  )
);

export const NamedArgumentsShape = shape("NamedArguments", iterator => {
  return iterator.assertNotEOF().andThen(() =>
    iterator.atomic(iterator =>
      iterator
        .expand(Ws)
        .andThen(ws => ({ leadingWS: ws }))
        .extend("args", () => iterator.many(NamedArgumentShape))
        .andCheck(({ args }) => iterator.present("any args")(args))
        .andThen(({ leadingWS, args }) =>
          ast.namedArgs(args, { span: range(...args), before: leadingWS })
        )
    )
  );
});

export const CallBodyShape = shape("CallBody", iterator => {
  let before = iterator.expandInfallible(MaybeWS) || undefined;

  return iterator.expand(HeadShape).andThen(head => {
    let positional = iterator.expandInfallible(maybe(new PositionalShape()));
    let named = iterator.expandInfallible(maybe(new NamedArgumentsShape()));
    let after = iterator.expandInfallible(MaybeWS) || undefined;

    return ast.callBody(
      { head: head, positional, named },
      { span: range(head, positional, named), before, after }
    );
  });
});
