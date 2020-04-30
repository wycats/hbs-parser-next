import {
  RootToken,
  Token,
  AttributeValueType,
  AttributeValueToken,
  isInterpolateAttribute,
  QuoteType,
} from "./tokens";
import { TokenType } from "./token-enum";
import { slice } from "../span";
import { unreachable } from "./utils";

export function serializeRoot(root: RootToken, source: string): string {
  let out = [];

  for (let token of root.children) {
    out.push(...serializeNode(token, source));
  }

  return out.join("");
}

export function serializeNode(token: Token | null, source: string): string[] {
  if (token === null) {
    return [""];
  }

  switch (token.type) {
    // leaf tokens
    case TokenType.Dot:
    case TokenType.Eq:
    case TokenType.Identifier:
    case TokenType.WS:
    case TokenType.Text:
    case TokenType.AttributeName:
      return [slice(token.span, source)];
    case TokenType.String: {
      let quote = token.quote === QuoteType.Single ? `'` : `"`;
      return [quote, slice(token.data, source), quote];
    }
    case TokenType.Number: {
      let out = [];

      if (token.negative) {
        out.push(slice(token.negative, source));
      }

      out.push(slice(token.head, source));

      if (token.tail) {
        out.push(".", slice(token.tail, source));
      }

      return out;
    }
    case TokenType.ArgName:
      return ["@", slice(token.name, source)];
    case TokenType.AttributeValue:
      return serializeAttributeValue(token, source);
    case TokenType.Argument:
      return ["@", slice(token.name, source)];
    case TokenType.Sexp:
      return ["(", ...serializeList(token.children, source), ")"];
    case TokenType.UntrustedInterpolate:
      return ["{{", ...serializeList(token.children, source), "}}"];
    case TokenType.TrustedInterpolate:
      return ["{{{", ...serializeList(token.children, source), "}}}"];
    case TokenType.Block:
      return [
        ...serializeNode(token.open, source),
        ...serializeList(token.body, source),
        ...serializeNode(token.close, source),
      ];
    case TokenType.OpenBlock:
      return [
        "{{#",
        ...serializeList(token.name, source),
        ...serializeList(token.head, source),
        "}}",
      ];
    case TokenType.BlockParams:
      return ["as |", ...serializeList(token.params, source), "|"];
    case TokenType.CloseBlock:
      return ["{{/", ...serializeList(token.name, source), "}}"];
    case TokenType.Comment:
      return ["<!--", slice(token.data, source), "-->"];
    case TokenType.StartTag:
      return [
        "<",
        ...serializeList(token.name, source),
        ...serializeList(token.attributes, source),
        ">",
      ];
    case TokenType.EndTag:
      return [
        "</",
        ...serializeList(token.name, source),
        ...serializeNode(token.trailing, source),
        ">",
      ];
    case TokenType.ValuedAttribute:
      return [
        ...serializeNode(token.name, source),
        "=",
        ...serializeNode(token.value, source),
      ];
    case TokenType.StringInterpolation:
      return serializeList(token.parts, source);
    default:
      return unreachable(token);
  }
}

function serializeAttributeValue(
  token: AttributeValueToken,
  source: string
): string[] {
  if (isInterpolateAttribute(token)) {
    return serializeNode(token.value, source);
  }

  return [
    serializeQuote(token),
    ...serializeNode(token.value, source),
    serializeQuote(token),
  ];
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

function serializeList(
  tokens: readonly Token[] | null,
  source: string
): string[] {
  if (tokens === null) {
    return [];
  }

  return [...tokens.flatMap(child => serializeNode(child, source))];
}
