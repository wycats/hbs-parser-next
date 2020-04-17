import type { TextNode } from "../nodes";
import { Result, EXPAND } from "../shape";
import type TokensIterator from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { TextShape } from "./text";
import { InterpolateShape } from "./interpolate";
import type { InterpolateNode } from "../nodes/top-level";
import { any } from "./internal/any";

export type TopLevelNode = TextNode | InterpolateNode;

export class TopLevelShape extends AbstractShape<TopLevelNode> {
  readonly desc = "TopLevel";

  [EXPAND](iterator: TokensIterator): Result<TopLevelNode> {
    return iterator.expand(any([TextShape, InterpolateShape], "top level"));
  }
}
