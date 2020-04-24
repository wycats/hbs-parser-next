import * as ast from "../../nodes";
import { ParserArrow } from "../../shape";
export declare const PositionalArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.PositionalArgumentsNode> & import("../../shape").ParseOk<ast.PositionalArgumentsNode>)>;
export declare const NamedArgumentArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.NamedArgumentNode> & import("../../shape").ParseOk<ast.NamedArgumentNode>)>;
export declare const NamedArgumentsArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.NamedArgumentsNode> & import("../../shape").ParseOk<ast.NamedArgumentsNode>)>;
export declare const CallBodyArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<ast.CallBodyNode> & import("../../shape").ParseOk<ast.CallBodyNode>)>;
//# sourceMappingURL=call-body.d.ts.map