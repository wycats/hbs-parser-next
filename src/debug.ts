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
  [FORMAT]():
    | { type: "json"; value: JSONValue }
    | { type: "raw"; value: string };
}

export type Formattable = RawFormattable | string;

export function snapshot(value: unknown): Formattable {
  if (hasFormat(value)) {
    return value[SNAPSHOT]();
  } else {
    let clone: JSONValue = JSON.parse(JSON.stringify(value));
    return {
      [FORMAT]() {
        return { type: "json", value: clone } as const;
      },
      [SNAPSHOT]() {
        return this;
      },
    } as const;
  }
}

export function formatUnknown(value: unknown): string {
  if (hasFormat(value)) {
    let result = value[FORMAT]();

    return formatFormatted(result);
  } else {
    return formatJSON(value);
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

function formatJSON(input: unknown): string {
  if (input === null || input === undefined) {
    return JSON.stringify(input);
  } else {
    return JSON.stringify(input)
      .replace(/\\?"/g, `'`)
      .replace(/'(<.*?>)'/, "$1");
  }
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
