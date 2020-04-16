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
const hbs_parser_next_1 = require("hbs-parser-next");
require("./read-node");
let x = 0;
class Parsed extends component_1.default {
    constructor() {
        super(...arguments);
        this.perf = 0;
        this.#lastSource = "";
        this.#lastResult = null;
    }
    #lastSource;
    #lastResult;
    get parsed() {
        if (this.args.source === this.#lastSource && this.#lastResult !== null) {
            return this.#lastResult;
        }
        this.#lastSource = this.args.source;
        console.log(`parsing ${x++}`);
        let start = performance.now();
        let result = hbs_parser_next_1.read(this.args.source, { logging: "Return" /* Return */ });
        let end = performance.now();
        this.perf = end - start;
        this.#lastResult = result;
        return result;
    }
}
Parsed.template = component_1.hbs `
    <div class="perf">Last Parse Time: {{this.perf}}</div>

    <ReadNode @node={{this.parsed.root}} @trace={{this.parsed.trace}} />
  `;
__decorate([
    component_1.tracked
], Parsed.prototype, "perf", void 0);
exports.default = Parsed;
