import { Combinator, Debuggable, combinatorName } from "./combinators";
import { Snippet, ok, err } from "../snippet";
import { present } from "./utils";

export function many<T extends Debuggable>(
  source: Combinator<T>
): Combinator<T[]> {
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

        let iterate = input.invoke(present(source), current);

        if (iterate.kind === "err") {
          return ok([current.rest, out]);
        } else {
          let [next, match] = iterate.value;
          out.push(match);
          current = next;
        }
      }
    }
  };
}
