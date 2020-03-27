import { Result, Snippet } from "./snippet";

export type Combinator = (input: Snippet) => Result<Snippet>;

export function tag(source: string): Combinator {
  return input => {
    let next = input.slice(source.length);

    if (next.fragment === source) {
      return { kind: "ok", value: next };
    } else {
      return { kind: "err", snippet: input, reason: "tag" };
    }
  };
}
