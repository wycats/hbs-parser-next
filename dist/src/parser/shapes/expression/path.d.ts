import * as ast from "../../nodes";
import type { ArgReferenceNode, CallNode, PathNode, ThisReferenceNode, VarReferenceNode } from "../../nodes/expression";
export declare type PathOutput = PathNode | PathHeadOutput;
export declare type PathHeadOutput = CallNode | ArgReferenceNode | VarReferenceNode | ThisReferenceNode;
export declare const PathMemberShape: import("../abstract").ShapeConstructor<import("../../shape").Result<ast.MemberNode>>;
export declare const PathHeadShape: import("../abstract").ShapeConstructor<import("../../shape").Result<PathHeadOutput>>;
export declare const PathShape: import("../abstract").ShapeConstructor<import("../../shape").Result<ast.CallNode | ast.PathNode | ast.ThisReferenceNode | ast.VarReferenceNode | ast.ArgReferenceNode>>;
//# sourceMappingURL=path.d.ts.map