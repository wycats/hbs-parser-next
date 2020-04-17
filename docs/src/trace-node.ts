import Component, { hbs, tracked } from "@glimmerx/component";
import {
  ReadTrace,
  Snippet,
  Result,
  Debuggable,
  formatDebuggable,
  trunc,
} from "hbs-parser-next";
import { service } from "@glimmerx/service";
import type GuidService from "./guid";
import { not, unwrap } from "./utils";
import { on, action } from "@glimmerx/modifier";
import { memoizeTracked } from "@glimmer/validator";
import type { Details } from "./read-output";
import type TraceNodeModel from "./models/trace-node";

function format(output: Result<[Snippet, Debuggable]>): string {
  if (output.kind === "err") {
    return output.reason;
  } else {
    return formatDebuggable(output.value[1]);
  }
}

class TraceNode extends Component {
  static template = hbs`
    <li
      class="trace-node {{@node.kind}} {{if this.isExpanded "active"}} {{if this.isDeepExpanded "deep-active"}}"
    >
      <p class="trace-name" {{on "mouseenter" this.hoverDetails}}>
        <code>{{trunc @node.snippet}}</code>
        {{#if @node.isShallowExpandable}}
          <button class="shallow-expand">
          {{#if this.isExpanded}}⯆{{else}}⯈{{/if}}
          </button>
        {{/if}}
        <span class="name" {{on "click" this.toggleExpanded}}>{{@node.name}}</span>
        <span class="output">🠪 {{format this.output}}</span>
        {{#if (not @isDeepExpanded)}}
          {{#if @node.isExpandable}}
            <button class="expand" {{on "click" this.toggleDeepExpanded}}>
            {{#if this.isDeepExpanded}}
              ➖
            {{else}}
              ➕
            {{/if}}
            </button>
          {{/if}}
        {{/if}}
        <button {{on "click" this.togglePin}}>
          {{#if this.isPinned}}
            📌
          {{else}}
            pin
          {{/if}}
        </button>
      </p>

      {{#if (not @node.isLeaf)}}
        <ul>
          {{#each @node.children as |child|}}
            <TraceNode @node={{child}} @isDeepExpanded={{this.isDeepExpanded}} @details={{@details}} />
          {{/each}}
        </ul>
      {{/if}}
    </li>
  `;

  declare args: {
    node: TraceNodeModel;
    isDeepExpanded: boolean | undefined;
    details: Details;
  };
  @service guid!: GuidService;
  @tracked isShallowExpanded = false;
  @tracked localDeepExpanded = false;

  get output(): Result<[Snippet, Debuggable]> {
    return unwrap(this.args.node.output);
  }

  get isExpandable(): boolean {
    return (
      this.output.kind === "err" &&
      this.args.node.children.some(child => unwrap(child.output).kind === "err")
    );
  }

  get isShallowExpandable(): boolean {
    return this.isExpandable && !this.isDeepExpanded;
  }

  get isExpanded(): boolean {
    return this.isShallowExpanded || this.isDeepExpanded;
  }

  get isDeepExpanded(): boolean {
    return this.localDeepExpanded || this.args.isDeepExpanded || false;
  }

  get isPinned(): boolean {
    return (
      this.args.details.isPinned && this.args.details.active === this.args.node
    );
  }

  @action hoverDetails(): void {
    if (!this.args.details.isPinned) {
      this.args.details.active = this.args.node;
    }
  }

  @action togglePin(): void {
    if (this.isPinned) {
      this.args.details.isPinned = false;
    } else {
      this.args.details.active = this.args.node;
      this.args.details.isPinned = true;
    }
  }

  @action
  toggleExpanded(e: Event): void {
    e.stopPropagation();
    this.isShallowExpanded = !this.isShallowExpanded;
  }

  @action
  toggleDeepExpanded(e: Event): void {
    e.stopPropagation();
    this.localDeepExpanded = !this.isDeepExpanded;
  }
}

export default TraceNode;
