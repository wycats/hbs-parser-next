"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function bind(element, box) {
    let { get, set } = inputKind(element);
    set(box.value);
    function update() {
        console.log(get());
        box.update(get());
    }
    element.addEventListener("input", update);
    return () => element.removeEventListener("input", update);
}
exports.bind = bind;
function box(object, prop) {
    return {
        value: object[prop],
        update(value) {
            object[prop] = value;
        },
    };
}
exports.box = box;
function inputKind(element) {
    if (element.tagName === "TEXTAREA") {
        return {
            get: () => element.value,
            set: value => (element.value = value),
        };
    }
    else if (element.tagName === "INPUT") {
        switch (element.type) {
            case "text":
                return {
                    get: () => element.value,
                    set: value => (element.value = value),
                };
            case "checkbox":
                return {
                    get: () => element.checked,
                    set: value => (element.checked = value),
                };
        }
    }
    throw new Error(`bind is only implemented for text, checkbox or textarea`);
}
