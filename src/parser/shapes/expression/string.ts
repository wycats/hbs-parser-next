import { TokenType } from "../../../read/token-enum";
import { source, token } from "../../shape";
import { string } from "../../create-node";

export const StringArrow = token(TokenType.String)
  .named("token")
  .extend("source", source())
  .ifOk(({ token, source }) => string(token, source))
  .label("String");
