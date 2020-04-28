export function span(start, end) {
    return { start, end };
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
    return { start: getSpan(first).start, end: getSpan(last).end };
}
export function isSpan(item) {
    return typeof item.start === "number" && typeof item.end === "number";
}
export function getSpan(item) {
    if (isSpan(item)) {
        return item;
    }
    else {
        return item.span;
    }
}
export function slice(s, source) {
    return source.slice(s.start, s.end);
}
