import { LoggingType } from "../read/read";
import type * as tokens from "../read/tokens";
import { ParseTracer } from "./debug";
import type * as ast from "./node-types";
import * as a from "./create-node";
import { ParserArrow, ParseResult } from "./shape";
import { TopLevelArrow } from "./shapes/top-level";
import TokensIterator, { TOKENS } from "./tokens-iterator";
import { range } from "../span";

export interface ParseOptions {
  input: tokens.RootToken;
  source: string;
  logging: LoggingType;
}

export default function parse({
  input,
  source,
  logging,
}: ParseOptions): ParseResult<ast.RootNode> {
  let tracer = new ParseTracer(input);
  let iterator = new TokensIterator(input.children, {
    source,
    tracer,
  });

  try {
    let topLevel = TopLevelArrow.repeat()
      .fallible()
      .checkNext(ParserArrow.start().eof())
      .ifOk(nodes => a.root(nodes, range(...nodes)))
      .label("root");

    let state = iterator.arrowState;
    let [, root] = topLevel.invoke(state);

    return root;
  } finally {
    if (logging === LoggingType.Print) {
      tracer.print(iterator[TOKENS], iterator.source);
    }
  }
}
