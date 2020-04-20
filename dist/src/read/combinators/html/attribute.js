"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATTRIBUTES = exports.ATTRIBUTE_VALUE = exports.StringInterpolation = exports.SQ_STRING_INTERPOLATE = exports.DQ_STRING_INTERPOLATE = exports.ANY_ATTR_NAME = exports.ARG_NAME = exports.ATTRIBUTE_NAME = exports.ATTRIBUTE = void 0;
const snippet_1 = require("../../../snippet");
const span_1 = require("../../../span");
const combinator_1 = require("../../combinator");
const combinators_1 = require("../../combinators");
const hbs_1 = require("../../hbs");
const multi_1 = require("../../multi");
const tokens_1 = require("../../tokens");
const utils_1 = require("../../utils");
const base_1 = require("../base");
class HTMLAttribute extends base_1.AbstractCombinator {
    constructor() {
        super(...arguments);
        this.name = "TEXT";
    }
    invoke(input) {
        return input.invoke(combinators_1.pick({
            valued: combinators_1.seq("valued attribute", exports.ANY_ATTR_NAME, hbs_1.EQ, exports.ATTRIBUTE_VALUE),
            bare: exports.ATTRIBUTE_NAME,
        }, {
            valued: ([name, , value]) => {
                return snippet_1.ok(tokens_1.valuedAttr({ name, value }, span_1.range(name, value)));
            },
            bare: value => snippet_1.ok(tokens_1.attrName(value.span)),
        }));
    }
}
exports.default = HTMLAttribute;
exports.ATTRIBUTE = new HTMLAttribute();
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#before-attribute-name-state
exports.ATTRIBUTE_NAME = combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020/>\u0000"'<=].*?(?=[\u0009\u000A\u000C\u0020/=>\u0000"'<])/u, "ATTRIBUTE_NAME").map(name => snippet_1.ok(tokens_1.attrName(name.span)));
exports.ARG_NAME = combinators_1.seq("ARG_NAME", combinators_1.tag("@"), exports.ATTRIBUTE_NAME).map(([at, attr]) => snippet_1.ok(tokens_1.argName(attr.span, span_1.range(at.span, attr.span))));
exports.ANY_ATTR_NAME = combinators_1.any("ANY_ATTR_NAME", exports.ARG_NAME, exports.ATTRIBUTE_NAME);
exports.DQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("DQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, combinators_1.pattern(/^[^"]+/, `dq text`).map(value => snippet_1.ok(tokens_1.text(value.span)))));
exports.SQ_STRING_INTERPOLATE = combinator_1.combinator(() => combinators_1.any("SQ_STRING_INTERPOLATE", hbs_1.INTERPOLATE, combinators_1.pattern(/^[^']+/, `sq text`).map(value => snippet_1.ok(tokens_1.text(value.span)))));
// tslint:disable-next-line:max-classes-per-file
class StringInterpolation extends base_1.AbstractCombinator {
    constructor(combinator) {
        super();
        this.combinator = combinator;
        this.name = "STRING_INTERPOLATION";
    }
    invoke(input) {
        return input.invoke(utils_1.map(multi_1.many(this.combinator), value => snippet_1.ok(tokens_1.stringInterpolation(value, span_1.range(...value)))));
    }
}
exports.StringInterpolation = StringInterpolation;
exports.ATTRIBUTE_VALUE = combinator_1.combinator(() => combinators_1.pick({
    interpolate: hbs_1.INTERPOLATE,
    dq: combinators_1.seq("dq", combinators_1.tag(`"`), new StringInterpolation(exports.DQ_STRING_INTERPOLATE), combinators_1.tag(`"`)),
    sq: combinators_1.seq("sq", combinators_1.tag(`'`), new StringInterpolation(exports.SQ_STRING_INTERPOLATE), combinators_1.tag(`'`)),
    unquoted: combinators_1.pattern(/^[^\u0009\u000A\u000C\u0020>\0"'<=`]+/u, `unquoted contents`),
}, {
    interpolate: interpolate => snippet_1.ok(tokens_1.attrValue({ type: "Interpolate" /* Interpolate */, value: interpolate }, interpolate.span)),
    dq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "DoubleQuoted" /* DoubleQuoted */,
        value,
    }, span_1.range(open, close))),
    sq: ([open, value, close]) => snippet_1.ok(tokens_1.attrValue({
        type: "SingleQuoted" /* SingleQuoted */,
        value,
    }, span_1.range(open, close))),
    unquoted: value => snippet_1.ok(tokens_1.attrValue({
        type: "Unquoted" /* Unquoted */,
        value: tokens_1.stringInterpolation([tokens_1.text(value.span)], value.span),
    }, value.span)),
}));
exports.ATTRIBUTES = combinator_1.combinator(() => utils_1.map(combinators_1.seq("ATTRIBUTES", hbs_1.WS, multi_1.many(combinators_1.any("spaced attribute", hbs_1.WS, hbs_1.INTERPOLATE, exports.ATTRIBUTE))), ([ws, attrs]) => {
    return snippet_1.ok([ws, ...attrs]);
}));
