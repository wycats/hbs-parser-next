/*
  This file type infers reliably, and being explicit would be very annoying
*/
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Any from "./combinators/any";
import Pattern from "./combinators/pattern";
import Seq from "./combinators/seq";
import Tag from "./combinators/tag";
import TakeUntil from "./combinators/take-until";
import TakeWhile from "./combinators/take-while";
import Pick from "./combinators/pick";
import Maybe from "./combinators/maybe";
export const tag = (source) => new Tag(source);
export const pattern = (pat, name) => new Pattern(name, pat);
export const takeUntil = (pat) => new TakeUntil(pat);
export const takeWhile = (pat) => new TakeWhile(pat);
export const seq = (desc, ...combinators) => new Seq(desc, combinators);
// tslint:disable-next-line:variable-name
export const any = (desc, ...combinators) => new Any(desc, combinators);
export const pick = (combinators, callbacks) => new Pick(combinators, callbacks);
export const maybe = (c) => new Maybe(c);
