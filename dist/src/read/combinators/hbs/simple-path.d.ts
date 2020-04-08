import { Result, Snippet } from "../../../snippet";
import { AbstractCombinator } from "../base";
import type { PresentTokens } from "../../tokens";
export default class SimplePath extends AbstractCombinator<PresentTokens> {
    readonly name = "PATH";
    invoke(input: Snippet): Result<[Snippet, PresentTokens]>;
}
export declare const SIMPLE_HEAD: import("../any").default<[import("../../tokens").UntrustedInterpolateToken | import("../../tokens").TrustedInterpolateToken | import("../../tokens").BlockToken | import("../../tokens").BlockParamsToken | import("../../tokens").OpenBlockToken | import("../../tokens").CloseBlockToken | import("../../tokens").SexpToken | import("../../tokens").IdentifierToken | import("../../tokens").ArgumentToken | import("../../tokens").DotToken | import("../../tokens").EqToken | import("../../tokens").WSToken | import("../../tokens").StringToken | import("../../tokens").NumberToken | import("../../tokens").TextToken | import("../../tokens").CommentToken | import("../../tokens").StartTagToken | import("../../tokens").EndTagToken | import("../../tokens").ArgNameToken | import("../../tokens").AttributeNameToken | import("../../tokens").StringAttributeValueToken | import("../../tokens").InterpolateAttributeValueToken | import("../../tokens").ValuedAttributeToken | import("../../tokens").StringInterpolationToken, import("../../tokens").IdentifierToken]>;
export declare const MEMBER: import("./token").default<import("../../tokens").TokenType.Identifier>;
//# sourceMappingURL=simple-path.d.ts.map