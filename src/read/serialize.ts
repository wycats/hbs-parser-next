import {
  RootToken,
  Token,
  TokenType,
  AttributeValueType,
  ValuedAttributeToken,
  AttributeValueToken
} from "./tokens";
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
    // leaf tokens
    case TokenType.Dot:
    case TokenType.Eq:
    case TokenType.Identifier:
    case TokenType.WS:
    case TokenType.Text:
    case TokenType.AttributeName:
      return [slice(token.span, source)];
    case TokenType.AttributeValue:
      return [
        serializeQuote(token),
        slice(token.value, source),
        serializeQuote(token)
      ];
    case TokenType.Argument:
      return ["@", slice(token.name, source)];
    case TokenType.Sexp:
      return ["(", ...serializeList(token.children, source), ")"];
    case TokenType.Interpolate:
      return ["{{", ...serializeList(token.children, source), "}}"];
    case TokenType.TrustedInterpolate:
      return ["{{{", ...serializeList(token.children, source), "}}}"];
    case TokenType.StartTag:
      return [
        "<",
        slice(token.name, source),
        ...serializeList(token.attributes, source),
        ">"
      ];
    case TokenType.EndTag:
      return ["</", slice(token.name, source), ">"];
    case TokenType.ValuedAttribute:
      return [
        ...serializeNode(token.name, source),
        "=",
        ...serializeNode(token.value, source)
      ];
    default:
      return unreachable(token);
  }
}

function serializeQuote(token: AttributeValueToken): string {
  switch (token.valueType) {
    case AttributeValueType.SingleQuoted:
      return `'`;
    case AttributeValueType.DoubleQuoted:
      return `"`;
    default:
      return "";
  }
}

function serializeList(tokens: readonly Token[], source: string): string[] {
  return [...tokens.flatMap(child => serializeNode(child, source))];
}
