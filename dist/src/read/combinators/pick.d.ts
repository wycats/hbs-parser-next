import { Result, Snippet } from "../../snippet";
import type { Debuggable } from "../logger";
import { AbstractCombinator } from "./base";
import type { Combinators } from "./types";
import type { Dict } from "../utils";
export default class Pick<T extends Dict<Debuggable>, U extends PickCallbacks<T>> extends AbstractCombinator<UnionCallbacks<U>> {
    private combinators;
    private callbacks;
    readonly name = "pick";
    constructor(combinators: Combinators<T>, callbacks: U);
    invoke(input: Snippet): Result<[Snippet, UnionCallbacks<U>]>;
}
export declare type PickCallbacks<T extends {
    [key: string]: Debuggable;
}> = {
    [P in keyof T]: (input: T[P]) => Result<Debuggable>;
};
declare type UnionCallbacks<T extends {
    [key: string]: (input: any) => Result<Debuggable>;
}> = {
    [P in keyof T]: T[P] extends (input: any) => Result<infer R> ? R extends Debuggable ? R : never : never;
}[keyof T];
export {};
//# sourceMappingURL=pick.d.ts.map