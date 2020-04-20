import * as tokens from "./tokens";
import { SourceSpan } from "../span";
export declare type CurriedOptionalToken<T extends tokens.Token = tokens.Token> = (builder: TokenBuilder) => T | null;
export declare type CurriedToken<T extends tokens.Token = tokens.Token> = (builder: TokenBuilder) => T;
export declare type CurriedAttributeToken = (builder: TokenBuilder) => tokens.AttributeToken;
export declare type CurriedPresentTokens = [CurriedToken, ...CurriedToken[]];
export declare function buildPresentTokens(tok: CurriedPresentTokens, builder: TokenBuilder): tokens.PresentTokens;
export declare function str(name: string): CurriedToken<tokens.StringToken>;
export declare function int(num: string): CurriedToken<tokens.NumberToken>;
export declare function decimal(num: string): CurriedToken<tokens.NumberToken>;
export declare function id(name: string): CurriedToken<tokens.IdentifierToken>;
export declare function arg(name: string): CurriedToken<tokens.ArgumentToken>;
export declare const dot: CurriedToken<tokens.DotToken>;
export declare const eq: CurriedToken<tokens.EqToken>;
export declare const sp: CurriedToken<tokens.WSToken>;
export declare function ws(space: string): CurriedToken<tokens.WSToken>;
export declare function block(name: string | CurriedPresentTokens, head: CurriedToken[], ...body: CurriedToken[]): CurriedToken<tokens.BlockToken>;
export declare function as(...params: Array<string | CurriedToken<tokens.BlockParamToken>>): CurriedToken<tokens.BlockParamsToken>;
export declare function interpolate(...children: CurriedToken[]): CurriedToken<tokens.InterpolateToken>;
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
export declare class TokenBuilder {
    pos: number;
    private output;
    constructor(pos?: number);
    consume(chars: string): SourceSpan;
    /**
     * This method is used by the AstBuilder to share an output
     */
    updateOutput(output: string): void;
    get source(): string;
}
export declare function root(...children: CurriedToken[]): {
    root: tokens.RootToken;
    source: string;
};
//# sourceMappingURL=token-builder.d.ts.map