export interface Dict<T = unknown> {
  [key: string]: T;
}

export function eq<T>(left: T, right: T): boolean {
  return left === right;
}

export function not(item: unknown): boolean {
  return !item;
}

export function set(parent: Dict, key: string): (value: unknown) => void {
  return (value: unknown): void => {
    parent[key] = value;
  };
}

export function log(...args: unknown[]): void {
  console.log(...args);
}

export function json(o: object): string {
  return JSON.stringify(o, undefined, 2);
}

export function present(o: unknown[] | null | undefined): boolean {
  return Array.isArray(o) && o.length > 0;
}

export function unwrap<T>(v: T | null | undefined): T {
  if (v === null || v === undefined) {
    throw new Error(`ASSERT: Expected non-null`);
  }

  return v;
}
