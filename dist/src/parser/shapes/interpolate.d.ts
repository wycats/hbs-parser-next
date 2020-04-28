import * as ast from "../nodes";
import { ParserArrow } from "../shape";
export declare const HeadArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.CallNode | ast.PathNode | ast.StringNode | ast.NumberNode | ast.ThisReferenceNode | ast.VarReferenceNode | ast.ArgReferenceNode> & import("../shape").ParseOk<ast.CallNode | ast.PathNode | ast.StringNode | ast.NumberNode | ast.ThisReferenceNode | ast.VarReferenceNode | ast.ArgReferenceNode>)>;
export declare const InterpolateArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.InterpolateNode> & import("../shape").ParseOk<ast.InterpolateNode>)>;
//# sourceMappingURL=interpolate.d.ts.map