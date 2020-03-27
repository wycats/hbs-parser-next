export class Snippet {
  static input(source: string): Snippet {
    return new Snippet(source, 0, 0);
  }

  constructor(
    readonly source: string,
    readonly offset: number,
    readonly length: number
  ) {}

  slice(chars: number): Snippet {
    return new Snippet(this.source, this.offset + this.length, chars);
  }

  get fragment(): string {
    return this.source.slice(this.offset, this.offset + this.length);
  }
}

export interface Ok<T> {
  kind: "ok";
  value: T;
}

export interface Err {
  kind: "err";
  snippet: Snippet;
  reason: string;
}

export type Result<T> = Ok<T> | Err;
