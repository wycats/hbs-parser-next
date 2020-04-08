import type * as tokens from "../read/tokens";
import * as ast from "./nodes";
import BlockBodyShape from "./shapes/block-body";
import TokensIterator from "./tokens-iterator";

export default function parse(
  input: tokens.RootToken,
  source: string
): ast.RootNode {
  let iterator = new TokensIterator(input.children, { source });
  let topLevel = new BlockBodyShape();

  return ast.root(topLevel.expandInfallible(iterator));
}
