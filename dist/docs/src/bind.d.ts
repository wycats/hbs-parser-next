interface Box<T> {
    value: T;
    update(value: T): void;
}
export declare type Destructor = () => void;
export declare function bind(element: HTMLElement, box: Box<unknown>): Destructor;
export declare function box(object: {
    [key: string]: unknown;
}, prop: string): Box<unknown>;
export {};
//# sourceMappingURL=bind.d.ts.map