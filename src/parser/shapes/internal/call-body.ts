import { TokenType } from "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { shape, recurse, ShapeConstructor } from "../abstract";
import { ExpressionShape, ExpressionSequence } from "../expression";
import { HeadShape, HeadSequence } from "../interpolate";
import { maybe } from "./maybe";
import { Ws, MaybeWs, MaybeWsSequence, WsSequence } from "./ws";
import {
  legacyExpand,
  legacyConsumeToken,
  legacyNotEOF,
  legacyMany,
  legacyRepeat,
  expandInfallible,
  legacyPresent,
  legacyAtomic,
  repeat,
  atomic,
  expand,
  present,
  notEOF,
  consumeToken,
  notNext,
  isNext,
  label,
} from "../../tokens-iterator";
import type { Result } from "../../shape";

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

export const PositionalShape: ShapeConstructor<Result<
  ast.PositionalArgumentsNode
>> = shape("Positional", iterator =>
  iterator
    .start(legacyNotEOF())
    .next(
      legacyRepeat(
        legacyAtomic(iterator =>
          iterator
            .start(legacyExpand(Ws))
            .named("before")
            .extend("expr", legacyExpand(ExpressionShape))
            .andThen(({ before, expr }) => ast.extendNode(expr, { before }))
        )
      )
    )
    .andCheck(legacyPresent("any args"))
    .andThen(out => ast.positional(out, { span: range(...out) }))
);

export const NamedArgumentShape = shape("NamedArgument", iterator =>
  iterator.start(legacyNotEOF()).next(
    legacyAtomic(iterator =>
      iterator
        .start(legacyConsumeToken("id", TokenType.Identifier))
        .checkNext(legacyConsumeToken(TokenType.Eq))
        .extend("expr", legacyExpand(ExpressionShape))
        .andThen(({ id, expr }) => {
          let trailingWS = iterator.expandInfallible(MaybeWs);

          return ast.namedArg(
            { name: id, value: expr },
            { span: range(id, expr), after: trailingWS || undefined }
          );
        })
    )
  )
);

export const NamedArgumentsShape = shape("NamedArguments", iterator => {
  return iterator.start(legacyNotEOF()).next(
    legacyAtomic(iterator =>
      iterator
        .start(legacyExpand(Ws))
        .named("leadingWS")
        .extend("args", legacyMany(NamedArgumentShape))
        .andCheck(({ args }) => legacyPresent("any args")(args, iterator))
        .andThen(({ leadingWS, args }) =>
          ast.namedArgs(args, { span: range(...args), before: leadingWS })
        )
    )
  );
});

export const CallBodyShape = shape("CallBody", iterator => {
  let before = iterator.start(expandInfallible(MaybeWs)) || undefined;

  return iterator.start(legacyExpand(HeadShape)).andThen(head => {
    let positional = iterator.start(
      expandInfallible(maybe(new PositionalShape()))
    );
    let named = iterator.start(
      expandInfallible(maybe(new NamedArgumentsShape()))
    );
    let after = iterator.start(expandInfallible(MaybeWs)) || undefined;

    return ast.callBody(
      { head: head, positional, named },
      { span: range(head, positional, named), before, after }
    );
  });
});

// export const CallBodySequence = shape("CallBody", iterator => {
//   let before = iterator.start(expandInfallible(MaybeWs)) || undefined;

//   return iterator.start(legacyExpand(HeadShape)).andThen(head => {
//     let positional = iterator.start(
//       expandInfallible(maybe(new PositionalShape()))
//     );
//     let named = iterator.start(
//       expandInfallible(maybe(new NamedArgumentsShape()))
//     );
//     let after = iterator.start(expandInfallible(MaybeWs)) || undefined;

//     return ast.callBody(
//       { head: head, positional, named },
//       { span: range(head, positional, named), before, after }
//     );
//   });
// });
