import type { Snippet, Result } from "../../snippet";
import type { Debuggable } from "../logger";
import type { CombinatorType } from "./types";
import { map } from "../utils";

export abstract class AbstractCombinator<T extends Debuggable>
  implements CombinatorType<T> {
  declare abstract readonly name: string;
  abstract invoke(input: Snippet): Result<[Snippet, T]>;

  map<U extends Debuggable>(
    mapper: (value: T, next: Snippet) => Result<U>
  ): CombinatorType<U> {
    return map(this, mapper);
  }
}
