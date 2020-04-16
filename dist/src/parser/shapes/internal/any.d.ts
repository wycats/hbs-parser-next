import { FallibleShape, Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
export declare class Any<T extends Array<FallibleShape<unknown>>> extends AbstractShape<T[number]> {
    private shapes;
    constructor(shapes: T);
    expandFallible(iterator: TokensIterator): Result<T[number]>;
}
//# sourceMappingURL=any.d.ts.map