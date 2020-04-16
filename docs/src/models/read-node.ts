import type { SourceSpan, tokens } from "hbs-parser-next";

export default class ReadNodeModel {
  constructor(private node: tokens.Token, start = 0) {}

  get kind(): tokens.TokenType {
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
