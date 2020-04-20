import type * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import type { SequenceBuilder } from "../shape";
import { any } from "./internal/any";
import { InterpolateSequence } from "./interpolate";
import { TextSequence } from "./text";
import { label } from "../tokens-iterator";

export type TopLevelNode = ast.TextNode | ast.InterpolateNode;

export const TopLevelSequence: SequenceBuilder<void, TopLevelNode> = label(
  "TopLevel",
  any("top level", [TextSequence, InterpolateSequence])
);
