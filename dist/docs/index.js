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
const core_1 = require("@glimmerx/core");
const modifier_1 = require("@glimmerx/modifier");
require("./src/parsed");
require("./src/bind");
require("file-loader?name=[name].[ext]!./docs.html");
const guid_1 = __importDefault(require("./src/guid"));
function textChange(element, callback) {
    element.addEventListener("input", e => callback(e.currentTarget));
    element.addEventListener("keydown", e => {
        let target = e.currentTarget;
        setTimeout(() => {
            callback(target);
        }, 0);
    });
    function change(e) {
        if (e.target && element.contains(e.target)) {
            callback(e.target);
        }
    }
    document.addEventListener("selectionchange", change);
    return () => {
        console.log("removing");
        document.removeEventListener("selectionchange", change);
    };
}
class MyComponent extends component_1.default {
    constructor() {
        super(...arguments);
        this.text = "{{hello world}}";
        this.cursor = { start: 0, end: 0 };
        this.isShowing = true;
    }
    update(target) {
        this.text = target.value;
        this.cursor = { start: target.selectionStart, end: target.selectionEnd };
    }
    get cursored() {
        let { text, cursor: { start, end }, } = this;
        return `${text.slice(0, start)}|${text.slice(start, end)}|${text.slice(end)}`;
    }
}
MyComponent.template = component_1.hbs `
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

      li.trace-node {
        position: relative;
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
        <textarea {{bind (box this "text")}}></textarea>
      </div>
      <Parsed @source={{this.text}} />
    </div>
  `;
__decorate([
    component_1.tracked
], MyComponent.prototype, "text", void 0);
__decorate([
    component_1.tracked
], MyComponent.prototype, "cursor", void 0);
__decorate([
    component_1.tracked
], MyComponent.prototype, "isShowing", void 0);
__decorate([
    modifier_1.action
], MyComponent.prototype, "update", null);
class TraceService {
}
__decorate([
    component_1.tracked
], TraceService.prototype, "trace", void 0);
exports.TraceService = TraceService;
core_1.renderComponent(MyComponent, {
    element: document.body,
    services: {
        guid: new guid_1.default(),
        trace: new TraceService(),
    },
});
