// A simplistic parser built on top of the arrow library

import {
  baseErr as err,
  baseOk as ok,
  BaseResult as Result,
  FORMAT,
  Formattable,
  Formatted,
  formatUnknown,
  JSONValue,
  ops,
  printAST,
  RawFormattable,
  SNAPSHOT,
  StatefulEvaluatorImpl,
  toIndented,
} from "hbs-parser-next";
import type * as qunit from "qunit";
import { module, printIndentedItems, test } from "./helpers";
import {
  STATE,
  Step,
  step,
  steps,
  StringTrace,
  TraceBuilder,
  TracedEvaluator,
  Tracer,
  VOID,
  Steps,
} from "./tracer";

type Arrow<In, Out> = ops.Arrow<In, Out>;

const ERR = err("mismatch");

type MaybeWS = string | null;

type Expr =
  | string
  | [Expr, MaybeWS, "+", MaybeWS, Expr]
  | ["(", MaybeWS, Expr, MaybeWS, ")"];

const takeInt: ParseArrow<Expr> = fromState(
  state => state.parser.tryMatch(/^\d+/),
  "int"
);
const takePlus = exact("+");
const takeWS: Arrow<unknown, null | string> = fromState(
  state => state.parser.match(/^\s+/),
  "ws?"
);
const maybeWS = fallible(takeWS);

const takeParens: ParseArrow<Expr> = recurse(() =>
  ops.allOk(
    [
      exact("(", "open-parens"),
      maybeWS,
      takeSum,
      maybeWS,
      exact(")", "close-parens"),
    ],
    "parens"
  )
);

const takeExpr: ParseArrow<Expr> = ops.firstOk(takeParens, takeInt, "expr");

const takeSum = ops.allOk(
  [takeExpr, maybeWS, takePlus, maybeWS, takeExpr],
  "sum"
);

@module("math reader")
export class MathParserTest {
  declare assert: qunit.Assert;
  private evaluator = parserEvaluator();
  declare parser: Parser;

  @test plus(): void {
    console.log(printIndentedItems([toIndented(printAST(takeSum))]));
    this.assertInvoke(
      takeSum,
      VOID,
      "1+1",
      ok(["1", null, "+", null, "1"]) as ArrowResult<typeof takeSum>,

      ...steps(
        int("1"),
        fallibleState("ws?", null),
        state("+", ok("+")),
        fallibleState("ws?", null),
        int("1"),
        ["sum(AllOk)", ok(["1", null, "+", null, "1"])]
      ).traces
    );

    this.assertInvoke(
      takeSum,
      VOID,
      "1 + 1",
      ok(["1", " ", "+", " ", "1"]) as ArrowResult<typeof takeSum>,

      ...steps(
        int("1"),
        fallibleState("ws?", " "),
        state("+", ok("+")),
        fallibleState("ws?", " "),
        int("1"),
        ["sum(AllOk)", ok(["1", " ", "+", " ", "1"])]
      ).traces
    );
  }

  @test paren(): void {
    this.assertInvoke(
      takeSum,
      VOID,
      "(1+1)+1",
      ok([
        ["(", null, ["1", null, "+", null, "1"], null, ")"],
        null,
        "+",
        null,
        "1",
      ]) as ArrowResult<typeof takeSum>,

      ...steps(
        state("open-parens", ok("(")),
        fallibleState("ws?", null),
        steps(
          steps(
            int("1"),
            fallibleState("ws?", null),
            state("+", ok("+")),
            fallibleState("ws?", null),
            int("1")
          ),
          ["sum(AllOk)", ok(["1", null, "+", null, "1"])]
        ),
        fallibleState("ws?", null),
        state("close-parens", ok(")")),
        [
          "parens(AllOk)",
          ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
        ],

        [
          "expr(FirstOk)",
          ok(["(", null, ["1", null, "+", null, "1"], null, ")"]),
        ],
        fallibleState("ws?", null),
        state("+", ok("+")),
        fallibleState("ws?", null),
        int("1"),
        [
          "sum(AllOk)",
          ok([
            ["(", null, ["1", null, "+", null, "1"], null, ")"],
            null,
            "+",
            null,
            "1",
          ]),
        ]
      ).traces
    );

    this.assertInvoke(
      takeSum,
      VOID,
      "( 1 + 1 ) + 1",
      ok([
        ["(", " ", ["1", " ", "+", " ", "1"], " ", ")"],
        " ",
        "+",
        " ",
        "1",
      ]) as ArrowResult<typeof takeSum>,

      ...steps(
        state("open-parens", ok("(")),
        fallibleState("ws?", " "),
        steps(
          steps(
            int("1"),
            fallibleState("ws?", " "),
            state("+", ok("+")),
            fallibleState("ws?", " "),
            int("1")
          ),
          ["sum(AllOk)", ok(["1", " ", "+", " ", "1"])]
        ),
        fallibleState("ws?", " "),
        state("close-parens", ok(")")),
        ["parens(AllOk)", ok(["(", " ", ["1", " ", "+", " ", "1"], " ", ")"])],

        ["expr(FirstOk)", ok(["(", " ", ["1", " ", "+", " ", "1"], " ", ")"])],
        fallibleState("ws?", " "),
        state("+", ok("+")),
        fallibleState("ws?", " "),
        int("1"),
        [
          "sum(AllOk)",
          ok([
            ["(", " ", ["1", " ", "+", " ", "1"], " ", ")"],
            " ",
            "+",
            " ",
            "1",
          ]),
        ]
      ).traces
    );
  }

