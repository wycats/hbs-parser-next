import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { shape } from "../abstract";
import { ExpressionShape } from "../expression";
import { HeadShape } from "../interpolate";
import { maybe } from "./maybe";
import { MaybeWS, Ws } from "./ws";
import {
  expand,
  consumeToken,
  notEOF,
  many,
  repeat,
  expandInfallible,
  present,
  atomic,
} from "../../tokens-iterator";

export const PositionalShape = shape("Positional", iterator =>
  iterator
    .start(notEOF())
    .next(
      repeat(
        atomic(iterator =>
          iterator
            .start(expand(Ws))
            .named("before")
            .extend("expr", expand(ExpressionShape))
            .andThen(({ before, expr }) => ast.extendNode(expr, { before }))
        )
      )
    )
    .andCheck(present("any args"))
    .andThen(out => ast.positional(out, { span: range(...out) }))
);

export const NamedArgumentShape = shape("NamedArgument", iterator =>
  iterator.start(notEOF()).next(
    atomic(iterator =>
      iterator
        .start(consumeToken("id", TokenType.Identifier))
        .checkNext(consumeToken(TokenType.Eq))
        .extend("expr", expand(ExpressionShape))
        .andThen(({ id, expr }) => {
          let trailingWS = iterator.start(expandInfallible(MaybeWS));

          return ast.namedArg(
            { name: id, value: expr },
            { span: range(id, expr), after: trailingWS || undefined }
          );
        })
    )
  )
);

export const NamedArgumentsShape = shape("NamedArguments", iterator => {
  return iterator.start(notEOF()).next(
    atomic(iterator =>
      iterator
        .start(expand(Ws))
        .named("leadingWS")
        .extend("args", many(NamedArgumentShape))
        .andCheck(({ args }) => present("any args")(args, iterator))
        .andThen(({ leadingWS, args }) =>
          ast.namedArgs(args, { span: range(...args), before: leadingWS })
        )
    )
  );
});

export const CallBodyShape = shape("CallBody", iterator => {
  let before = iterator.start(expandInfallible(MaybeWS)) || undefined;

  return iterator.start(expand(HeadShape)).andThen(head => {
    let positional = iterator.start(
      expandInfallible(maybe(new PositionalShape()))
    );
    let named = iterator.start(
      expandInfallible(maybe(new NamedArgumentsShape()))
    );
    let after = iterator.start(expandInfallible(MaybeWS)) || undefined;

    return ast.callBody(
      { head: head, positional, named },
      { span: range(head, positional, named), before, after }
    );
  });
});
