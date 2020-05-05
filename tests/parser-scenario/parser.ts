import {
  ops,
  baseOk as ok,
  baseErr as err,
  BaseResult as Result,
  BaseOk as Ok,
  BaseErr as Err,
  SourceSpan,
  isBaseOk as isOk,
  isBaseErr as isErr,
  isBaseResult as isResult,
} from "hbs-parser-next";
import {
  Arrow,
  Parser,
  leafTok,
  Expr,
  LeafTokenType,
  LeafToken,
  ParensToken,
  NestedChildren,
  NestedToken,
  SumToken,
} from "./tokens";
import { step, Step, steps, STATE, into, getOutput } from "../tracer";

export type ParseArrow<Out> = Arrow<unknown, Result<Out>>;

export function recurse<A extends ops.Arrow<unknown, unknown>>(
  callback: () => A
): A {
  return ops.Arrow.delay(callback);
}

function propagateErr<T>(label?: string): ParseArrow<T> {
  if (label === undefined) {
    return ops.id("propagate-err");
  } else {
    return ops.id(`err[${label}]`);
  }
}

function propagateErrTrace(
  error: Result<unknown>,
  label?: string
): Step<Result<unknown>> {
  if (label) {
    return step({ type: "Id", label: `err[label]` }, error);
  } else {
    return step({ type: "Id", label: "propagate-err" }, error);
  }
}

export function stateTrace<T>(out: T, label?: string): Step<T> {
  return steps(
    step("Get-State", STATE),
    step({ type: "Pure", label }, STATE, out),
    into({ type: "Pipeline", label }, out)
  );
}

export function fromState<In, T>(
  callback: (state: { parser: Parser }) => T,
  label?: string
): ops.Arrow<In, T> {
  return ops.pipeline(
    ops.state<{ parser: Parser } & object>(),
    ops.pure(callback, label),
    label
  );
}

export function fromStateTrace(
  result: Result<unknown>,
  label?: string
): Step<Result<unknown>> {
  if (isOk(result)) {
    return stateTrace(result, label);
  } else {
    return steps(
      stateTrace(result, `${label}?`),
      step({ type: "Id", label: `err[${label}]` }, result),
      into({ type: "MapResult", label }, result)
    );
  }
}

export function allOkTrace(
  items: readonly Step<MaybeResult<unknown>>[],
  label?: string
): Step {
  let children = items.map(item => toResult(getOutput(item)));

  if (children.every(isOk)) {
    let childValues = children.map(
      item => ((item as unknown) as Ok<unknown>).value
    );
    return steps(...items, into({ type: "AllOk", label }, ok(childValues)));
  } else {
    let copied = [];
    let failure;

    for (let step of items) {
      if (isOk(toResult(getOutput(step)))) {
        copied.push(step);
      } else {
        copied.push(step);
        failure = getOutput(step);
        break;
      }
    }

    return steps(...copied, into({ type: "AllOk", label }, failure));
  }
}

export function exact(s: string, label: string = s): ParseArrow<SourceSpan> {
  return fromState(state => state.parser.tryMatch(s), `${label}?`);
}

export function exactTrace(match: Result<SourceSpan>, label?: string): Step {
  return fromStateTrace(match, label);
}

export function keyword<T extends LeafTokenType>(
  type: T,
  chars: string,
  label = chars
): ParseArrow<LeafToken<T>> {
  let token = exact(chars, label);

  return ops.mapResult(
    token,
    ops.pure(span => ok(leafTok(type)(span)), "to-token"),
    propagateErr(label),
    label
  );
}

export function keywordTrace<T extends LeafTokenType>(
  token: MaybeResult<LeafToken<T>>,
  label: string
): Step<Result<LeafToken<T>>> {
  token = toResult(token);

  let trace = exactTrace(
    isOk(token) ? ok(token.value.span) : token,
    `${label}?`
  );

  if (isErr(token)) {
    return steps(
      trace,
      propagateErrTrace(token),
      into({ type: "MapResult", label }, token)
    );
  } else {
    return steps(
      trace,
      step({ type: "Pure", label: "to-token" }, token.value.span, token),
      into({ type: "MapResult", label }, token)
    );
  }
}

export const takeInt: ParseArrow<Expr> = ops.mapResult(
  fromState(state => state.parser.tryMatch(/^\d+/), "int?"),
  ops.pure(span => ok(leafTok("Number")(span)), "to-token"),
  propagateErr()
);

export function intTrace(
  token: MaybeResult<LeafToken<"Number">>
): Step<Result<LeafToken<"Number">>> {
  token = toResult(token);

  if (isErr(token)) {
    return steps(
      fromStateTrace(token, "int?"),
      propagateErrTrace(err("mismatch"), "int"),
      into("MapResult", token)
    );
  } else {
    let trace = fromStateTrace(ok(token.value.span), "int?");
    let result = steps(
      trace,
      step({ type: "Pure", label: "to-token" }, token.value.span, token),
      into("MapResult", token)
    );

    return result;
  }
}

export const takePlus = keyword("Plus", "+");

export function plusTrace(
  token: MaybeResult<LeafToken<"Plus">>
): Step<Result<LeafToken<"Plus">>> {
  return keywordTrace(token, `+`);
}

export const takeWS: Arrow<unknown, null | SourceSpan> = fromState(
  state => state.parser.match(/^\s+/),
  "ws?"
);

