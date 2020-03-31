import * as combinators from "./read/combinators";
export { combinators };

import * as multi from "./read/multi";
export { multi };

export * from "./snippet";

import * as ast from "./ast";
export { ast };

export * from "./read/read";
import * as tokens from "./read/read";
export { tokens };

export * from "./span";

import * as b from "./read/token-builder";
export { b };

export function parse(input: string): ast.Root {
  return {};
}
