"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function interpolation(expr, span) {
    return {
        type: 0 /* Interpolation */,
        expr,
        span,
    };
}
exports.interpolation = interpolation;
function id(name, span) {
    return {
        type: 2 /* Identifier */,
        name,
        span,
    };
}
exports.id = id;
function path(head, tail = []) {
    if (tail.length > 0) {
        return {
            type: 1 /* Path */,
            head,
            tail,
            span: { start: head.span.start, end: tail[tail.length - 1].span.end },
        };
    }
    else {
        return {
            type: 1 /* Path */,
            head,
            span: head.span,
        };
    }
}
exports.path = path;
