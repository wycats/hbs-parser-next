import { ok, err } from "../snippet";
import { present, combinatorName } from "./utils";
export function many(source) {
    return {
        name: `many • ${combinatorName(source)}`,
        invoke(input) {
            let current = input;
            let out = [];
            let count = 0;
            while (true) {
                if (count++ > 1000) {
                    return err(input, "likely infinite loop");
                }
                if (current.isEOF()) {
                    return ok([current.rest, out]);
                }
                let iterate = current.invoke(present(source));
                if (iterate.kind === "err") {
                    // if we encountered a fatal error, the entire `many`
                    // is an error
                    if (iterate.fatal) {
                        return iterate;
                    }
                    else {
                        return ok([current.rest, out]);
                    }
                }
                else {
                    let [next, match] = iterate.value;
                    out.push(match);
                    current = next;
                }
            }
        },
    };
}
