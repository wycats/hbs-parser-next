import { arrow } from "hbs-parser-next";
import type { Reader } from "./reader";
import { chars } from "./pattern";

let parser = arrow.build<Reader>();

let plus = parser.pipeline(
  parser.state(),
  parser.host(() => state => state.tryMatch("+"))
);

let int = parser.pipeline(
  parser.state(),
  parser.host(() => state => state.tryMatch(/^\d+/))
);

let openParen = parser.pipeline(
  parser.state(),
  parser.host(() => state => state.tryMatch("("))
);

let sum = parser.list([int, plus, int]);
