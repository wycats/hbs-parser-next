import { TopLevelArrow } from "./top-level";
import { ParserArrow } from "../shape";
import { TokenType } from "../../read/token-enum";
import { ExpressionArrow } from "./expression/path";

export const HeadArrow = ExpressionArrow.label("BlockHead");

export const BlockBodyArrow = TopLevelArrow.repeat();

export const BlockArrow = ParserArrow.start().parent(
  "block",
  TokenType.Block,
  BlockBodyArrow.fallible()
);
