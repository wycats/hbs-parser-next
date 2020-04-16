import type { VarReferenceNode } from "../../nodes/expression";
import { Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
export declare class VarRefShape extends AbstractShape<VarReferenceNode> {
    expandFallible(iterator: TokensIterator): Result<VarReferenceNode>;
}
//# sourceMappingURL=var-ref.d.ts.map