import * as ast from "../../nodes";
import { Result } from "../../shape";
import type TokensIterator from "../../tokens-iterator";
import { AbstractShape } from "../abstract";
export declare class CallBody extends AbstractShape<ast.CallBodyNode> {
    expandFallible(iterator: TokensIterator): Result<ast.CallBodyNode>;
}
//# sourceMappingURL=call-body.d.ts.map