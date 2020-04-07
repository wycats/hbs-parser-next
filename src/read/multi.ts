import { ok, err } from "../snippet";
import { present, combinatorName } from "./utils";
import type { Debuggable } from "./logger";
import type { CombinatorType } from "./combinators/types";

export function many<T extends Debuggable>(
  source: CombinatorType<T>
): CombinatorType<T[]> {
  return {
    name: `many • ${combinatorName(source)}`,
    invoke(input) {
      let current = input;
      let out: T[] = [];

      let count = 0;

      while (true) {
        if (count++ > 50) {
          return err(input, "likely infinite loop");
        }

        if (current.isEOF()) {
          return ok([current.rest, out]);
        }

        let iterate = current.invoke(present(source));

        if (iterate.kind === "err") {
          return ok([current.rest, out]);
        } else {
          let [next, match] = iterate.value;
          out.push(match);
          current = next;
        }
      }
    },
  };
}
