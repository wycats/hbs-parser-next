import { SOURCE_FORMAT, SourceFormattable, Formatted, SNAPSHOT } from "./debug";
export declare class SourceSpan implements SourceFormattable {
    readonly start: number;
    readonly end: number;
    constructor(start: number, end: number);
    withStart(start: number): SourceSpan;
    withEnd(end: number): SourceSpan;
    until(span: SourceSpan): SourceSpan;
    slice(source: string): string;
    [SOURCE_FORMAT](source: string): Formatted;
    [SNAPSHOT](): SourceFormattable;
}
export declare function span(start: number, end: number): SourceSpan;
export declare type HasSpan = SourceSpan | {
    span: SourceSpan;
};
export declare function range(...rawSpans: Array<HasSpan | null | undefined>): SourceSpan;
export declare function isSpan(item: HasSpan & Partial<SourceSpan>): item is SourceSpan;
export declare function getSpan(item: HasSpan & Partial<SourceSpan>): SourceSpan;
export declare function slice(s: SourceSpan, source: string): string;
//# sourceMappingURL=span.d.ts.map