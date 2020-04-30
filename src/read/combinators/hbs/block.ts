import { fatalError, ok, Result, Snippet } from "../../../snippet";
import { range } from "../../../span";
import { any, maybe, seq, tag } from "../../combinators";
// eslint-disable-next-line import/no-cycle
import { WS } from "../../hbs";
import { many } from "../../multi";
import {
  block,
  blockParams,
  BlockParamsToken,
  BlockToken,
  closeBlock,
  CloseBlockToken,
  equalPath,
  openBlock,
  OpenBlockToken,
} from "../../tokens";
import { AbstractCombinator } from "../base";
// eslint-disable-next-line import/no-cycle
import { TOP_LEVEL } from "../../read";
import { SIMPLE_PATH } from "./simple-path";
// eslint-disable-next-line import/no-cycle
import SpacedTokens from "./spaced-tokens";
import { ID } from "../core";
import { combinator } from "../../combinator";

export default class Block extends AbstractCombinator<BlockToken> {
  readonly name = "BLOCK";

  invoke(input: Snippet): Result<[Snippet, BlockToken]> {
    return input.invoke(
      seq("BLOCK", OPEN_BLOCK, many(TOP_LEVEL), CLOSE_BLOCK).map(
        ([open, body, close]) => {
          if (!equalPath(open.name, close.name, input.source)) {
            return fatalError(input.forSpan(range(...close.name)), "mismatch");
          }
          return ok(block({ open, body, close }));
        }
      )
    );
  }
}

export const BLOCK = combinator(() => new Block());

const BLOCK_SPACED_TOKENS = new SpacedTokens(["as"]);

// tslint:disable-next-line:max-classes-per-file
export class OpenBlock extends AbstractCombinator<OpenBlockToken> {
  readonly name = "OPEN_BLOCK";

  invoke(input: Snippet): Result<[Snippet, OpenBlockToken]> {
    return input.invoke(
      seq(
        "OPEN_BLOCK",
        tag("{{#"),
        SIMPLE_PATH,
        BLOCK_SPACED_TOKENS,
        maybe(BLOCK_PARAMS),
        maybe(WS),
        tag("}}")
      ).map(([open, path, head, params, ws, close]) =>
        ok(
          openBlock(
            {
              name: path,
              head: [...head, ...(params ? [params] : []), ...(ws ? [ws] : [])],
            },
            range(open, close)
          )
        )
      )
    );
  }
}

const OPEN_BLOCK = combinator(() => new OpenBlock());

// tslint:disable-next-line:max-classes-per-file
class BlockParams extends AbstractCombinator<BlockParamsToken> {
  readonly name = "BLOCK_PARAMS";

  invoke(input: Snippet): Result<[Snippet, BlockParamsToken]> {
    return input.invoke(
      seq(
        "BLOCK_PARAMS",
        tag("as |"),
        many(any("block param", ID, WS)),
        tag("|")
      ).map(([open, params, close]) =>
        ok(blockParams(params, range(open, close)))
      )
    );
  }
}

const BLOCK_PARAMS = combinator(() => new BlockParams());

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
