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
import type {
  Combinators,
  CombinatorType,
  TupleCombinators,
} from "./combinators/types";
import type { Debuggable } from "./logger";
import Pick, { PickCallbacks } from "./combinators/pick";
import Maybe from "./combinators/maybe";
import type { Dict } from "../utils";

export const tag = (source: string) => new Tag(source);
export const pattern = (pat: RegExp, name: string) => new Pattern(name, pat);

export const takeUntil = (pat: string) => new TakeUntil(pat);
export const takeWhile = (pat: string) => new TakeWhile(pat);

export const seq = <T extends Debuggable[]>(
  desc: string,
  ...combinators: TupleCombinators<T>
) => new Seq(desc, combinators);

// tslint:disable-next-line:variable-name
export const any = <T extends Debuggable[]>(
  desc: string,
  ...combinators: TupleCombinators<T>
) => new Any(desc, combinators);

export const pick = <T extends Dict<Debuggable>, U extends PickCallbacks<T>>(
  combinators: Combinators<T>,
  callbacks: U
) => new Pick(combinators, callbacks);

export const maybe = <T extends Debuggable>(c: CombinatorType<T>) =>
  new Maybe(c);
