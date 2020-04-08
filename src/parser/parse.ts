import type * as tokens from "../read/tokens";
import * as ast from "./nodes";
import BlockBodyShape from "./shapes/block-body";
import TokensIterator from "./tokens-iterator";
import { Result, ok, err } from "./shape";

export default function parse(
  input: tokens.RootToken,
  source: string
): Result<ast.RootNode> {
  let iterator = new TokensIterator(input.children, { source });
  let topLevel = new BlockBodyShape();

  let root = topLevel.expandInfallible(iterator);

  if (iterator.peek().isEOF) {
    return ok(
      ast.root(root, {
        start: 0,
        end: source.length,
      })
    );
  } else {
    return err(iterator.peek(), "incomplete");
  }
}
