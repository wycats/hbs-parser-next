import type { TextNode } from "../nodes";
import type { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { TextShape } from "./text";

export type TopLevelNode = TextNode;

export class TopLevelShape extends AbstractShape<TopLevelNode> {
  expandFallible(iterator: TokensIterator): Result<TopLevelNode> {
    return new TextShape().expandFallible(iterator);
  }
}
