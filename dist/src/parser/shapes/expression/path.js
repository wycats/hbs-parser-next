import "../../../read/tokens";
import { range } from "../../../span";
import * as ast from "../../nodes";
import { ParserArrow } from "../../shape";
import { anyArrow } from "../internal/any";
import { ArgRefArrow } from "./args-ref";
import { SexpArrow } from "./sexp";
import { VarRefArrow } from "./var-ref";
export const PathMemberArrow = ParserArrow.start()
    .token("Dot" /* Dot */)
    .named("dot")
    .extend("id", ParserArrow.start().token("Identifier" /* Identifier */))
    .ifOk(({ dot, id }) => ast.member(dot, id.span))
    .atomic()
    .label("PathMember");
export const PathHeadArrow = anyArrow([
    SexpArrow,
    ArgRefArrow,
    VarRefArrow,
]).label("PathHead");
export const PathArrow = PathHeadArrow.named("head")
    .extend("tail", PathMemberArrow.repeat().fallible())
    .ifOk(({ head, tail }) => tail.length === 0 ? head : ast.path({ head, tail }, range(head, ...tail)))
    .label("Path");
