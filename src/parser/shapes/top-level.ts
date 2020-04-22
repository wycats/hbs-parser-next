import type * as ast from "../nodes";
import type { InterpolateNode } from "../nodes/top-level";
import type { SequenceBuilder } from "../shape";
import { any, anyArrow } from "./internal/any";
import { InterpolateSequence, InterpolateArrow } from "./interpolate";
import { TextSequence, TextArrow } from "./text";
import { label } from "../tokens-iterator";

export type TopLevelNode = ast.TextNode | ast.InterpolateNode;

export const TopLevelSequence: SequenceBuilder<void, TopLevelNode> = label(
  "TopLevel",
  any("top level", [TextSequence, InterpolateSequence])
);

export const TopLevelArrow = anyArrow([TextArrow, InterpolateArrow]).label(
  "TopLevel"
);
