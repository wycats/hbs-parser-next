import type { NumberNode } from "../../nodes/expression";
import { Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
export declare class NumberShape extends AbstractShape<NumberNode> {
    expandFallible(iterator: TokensIterator): Result<NumberNode>;
}
//# sourceMappingURL=number.d.ts.map