import { SOURCE_FORMAT, SNAPSHOT } from "./debug";
export class SourceSpan {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    withStart(start) {
        return new SourceSpan(start, this.end);
    }
    withEnd(end) {
        return new SourceSpan(this.start, end);
    }
    until(span) {
        return new SourceSpan(this.start, span.end);
    }
    slice(source) {
        return source.slice(this.start, this.end);
    }
    [SOURCE_FORMAT](source) {
        return {
            type: "raw",
            value: `<span:${source.slice(this.start, this.end)}>`,
        };
    }
    [SNAPSHOT]() {
        return this;
    }
}
export function span(start, end) {
    return new SourceSpan(start, end);
}
export function range(...rawSpans) {
    let spans = rawSpans.filter(s => s !== null && s !== undefined);
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
export function isSpan(item) {
    return item instanceof SourceSpan;
}
export function getSpan(item) {
    if (isSpan(item)) {
        return item;
    }
    else {
        if (!isSpan(item.span)) {
            throw new Error(`value.span isn't a span`);
        }
        return item.span;
    }
}
export function slice(s, source) {
    return source.slice(s.start, s.end);
}