  private assertInvoke<
    T extends Formattable | JSONValue | undefined | void,
    U extends Formattable | JSONValue | undefined | void
  >(
    arrow: ops.Arrow<T, U>,
    input: T,
    source: string,
    expectedOutput: U,
    ...expectedTraceRecords: StringTrace[]
  ): void {
    let step = `source: ${JSON.stringify(source)}`;

    this.assert.step(step);
    let state = new State(new Tracer(), new Parser(source));
    let actual = this.invoke(arrow, input, state);
    this.assert.deepEqual(
      actual,
      expectedOutput,
      `expected output to be ${formatUnknown(expectedOutput)}`
    );

    this.assert.deepEqual(
      `\n${printIndentedItems(state.tracer.records)}\n`,
      `\n${printIndentedItems(expectedTraceRecords)}\n`,
      "expected trace to match"
    );

    this.assert.verifySteps([step]);
  }

  private invoke<T, U>(op: ops.Arrow<T, U>, input: T, state: State): U {
    return op.invoke(state, this.evaluator, input);
  }
}

function int(value: string): Step {
  return steps(
    state("open-parens", ERR),
    ["parens(AllOk)", ERR],
    state("int", ok(value)),
    ["expr(FirstOk)", ok(value)]
  );
}

function fallibleState(label: string, value: unknown): Steps {
  return steps(state(label, value), step("Pure", value, ok(value)), [
    `ok[${label}](Pipeline)`,
    ok(value),
  ]);
}

function state(out: unknown): Step;
function state(label: string, out: unknown): Step;
function state(...args: [string | unknown, unknown?]): Step {
  let out = args.length === 2 ? args[1] : args[0];
  let label = args.length === 2 ? (args[0] as string) : undefined;

  let builder = new TraceBuilder()
    .addTraces([`State: ${formatUnknown(STATE)}`])
    .step("Pure", STATE, out)
    .into({ type: "Pipeline", label }, VOID, out);

  return { type: "multiple", builder };
}

class State implements RawFormattable {
  constructor(readonly tracer: Tracer, readonly parser: Parser) {}

  [FORMAT](): Formatted {
    return { type: "raw", value: `<State>` };
  }

  [SNAPSHOT](): Formattable {
    return this;
  }
}

class Parser {
  constructor(private source: string, private pos = 0) {}

  tryMatch(pattern: RegExp | string): Result<string> {
    let result = this.match(pattern);

    if (result === null) {
      return err("mismatch");
    } else {
      return ok(result);
    }
  }

  match(pattern: RegExp | string): string | null {
    let next = this.source.slice(this.pos);

    if (typeof pattern === "string") {
      let sliced = next.slice(0, pattern.length);
      let match = sliced === pattern;

      if (match) {
        this.pos += sliced.length;
        return sliced;
      }
    } else {
      let match = next.match(pattern);
      if (match) {
        this.pos += match[0].length;
        return match[0];
      }
    }

    return null;
  }
}

function fromState<In, T>(
  callback: (state: { parser: Parser }) => T,
  label?: string
): ops.Arrow<In, T> {
  return ops.pipeline(
    ops.state<{ parser: Parser } & object>(),
    ops.pure(callback),
    label
  );
}

function fallible<In, Out>(
  arrow: ops.Arrow<In, Out>
): ops.Arrow<In, Result<Out>> {
  return ops.pipeline(
    arrow,
    ops.pure(input => ok(input)),
    arrow.operation.label ? `ok[${arrow.operation.label}]` : undefined
  );
}

function recurse<A extends ops.Arrow<unknown, unknown>>(callback: () => A): A {
  return ops.Arrow.delay(callback);
}

function exact<S extends string>(s: S, label: string = s): ParseArrow<S> {
  return fromState(state => state.parser.tryMatch(s), label) as ParseArrow<S>;
}

type ArrowResult<T extends Arrow<unknown, unknown>> = T extends Arrow<
  unknown,
  infer R
>
  ? R
  : never;

type ParseArrow<Out> = Arrow<unknown, Result<Out>>;

type ParserEvaluator = ops.StatefulEvaluator<{
  parser: Parser;
  tracer: Tracer;
}>;

function parserEvaluator(): ParserEvaluator {
  let tracer = new TracedEvaluator<{ parser: Parser }>();
  let evaluator = new StatefulEvaluatorImpl(tracer);
  tracer.setInner(evaluator);
  return tracer;
}
