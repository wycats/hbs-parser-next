import * as ast from "../nodes";
import { ParserArrow } from "../shape";
export declare const HeadArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.CallNode | ast.StringNode | ast.NumberNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode | ast.PathNode> & import("../shape").ParseOk<ast.CallNode | ast.StringNode | ast.NumberNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode | ast.PathNode>)>;
export declare const InterpolateArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.InterpolateNode> & import("../shape").ParseOk<ast.InterpolateNode>)>;
//# sourceMappingURL=interpolate.d.ts.map