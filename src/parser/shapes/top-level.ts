import type * as ast from "../nodes";
import { anyArrow } from "./internal/any";
import { InterpolateArrow } from "./interpolate";
import { TextArrow } from "./text";

export type TopLevelNode = ast.TextNode | ast.InterpolateNode;

export const TopLevelArrow = anyArrow([TextArrow, InterpolateArrow]).label(
  "TopLevel"
);
