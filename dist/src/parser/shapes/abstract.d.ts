import type { Shape, Result } from "../shape";
import { EXPAND } from "../shape";
import TokensIterator, { CombinatorTokensIterator } from "../tokens-iterator";
export declare abstract class AbstractShape<T> implements Shape<T> {
    abstract readonly desc: string;
    abstract [EXPAND](iterator: TokensIterator): T;
}
export interface ShapeConstructor<T> {
    new (): Shape<T>;
}
export declare function shape<T>(desc: string, expand: (iterator: CombinatorTokensIterator) => Result<T>): ShapeConstructor<Result<T>>;
export declare function infallibleShape<T>(desc: string, expand: (iterator: CombinatorTokensIterator) => T): ShapeConstructor<T>;
export declare function or<T, U>(left: Shape<Result<T>>, right: Shape<Result<U>>): Shape<Result<T | U>>;
//# sourceMappingURL=abstract.d.ts.map