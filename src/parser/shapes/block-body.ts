import TokensIterator, { legacyExpand, repeat } from "../tokens-iterator";
import { TopLevelNode, TopLevelSequence } from "./top-level";
import { EXPAND, start, ok, isOk } from "../shape";
import { AbstractShape } from "./abstract";

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
