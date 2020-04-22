import { truncString } from "../read/debug";
import type { Token, RootToken } from "../read/tokens";
import { unwrap } from "../read/utils";
import { slice } from "../span";
import { AstNode, formatAstNode } from "./nodes";
import { Result, Shape, isErr } from "./shape";

export interface ParseTrace {
  shape: Shape<unknown> | { desc: string };
  preToken: Token | RootToken | undefined;
  postToken: Token | undefined;
  result: unknown;
  failure?: "ignored" | "optional" | "rollback";
  children?: ParseTrace[];
}

export class ParseTracer {
  private stack: ParseTrace[];
  constructor(token: Token | RootToken) {
    this.stack = [
      {
        shape: { desc: "root" },
        preToken: token,
        postToken: undefined,
        result: null,
        children: [],
      },
    ];
  }

  print(tokens: readonly Token[], source: string): void {
    let trace = this.trace;
    new PrintTracer(trace, tokens, source).print();
  }

  get trace(): ParseTrace {
    if (this.stack.length !== 1) {
      throw new Error(`ASSERT: can only get trace when the stack is empty`);
    }

    return this.stack[0];
  }

  begin(preToken: Token): void {
    let trace = {
      shape: { desc: "begin" },
      preToken: preToken,
      postToken: undefined,
      result: null,
      children: [],
    };

    let last = this.last;

    if (last) {
      if (last.children) {
        last.children.push(trace);
      } else {
        throw new Error(
          `ASSERT: Can't add children to leaf: ${last.shape.desc}`
        );
      }
    }

    this.stack.push(trace);
  }

  commit(): void {
    let last = unwrap(this.stack.pop());
    if (last.shape.desc !== "begin") {
      throw new Error(
        `ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=begin`
      );
    }
  }

  rollback(): void {
    let last = unwrap(this.stack.pop());
    if (last.shape.desc !== "begin") {
      throw new Error(
        `ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=begin`
      );
    }
    last.failure = "rollback";
  }

  preInvoke(
    shape: Shape<unknown> | { desc: string; isLeaf: boolean },
    token: Token | undefined
  ): void {
    let trace = {
      shape,
      preToken: token,
      postToken: undefined,
      result: null,
      children: "isLeaf" in shape && shape.isLeaf === true ? undefined : [],
    };

    let last = this.last;

    if (last) {
      if (last.children) {
        last.children.push(trace);
      } else {
        throw new Error(
          `ASSERT: Can't add children to leaf: ${last.shape.desc}`
        );
      }
    }

    this.stack.push(trace);
  }

  postInvoke(
    shape: Shape<unknown> | { desc: string },
    result: unknown,
    postToken: Token | undefined
  ): void {
    let last = unwrap(this.stack.pop());
    if (last.shape.desc !== shape.desc) {
      throw new Error(
        `ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=${shape.desc}`
      );
    }

    last.result = result;
    last.postToken = postToken;
  }

  postInvokeFailure(
    shape: Shape<unknown> | { desc: string },
    reason: "ignored" | "optional"
  ): void {
    let last = unwrap(this.stack.pop());
    if (last.shape.desc !== shape.desc) {
      throw new Error(
        `ASSERT: unbalanced stack: stack=${last.shape.desc}, expected=${shape.desc}`
      );
    }
    last.result = undefined;
    last.postToken = undefined;
    last.failure = reason;
  }

  private get last(): ParseTrace | null {
    if (this.stack.length === 0) {
      return null;
    } else {
      return this.stack[this.stack.length - 1];
    }
  }
}

const SUCCESS = "color: green";
const ERROR = "color: red";
const TRANSACTION_SUCCESS =
  "background-color: #6a6; color: white; font-weight: bold";
const TRANSACTION_FAILURE =
  "background-color: #a66; color: white; font-weight: bold";
const NORMAL = "color: #333";
const DIM = "color: #999";

class PrintTracer {
  constructor(
    private readonly trace: ParseTrace,
    private readonly tokens: readonly Token[],
    private readonly source: string,
    private readonly indent = 0
  ) {}

  print(): void {
    if (this.trace.shape.desc === undefined) {
      debugger;
    }

    console.log(
      `%c| ${this.preSlice} | ${truncString(this.details, 60)} | ${
        this.postSlice
      }`,
      NORMAL,
      NORMAL,
      this.descStyle,
      DIM
    );

    if (this.trace.children) {
      for (let child of this.trace.children) {
        if (child.failure === "ignored") {
          continue;
        }

        new PrintTracer(
          child,
          this.tokens,
          this.source,
          this.indent + 1
        ).print();
      }
    }
  }

  private get details(): string {
    let retval =
      this.trace.shape.desc === "begin" ? "" : ` 🠪 ${this.formattedResult}`;
    return `%c${" ".repeat(this.indent)}%c${this.trace.shape.desc}%c${retval}`;
  }

  private get preSlice(): string {
    return this.slice(this.trace.preToken);
  }

  private get postSlice(): string {
    return this.slice(this.trace.postToken, 25);
  }

  private slice(token: Token | RootToken | undefined, length = 13): string {
    if (token) {
      let span = token.span;
      return truncString(
        slice({ start: span.start, end: this.source.length }, this.source),
        length
      );
    } else {
      return truncString("<eof>");
    }
  }

  private get formattedResult(): string {
    return formatResult(this.trace.result);
  }

  private get descStyle(): string {
    let result = this.trace.result as
      | Partial<Result<unknown>>
      | null
      | undefined;
    if (isResult(result)) {
      if (result.kind === "ok") {
        return SUCCESS;
      } else {
        return ERROR;
      }
    } else if (this.trace.failure === "rollback") {
      return TRANSACTION_FAILURE;
    } else if (this.trace.shape.desc === "begin") {
      return TRANSACTION_SUCCESS;
    } else {
      return SUCCESS;
    }
  }
}

function formatResult(result: unknown): string {
  if (typeof result !== "object" || result === null) {
    return String(result);
  } else if (Array.isArray(result)) {
    if (result.length > 3) {
      return `[${result.slice(0, 2).map(formatResult).join(", ")}...]`;
    } else {
      return `[${result.map(formatResult).join(", ")}]`;
    }
  } else if (isResult(result)) {
    if (isErr(result)) {
      return `ERR reason=${result.reason}`;
    } else {
      return formatResult(result.value);
    }
  } else if (isNodeish(result)) {
    return formatAstNode(result);
  } else {
    console.log("not debuggable", result);
    return result + "";
  }
}

function isNodeish(item: unknown | null | undefined): item is AstNode {
  if (typeof item === "object" && item !== null) {
    let obj = item as Partial<AstNode>;

    return (
      "type" in obj &&
      typeof obj.type === "string" &&
      typeof obj.span === "object" &&
      obj.span !== null &&
      typeof obj.span.start === "number" &&
      typeof obj.span.end === "number"
    );
  } else {
    return false;
  }
}

function isResult(item: unknown | null | undefined): item is Result<unknown> {
  if (typeof item === "object" && item !== null) {
    let obj = item as Partial<Result<unknown>>;
    return ("kind" in obj && obj.kind === "ok") || obj.kind === "err";
  } else {
    return false;
  }
}
