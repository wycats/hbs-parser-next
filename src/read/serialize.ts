import { RootToken, Token, TokenType } from "./tokens";
import { slice } from "../span";
import { unreachable } from "./utils";

export function serializeRoot(root: RootToken, source: string): string {
  let out = [];

  for (let token of root.children) {
    out.push(...serializeNode(token, source));
  }

  return out.join("");
}

export function serializeNode(token: Token, source: string): string[] {
  switch (token.type) {
    case TokenType.Dot:
      return ["."];
    case TokenType.Eq:
      return ["="];
    case TokenType.Argument:
      return ["@", slice(token.name, source)];
    case TokenType.Identifier:
    case TokenType.WS:
      return [slice(token.span, source)];
    case TokenType.Sexp:
      return ["(", ...serializeList(token.children, source), ")"];
    case TokenType.Interpolate:
      return ["{{", ...serializeList(token.children, source), "}}"];
    case TokenType.TrustedInterpolate:
      return ["{{{", ...serializeList(token.children, source), "}}}"];
    default:
      return unreachable(token);
  }
}

function serializeList(tokens: readonly Token[], source: string): string[] {
  return [...tokens.flatMap(child => serializeNode(child, source))];
}
