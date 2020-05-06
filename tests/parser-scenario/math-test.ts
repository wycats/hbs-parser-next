// A simplistic parser built on top of the arrow library

import { baseOk as ok, formatUnknown, ops } from "hbs-parser-next";
import type {
  Formattable,
  JSONValue,
  SourceFormattable,
} from "hbs-parser-next";
import type * as qunit from "qunit";
import { module, printIndentedItems, test } from "../helpers";
import { Context, Step, steps, Tracer, VOID } from "../tracer";
import { nestedExprTrace, takeSum } from "./parser";
import {
  ArrowResult,
  build,
  chars,
  nested,
  NULL,
  Parser,
  parserEvaluator,
  SpanBuilder,
  State,
  tok,
} from "./tokens";

@module("math reader")
export class MathParserTest {
  declare assert: qunit.Assert;
  declare parser: Parser;

  #builder = new SpanBuilder();

  @test "plus without whitespace"(): void {
    let expected = build(
      nested(
        "Sum",
        tok("1", "Number"),
        NULL,
        tok("+", "Plus"),
        NULL,
        tok("1", "Number")
      )
    );

    let {
      children: [one1, , plus, , one2],
    } = expected;

    this.assertInvoke(
      takeSum,
      VOID,
      "1+1",
      ok(expected),
      nestedExprTrace(expected)
    );
  }

  @test "plus with whitespace"(): void {
    let expected = build(
      nested(
        "Sum",
        tok("1", "Number"),
        chars(" "),
        tok("+", "Plus"),
        chars(" "),
        tok("1", "Number")
      )
    );

    let {
      children: [one1, ws1, plus, ws2, one2],
    } = expected;

    this.assertInvoke(
      takeSum,
      VOID,
      "1 + 1",
      ok(expected) as ArrowResult<typeof takeSum>,
      nestedExprTrace(expected)
    );
  }

  @test "paren (without whitespace)"(): void {
    let expected = build(
      nested(
        "Sum",
        nested(
          "Parens",
          tok("(", "OpenParen"),
          NULL,
          nested(
            "Sum",
            tok("1", "Number"),
            NULL,
            tok("+", "Plus"),
            NULL,
            tok("1", "Number")
          ),
          NULL,
          tok(")", "CloseParen")
        ),
        NULL,
        tok("+", "Plus"),
        NULL,
        tok("1", "Number")
      )
    );

    this.assertInvoke(
      takeSum,
      VOID,
      "(1+1)+1",
      ok(expected) as ArrowResult<typeof takeSum>,
      nestedExprTrace(expected)
    );
  }

  @test "paren (with whitespace)"(): void {
    let sum = build(
      nested(
        "Sum",
        nested(
          "Parens",
          tok("(", "OpenParen"),
          chars(" "),
          nested(
            "Sum",
            tok("1", "Number"),
            chars(" "),
            tok("+", "Plus"),
            chars(" "),
            tok("1", "Number")
          ),
          chars(" "),
          tok(")", "CloseParen")
        ),
        chars(" "),
        tok("+", "Plus"),
        chars(" "),
        tok("1", "Number")
      )
    );

    this.assertInvoke(
      takeSum,
      VOID,
      "( 1 + 1 ) + 1",
      ok(sum) as ArrowResult<typeof takeSum>,
      nestedExprTrace(sum)
    );
  }

  private assertInvoke<
    T extends Formattable | SourceFormattable | JSONValue | undefined | void,
    U extends Formattable | SourceFormattable | JSONValue | undefined | void
  >(
    arrow: ops.Arrow<T, U>,
    input: T,
    source: string,
    expectedOutput: U,
    traceStep: Step
  ): void {
    let step = `source: ${JSON.stringify(source)}`;

    let expectedTraceRecords = steps(traceStep).traces;

    this.assert.step(step);
    let state = new State(new Tracer(), new Parser(source));
    let actual = this.invoke(arrow, input, state, source);

    let formattedActual = formatUnknown(actual, source, 2);
    let formattedExpected = formatUnknown(expectedOutput, source, 2);

    this.assert.equal(
      formattedActual,
      formattedExpected,
      `expected output to be ${formatUnknown(expectedOutput, source)}`
    );

    let context = new Context(source);
    let expected = expectedTraceRecords.map(trace => context.format(trace));

    this.assert.deepEqual(
      `\n${printIndentedItems(state.tracer.records)}\n`,
      `\n${printIndentedItems(expected)}\n`,
      "expected trace to match"
    );

    this.assert.verifySteps([step]);
  }

  private invoke<T, U>(
    op: ops.Arrow<T, U>,
    input: T,
    state: State,
    source: string
  ): U {
    return op.invoke(state, parserEvaluator(source), input);
  }
}
