// eslint-disable-next-line import/no-duplicates
import type { AstNode } from "./node-types";
// eslint-disable-next-line import/no-duplicates
import type * as ast from "./node-types";
import * as a from "./create-node";
import * as b from "../read/token-builder";
import { span, SourceSpan, range } from "../span";
import { TokenBuilder, CurriedToken } from "../read/token-builder";
import type { Token, WSToken } from "../read/tokens";
import type {
  PositionalArgumentsNode,
  NamedArgumentsNode,
  NamedArgumentNode,
} from "./nodes/call";

/**
 * For the purpose of this DSL, an expression is:
 *
 * - the string `this` -> ThisReferenceNode
 * - `@` ID -> ArgumentReferenceNode
 * - ID -> VarReferenceNode
 * - the result of calling one of the builder methods
 *
 * A string containing literal whitespace is used to represent
 * a whitespace token containing the same whitespace.
 */

export type CurriedNode<N extends AstNode = AstNode> = (
  builder: AstBuilder
) => N;

export default class AstBuilder {
  private output = "";
  private tokenBuilder = new TokenBuilder();

  constructor(public pos = 0) {}

  consume(chars: string): SourceSpan {
    this.output += chars;
    let start = this.pos;
    this.pos += chars.length;
    return span(start, this.pos);
  }

  token<T extends Token>(token: CurriedToken<T>): T {
    this.tokenBuilder.pos = this.pos;
    this.tokenBuilder.updateOutput(this.output);
    let built = token(this.tokenBuilder);
    this.pos = this.tokenBuilder.pos;
    this.output = this.tokenBuilder.source;
    return built;
  }

  get source(): string {
    return this.output;
  }
}

export function text(chars: string): CurriedNode<ast.TextNode> {
  return builder => a.text(builder.token(b.text(chars)));
}

export type ExprInput = CurriedNode<ast.ExpressionAstNode> | string;

function normalizeExpr(
  expr: CurriedNode<ast.ExpressionAstNode> | string
): CurriedNode<ast.ExpressionAstNode> {
  if (typeof expr === "string") {
    return ref(expr);
  } else {
    return expr;
  }
}

function normalizeCallPart(
  part: ExprInput
):
  | { type: "expr"; value: CurriedNode<ast.ExpressionAstNode> }
  | { type: "ws"; value: string } {
  if (typeof part === "string" && part.match(/^\s+$/)) {
    return {
      type: "ws",
      value: part,
    };
  } else {
    return { type: "expr", value: normalizeExpr(part) };
  }
}

type NamedArgumentInput =
  | CurriedNode<ast.ExpressionAstNode>
  | string
  | [CurriedNode<ast.ExpressionAstNode> | string, string];

interface NamedArgumentsInput {
  [key: string]: NamedArgumentInput;
}

type CallPart =
  | string
  | NamedArgumentsInput
  | CurriedNode<ast.ExpressionAstNode>
  | Array<CurriedNode<ast.ExpressionAstNode> | string>;

export interface CallParts {
  beforeWS?: CurriedToken<WSToken>;
  afterWS?: CurriedToken<WSToken>;
  head: CurriedNode<ast.ExpressionAstNode>;
  positional?: CurriedNode<ast.PositionalArgumentsNode>;
  named?: CurriedNode<ast.NamedArgumentsNode>;
}

function extractCallParts(...parts: CallPart[]): CallParts {
  let head: CurriedNode<ast.ExpressionAstNode> | undefined;
  let beforeWS: CurriedToken<WSToken> | undefined;
  let afterWS: CurriedToken<WSToken> | undefined;
  let positional: CurriedNode<ast.PositionalArgumentsNode> | undefined;
  let named: CurriedNode<ast.NamedArgumentsNode> | undefined;

  for (const part of parts) {
    if (Array.isArray(part)) {
      if (positional) {
        throw new Error(
          `ASSERT: only pass one array (positional) to interpolate`
        );
      } else {
        positional = curriedPositional(...part);
      }
    } else if (typeof part === "object") {
      if (named) {
        throw new Error(`ASSERT: only pass one object (named) to interpolate`);
      } else {
        named = curriedNamed(part);
      }
    } else if (typeof part === "function") {
      if (head) {
        throw new Error(
          `ASSERT: only pass one head (expression or string) to interpolate`
        );
      } else {
        head = part as CurriedNode<ast.ExpressionAstNode>;
      }
    } else if (part.match(/^\s*$/)) {
      if (beforeWS && afterWS) {
        throw new Error(`ASSERT: pass at most two whitespace to interpolate`);
      } else if (beforeWS) {
        afterWS = b.ws(part);
      } else {
        beforeWS = b.ws(part);
      }
    } else {
      if (head) {
        throw new Error(
          `ASSERT: only pass one head (expression or string) to interpolate`
        );
      }

      head = ref(part);
    }
  }

  assert<CurriedNode<ast.ExpressionAstNode>>(head);

  return { beforeWS, head, positional, named, afterWS };
}

function curriedNamed(
  obj: NamedArgumentsInput
): CurriedNode<NamedArgumentsNode> {
  return builder => {
    let args: NamedArgumentNode[] = [];

    let leading = builder.token(b.ws(" "));

    for (let [key, value] of Object.entries(obj)) {
      let after: WSToken | undefined = undefined;
      let name = builder.token(b.id(key));
      let expr: ast.ExpressionAstNode | undefined;

      builder.token(b.eq);

      if (Array.isArray(value)) {
        expr = normalizeExpr(value[0])(builder);
        after = builder.token(b.ws(value[1]));
      } else {
        expr = normalizeExpr(value)(builder);
      }

      args.push(
        a.namedArg({ name, value: expr }, { span: range(name, expr), after })
      );
    }

    return a.namedArgs(args, { span: range(...args), before: leading });
  };
}

