import type { Result, Shape, ShapeResult } from "../../shape";
import { ShapeConstructor } from "../abstract";
export declare function maybe<T extends Shape<Result<unknown>>>(input: T): ShapeConstructor<ShapeResult<T> | null>;
//# sourceMappingURL=maybe.d.ts.map