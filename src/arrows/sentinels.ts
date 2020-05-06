/**
 * UNDEFINED is a sentinel value used inside of arrow implementations to
 * differentiate the `undefined` user value from the property of never
 * having been assigned at all. It roughly corresponds to the JavaScript
 * temporal dead zone state, without the error.
 */
export const UNDEFINED = Symbol("UNDEFINED");
export type UNDEFINED = typeof UNDEFINED;
