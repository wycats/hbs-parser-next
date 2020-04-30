import "../../../read/tokens";
import { ParserArrow } from "../../shape";
import { argReference } from "../../create-node";
export const ArgRefArrow = ParserArrow.start()
    .token("Argument" /* Argument */)
    .ifOk(ref => argReference(ref))
    .label("ArgRef");
