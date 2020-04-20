import type { Result, ShapeConstructorResult } from "../../shape";
import { ShapeConstructor } from "../abstract";
export declare function any<T extends Array<ShapeConstructor<Result<unknown>>>>(shapes: T, desc: string): ShapeConstructor<Result<ShapeConstructorResult<T[number]>>>;
//# sourceMappingURL=any.d.ts.map