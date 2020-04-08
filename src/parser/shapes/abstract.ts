import type { FallibleShape, InfallibleShape, Result } from "../shape";
import type TokensIterator from "../tokens-iterator";

export abstract class AbstractShape<T> implements FallibleShape<T> {
  abstract expandFallible(iterator: TokensIterator): Result<T>;
}

// tslint:disable-next-line:max-classes-per-file
export abstract class AbstractInfallibleShape<T> implements InfallibleShape<T> {
  abstract expandInfallible(iterator: TokensIterator): T;
}
