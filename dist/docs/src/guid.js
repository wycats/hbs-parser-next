"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GUIDS = new WeakMap();
class GuidService {
    constructor() {
        this.#guid = 1;
    }
    #guid;
    guid(obj) {
        let guid = GUIDS.get(obj);
        if (guid) {
            return guid;
        }
        guid = `${this.#guid++}`;
        GUIDS.set(obj, guid);
        return guid;
    }
}
exports.default = GuidService;
