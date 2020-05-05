import type { Dict } from "./utils";

export const FORMAT = Symbol("FORMAT");
export const SNAPSHOT = Symbol("CLONE");

export function hasFormat(input: unknown): input is RawFormattable {
  return (
    input !== null && typeof input === "object" && FORMAT in (input as Dict)
  );
}

export type Formatted =
  | { type: "json"; value: JSONValue }
  | { type: "raw"; value: string };

export interface RawFormattable {
  [SNAPSHOT](): Formattable;
  [FORMAT](): Formatted;
}

export type Formattable = RawFormattable | string;

export const SOURCE_FORMAT = Symbol("SOURCE_FORMAT");

export interface SourceFormattable {
  [SOURCE_FORMAT](source: string, nesting: number | undefined): Formatted;
  [SNAPSHOT](): SourceFormattable;
}

export function hasSourceFormat(input: unknown): input is SourceFormattable {
  return (
    input !== null &&
    typeof input === "object" &&
    SOURCE_FORMAT in (input as Dict)
  );
}

export function snapshot(
  value: unknown
  // source: string,
  // nesting: number | undefined = undefined
): unknown {
  if (hasFormat(value) || hasSourceFormat(value)) {
    return value[SNAPSHOT]();
  } else {
    return value;
    // return formatUnknown(value, source, nesting);
  }
}

export function formatUnknown(
  value: unknown,
  source: string,
  nesting: number | undefined = undefined
): string {
  let nextNest = nesting !== undefined ? nesting + 2 : undefined;

  if (hasSourceFormat(value)) {
    let result = value[SOURCE_FORMAT](source, nesting);
    return formatFormatted(result);
  } else if (hasFormat(value)) {
    let result = value[FORMAT]();
    return formatFormatted(result);
  } else if (Array.isArray(value)) {
    let lines = value.map(item => formatUnknown(item, source, nextNest));
    return nest(`[`, lines, `]`, nesting);
  } else if (isPOJO(value)) {
    let lines = Object.entries(value as object).map(
      ([k, v]) => `${k}:${formatUnknown(v, source, nextNest)}`
    );
    return nest(`{`, lines, `}`, nesting);
  } else {
    return nesting === undefined
      ? formatJSON(value)
      : formatJSON(value, nesting);
  }
}

function isPOJO(o: unknown): o is object {
  if (typeof o !== "object" || o === null) {
    return false;
  } else if (Object.getPrototypeOf(o) === Object.prototype) {
    return true;
  } else {
    return false;
  }
}

export function formatFormattable(formattable: Formattable): string {
  if (typeof formattable === "string") {
    return formattable;
  } else {
    let result = formattable[FORMAT]();

    if (result.type === "raw") {
      return result.value;
    } else {
      return formatJSON(result.value);
    }
  }
}

export function formatFormatted(value: Formatted): string {
  if (value.type === "json") {
    return formatJSON(value.value);
  } else {
    return value.value;
  }
}

function formatJSON(input: unknown, nesting?: number | undefined): string {
  let nextNest = nesting === undefined ? undefined : nesting + 2;

  if (input === null || input === undefined) {
    return JSON.stringify(input);
  } else if (Array.isArray(input)) {
    let lines = input.map(value => formatJSON(value, nextNest));
    return nest(`[`, lines, `]`, nesting);
  } else if (typeof input === "object") {
    let lines = Object.entries(input as object).map(
      ([key, value]) => `${key}:${formatJSON(value, nextNest)}`
    );
    return nest("{", lines, "}", nesting);
  } else if (typeof input === "string") {
    return `'${input}'`;
  } else {
    return JSON.stringify(input, null, nextNest)
      .replace(/\\?"/g, `'`)
      .replace(/'(<.*?>)'/g, "$1");
  }
}

function nest(
  first: string,
  lines: string[],
  last: string,
  nesting?: number | undefined
): string {
  if (nesting === undefined) {
    return `${first}${lines.join(",")}${last}`;
  }

  let body = lines.map(line => `\n${" ".repeat(nesting)}${line}`);
  return `${first}${body}\n${" ".repeat(nesting - 2)}${last}`;
}

export type JSONValue =
  | string
  | number
  | null
  | boolean
  | JSONArray
  | JSONObject;
export type JSONArray = JSONValue[];
export interface JSONObject {
  [key: string]: JSONValue;
}
