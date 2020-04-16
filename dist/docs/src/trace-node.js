"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importStar(require("@glimmerx/component"));
const hbs_parser_next_1 = require("hbs-parser-next");
const service_1 = require("@glimmerx/service");
const utils_1 = require("./utils");
const modifier_1 = require("@glimmerx/modifier");
const validator_1 = require("@glimmer/validator");
const trace_node_1 = __importDefault(require("./models/trace-node"));
function format(output) {
    if (output.kind === "err") {
        return output.reason;
    }
    else {
        return hbs_parser_next_1.formatDebuggable(output.value[1]);
    }
}
class TraceNode extends component_1.default {
    constructor() {
        super(...arguments);
        this.isShallowExpanded = false;
        this.localDeepExpanded = false;
        this.#model = validator_1.memoizeTracked(() => new trace_node_1.default(this.args.node));
    }
    #model;
    get model() {
        return this.#model();
    }
    get output() {
        return utils_1.unwrap(this.args.node.output);
    }
    get isExpandable() {
        return (this.output.kind === "err" &&
            this.args.node.children.some(child => utils_1.unwrap(child.output).kind === "err"));
    }
    get isShallowExpandable() {
        return this.isExpandable && !this.isDeepExpanded;
    }
    get isExpanded() {
        return this.isShallowExpanded || this.isDeepExpanded;
    }
    get isDeepExpanded() {
        return this.localDeepExpanded || this.args.isDeepExpanded || false;
    }
    get isPinned() {
        return (this.args.details.isPinned && this.args.details.active === this.model);
    }
    hoverDetails() {
        if (!this.args.details.isPinned) {
            this.args.details.active = this.model;
        }
    }
    togglePin() {
        if (this.isPinned) {
            this.args.details.isPinned = false;
        }
        else {
            this.args.details.active = this.model;
            this.args.details.isPinned = true;
        }
    }
    toggleExpanded(e) {
        e.stopPropagation();
        this.isShallowExpanded = !this.isShallowExpanded;
    }
    toggleDeepExpanded(e) {
        e.stopPropagation();
        this.localDeepExpanded = !this.isDeepExpanded;
    }
}
TraceNode.template = component_1.hbs `
    <li
      class="trace-node {{this.model.kind}} {{if this.isExpanded "active"}} {{if this.isDeepExpanded "deep-active"}}"
    >
      <p class="trace-name" {{on "mouseenter" this.hoverDetails}}>
        {{#if this.model.isShallowExpandable}}
          <button class="shallow-expand">
          {{#if this.isExpanded}}⯆{{else}}⯈{{/if}}
          </button>
        {{/if}}
        <span class="name" {{on "click" this.toggleExpanded}}>{{this.model.name}}</span>
        <span class="output">➡ {{format this.output}}</span>
        {{#if (not @isDeepExpanded)}}
          {{#if this.model.isExpandable}}
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

      {{#if (not this.model.isLeaf)}}
        <ul>
          {{#each @node.children as |child|}}
            <TraceNode @node={{child}} @isDeepExpanded={{this.isDeepExpanded}} @details={{@details}} />
          {{/each}}
        </ul>
      {{/if}}
    </li>
  `;
__decorate([
    service_1.service
], TraceNode.prototype, "guid", void 0);
__decorate([
    component_1.tracked
], TraceNode.prototype, "isShallowExpanded", void 0);
__decorate([
    component_1.tracked
], TraceNode.prototype, "localDeepExpanded", void 0);
__decorate([
    modifier_1.action
], TraceNode.prototype, "hoverDetails", null);
__decorate([
    modifier_1.action
], TraceNode.prototype, "togglePin", null);
__decorate([
    modifier_1.action
], TraceNode.prototype, "toggleExpanded", null);
__decorate([
    modifier_1.action
], TraceNode.prototype, "toggleDeepExpanded", null);
exports.default = TraceNode;
