export const FORMAT = Symbol("FORMAT");
export const SNAPSHOT = Symbol("CLONE");
export function hasFormat(input) {
    return (input !== null && typeof input === "object" && FORMAT in input);
}
export const SOURCE_FORMAT = Symbol("SOURCE_FORMAT");
export function hasSourceFormat(input) {
    return (input !== null &&
        typeof input === "object" &&
        SOURCE_FORMAT in input);
}
export function snapshot(value
// source: string,
// nesting: number | undefined = undefined
) {
    if (hasFormat(value) || hasSourceFormat(value)) {
        return value[SNAPSHOT]();
    }
    else {
        return value;
        // return formatUnknown(value, source, nesting);
    }
}
export function formatUnknown(value, source, nesting = undefined) {
    let nextNest = nesting !== undefined ? nesting + 2 : undefined;
    if (hasSourceFormat(value)) {
        let result = value[SOURCE_FORMAT](source, nesting);
        return formatFormatted(result);
    }
    else if (hasFormat(value)) {
        let result = value[FORMAT]();
        return formatFormatted(result);
    }
    else if (Array.isArray(value)) {
        let lines = value.map(item => formatUnknown(item, source, nextNest));
        return nest(`[`, lines, `]`, nesting);
    }
    else if (isPOJO(value)) {
        let lines = Object.entries(value).map(([k, v]) => `${k}:${formatUnknown(v, source, nextNest)}`);
        return nest(`{`, lines, `}`, nesting);
    }
    else {
        return nesting === undefined
            ? formatJSON(value)
            : formatJSON(value, nesting);
    }
}
function isPOJO(o) {
    if (typeof o !== "object" || o === null) {
        return false;
    }
    else if (Object.getPrototypeOf(o) === Object.prototype) {
        return true;
    }
    else {
        return false;
    }
}
export function formatFormattable(formattable) {
    if (typeof formattable === "string") {
        return formattable;
    }
    else {
        let result = formattable[FORMAT]();
        if (result.type === "raw") {
            return result.value;
        }
        else {
            return formatJSON(result.value);
        }
    }
}
export function formatFormatted(value) {
    if (value.type === "json") {
        return formatJSON(value.value);
    }
    else {
        return value.value;
    }
}
function formatJSON(input, nesting) {
    let nextNest = nesting === undefined ? undefined : nesting + 2;
    if (input === null || input === undefined) {
        return JSON.stringify(input);
    }
    else if (Array.isArray(input)) {
        let lines = input.map(value => formatJSON(value, nextNest));
        return nest(`[`, lines, `]`, nesting);
    }
    else if (typeof input === "object") {
        let lines = Object.entries(input).map(([key, value]) => `${key}:${formatJSON(value, nextNest)}`);
        return nest("{", lines, "}", nesting);
    }
    else if (typeof input === "string") {
        return `'${input}'`;
    }
    else {
        return JSON.stringify(input, null, nextNest)
            .replace(/\\?"/g, `'`)
            .replace(/'(<.*?>)'/g, "$1");
    }
}
function nest(first, lines, last, nesting) {
    if (nesting === undefined) {
        return `${first}${lines.join(",")}${last}`;
    }
    let body = lines.map(line => `\n${" ".repeat(nesting)}${line}`);
    return `${first}${body}\n${" ".repeat(nesting - 2)}${last}`;
}
