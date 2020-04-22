import { EXPAND, isOk, ok } from "../shape";
import TokensIterator, { repeat } from "../tokens-iterator";
import { AbstractShape } from "./abstract";
import { TopLevelNode, TopLevelSequence } from "./top-level";

export default class BlockBodyShape extends AbstractShape<
  readonly TopLevelNode[]
> {
  readonly desc = "BlockBody";

  [EXPAND](iterator: TokensIterator): readonly TopLevelNode[] {
    let result = repeat(TopLevelSequence).run(iterator, ok(undefined));

    if (isOk(result)) {
      return result.value;
    } else {
      throw new Error("ASSERT: unreachable error from TopLevelSequence");
    }
  }
}
