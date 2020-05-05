import { SOURCE_FORMAT, SourceFormattable, Formatted, SNAPSHOT } from "./debug";

export class SourceSpan implements SourceFormattable {
  constructor(readonly start: number, readonly end: number) {}

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
