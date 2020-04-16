import type TokensIterator from "../tokens-iterator";
import { AbstractInfallibleShape } from "./abstract";
import { TopLevelNode } from "./top-level";
export default class BlockBodyShape extends AbstractInfallibleShape<readonly TopLevelNode[]> {
    expandInfallible(iterator: TokensIterator): readonly TopLevelNode[];
}
//# sourceMappingURL=block-body.d.ts.map