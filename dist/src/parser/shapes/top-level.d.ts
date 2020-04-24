import type * as ast from "../nodes";
export declare type TopLevelNode = ast.TextNode | ast.InterpolateNode;
export declare const TopLevelArrow: import("../shape").ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.TextNode | ast.InterpolateNode> & import("../shape").ParseOk<ast.TextNode | ast.InterpolateNode>)>;
//# sourceMappingURL=top-level.d.ts.map