import { ParserArrow } from "../../shape";
export declare const MaybeWsArrow: ParserArrow<void, import("../../../read/tokens").WSToken | undefined>;
export declare const WsArrow: ParserArrow<void, (import("../../shape").Err & import("../../shape").ParseErr) | (import("../../shape").Ok<import("../../../read/tokens").WSToken> & import("../../shape").ParseOk<import("../../../read/tokens").WSToken>)>;
//# sourceMappingURL=ws.d.ts.map