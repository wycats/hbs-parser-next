export interface SourceSpan {
  start: number;
  end: number;
}

export function span(start: number, end: number) {
  return { start, end };
}

export function range(start: SourceSpan, end: SourceSpan): SourceSpan {
  return { start: start.start, end: end.end };
}
