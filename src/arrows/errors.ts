import { unreachable } from "./assert";

export const enum InvariantViolation {
  /**
   * Invariant: A block must only contain a single `Produce`
   */
  ProduceError = "ProduceError",
  /**
   * Invariant: Invalid slice parameters passed to source.slice()
   */
  SpanRangeError = "SliceRangeError",
  /**
   * Invariant: patterns must be anchored at the front
   */
  InvalidPattern = "InvalidPattern",
  /**
   * Invariant: attempted to commit or roll back a closed transaction
   */
  ClosedTransaction = "ClosedTransaction",
  /**
   * Invariant: invalid produce in a list
   */
  InvalidProduce = "InvalidProduce",
}

export function invariantMessage(violation: InvariantViolation): string {
  switch (violation) {
    case InvariantViolation.ProduceError:
      return "a block can only contain one `Produce` value";
    case InvariantViolation.SpanRangeError:
      return "invalid slice parameters passed to source.slice()";
    case InvariantViolation.InvalidPattern:
      return "patterns must be anchored at the front";
    case InvariantViolation.ClosedTransaction:
      return "a completed transaction cannot be committed or rolled back";
    case InvariantViolation.InvalidProduce:
      return "invalid produce in a list";
    default:
      unreachable(violation);
  }
}
