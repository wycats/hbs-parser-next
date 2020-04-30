import type * as ast from "../../node-types";
import { ArgReferenceNode, CallNode, PathNode, ThisReferenceNode, VarReferenceNode } from "../../nodes/expression";
import { ParserArrow, ParseResult } from "../../shape";
export declare type PathOutput = PathNode | PathHeadOutput;
export declare type PathHeadOutput = CallNode | ArgReferenceNode | VarReferenceNode | ThisReferenceNode;
export declare const ExpressionArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<never> & import("../../shape").ParseOk<never>)>;
export declare const HeadArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<never> & import("../../shape").ParseOk<never>)>;
export declare const PositionalArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.PositionalArgumentsNode> & import("../../shape").ParseOk<ast.PositionalArgumentsNode>)>;
export declare const NamedArgumentArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.NamedArgumentNode> & import("../../shape").ParseOk<ast.NamedArgumentNode>)>;
export declare const CallBodyArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.CallBodyNode> & import("../../shape").ParseOk<ast.CallBodyNode>)>;
export declare const SexpArrow: ParserArrow<void, ParseResult<ast.CallNode>>;
export declare const PathMemberArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.MemberNode> & import("../../shape").ParseOk<ast.MemberNode>)>;
export declare const PathHeadArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<never> & import("../../shape").ParseOk<never>)>;
export declare const PathArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.PathNode> & import("../../shape").ParseOk<ast.PathNode>)>;
export declare const NamedArgumentsArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.NamedArgumentsNode> & import("../../shape").ParseOk<ast.NamedArgumentsNode>)>;
//# sourceMappingURL=path.d.ts.map