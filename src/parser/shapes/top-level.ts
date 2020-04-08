import type { TextNode } from "../nodes";
import type { Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape, or } from "./abstract";
import { TextShape } from "./text";
import { InterpolateShape } from "./interpolate";
import type { InterpolateNode } from "../nodes/top-level";

export type TopLevelNode = TextNode | InterpolateNode;

export class TopLevelShape extends AbstractShape<TopLevelNode> {
  expandFallible(iterator: TokensIterator): Result<TopLevelNode> {
    return or(new TextShape(), new InterpolateShape()).expandFallible(iterator);
  }
}
