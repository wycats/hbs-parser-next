import type TokensIterator from "../tokens-iterator";
import { AbstractInfallibleShape } from "./abstract";
import { TopLevelNode, TopLevelShape } from "./top-level";
import { EXPAND } from "../shape";

export default class BlockBodyShape extends AbstractInfallibleShape<
  readonly TopLevelNode[]
> {
  readonly desc = "BlockBody";

  [EXPAND](iterator: TokensIterator): readonly TopLevelNode[] {
    let out: TopLevelNode[] = [];

    while (true) {
      let next = iterator.expand(TopLevelShape);

      if (next.kind === "err") {
        break;
      }

      out.push(next.value);
    }

    return out;
  }
}
