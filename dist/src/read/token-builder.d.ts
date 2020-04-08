import * as tokens from "./tokens";
import { SourceSpan } from "../span";
export declare type CurriedToken<T extends tokens.Token = tokens.Token> = (builder: TokenBuilder) => T;
export declare type CurriedAttributeToken = (builder: TokenBuilder) => tokens.AttributeToken;
export declare type CurriedPresentTokens = [CurriedToken, ...CurriedToken[]];
export declare function buildPresentTokens(tok: CurriedPresentTokens, builder: TokenBuilder): tokens.PresentTokens;
export declare function str(name: string): CurriedToken;
export declare function int(num: string): CurriedToken;
export declare function decimal(num: string): CurriedToken;
export declare function id(name: string): CurriedToken;
export declare function arg(name: string): CurriedToken;
export declare const dot: CurriedToken;
export declare const eq: CurriedToken;
export declare const sp: CurriedAttributeToken;
export declare function ws(space: string): CurriedAttributeToken;
export interface BlockOptions {
    open: {
        name: string | CurriedPresentTokens;
        head: CurriedToken[];
    };
}
export declare function block({ open }: BlockOptions, ...body: CurriedToken[]): CurriedToken<tokens.BlockToken>;
export declare function interpolate(children: CurriedToken[]): CurriedToken<tokens.InterpolateToken>;
export declare function stringInterpolate(children: Array<CurriedToken<tokens.StringInterpolationPart>>, quote: `"` | `'`): CurriedToken<tokens.AttributeValueToken>;
export declare function attrInterpolate(...tokenList: CurriedToken[]): CurriedToken<tokens.AttributeValueToken>;
export declare function sexp(children: CurriedToken[]): CurriedToken;
export declare function text(chars: string): CurriedToken<tokens.TextToken>;
export declare function comment(chars: string): CurriedToken;
export declare type TagName = string | CurriedToken | [string, ...string[]] | [CurriedToken, ...CurriedToken[]];
export declare function startTag(options: TagName | {
    name: TagName;
    attrs: CurriedAttributeToken[];
    selfClosing?: true;
}): CurriedToken;
export declare function endTag(options: TagName | {
    name: TagName;
    trailing: string;
}): CurriedToken;
export declare function argName(name: string): CurriedToken<tokens.ArgNameToken>;
export declare function attr(options: string | CurriedToken<tokens.AnyAttrNameToken> | {
    name: string | CurriedToken<tokens.AttributeNameToken> | CurriedToken<tokens.ArgNameToken>;
    value: string | CurriedToken<tokens.AttributeValueToken>;
    arg?: true;
}): CurriedAttributeToken;
export declare function root(children: CurriedToken[]): {
    root: tokens.RootToken;
    source: string;
};
declare class TokenBuilder {
    pos: number;
    private output;
    constructor(pos?: number);
    consume(chars: string): SourceSpan;
    get source(): string;
}
export {};
//# sourceMappingURL=token-builder.d.ts.map