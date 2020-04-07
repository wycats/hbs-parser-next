import type { Debuggable } from "../logger";
import type { Snippet, Result } from "../../snippet";

export type Combinators<T extends { [key: string]: Debuggable }> = {
  [K in keyof T]: CombinatorType<T[K]>;
};

export type TupleCombinators<T> = {
  [K in keyof T]: T[K] extends Debuggable ? CombinatorType<T[K]> : never;
};

export type CombinatorDebugType = "transparent" | "arm" | "normal";

export interface CombinatorType<T extends Debuggable = Debuggable> {
  name: string;
  kind?: CombinatorDebugType;
  invoke(input: Snippet): Result<[Snippet, T]>;
}
