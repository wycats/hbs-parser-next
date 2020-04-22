import { TokenType } from "../../../read/tokens";
import * as ast from "../../nodes";
import { source, token } from "../../shape";

export const StringArrow = token(TokenType.String)
  .named("token")
  .extend("source", source())
  .ifOk(({ token, source }) => ast.string(token, source))
  .label("String");
