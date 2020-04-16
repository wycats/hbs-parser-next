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
Object.defineProperty(exports, "__esModule", { value: true });
const component_1 = __importStar(require("@glimmerx/component"));
require("./utils");
require("./trace-node");
const modifier_1 = require("@glimmerx/modifier");
const validator_1 = require("@glimmer/validator");
class Details {
    constructor() {
        this.isPinned = false;
    }
}
__decorate([
    component_1.tracked
], Details.prototype, "active", void 0);
__decorate([
    component_1.tracked
], Details.prototype, "isPinned", void 0);
exports.Details = Details;
class ReadNode extends component_1.default {
    constructor() {
        super(...arguments);
        this.#details = validator_1.memoizeTracked(() => {
            this.args.node;
            return new Details();
        });
    }
    #details;
    get details() {
        return this.#details();
    }
    unpin() {
        this.details.isPinned = false;
    }
}
ReadNode.template = component_1.hbs `
    {{#if (eq @node.kind "ok")}}
      <div class="output-pane">
        <h1>Output</h1>
        ⇒ {{@node.value.type}}
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
        <TraceNode @node={{@trace}} @details={{this.details}} />
        </ul>
      </div>

      <div class="trace-details">
        {{#if this.details.isPinned}}
          <p><button {{on "click" this.unpin}}>unpin</button></p>
        {{/if}}
        <pre>{{json this.details.active}}</pre>
      </div>
    </div>
  `;
__decorate([
    modifier_1.action
], ReadNode.prototype, "unpin", null);
exports.default = ReadNode;
function json(o) {
    return JSON.stringify(o, undefined, 2);
}
