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
  AttributeValueType,
  comment,
  id,
  PresentTokens,
  stringInterpolation,
  StringInterpolationPart,
  StringInterpolationToken,
  ArgNameToken,
  argName
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
import { map, present } from "./utils";
import { range } from "../span";
import { WS, EQ, token, SIMPLE_PATH, INTERPOLATE } from "./hbs";
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
export const TAG_NAME = pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME");

export const TAG_NAME_TOKEN: Combinator<PresentTokens> = map(
  TAG_NAME,
  snippet => ok([id(snippet.span)])
);

export const TAG_OR_COMPONENT_NAME = any(
  "tag or component name",
  SIMPLE_PATH,
  TAG_NAME_TOKEN
);

// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
export const ATTRIBUTE_NAME: Combinator<AttributeNameToken> = map(
  pattern(
    /^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u,
    "ATTRIBUTE_NAME"
  ),
  name => ok(attrName(name.span))
);

export const ARG_NAME: Combinator<ArgNameToken> = map(
  seq("ARG_NAME", tag("@"), ATTRIBUTE_NAME),
  ([at, attr]) => ok(argName(attr.span, range(at.span, attr.span)))
);

export const ANY_ATTR_NAME = any("ANY_ATTR_NAME", ARG_NAME, ATTRIBUTE_NAME);

export const DQ_STRING_INTERPOLATE = any(
  "DQ_STRING_INTERPOLATE",
  INTERPOLATE,
  map(pattern(/^[^"]+/, `dq text`), value => ok(text(value.span)))
);

export const SQ_STRING_INTERPOLATE = any(
  "SQ_STRING_INTERPOLATE",
  INTERPOLATE,
  map(pattern(/^[^']+/, `sq text`), value => ok(text(value.span)))
);

export function STRING_INTERPOLATION(
  combinator: Combinator<StringInterpolationPart>
): Combinator<StringInterpolationToken> {
  return {
    name: "STRING_INTERPOLATION",
    invoke(input) {
      return input.invoke(
        map(many(combinator), value =>
          ok(stringInterpolation(value, range(...value)))
        ),
        input
      );
    }
  };
}

export const ATTRIBUTE_VALUE: Combinator<AttributeValueToken> = pick(
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
    )
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
            value
          },
          range(open, close)
        )
      ),
    sq: ([open, value, close]) =>
      ok(
        attrValue(
          {
            type: AttributeValueType.SingleQuoted,
            value
          },
          range(open, close)
        )
      ),
    unquoted: value =>
      ok(
        attrValue(
          {
            type: AttributeValueType.Unquoted,
            value: stringInterpolation([text(value.span)], value.span)
          },
          value.span
        )
      )
  }
);

export const ATTRIBUTE = pick(
  {
    valued: seq("valued attribute", ANY_ATTR_NAME, EQ, ATTRIBUTE_VALUE),
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
  seq(
    "ATTRIBUTES",
    WS,
    many(any("spaced attribute", WS, INTERPOLATE, ATTRIBUTE))
  ),
  ([ws, attrs]) => {
    return ok([ws, ...attrs]);
  }
);

export const START_TAG = map(
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
          selfClosing: selfClosing ? true : undefined
        },
        range(start, end)
      )
    );
  }
);

export const END_TAG = map(
  seq("END_TAG", tag("</"), TAG_OR_COMPONENT_NAME, maybe(WS), tag(">")),
  ([start, name, trailing, end]) => {
    return ok(endTag({ name, trailing }, range(start, end)));
  }
);

export const COMMENT = map(
  seq(
    "COMMENT",
    tag("<!--"),
    pattern(/^.*(?=[-][-][>])/u, "comment body"),
    tag("-->")
  ),
  ([start, data, end]) => {
    return ok(comment(data.span, range(start, end)));
  }
);
