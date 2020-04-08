import { Result, Snippet } from "../../../snippet";
import { ArgNameToken, AttributeNameToken, AttributeToken, AttributeValueToken, StringInterpolationPart, StringInterpolationToken, ValuedAttributeToken } from "../../tokens";
import { AbstractCombinator } from "../base";
import type { CombinatorType } from "../types";
export default class HTMLAttribute extends AbstractCombinator<AttributeNameToken | ValuedAttributeToken> {
    readonly name = "TEXT";
    invoke(input: Snippet): Result<[Snippet, AttributeNameToken | ValuedAttributeToken]>;
}
export declare const ATTRIBUTE: HTMLAttribute;
export declare const ATTRIBUTE_NAME: CombinatorType<AttributeNameToken>;
export declare const ARG_NAME: CombinatorType<ArgNameToken>;
export declare const ANY_ATTR_NAME: import("../any").default<[ArgNameToken, AttributeNameToken]>;
export declare const DQ_STRING_INTERPOLATE: import("../any").default<[import("../../tokens").InterpolateToken, import("../../tokens").TextToken]>;
export declare const SQ_STRING_INTERPOLATE: import("../any").default<[import("../../tokens").InterpolateToken, import("../../tokens").TextToken]>;
export declare class StringInterpolation extends AbstractCombinator<StringInterpolationToken> {
    private combinator;
    readonly name = "STRING_INTERPOLATION";
    constructor(combinator: CombinatorType<StringInterpolationPart>);
    invoke(input: Snippet): Result<[Snippet, StringInterpolationToken]>;
}
export declare const ATTRIBUTE_VALUE: CombinatorType<AttributeValueToken>;
export declare const ATTRIBUTES: CombinatorType<AttributeToken[]>;
//# sourceMappingURL=attribute.d.ts.map