import { Snippet, Result, ok } from "../snippet";
import {
  Token,
  text,
  startTag,
  endTag,
  AttributeToken,
  attrName,
  valuedAttr,
  AttributeValueToken,
  AttributeNameToken,
  attrValue,
  AttributeValueType
} from "./tokens";
import {
  takeUntil,
  tag,
  pattern,
  seq,
  maybe,
  Combinator,
  any,
  pick
} from "./combinators";
import { map } from "./utils";
import { range } from "../span";
import { WS, EQ, token } from "./hbs";
import { many } from "./multi";

export const TEXT: Combinator<Token> = {
  name: "TEXT",
  invoke(input) {
    let result = input.invoke(takeUntil("{{"), input);

    if (result.kind === "err") {
      return result;
    }

    let [next, value] = result.value;
    return ok([next, text(value.span)]);
  }
};

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
export const TAG_NAME = pattern(/^[A-Za-z][^/>\0\s]+/, "TAG_NAME");

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
export const ATTRIBUTE_NAME: Combinator<AttributeNameToken> = map(
  pattern(
    /^[^/>\o"'<=].*?(?=[\u0009\u000a\u000C\u0020/=>\0"'<])/,
    "ATTRIBUTE_NAME"
  ),
  name => ok(attrName(name.span))
);

export const ATTRIBUTE_VALUE: Combinator<AttributeValueToken> = pick(
  {
    dq: seq(tag(`"`), pattern(/^[^"]*/, `dq contents`), tag(`"`)),
    sq: seq(tag(`'`), pattern(/^[^']*/, `sq contents`), tag(`'`)),
    unquoted: pattern(/^[^\0009\000A\000C\0020>\0"'<=`]+/, `unquoted contents`)
  },
  {
    dq: ([open, string, close]) =>
      ok(
        attrValue(
          { type: AttributeValueType.DoubleQuoted, value: string.span },
          range(open, close)
        )
      ),
    sq: ([open, string, close]) =>
      ok(
        attrValue(
          { type: AttributeValueType.SingleQuoted, value: string.span },
          range(open, close)
        )
      ),
    unquoted: value =>
      ok(
        attrValue(
          { type: AttributeValueType.Unquoted, value: value.span },
          value.span
        )
      )
  }
);

export const ATTRIBUTE = pick(
  {
    valued: seq(ATTRIBUTE_NAME, EQ, ATTRIBUTE_VALUE),
    bare: ATTRIBUTE_NAME
  },
  {
    valued: ([name, , value]) => {
      return ok(valuedAttr({ name, value }, range(name, value)));
    },
    bare: value => ok(attrName(value.span))
  }
);

export const ATTRIBUTES: Combinator<AttributeToken[]> = map(
  seq(WS, many(any(ATTRIBUTE, WS))),
  ([ws, attrs]) => {
    return ok([ws, ...attrs]);
  }
);

export const START_TAG = map(
  seq(tag("<"), TAG_NAME, maybe(ATTRIBUTES), tag(">")),
  ([start, name, attrs, end]) => {
    return ok(
      startTag(
        { name: name.span, attrs: attrs || undefined },
        range(start, end)
      )
    );
  }
);

export const END_TAG = map(
  seq(tag("</"), TAG_NAME, maybe(WS), tag(">")),
  ([start, name, trailing, end]) => {
    return ok(endTag({ name: name.span, trailing }, range(start, end)));
  }
);
