import { InvariantViolation, invariantMessage } from "./errors";

// The functions in this file represent errors that should never happen.
// If they happen, they correspond to bugs in the code. You should not
// use these facilities to check user-provided values.

/**
 * An assertion takes a type predicate and validates that the value
 * matches the type predicate. If it does not, the assertion throws.
 */
export function assert<U>(
  value: unknown,
  callback: (v: unknown) => v is U,
  message = "assertion"
): asserts value is U {
  if (callback(value)) {
    return;
  }

  throw new Error(message);
}

/**
 * This function takes a value that could be null or undefined, and asserts
 * that it is not null or undefined.
 */
export function assertPresent<T>(
  value: T | null | undefined
): asserts value is T {
  if (value === null || value === undefined) {
    throw new Error(`Unexpected ${value}, expected not null or undefined`);
  }
}

/**
 * This function takes a value that could be null or undefined, and returns the
 * value if it's not null or undefined. Otherwise, it throws an error.
 */
export function unwrap<T>(value: T | null | undefined): T {
  assertPresent(value);

  return value;
}

/**
 * An invariant is an untyped assertion that corresponds to an illegal state.
 */
export function invariant(value: false, violation: InvariantViolation): never;
export function invariant(value: true, violation: InvariantViolation): void;
export function invariant(
  value: boolean,
  violation: InvariantViolation
): void | never;
export function invariant(
  value: boolean,
  violation: InvariantViolation
): void | never {
  if (value === false) {
    throw new Error(invariantMessage(violation));
  }
}

/**
 * A violation is an unconditional invariant violation. It is useful to exhaust
 * switch statements or conditionals.
 */
export function violation(violation: InvariantViolation): never {
  throw new Error(invariantMessage(violation));
}

/**
 * This function is used to force TypeScript to perform exhaustiveness checks
 * in the `default` clause of a switch statement or an `else` clause of an
 * `if` statement.
 *
 * It takes a value whose type should already have been exhausted in previous
 * clauses.
 */
export function unreachable(_value: never): never {
  throw new Error(`unreachable`);
}

export function unsafeCast<T>(_value: unknown): asserts _value is T {}
