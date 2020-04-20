import TokensIterator from "../tokens-iterator";
import { TopLevelNode } from "./top-level";
import { EXPAND } from "../shape";
import { AbstractShape } from "./abstract";
export default class BlockBodyShape extends AbstractShape<readonly TopLevelNode[]> {
    readonly desc = "BlockBody";
    [EXPAND](iterator: TokensIterator): readonly TopLevelNode[];
}
//# sourceMappingURL=block-body.d.ts.map