import { TopLevelArrow } from "./top-level";
import { ParserArrow } from "../shape";
import "../../read/tokens";
import { ExpressionArrow } from "./expression/path";
export const HeadArrow = ExpressionArrow.label("BlockHead");
export const BlockBodyArrow = TopLevelArrow.repeat();
export const BlockArrow = ParserArrow.start().parent("block", "Block" /* Block */, BlockBodyArrow.fallible());
