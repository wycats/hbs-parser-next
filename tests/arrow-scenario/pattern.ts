import { arrow } from "hbs-parser-next";
const { invariant } = arrow;
import InvariantViolation = arrow.InvariantViolation;

/**
 * A `Pattern` is a value that can match, or fail to match, the current
 * source position.
 */
export interface Pattern {
  /**
   * `match` returns a number of matched characters if the pattern matches,
   * and `null` if the pattern doesn't match.
   */
  match(rest: string): number | null;
}

/**
 * A `StringPattern` matches if the rest of the source starts with a literal
 * match for the string.
 */
class StringPattern implements Pattern {
  #pattern: string;
  constructor(pattern: string) {
    this.#pattern = pattern;
  }
  match(rest: string): number | null {
    let sliced = rest.slice(0, this.#pattern.length);
    let match = sliced === this.#pattern;
    if (sliced === this.#pattern) {
      return sliced.length;
    } else {
      return null;
    }
  }
}

/**
 * A pattern that matches if the rest of the source text is a literal
 * match for the characters.
 */
export function chars(string: string): StringPattern {
  return new StringPattern(string);
}

class RegExpPattern implements Pattern {
  #pattern: RegExp;
  constructor(pattern: RegExp) {
    this.#pattern = pattern;
  }
  match(rest: string): number | null {
    let match = rest.match(this.#pattern);
    if (match) {
      return match[0].length;
    } else {
      return null;
    }
  }
}

/**
 * A pattern that matches if the rest of the source text is a match
 * for the regular expression.
 *
 * Invariant:
 * - the regular expression must be anchored at the front
 */
export function pattern(regexp: RegExp): RegExpPattern {
  invariant(regexp.source[0] === "^", InvariantViolation.InvalidPattern);
  return new RegExpPattern(regexp);
}

/**
 * A union of types that can be turned into a pattern. This is the
 * type that is accepted by Reader#match.
 */
export type IntoPattern = string | RegExp | Pattern;

/**
 * Turn an `IntoPattern` into a pattern
 */
export function intoPattern(from: IntoPattern): Pattern {
  if (typeof from === "string") {
    return chars(from);
  } else if (from instanceof RegExp) {
    return pattern(from);
  } else {
    return from;
  }
}
