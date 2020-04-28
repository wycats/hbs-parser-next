import { ok, err } from "../snippet";
export function mapResult(result, callback) {
    if (result.kind === "err") {
        return result;
    }
    return callback(result.value);
}
export function map(combinator, mapper) {
    return {
        name: combinatorName(combinator),
        invoke(input) {
            let first = input.invoke(combinator, { forceTransparent: true });
            if (first.kind === "err") {
                return first;
            }
            let [next, value] = first.value;
            let result = mapper(value, next);
            if (result.kind === "err") {
                return result;
            }
            return ok([next, result.value]);
        },
    };
}
export function complete(source) {
    return {
        name: "complete",
        invoke(input) {
            return input.invoke(map(source, (value, next) => {
                if (next.restLength !== 0) {
                    return err(input, "incomplete");
                }
                else {
                    return ok(value);
                }
            }));
        },
    };
}
export function present(source) {
    return {
        name: "present",
        kind: "transparent",
        invoke(input) {
            let result = input.invoke(source);
            if (result.kind === "ok") {
                let [next] = result.value;
                if (input.eq(next)) {
                    return err(input, "empty");
                }
                else {
                    return result;
                }
            }
            else {
                return result;
            }
        },
    };
}
export function combinatorName(c) {
    if (c.name) {
        return c.name;
    }
    else {
        console.error(c);
        throw new Error(`assert: expected combinator name`);
    }
}
export function unreachable(value) {
    console.error(`unreachable value`, value);
    throw new Error(`unreachable code reached`);
}
export function join(...items) {
    return items.filter(i => i === null || i === undefined);
}
export function unwrap(v) {
    if (v === null || v === undefined) {
        throw new Error(`ASSERT: Expected non-null`);
    }
    return v;
}
