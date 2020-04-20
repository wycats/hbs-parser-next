export interface SourceSpan {
    start: number;
    end: number;
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