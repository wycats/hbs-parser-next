import "../../../read/token-enum";
import { range } from "../../../span";
import { member, call, path, } from "../../nodes/expression";
import { ParserArrow, recurse, parseErr, parseOk, } from "../../shape";
import { anyArrow } from "../internal/any";
import { ArgRefArrow } from "./args-ref";
import { VarRefArrow } from "./var-ref";
import { StringArrow } from "./string";
import { NumberArrow } from "./number";
import { WsArrow, MaybeWsArrow } from "../internal/ws";
import { extendNode, positional, namedArg, callBody, namedArgs, } from "../../create-node";
export const ExpressionArrow = recurse(() => anyArrow([SexpArrow, StringArrow, NumberArrow, PathArrow]).label("Expression"));
export const HeadArrow = recurse(() => ExpressionArrow.label("Head"));
export const PositionalArrow = recurse(() => WsArrow.named("before")
    .extend("expr", ExpressionArrow)
    .ifOk(({ before, expr }) => extendNode(expr, { before }))
    .atomic()
    .repeat()
    .andThen(assertPresent())
    .ifOk(out => positional(out, { span: range(...out) }))
    .label("Positional"));
export const NamedArgumentArrow = recurse(() => ParserArrow.start()
    .token("Identifier" /* Identifier */)
    .named("id")
    .extend("eq", ParserArrow.start().token("Eq" /* Eq */))
    .extend("expr", ExpressionArrow)
    .extend("trailingWS", MaybeWsArrow.fallible())
    .ifOk(({ id, expr, trailingWS }) => namedArg({ name: id, value: expr }, {
    span: range(id, expr),
    after: trailingWS || undefined,
}))
    .label("NamedArgument"));
export const CallBodyArrow = recurse(() => MaybeWsArrow.fallible()
    .named("before")
    .extend("head", HeadArrow)
    .extend("positional", PositionalArrow.or(null).fallible())
    .extend("named", NamedArgumentsArrow.or(null).fallible())
    .extend("after", MaybeWsArrow.fallible())
    .ifOk(({ before, after, head, positional, named }) => callBody({ head, positional, named }, {
    span: range(head, positional, named),
    before,
    after,
}))
    .label("CallBody"));
export const SexpArrow = ParserArrow.start()
    .parent("sexp", "Sexp" /* Sexp */, CallBodyArrow)
    .ifOk(({ result, token }) => call(result, { span: token.span }))
    .label("Sexp");
export const PathMemberArrow = ParserArrow.start()
    .token("Dot" /* Dot */)
    .named("dot")
    .extend("id", ParserArrow.start().token("Identifier" /* Identifier */))
    .ifOk(({ dot, id }) => member(dot, id.span))
    .atomic()
    .label("PathMember");
export const PathHeadArrow = anyArrow([
    SexpArrow,
    ArgRefArrow,
    VarRefArrow,
]).label("PathHead");
export const PathArrow = PathHeadArrow.named("head")
    .extend("tail", PathMemberArrow.repeat().fallible())
    .ifOk(({ head, tail }) => tail.length === 0 ? head : path({ head, tail }, range(head, ...tail)))
    .label("Path");
function assertPresent() {
    return ParserArrow.start().lift(list => list.length > 0 ? parseOk(list) : parseErr("unknown", { type: "empty" }));
}
export const NamedArgumentsArrow = WsArrow.named("leadingWS")
    .extend("args", NamedArgumentArrow.repeat().andThen(assertPresent()))
    .atomic()
    .ifOk(({ leadingWS, args }) => namedArgs(args, { span: range(...args), before: leadingWS }))
    .label("NamedArguments");
