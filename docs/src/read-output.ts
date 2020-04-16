import Component, { hbs, tracked } from "@glimmerx/component";
import type { Result, ReadTrace, tokens } from "hbs-parser-next";
import { slice } from "hbs-parser-next";
import { eq, log, present } from "./utils";
import TraceNode from "./trace-node";
import { on, action } from "@glimmerx/modifier";
import { memoizeTracked } from "@glimmer/validator";
import TraceNodeModel from "./models/trace-node";
import ReadNodeModel from "./models/read-node";

export class Details {
  @tracked active: TraceNodeModel | undefined;
  @tracked isPinned = false;
}

class ReadNode extends Component {
  static template = hbs`
    <li>
    {{@node.kind}}

    {{#if @node.children}}
      <ul>
        {{#each @node.children as |child|}}
          <ReadNode @node={{child}} @source={{@source}} />
        {{/each}}
      </ul>
    {{else}}
      <code class="slice">{{json (slice @node.span @source)}}</code>
    {{/if}}
    </li>
  `;

  declare args: { node: ReadNodeModel; source: string };
}

export default class ReadOutput extends Component {
  static template = hbs`
    <style>
      .slice {
        color: #aaa;
      }

      .output-pane > ul > li li {
        padding-left: 1rem;
      }

      .output-pane > ul, .output-pane > ul > li {
        padding-left: 0;
      }

      ul.included {
        display: flex;
        flex-flow: row wrap;
      }

      ul.included li {
        padding-left: 0;
        white-space: nowrap;
      }

      ul.included li:not(:last-child)::after {
        content: "➡";
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    </style>
    {{log "hi" @source}}

    {{#if (eq @node.kind "ok")}}
      <div class="output-pane">
        <h1>Output</h1>
        <ul>
          <ReadNode @node={{this.readModel}} @source={{@source}} />
        </ul>
        <pre>{{json @node}}</pre>
      </div>
    {{else}}
      <div class="output-pane">
        <pre>ERROR</pre>
      </div>
    {{/if}}

    <div class="trace-pane">
      <div class="trace">
        <h1>Trace</h1>
        <ul>
        <TraceNode @node={{this.traceModel}} @details={{this.details}} />
        </ul>
      </div>

      <div class="trace-details">
        {{#if this.details.isPinned}}
          <p><button {{on "click" this.unpin}}>unpin</button></p>
        {{/if}}
        {{#if (present this.included)}}
          <ul class="included">
            {{#each this.included as |included|}}
              <li>{{included}}</li>
            {{/each}}
          </ul>
        {{/if}}
        <pre>{{json this.details.active}}</pre>
      </div>
    </div>
  `;

  declare args: {
    node: Result<tokens.Token>;
    trace: ReadTrace;
    at: number;
    source: string;
  };

  #details = memoizeTracked(() => {
    this.args.node;
    return new Details();
  });

  #traceModel = memoizeTracked(
    () => new TraceNodeModel(this.args.trace, [], this.args.at)
  );

  #readModel = memoizeTracked(() =>
    this.args.node.kind === "ok"
      ? new ReadNodeModel(this.args.node.value)
      : undefined
  );

  get included(): string[] | undefined {
    if (this.details.active) {
      return this.details.active.included;
    }

    return;
  }

  get traceModel(): TraceNodeModel {
    return this.#traceModel();
  }

  get readModel(): ReadNodeModel | undefined {
    return this.#readModel();
  }

  get details(): Details {
    return this.#details();
  }

  @action unpin(): void {
    this.details.isPinned = false;
  }
}

function json(o: object): string {
  return JSON.stringify(o, undefined, 2);
}
