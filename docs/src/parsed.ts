import Component, { hbs, tracked } from "@glimmerx/component";
import { read, LoggingType, tokens, ReadTrace, Result } from "hbs-parser-next";
import ReadOutput from "./read-output";

let x = 0;

type ParseResult = { root: Result<tokens.RootToken>; trace: ReadTrace };

export default class Parsed extends Component {
  static template = hbs`
    <div class="perf">Last Parse Time: {{this.perf}}</div>

    <ReadOutput @node={{this.parsed.root}} @source={{@source}} @trace={{this.parsed.trace}} @at={{@at}} />
  `;

  declare args: { source: string };

  @tracked perf = 0;

  #lastSource = "";
  #lastResult: ParseResult | null = null;

  get parsed(): ParseResult {
    if (this.args.source === this.#lastSource && this.#lastResult !== null) {
      return this.#lastResult;
    }

    this.#lastSource = this.args.source;
    console.log(`parsing ${x++}`);
    let start = performance.now();
    let result = read(this.args.source, { logging: LoggingType.Return });
    let end = performance.now();
    this.perf = end - start;
    this.#lastResult = result;
    return result;
  }
}
