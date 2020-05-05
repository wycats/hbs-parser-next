export declare const FORMAT: unique symbol;
export declare const SNAPSHOT: unique symbol;
export declare function hasFormat(input: unknown): input is RawFormattable;
export declare type Formatted = {
    type: "json";
    value: JSONValue;
} | {
    type: "raw";
    value: string;
};
export interface RawFormattable {
    [SNAPSHOT](): Formattable;
    [FORMAT](): Formatted;
}
export declare type Formattable = RawFormattable | string;
export declare const SOURCE_FORMAT: unique symbol;
export interface SourceFormattable {
    [SOURCE_FORMAT](source: string, nesting: number | undefined): Formatted;
    [SNAPSHOT](): SourceFormattable;
}
export declare function hasSourceFormat(input: unknown): input is SourceFormattable;
export declare function snapshot(value: unknown): unknown;
export declare function formatUnknown(value: unknown, source: string, nesting?: number | undefined): string;
export declare function formatFormattable(formattable: Formattable): string;
export declare function formatFormatted(value: Formatted): string;
export declare type JSONValue = string | number | null | boolean | JSONArray | JSONObject;
export declare type JSONArray = JSONValue[];
export interface JSONObject {
    [key: string]: JSONValue;
}
//# sourceMappingURL=debug.d.ts.map