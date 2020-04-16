import type { Result, Snippet, Debuggable, ReadTrace } from "hbs-parser-next";
import { unwrap } from "../utils";

export type TraceNodeOutput = Result<[Snippet, Debuggable]>;

function children(
  node: ReadTrace,
  included: string[],
  start: number
): TraceNodeModel[] {
  if (node.preSnippet.offset >= start) {
    return node.children.map(
      child => new TraceNodeModel(child, included, start)
    );
  }

  let out: TraceNodeModel[] = [];

  for (let child of node.children) {
    if (child.preSnippet.offset >= start) {
      out.push(new TraceNodeModel(child, included, start));
    } else {
      out.push(...children(child, [...included, node.combinator.name], start));
    }
  }

  return out;
}

export default class TraceNodeModel {
  constructor(
    private node: ReadTrace,
    readonly included: string[] = [],
    private start = 0
  ) {}

  get output(): TraceNodeOutput {
    return unwrap(this.node.output);
  }

  get snippet(): Snippet {
    return this.node.preSnippet;
  }

  get name(): string {
    return this.node.combinator.name;
  }

  get children(): TraceNodeModel[] {
    return children(this.node, this.included, this.start);
  }

  get kind(): "err" | "ok" | "optional-err" {
    let kind = this.output.kind;

    if (kind === "err" && this.node.optional) {
      return "optional-err";
    } else {
      return kind;
    }
  }

  get isExpandable(): boolean {
    return (
      this.output.kind === "err" &&
      this.node.children.some(child => unwrap(child.output).kind === "err")
    );
  }

  get isLeaf(): boolean {
    return this.node.children.length === 0;
  }
}
