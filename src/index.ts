import * as combinators from "./combinators";
export { combinators };

import * as multi from "./multi";
export { multi };

export * from "./snippet";

import * as ast from "./ast";
export { ast };

export * from "./read";
import * as tokens from "./read";
export { tokens };

export * from "./span";

import * as b from "./token-builder";
export { b };

export function parse(input: string): ast.Root {
  return {};
}
