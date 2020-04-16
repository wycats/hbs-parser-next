import type { StringNode } from "../../nodes/expression";
import { Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
export declare class StringShape extends AbstractShape<StringNode> {
    expandFallible(iterator: TokensIterator): Result<StringNode>;
}
//# sourceMappingURL=string.d.ts.map