import type { Token } from "../read/tokens";

export class PeekedToken {
  private committed = false;

  constructor(private iterator: TokensIterator, private pos: number) {}

  get isEOF(): boolean {
    return this.iterator[TOKENS].length === this.pos;
  }

  commit(): void {
    if (this.committed) {
      throw new Error(`assert: cannot commit already committed peeked token`);
    }

    this.iterator.commit(this.pos);
  }

  get token(): Token {
    return this.iterator[TOKENS][this.pos];
  }
}

const TOKENS = Symbol("TOKENS");

export interface ParseContext {
  source: string;
}

export default class TokensIterator {
  readonly [TOKENS]: readonly Token[];

  constructor(
    tokens: readonly Token[],
    private context: ParseContext,
    private pos = 0
  ) {
    this[TOKENS] = tokens;
  }

  peek(): PeekedToken {
    return new PeekedToken(this, this.pos);
  }

  commit(pos: number): void {
    if (this.pos !== pos) {
      throw new Error(
        `assert: can't commit a peeked token after the iterator advanced`
      );
    }

    this.pos++;
  }
}
