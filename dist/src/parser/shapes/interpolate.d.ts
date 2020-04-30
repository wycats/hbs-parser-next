import * as ast from "../nodes";
import { ParserArrow } from "../shape";
export declare const HeadArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<never> & import("../shape").ParseOk<never>)>;
export declare const InterpolateArrow: ParserArrow<void, (import("../shape").Err & import("../shape").ParseErr) | (import("../shape").Ok<ast.InterpolateNode> & import("../shape").ParseOk<ast.InterpolateNode>)>;
//# sourceMappingURL=interpolate.d.ts.map