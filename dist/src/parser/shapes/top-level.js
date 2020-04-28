import { anyArrow } from "./internal/any";
import { InterpolateArrow } from "./interpolate";
import { TextArrow } from "./text";
export const TopLevelArrow = anyArrow([TextArrow, InterpolateArrow]).label("TopLevel");