type PositionalPart = string | CurriedNode<ast.ExpressionAstNode>;

function curriedPositional(
  ...parts: Array<PositionalPart>
): CurriedNode<PositionalArgumentsNode> {
  return builder => {
    let args: ast.ExpressionAstNode[] = [];

    let [first, ...rest] = parts as [string, ...PositionalPart[]];

    let currentWS: WSToken | undefined = builder.token(b.ws(first));
    let start = builder.pos;

    for (let part of rest) {
      let result = normalizeCallPart(part);

      switch (result.type) {
        case "expr": {
          let node = normalizeExpr(part)(builder);

          if (currentWS) {
            node.before = currentWS;
            currentWS = undefined;
          }

          args.push(node);
          break;
        }
        case "ws":
          currentWS = builder.token(b.ws(result.value));
      }
    }

    let end = builder.pos;

    return a.positional(args, {
      span: span(start, end),
      ...(currentWS ? { after: currentWS } : {}),
    });
  };
}

export type BlockPart = CallPart;

export function block(parts: BlockPart[]): CurriedNode<ast.BlockNode> {
  let { head } = extractCallParts(...parts);
  let openBlock = callBody(...parts);

  return builder => {
    let openStart = builder.consume(`{{#`);
    let open = openBlock(builder);
    let openEnd = builder.consume("}}");
    let closeStart = builder.consume(`{{/`);
    let closeHead = head(builder);
    let closeEnd = builder.consume(`}}`);

    return a.block(
      {
        open: a.openBlock({ ...open }, { span: range(openStart, openEnd) }),
        body: [],
        close: a.closeBlock(closeHead.span, {
          span: range(closeStart, closeEnd),
        }),
      },
      { span: range(openStart, closeEnd) }
    );
  };
}

export function interpolate(
  ...parts: CallPart[]
): CurriedNode<ast.InterpolateNode> {
  return builder => {
    let start = builder.pos;
    builder.consume("{{");
    let body = callBody(...parts)(builder);
    builder.consume("}}");
    let end = builder.pos;

    return a.interpolate(body, { span: span(start, end) });
  };
}

function assert<T>(
  input: unknown,
  cb?: (input: unknown) => boolean
): asserts input is T {
  let success = typeof cb === "function" ? cb(input) : !!input;

  if (success === false) {
    throw new Error(`ASSERT`);
  }
}

export function call(...parts: CallPart[]): CurriedNode<ast.CallNode> {
  return builder => {
    let start = builder.pos;
    builder.consume("(");
    let body = callBody(...parts)(builder);
    builder.consume(")");
    let end = builder.pos;

    return a.call(body, { span: span(start, end) });
  };
}

function callBody(...parts: CallPart[]): CurriedNode<ast.CallBodyNode> {
  return builder => {
    let { beforeWS, afterWS, head, positional, named } = extractCallParts(
      ...parts
    );

    let before = beforeWS && builder.token(beforeWS);
    let headNode = head(builder);
    let positionalNodes = positional && positional(builder);
    let namedNode = named && named(builder);
    let after = afterWS && builder.token(afterWS);

    return a.callBody(
      {
        head: headNode,
        positional: positionalNodes,
        named: namedNode,
      },
      { span: range(headNode, positionalNodes, namedNode), before, after }
    );
  };
}

/**
 * This function turns a string into the appropriate token typ:
 *
 * - `this` -> ThisReferenceToken
 * - `@` ID -> ArgReferenceToken
 * - ID -> VarReferenceToken
 */
export function ref(
  name: string
): CurriedNode<
  ast.VarReferenceNode | ast.ArgReferenceNode | ast.ThisReferenceNode
> {
  return builder => {
    if (name === "this") {
      return a.thisReference(builder.token(b.id("this")));
    } else if (name.startsWith("@")) {
      return a.argReference(builder.token(b.arg(name)));
    } else {
      return a.varReference(builder.token(b.id(name)));
    }
  };
}

export function path(
  curriedHead: CurriedNode<ast.ExpressionAstNode> | string,
  ...tailParts: string[]
): CurriedNode<ast.PathNode> {
  return builder => {
    let start = builder.pos;
    let head = normalizeExpr(curriedHead)(builder);

    let splitTail =
      tailParts.length === 1 ? tailParts[0].split(".") : tailParts;

    let tail = splitTail.map(part => {
      return member(part)(builder);
    });
    let end = builder.pos;

    return a.path({ head, tail }, span(start, end));
  };
}

export function member(part: string): CurriedNode<ast.MemberNode> {
  return builder => {
    let dot = builder.token(b.dot);
    let span = builder.consume(part);
    return a.member(dot, span);
  };
}

/**
 *
 * @param body the outer contents of the string (like `"hello"`)
 */
export function str(body: string): CurriedNode<ast.StringNode> {
  return builder => {
    let tok = builder.token(b.str(body));
    return a.string(tok, builder.source);
  };
}

export function int(body: string): CurriedNode<ast.NumberNode> {
  return builder => {
    let tok = builder.token(b.int(body));
    return a.number(tok, builder.source);
  };
}

export function decimal(body: string): CurriedNode<ast.NumberNode> {
  return builder => {
    let tok = builder.token(b.decimal(body));
    return a.number(tok, builder.source);
  };
}

export function root(
  ...children: CurriedNode[]
): { root: ast.RootNode; source: string } {
  let builder = new AstBuilder();
  let start = builder.pos;
  let out = children.map(child => child(builder));
  let end = builder.pos;

  return { root: a.root(out, span(start, end)), source: builder.source };
}
