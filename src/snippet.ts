import { SourceSpan } from "./span";

export class Snippet {
  static input(source: string): Snippet {
    return new Snippet(source, 0, 0);
  }

  constructor(
    readonly source: string,
    readonly offset: number,
    readonly length: number
  ) {}

  eq(other: Snippet) {
    return (
      this.source === other.source &&
      this.offset === other.offset &&
      this.length === other.length
    );
  }

  fmt(): string {
    return `<offset:${this.offset} length:${this.length}>`;
  }

  slice(chars: number): Snippet {
    return new Snippet(this.source, this.offset + this.length, chars);
  }

  get sliceRest(): string {
    return this.source.slice(this.offset + this.length);
  }

  get rest(): Snippet {
    return new Snippet(this.source, this.offset + this.length, 0);
  }

  isEOF(): boolean {
    return this.offset + this.length === this.source.length;
  }

  isMatch(chars: string): boolean {
    let slice = this.source.slice(
      this.offset + this.length,
      this.offset + this.length + chars.length
    );
    return slice === chars;
  }

  extend(count = 1): Snippet {
    return new Snippet(this.source, this.offset, this.length + count);
  }

  get span(): SourceSpan {
    return {
      start: this.offset,
      end: this.offset + this.length
    };
  }

  get fragment(): string {
    return this.source.slice(this.offset, this.offset + this.length);
  }

  get restLength(): number {
    return this.source.length - this.offset - this.length;
  }
}

export interface Ok<T> {
  kind: "ok";
  value: T;
}

export function ok<T>(value: T): Ok<T> {
  return { kind: "ok", value };
}

export interface Err {
  kind: "err";
  snippet: Snippet;
  reason: string;
}

export function err(snippet: Snippet, reason: string): Err {
  return {
    kind: "err",
    snippet,
    reason
  };
}

export type Result<T> = Ok<T> | Err;
