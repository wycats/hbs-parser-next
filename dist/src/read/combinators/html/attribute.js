import { ok } from "../../../snippet";
import { range } from "../../../span";
import { combinator } from "../../combinator";
import { any, pattern, pick, seq, tag } from "../../combinators";
import { EQ, INTERPOLATE, WS } from "../../hbs";
import { many } from "../../multi";
import { argName, attrName, attrValue, stringInterpolation, text, valuedAttr, } from "../../tokens";
import { map } from "../../utils";
import { AbstractCombinator } from "../base";
export default class HTMLAttribute extends AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        return input.invoke(pick({
            valued: seq("valued attribute", ANY_ATTR_NAME, EQ, ATTRIBUTE_VALUE),
            bare: ATTRIBUTE_NAME,
        }, {
            valued: ([name, , value]) => {
                return ok(valuedAttr({ name, value }, range(name, value)));
            },
            bare: value => ok(attrName(value.span)),
        }));
    }
}
export const ATTRIBUTE = new HTMLAttribute();
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
export const ATTRIBUTE_NAME = pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME").map(name => ok(attrName(name.span)));
export const ARG_NAME = seq("ARG_NAME", tag("@"), ATTRIBUTE_NAME).map(([at, attr]) => ok(argName(attr.span, range(at.span, attr.span))));
export const ANY_ATTR_NAME = any("ANY_ATTR_NAME", ARG_NAME, ATTRIBUTE_NAME);
export const DQ_STRING_INTERPOLATE = combinator(() => any("DQ_STRING_INTERPOLATE", INTERPOLATE, pattern(/^[^"]+/, `dq text`).map(value => ok(text(value.span)))));
export const SQ_STRING_INTERPOLATE = combinator(() => any("SQ_STRING_INTERPOLATE", INTERPOLATE, pattern(/^[^']+/, `sq text`).map(value => ok(text(value.span)))));
// tslint:disable-next-line:max-classes-per-file
export class StringInterpolation extends AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
        this.name = "STRING_INTERPOLATION";
    }
    invoke(input) {
        return input.invoke(map(many(this.combinator), value => ok(stringInterpolation(value, range(...value)))));
    }
}
export const ATTRIBUTE_VALUE = combinator(() => pick({
    interpolate: INTERPOLATE,
    dq: seq("dq", tag(`"`), new StringInterpolation(DQ_STRING_INTERPOLATE), tag(`"`)),
    sq: seq("sq", tag(`'`), new StringInterpolation(SQ_STRING_INTERPOLATE), tag(`'`)),
    unquoted: pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, `unquoted contents`),
}, {
    interpolate: interpolate => ok(attrValue({ type: AttributeValueType.Interpolate, value: interpolate }, interpolate.span)),
    dq: ([open, value, close]) => ok(attrValue({
        type: AttributeValueType.DoubleQuoted,
        value,
    }, range(open, close))),
    sq: ([open, value, close]) => ok(attrValue({
        type: AttributeValueType.SingleQuoted,
        value,
    }, range(open, close))),
    unquoted: value => ok(attrValue({
        type: AttributeValueType.Unquoted,
        value: stringInterpolation([text(value.span)], value.span),
    }, value.span)),
}));
export const ATTRIBUTES = combinator(() => map(seq("ATTRIBUTES", WS, many(any("spaced attribute", WS, INTERPOLATE, ATTRIBUTE))), ([ws, attrs]) => {
    return ok([ws, ...attrs]);
}));
