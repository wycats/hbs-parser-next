import { AbstractShape } from "./abstract";
import type { TextNode } from "../nodes";
import type TokensIterator from "../tokens-iterator";
import { Result } from "../shape";
export declare class TextShape extends AbstractShape<TextNode> {
    expandFallible(iterator: TokensIterator): Result<TextNode>;
}
//# sourceMappingURL=text.d.ts.map