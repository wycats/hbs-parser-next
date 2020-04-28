import { ExpressionArrow } from "./expression";
import { TopLevelArrow } from "./top-level";
import { ParserArrow } from "../shape";
import "../../read/tokens";
export const HeadArrow = ExpressionArrow.label("BlockHead");
export const BlockBodyArrow = TopLevelArrow.repeat();
export const BlockArrow = ParserArrow.start().parent("block", TokenType.Block, BlockBodyArrow.fallible());
