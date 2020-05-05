/**
 * Steps for creating a new token type:
 *
 * 1. add a variant to TokenType
 * 2. create an interface {Name}Token
 * 3. add the new token to LeafTokenMap or TokenMap
 * 4. update serializeNode to serialize the new token
 * 5. add a function to construct the new token (unless it's always nested
 *    inside another token like `BlockParams`)
 * 6. update token-builder.ts to support building the new token
 */
export declare const enum TokenType {
    Root = "Root",
    UntrustedInterpolate = "Interpolate",
    TrustedInterpolate = "TrustedInterpolate",
    Block = "Block",
    BlockParams = "BlockParams",
    OpenBlock = "OpenBlock",
    CloseBlock = "CloseBlock",
    Sexp = "Sexp",
    Identifier = "Identifier",
    Argument = "Argument",
    Dot = "Dot",
    Eq = "Eq",
    WS = "WS",
    String = "String",
    Number = "Number",
    Text = "Text",
    Comment = "Comment",
    StartTag = "StartTag",
    EndTag = "EndTag",
    ArgName = "ArgName",
    AttributeName = "AttributeName",
    AttributeValue = "AttributeValue",
    ValuedAttribute = "ValuedAttribute",
    StringInterpolation = "StringInterpolation"
}
//# sourceMappingURL=token-enum.d.ts.map