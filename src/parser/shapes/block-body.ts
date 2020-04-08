import type TokensIterator from "../tokens-iterator";
import { AbstractInfallibleShape } from "./abstract";
import { TopLevelNode, TopLevelShape } from "./top-level";

export default class BlockBodyShape extends AbstractInfallibleShape<
  readonly TopLevelNode[]
> {
  expandInfallible(iterator: TokensIterator): readonly TopLevelNode[] {
    let out: TopLevelNode[] = [];

    while (true) {
      let next = new TopLevelShape().expandFallible(iterator);

      if (next.kind === "err") {
        break;
      }

      out.push(next.value);
    }

    return out;
  }
}
