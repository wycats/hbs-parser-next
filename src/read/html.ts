import { ok } from "../snippet";
import { range } from "../span";
import { combinator } from "./combinator";
import { any, maybe, pattern, pick, seq, tag, takeUntil } from "./combinators";
import { EQ, INTERPOLATE, SIMPLE_PATH, WS } from "./hbs";
import { many } from "./multi";
import {
  argName,
  ArgNameToken,
  AttributeNameToken,
  AttributeToken,
  AttributeValueToken,
  AttributeValueType,
  attrName,
  attrValue,
  comment,
  endTag,
  id,
  PresentTokens,
  startTag,
  stringInterpolation,
  StringInterpolationPart,
  StringInterpolationToken,
  text,
  Token,
  valuedAttr,
} from "./tokens";
import { map } from "./utils";
import type { CombinatorType } from "./combinators/types";

export const TEXT: CombinatorType<Token> = {
  name: "TEXT",
  invoke(input) {
    let result = input.invoke(takeUntil("{{"));

    if (result.kind === "err") {
      return result;
    }

    let [next, value] = result.value;
    return ok([next, text(value.span)]);
  },
};

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
export const TAG_NAME = combinator(() =>
  pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME")
);

export const TAG_NAME_TOKEN: CombinatorType<PresentTokens> = combinator(() =>
  map(TAG_NAME, snippet => ok([id(snippet.span)]))
);

export const TAG_OR_COMPONENT_NAME = combinator(() =>
  any("tag or component name", SIMPLE_PATH, TAG_NAME_TOKEN)
);

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
export const ATTRIBUTE_NAME: CombinatorType<AttributeNameToken> = combinator(
  () =>
    map(
      pattern(
        /^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u,
        "ATTRIBUTE_NAME"
      ),
      name => ok(attrName(name.span))
    )
);

export const ARG_NAME: CombinatorType<ArgNameToken> = combinator(() =>
  map(seq("ARG_NAME", tag("@"), ATTRIBUTE_NAME), ([at, attr]) =>
    ok(argName(attr.span, range(at.span, attr.span)))
  )
);

export const ANY_ATTR_NAME = combinator(() =>
  any("ANY_ATTR_NAME", ARG_NAME, ATTRIBUTE_NAME)
);

export const DQ_STRING_INTERPOLATE = combinator(() =>
  any(
    "DQ_STRING_INTERPOLATE",
    INTERPOLATE,
    map(pattern(/^[^"]+/, `dq text`), value => ok(text(value.span)))
  )
);

export const SQ_STRING_INTERPOLATE = combinator(() =>
  any(
    "SQ_STRING_INTERPOLATE",
    INTERPOLATE,
    map(pattern(/^[^']+/, `sq text`), value => ok(text(value.span)))
  )
);

export function STRING_INTERPOLATION(
  c: CombinatorType<StringInterpolationPart>
): CombinatorType<StringInterpolationToken> {
  return {
    name: "STRING_INTERPOLATION",
    invoke(input) {
      return input.invoke(
        map(many(c), value => ok(stringInterpolation(value, range(...value))))
      );
    },
  };
}

export const ATTRIBUTE_VALUE: CombinatorType<AttributeValueToken> = combinator(
  () =>
    pick(
      {
        interpolate: INTERPOLATE,
        dq: seq(
          "dq",
          tag(`"`),
          STRING_INTERPOLATION(DQ_STRING_INTERPOLATE),
          tag(`"`)
        ),
        sq: seq(
          "sq",
          tag(`'`),
          STRING_INTERPOLATION(SQ_STRING_INTERPOLATE),
          tag(`'`)
        ),
        unquoted: pattern(
          /^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u,
          `unquoted contents`
        ),
      },
      {
        interpolate: interpolate =>
          ok(
            attrValue(
              { type: AttributeValueType.Interpolate, value: interpolate },
              interpolate.span
            )
          ),
        dq: ([open, value, close]) =>
          ok(
            attrValue(
              {
                type: AttributeValueType.DoubleQuoted,
                value,
              },
              range(open, close)
            )
          ),
        sq: ([open, value, close]) =>
          ok(
            attrValue(
              {
                type: AttributeValueType.SingleQuoted,
                value,
              },
              range(open, close)
            )
          ),
        unquoted: value =>
          ok(
            attrValue(
              {
                type: AttributeValueType.Unquoted,
                value: stringInterpolation([text(value.span)], value.span),
              },
              value.span
            )
          ),
      }
    )
);

export const ATTRIBUTE = combinator(() =>
  pick(
    {
      valued: seq("valued attribute", ANY_ATTR_NAME, EQ, ATTRIBUTE_VALUE),
      bare: ATTRIBUTE_NAME,
    },
    {
      valued: ([name, , value]) => {
        return ok(valuedAttr({ name, value }, range(name, value)));
      },
      bare: value => ok(attrName(value.span)),
    }
  )
);

export const ATTRIBUTES: CombinatorType<AttributeToken[]> = combinator(() =>
  map(
    seq(
      "ATTRIBUTES",
      WS,
      many(any("spaced attribute", WS, INTERPOLATE, ATTRIBUTE))
    ),
    ([ws, attrs]) => {
      return ok([ws, ...attrs]);
    }
  )
);

export const START_TAG = combinator(() =>
  map(
    seq(
      "START_TAG",
      tag("<"),
      TAG_OR_COMPONENT_NAME,
      maybe(ATTRIBUTES),
      maybe(tag("/")),
      tag(">")
    ),
    ([start, name, attrs, selfClosing, end]) => {
      return ok(
        startTag(
          {
            name,
            attrs: attrs || undefined,
            selfClosing: selfClosing ? true : undefined,
          },
          range(start, end)
        )
      );
    }
  )
);

export const END_TAG = combinator(() =>
  map(
    seq("END_TAG", tag("</"), TAG_OR_COMPONENT_NAME, maybe(WS), tag(">")),
    ([start, name, trailing, end]) => {
      return ok(endTag({ name, trailing }, range(start, end)));
    }
  )
);

export const COMMENT = combinator(() =>
  map(
    seq(
      "COMMENT",
      tag("<!--"),
      pattern(/^.*(?=[-][-][>])/u, "comment body"),
      tag("-->")
    ),
    ([start, data, end]) => {
      return ok(comment(data.span, range(start, end)));
    }
  )
);
