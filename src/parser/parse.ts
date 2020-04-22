import type * as tokens from "../read/tokens";
import * as ast from "./nodes";
import BlockBodyShape from "./shapes/block-body";
import TokensIterator, {
  TOKENS,
  expandInfallible,
  TokensIteratorState,
} from "./tokens-iterator";
import { Result, ok, err, ParserArrow } from "./shape";
import { LoggingType } from "../read/read";
import { ParseTracer } from "./debug";
import { TopLevelArrow } from "./shapes/top-level";
import { range } from "..";

export interface ParseOptions {
  input: tokens.RootToken;
  source: string;
  logging: LoggingType;
}

export default function parse({
  input,
  source,
  logging,
}: ParseOptions): Result<ast.RootNode> {
  let tracer = new ParseTracer(input);
  let iterator = new TokensIterator(input.children, {
    source,
    tracer,
  });

  try {
    let topLevel = TopLevelArrow.repeat()
      .fallible()
      .checkNext(ParserArrow.start().eof())
      .ifOk(nodes => ast.root(nodes, range(...nodes)))
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
