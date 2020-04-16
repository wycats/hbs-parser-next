export interface Dict<T = unknown> {
    [key: string]: T;
}
export declare function eq<T>(left: T, right: T): boolean;
export declare function not(item: unknown): boolean;
export declare function set(parent: Dict, key: string): (value: unknown) => void;
export declare function json(o: object): string;
export declare function present(o: unknown[] | null | undefined): boolean;
export declare function unwrap<T>(v: T | null | undefined): T;
//# sourceMappingURL=utils.d.ts.map