export function wsTrace(span: SourceSpan | null): Step {
  return stateTrace(span, "ws?");
}

export function fallible<In, Out>(
  arrow: ops.Arrow<In, Out>
): ops.Arrow<In, Result<Out>> {
  return ops.pipeline(
    arrow,
    ops.pure(input => ok(input)),
    arrow.operation.label ? `ok[${arrow.operation.label}]` : undefined
  );
}

export const maybeWS = fallible(takeWS);

export function maybeWsTrace(
  span: SourceSpan | null
): Step<Result<SourceSpan | null>> {
  return steps(
    wsTrace(span),
    step("Pure", span, ok(span)),
    into({ type: "Pipeline", label: `ok[ws?]` }, ok(span))
  );
}

export const takeParens: ParseArrow<ParensToken<
  NestedChildren["Parens"]
>> = recurse(() =>
  ops.mapResult(
    ops.allOk(
      [
        keyword("OpenParen", "(", "open-paren"),
        maybeWS,
        takeSum,
        maybeWS,
        keyword("CloseParen", ")", "close-paren"),
      ],
      "parens"
    ),
    ops.pure(tokens => ok(new NestedToken("Parens", tokens))),
    ops.id(),
    "parens"
  )
);

export function parensTrace(
  items: readonly Step<MaybeResult<unknown>>[]
): Step<Result<Expr>> {
  let children = items.map(item => toResult(getOutput(item)));

  if (children.every(child => isOk(toResult(child)))) {
    let oks = children.map(
      child => ((toResult(child) as unknown) as Ok<unknown>).value
    );
    let parensToken = new NestedToken("Parens", oks as any);

    return steps(
      allOkTrace(items, "parens"),
      step("Pure", oks, ok(parensToken)),
      into({ type: "MapResult", label: "parens" }, ok(parensToken))
    );
  } else {
    return steps(
      allOkTrace(items, "parens"),
      step("Id", err("mismatch")),
      into({ type: "MapResult", label: "parens" }, err("mismatch"))
    );
  }
}

export const takeExpr: ParseArrow<Expr> = recurse(() =>
  ops.firstOk(takeParens, takeInt, "expr")
);

export function nestedExprTrace(expr: Expr): Step<Result<Expr>> {
  switch (expr.type) {
    case "Number":
      return exprTrace(intTrace(expr));
    case "Parens": {
      let [
        openParen,
        maybeWS1,
        innerExpr,
        maybeWS2,
        closeParen,
      ] = expr.children;

      return exprTrace(
        parensTrace([
          keywordTrace(openParen, "open-paren"),
          maybeWsTrace(maybeWS1),
          nestedExprTrace(innerExpr),
          maybeWsTrace(maybeWS2),
          keywordTrace(closeParen, "close-paren"),
        ])
      );
    }
    case "Sum":
      let [left, maybeWS1, plus, maybeWS2, right] = expr.children;

      return sumTrace([
        nestedExprTrace(left),
        maybeWsTrace(maybeWS1),
        plusTrace(plus),
        maybeWsTrace(maybeWS2),
        nestedExprTrace(right),
      ]);
    default:
      assertNever(expr);
  }
}

function assertNever(_: never): never {
  throw new Error("unreachable");
}

export function exprTrace(step: Step<Result<Expr>>): Step<Result<Expr>> {
  let output = getOutput(step);

  if (isOk(output)) {
    switch (output.value.type) {
      case "Parens":
      case "Sum":
        return steps(step, into({ type: "FirstOk", label: "expr" }, output));
      case "Number": {
        let parens = parensTrace([
          fromStateTrace(err("mismatch"), "open-paren"),
        ]);
        return steps(
          parens,
          step,
          into({ type: "FirstOk", label: "expr" }, output)
        );
      }
    }
  } else {
    throw new Error("not implemented");
  }
}

export const takeSum: ParseArrow<SumToken<NestedChildren["Sum"]>> = recurse(
  () =>
    ops.mapResult(
      ops.allOk([takeExpr, maybeWS, takePlus, maybeWS, takeExpr], "sum"),
      ops.pure(tokens => ok(new NestedToken("Sum", tokens))),
      ops.id(),
      "sum"
    )
);

export function sumTrace(
  items: [
    Step<MaybeResult<unknown>>,
    Step<MaybeResult<unknown>>,
    Step<MaybeResult<unknown>>,
    Step<MaybeResult<unknown>>,
    Step<MaybeResult<unknown>>
  ]
): Step<Result<SumToken<NestedChildren["Sum"]>>> {
  let normalized = items.map(item => toResult(getOutput(item)));

  if (isAllOk(normalized)) {
    let okList = normalized.map(item => item.value);

    let sumToken = new NestedToken(
      "Sum",
      (okList as unknown) as NestedChildren["Sum"]
    );

    return steps(
      allOkTrace(items, "sum"),
      step("Pure", okList, ok(sumToken)),
      into({ type: "MapResult", label: "sum" }, ok(sumToken))
    );
  } else {
    throw new Error("unimplemented");
  }
}

export type MaybeResult<T> = T | Result<T>;

export function toResult<T>(input: MaybeResult<T>): Result<T> {
  if (isResult(input)) {
    return input;
  } else {
    return ok(input);
  }
}

function isAllOk<T>(input: Result<T>[]): input is Ok<T>[] {
  return input.every(item => isOk(item));
}
