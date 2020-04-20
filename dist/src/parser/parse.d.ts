import type * as tokens from "../read/tokens";
import * as ast from "./nodes";
import { Result } from "./shape";
import { LoggingType } from "../read/read";
export interface ParseOptions {
    input: tokens.RootToken;
    source: string;
    logging: LoggingType;
}
export default function parse({ input, source, logging, }: ParseOptions): Result<ast.RootNode>;
//# sourceMappingURL=parse.d.ts.map