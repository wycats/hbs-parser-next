import { ok, Result, Snippet } from "../../../snippet";
import { seq, tag } from "../../combinators";
import { SIMPLE_PATH, SPACED_TOKENS } from "../../hbs";
import { many } from "../../multi";
import { TOP_LEVEL } from "../../read";
import {
  block,
  BlockToken,
  openBlock,
  closeBlock,
  CloseBlockToken,
  OpenBlockToken,
} from "../../tokens";
import { AbstractCombinator } from "../base";
import { range } from "../../../span";

export default class Block extends AbstractCombinator<BlockToken> {
  readonly name = "BLOCK";

  invoke(input: Snippet): Result<[Snippet, BlockToken]> {
    return input.invoke(
      seq(
        "BLOCK",
        OPEN_BLOCK,
        many(TOP_LEVEL),
        CLOSE_BLOCK
      ).map(([open, body, close]) => ok(block({ open, body, close })))
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export class OpenBlock extends AbstractCombinator<OpenBlockToken> {
  readonly name = "OPEN_BLOCK";

  invoke(input: Snippet): Result<[Snippet, OpenBlockToken]> {
    return input.invoke(
      seq(
        "OPEN_BLOCK",
        tag("{{#"),
        SIMPLE_PATH,
        SPACED_TOKENS,
        tag("}}")
      ).map(([open, path, head, close]) =>
        ok(
          openBlock({ name: path, head, blockParams: null }, range(open, close))
        )
      )
    );
  }
}

const OPEN_BLOCK = new OpenBlock();

// tslint:disable-next-line:max-classes-per-file
export class CloseBlock extends AbstractCombinator<CloseBlockToken> {
  readonly name = "CLOSE_BLOCK";

  invoke(input: Snippet): Result<[Snippet, CloseBlockToken]> {
    return input.invoke(
      seq(
        "CLOSE_BLOCK",
        tag("{{/"),
        SIMPLE_PATH,
        tag("}}")
      ).map(([open, path, close]) => ok(closeBlock(path, range(open, close))))
    );
  }
}

const CLOSE_BLOCK = new CloseBlock();
