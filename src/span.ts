export interface SourceSpan {
  start: number;
  end: number;
}

export function span(start: number, end: number) {
  return { start, end };
}

export type HasSpan = SourceSpan | { span: SourceSpan };

export function range(...spans: HasSpan[]): SourceSpan {
  if (spans.length === 0) {
    return span(0, 0);
  }

  let first = spans[0];
  let last = first;

  for (let span of spans) {
    last = span;
  }

  return { start: getSpan(first).start, end: getSpan(last).end };
}

export function isSpan(
  item: HasSpan & Partial<SourceSpan>
): item is SourceSpan {
  return typeof item.start === "number" && typeof item.end === "number";
}

export function getSpan(item: HasSpan & Partial<SourceSpan>): SourceSpan {
  if (isSpan(item)) {
    return item;
  } else {
    return item.span;
  }
}

export function slice(span: SourceSpan, source: string): string {
  return source.slice(span.start, span.end);
}
