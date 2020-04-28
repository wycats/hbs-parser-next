export const FORMAT = Symbol("FORMAT");
export const SNAPSHOT = Symbol("CLONE");
export function hasFormat(input) {
    return (input !== null && typeof input === "object" && FORMAT in input);
}
export function snapshot(value) {
    if (hasFormat(value)) {
        return value[SNAPSHOT]();
    }
    else {
        let clone = JSON.parse(JSON.stringify(value));
        return {
            [FORMAT]() {
                return { type: "json", value: clone };
            },
            [SNAPSHOT]() {
                return this;
            },
        };
    }
}
export function formatUnknown(value) {
    if (hasFormat(value)) {
        let result = value[FORMAT]();
        return formatFormatted(result);
    }
    else {
        return formatJSON(value);
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
function formatJSON(input) {
    if (input === null || input === undefined) {
        return JSON.stringify(input);
    }
    else {
        return JSON.stringify(input)
            .replace(/\\?"/g, `'`)
            .replace(/'(<.*?>)'/, "$1");
    }
}
