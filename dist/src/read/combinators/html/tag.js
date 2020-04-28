import { combinator } from "../../combinator";
import { id } from "../../tokens";
import { pattern, any } from "../../combinators";
import { map } from "../../utils";
import { ok } from "../../../snippet";
import { SIMPLE_PATH } from "../../hbs";
// https://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html#tag-name-state
export const TAG_NAME = combinator(() => pattern(/^[A-Za-z][^/>\0\s]+/u, "TAG_NAME"));
export const TAG_NAME_TOKEN = combinator(() => map(TAG_NAME, snippet => ok([id(snippet.span)])));
export const TAG_OR_COMPONENT_NAME = combinator(() => any("tag or component name", SIMPLE_PATH, TAG_NAME_TOKEN));
