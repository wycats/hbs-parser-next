import { Snippet, Result, ok } from "../snippet";
import { Token, text, startTag, endTag } from "./tokens";
import { takeUntil, tag, pattern, seq, maybe } from "./combinators";
import { map } from "./utils";
import { range } from "../span";
import { WS } from "./read";

export function TEXT(input: Snippet): Result<[Snippet, Token]> {
  let result = takeUntil("{{")(input);

  if (result.kind === "err") {
    return result;
  }

  let [next, value] = result.value;
  return ok([next, text(value.span)]);
}

export function START_TAG(input: Snippet): Result<[Snippet, Token]> {
  return map(
    seq(tag("<"), TAG_NAME, maybe(WS), tag(">")),
    ([start, name, ws, end]) => {
      return ok(
        startTag({ name: name.span, attrs: ws ? [ws] : [] }, range(start, end))
      );
    }
  )(input);
}

export function END_TAG(input: Snippet): Result<[Snippet, Token]> {
  return map(seq(tag("</"), TAG_NAME, tag(">")), ([start, name, end]) => {
    return ok(endTag(name.span, range(start, end)));
  })(input);
}

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
export const TAG_NAME = pattern(/^[A-Za-z][^/>\0\s]+/);
