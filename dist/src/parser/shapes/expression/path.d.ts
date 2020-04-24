import * as ast from "../../nodes";
import type { ArgReferenceNode, CallNode, PathNode, ThisReferenceNode, VarReferenceNode } from "../../nodes/expression";
import { ParserArrow } from "../../shape";
export declare type PathOutput = PathNode | PathHeadOutput;
export declare type PathHeadOutput = CallNode | ArgReferenceNode | VarReferenceNode | ThisReferenceNode;
export declare const PathMemberArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.MemberNode> & import("../../shape").ParseOk<ast.MemberNode>)>;
export declare const PathHeadArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.CallNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode> & import("../../shape").ParseOk<ast.CallNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode>)>;
export declare const PathArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.CallNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode | ast.PathNode> & import("../../shape").ParseOk<ast.CallNode | ast.ArgReferenceNode | ast.VarReferenceNode | ast.ThisReferenceNode | ast.PathNode>)>;
//# sourceMappingURL=path.d.ts.map