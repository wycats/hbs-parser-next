import Component, { hbs, tracked } from "@glimmerx/component";
import { renderComponent } from "@glimmerx/core";
import { action } from "@glimmerx/modifier";
import Parsed from "./src/parsed";
import { bind, box } from "./src/bind";
import type { Destructor } from "./src/bind";
import "file-loader?name=[name].[ext]!./docs.html";
import GuidService from "./src/guid";
import type { ReadTrace } from "hbs-parser-next";
import { unwrap } from "./src/utils";

class MyComponent extends Component {
  static template = hbs`
    <style>
      textarea {
        width: 100%;
        height: 5rem;
      }

      html {
        font-family: Helvetica, Arial, sans-serif;
        box-sizing: border-box;
        font-size: 16px;
      }

      *, *:before, *:after {
        box-sizing: border-box;
      }

      body, h1, h2, h3, h4, h5, h6, p, ol, ul, pre {
        margin: 0;
        padding: 0;
        font-weight: normal;
      }

      ol, ul {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      li {
        padding-left: 1rem;
        line-height: 1.6;
      }

      li.trace-node button {
        border: 0;
        font-family: system-ui, sans-serif;
        font-size: 0.8rem;
        line-height: 1;
        white-space: no-wrap;
        text-decoration: none;
        padding: 0.25rem 0.5rem;
        margin: 0.25rem;
        cursor: pointer;
      }

      body {
        overflow: hidden;
      }

      li.trace-node button.shallow-expand {

      }

      li.trace-node button.expand {
        border-radius: 0.25rem;
        background: #c66;
        color: #fff;
      }

      li.trace-node .trace-name span.output {
        color: #999;
      }

      li.trace-node .trace-name span.expand {
        color: #666;
      }

      li.trace-node .trace-name {
        color: #3a3;
      }

      li.trace-node.err .trace-name {
        color: red;
      }

      li.trace-node.optional-err .trace-name {
        color: #f99;
      }

      li.trace-node.err.expand-all ul {
        display: block;
      }

      li.trace-node.err > ul {
        display: none;
      }

      li.trace-node.err.active > ul {
        display: block;
      }

      li.trace-node.err.deep-active ul {
        display: block;
      }

      .trace-name:hover {
        background-color: #9f9;
        color: #fff;
      }


      div.page {
        display: grid;
        grid-template:
          "input perf trace-pane" 1rem
          "input output trace-pane" 1fr /
          20% 20% 60%;
        gap: 1rem;
        height: 100vh;
      }

      div.input-pane {
        grid-area: input;
        padding-right: 1rem;
        border-right: 1px solid #666;
      }

      div.output-pane {
        grid-area: output;
      }

      div.trace > ul {
        position: relative;
        padding-left: 8rem;
      }

      p.trace-name code {
        position: absolute;
        left: 0;
      }

      div.trace-pane {
        border-left: 1px solid #666;
        padding-left: 1rem;
        grid-area: trace-pane;
        display: grid;

        grid-template:
          "trace" 60%
          "trace-details" 40%;
      }

      div.trace-pane .trace {
        grid-area: trace;
        overflow-y: scroll;
        border-bottom: 1px solid #aaa;
      }

      div.trace-pane .trace-details {
        grid-area: trace-details;
        overflow-y: scroll;
        padding-top: 1rem;
      }

      div.perf {
        grid-area: perf;
      }
    </style>

    <div class="page">
      <div class="input-pane">
        <h1>Input</h1>
        <pre>{{this.cursored}}</pre>
        <textarea {{textChange this.update}} {{bind (box this "text")}}></textarea>
      </div>
      <Parsed @source={{this.text}} @at={{this.cursor.start}} />
    </div>
  `;

  @tracked text = "{{hello world}}";
  @tracked cursor = { start: 0, end: 0 };
  @tracked isShowing = true;

  @action
  update(target: HTMLTextAreaElement): void {
    this.text = target.value;
    this.cursor = { start: target.selectionStart, end: target.selectionEnd };
  }

  get cursored(): string {
    let {
      text,
      cursor: { start, end },
    } = this;

    return `${text.slice(0, start)}|${text.slice(start, end)}|${text.slice(
      end
    )}`;
  }
}

type Inputish = {
  value: string;
  selectionStart: number;
  selectionEnd: number;
};

function textChange(
  element: HTMLElement,
  callback: (element: Inputish) => void
): Destructor {
  element.addEventListener("focus", e =>
    setTimeout(() => callback((unwrap(e.target) as unknown) as Inputish), 0)
  );

  element.addEventListener("input", e =>
    callback((e.currentTarget as unknown) as Inputish)
  );
  element.addEventListener("keydown", e => {
    let target = e.currentTarget;
    setTimeout(() => {
      callback((target as unknown) as Inputish);
    }, 0);
  });

  function change(e: Event): void {
    if (e.target && element.contains(e.target as Node)) {
      callback((e.target as unknown) as Inputish);
    }
  }

  document.addEventListener("selectionchange", change);

  return (): void => {
    document.removeEventListener("selectionchange", change);
  };
}

export class TraceService {
  @tracked trace!: ReadTrace | null;
}

renderComponent(MyComponent, {
  element: document.body,
  services: {
    guid: new GuidService(),
    trace: new TraceService(),
  },
});
