import type { FallibleShape, InfallibleShape, Result } from "../shape";
import type TokensIterator from "../tokens-iterator";
export declare abstract class AbstractShape<T> implements FallibleShape<T> {
    abstract expandFallible(iterator: TokensIterator): Result<T>;
}
export declare abstract class AbstractInfallibleShape<T> implements InfallibleShape<T> {
    abstract expandInfallible(iterator: TokensIterator): T;
}
export declare function or<T, U>(left: FallibleShape<T>, right: FallibleShape<U>): FallibleShape<T | U>;
//# sourceMappingURL=abstract.d.ts.map