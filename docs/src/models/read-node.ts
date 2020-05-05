import type { SourceSpan, tokenTypes, Token } from "hbs-parser-next";

export default class ReadNodeModel {
  constructor(private node: Token) {}

  get kind(): tokenTypes.TokenType {
    return this.node.type;
  }

  get span(): SourceSpan {
    return this.node.span;
  }

  get children(): ReadNodeModel[] | undefined {
    if ("children" in this.node) {
      return this.node.children.map(node => new ReadNodeModel(node));
    }

    return undefined;
  }
}
