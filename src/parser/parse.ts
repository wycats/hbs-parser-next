import type * as tokens from "../read/tokens";
import * as ast from "./nodes";
import BlockBodyShape from "./shapes/block-body";
import TokensIterator, { TOKENS } from "./tokens-iterator";
import { Result, ok, err } from "./shape";
import { LoggingType } from "../read/read";
import { ParseTracer } from "./debug";

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
    let topLevel = new BlockBodyShape();

    let root = iterator.expandInfallible(topLevel);

    let maybeEOF = iterator.peek("eof");

    if (maybeEOF.isEOF) {
      maybeEOF.commit();
      return ok(
        ast.root(root, {
          start: 0,
          end: source.length,
        }),
        iterator
      );
    } else {
      return err(maybeEOF.reject(), "incomplete", iterator);
    }
  } finally {
    if (logging === LoggingType.Print) {
      tracer.print(iterator[TOKENS], iterator.source);
    }
  }
}
