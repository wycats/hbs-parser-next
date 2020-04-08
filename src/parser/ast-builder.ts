import type { AstNode } from "./nodes";
import * as ast from "./nodes";
import * as b from "../read/token-builder";
import { span, SourceSpan } from "../span";
import { TokenBuilder, CurriedToken } from "../read/token-builder";
import type { Token } from "../read/tokens";

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
    return { start, end: this.pos };
  }

  token<T extends Token>(token: CurriedToken<T>): T {
    this.tokenBuilder.pos = this.pos;
    let built = token(this.tokenBuilder);
    this.pos = this.tokenBuilder.pos;
    return built;
  }

  get source(): string {
    return this.output;
  }
}

export function text(chars: string): CurriedNode<ast.TextNode> {
  return builder => ast.text(builder.token(b.text(chars)));
}

export function interpolate(
  head: CurriedNode<ast.ExpressionAstNode>,
  positional?: ReadonlyArray<CurriedNode<ast.ExpressionAstNode>>,
  named?: CurriedNode<ast.NamedNode>
): CurriedNode<ast.InterpolateNode> {
  return builder => {
    let start = builder.pos;
    builder.consume("{{");
    let headNode = head(builder);
    let positionalNodes = positional && positional.map(p => p(builder));
    let namedNode = named && named(builder);
    builder.consume("}}");
    let end = builder.pos;

    return ast.interpolate(
      { head: headNode, positional: positionalNodes, named: namedNode },
      { start, end }
    );
  };
}

export function varRef(name: string): CurriedNode<ast.VarReferenceNode> {
  return builder => ast.varReference(builder.token(b.id(name)));
}

export function root(
  ...children: CurriedNode[]
): { root: ast.RootNode; source: string } {
  let builder = new AstBuilder();
  let start = builder.pos;
  let out = children.map(child => child(builder));
  let end = builder.pos;

  return { root: ast.root(out, span(start, end)), source: builder.source };
}
