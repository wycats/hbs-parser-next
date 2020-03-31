import { BaseToken } from "./read/read";
import { Snippet } from "./snippet";

export interface SourceSpan {
  start: number;
  end: number;
}

export function span(start: number, end: number) {
  return { start, end };
}

export type HasSpan = SourceSpan | { span: SourceSpan };

export function range(...spans: [HasSpan, ...HasSpan[]]): SourceSpan {
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
