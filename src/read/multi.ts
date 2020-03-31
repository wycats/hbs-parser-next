import { Combinator } from "./combinators";
import { Snippet, ok, err } from "../snippet";

export function many<T>(source: Combinator<T>): Combinator<T[]> {
  return input => {
    let current = input;
    let out: T[] = [];

    while (true) {
      let iterate = source(current);

      if (iterate.kind === "err") {
        return ok([current.rest, out]);
      } else {
        let [next, match] = iterate.value;
        out.push(match);
        current = next;
      }
    }
  };
}
