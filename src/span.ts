import { SOURCE_FORMAT, SourceFormattable, Formatted, SNAPSHOT } from "./debug";
import { invariant, InvariantViolation } from "./arrows";

/**
 * `Source` is a wrapper around a source text. It can slice out of the source text, and it
 * can produce a valid EOF source span.
 */
export class Source {
  #source: string;

  constructor(source: string) {
    this.#source = source;
  }

  /**
   * Slice a string out of the source text.
   *
   * If a span is passed, and the span is EOF, `slice` returns null.
   *
   * If `start` and `end` are passed, and they are both the EOF position,
   * `slice` returns null.
   *
   * Invariants:
   *
   * - start >= 0
   * - end is undefined | end <= EOF position
   * - end is undefined | start <= end
   */
  slice(span: SourceSpan): string | null;
  slice(start: number, end?: number): string | null;
  slice(start: number | SourceSpan, end?: number): string | null {
    if (start instanceof SourceSpan) {
      if (start.isEOF) {
        return null;
      } else {
        return start.slice(this.#source);
      }
    } else {
      invariant(start >= 0, InvariantViolation.SpanRangeError);
      invariant(
        end === undefined || end <= this.eofPosition,
        InvariantViolation.SpanRangeError
      );
      invariant(
        end === undefined || start <= end,
        InvariantViolation.SpanRangeError
      );

      if (start === this.eofPosition && end === this.eofPosition) {
        return null;
      } else {
        return this.#source.slice(start, end);
      }
    }
  }

  get EOF(): SourceSpan {
    return new SourceSpan(this.eofPosition, this.eofPosition, true);
  }

  private get eofPosition(): number {
    return this.#source.length;
  }
}

export class SourceSpan implements SourceFormattable {
  readonly #isEOF: boolean;

  constructor(readonly start: number, readonly end: number, isEOF = false) {
    this.#isEOF = isEOF;
  }

  get isEOF(): boolean {
    return this.#isEOF;
  }

  withStart(start: number): SourceSpan {
    return new SourceSpan(start, this.end);
  }

  withEnd(end: number): SourceSpan {
    return new SourceSpan(this.start, end);
  }

  until(span: SourceSpan): SourceSpan {
    return new SourceSpan(this.start, span.end);
  }

  slice(source: string): string {
    return source.slice(this.start, this.end);
  }

  [SOURCE_FORMAT](source: string): Formatted {
    return {
      type: "raw",
      value: `<span:${source.slice(this.start, this.end)}>`,
    };
  }

  [SNAPSHOT](): SourceFormattable {
    return this;
  }
}

export function span(start: number, end: number): SourceSpan {
  return new SourceSpan(start, end);
}

export type HasSpan = SourceSpan | { span: SourceSpan };

export function range(
  ...rawSpans: Array<HasSpan | null | undefined>
): SourceSpan {
  let spans = rawSpans.filter(s => s !== null && s !== undefined) as HasSpan[];

  if (spans.length === 0) {
    return span(0, 0);
  }

  let first = spans[0];
  let last = first;

  for (let s of spans) {
    last = s;
  }

  return span(getSpan(first).start, getSpan(last).end);
}

export function isSpan(
  item: HasSpan & Partial<SourceSpan>
): item is SourceSpan {
  return item instanceof SourceSpan;
}

export function getSpan(item: HasSpan & Partial<SourceSpan>): SourceSpan {
  if (isSpan(item)) {
    return item;
  } else {
    if (!isSpan(item.span)) {
      throw new Error(`value.span isn't a span`);
    }
    return item.span;
  }
}

export function slice(s: SourceSpan, source: string): string {
  return source.slice(s.start, s.end);
}
