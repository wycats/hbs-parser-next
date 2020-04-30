import { Result, Snippet } from "../snippet";
import type { Debuggable } from "./logger";
import type { CombinatorType } from "./combinators/types";
export declare function mapResult<T, U>(result: Result<T>, callback: (input: T) => Result<U>): Result<U>;
export declare function map<T extends Debuggable, U extends Debuggable>(combinator: CombinatorType<T>, mapper: (value: T, next: Snippet) => Result<U>): CombinatorType<U>;
export declare function complete<T extends Debuggable>(source: CombinatorType<T>): CombinatorType<T>;
export declare function present<T extends Debuggable>(source: CombinatorType<T>): CombinatorType<T>;
export declare function combinatorName(c: CombinatorType): string;
export declare function unreachable(value: never): never;
export declare function join<T>(...items: Array<T | null | undefined>): T[];
export declare function unwrap<T>(v: T | null | undefined): T;
//# sourceMappingURL=utils.d.ts.map