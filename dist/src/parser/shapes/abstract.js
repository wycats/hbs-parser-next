"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AbstractShape {
}
exports.AbstractShape = AbstractShape;
// tslint:disable-next-line:max-classes-per-file
class AbstractInfallibleShape {
}
exports.AbstractInfallibleShape = AbstractInfallibleShape;
function or(left, right) {
    return {
        expandFallible(iterator) {
            let leftResult = left.expandFallible(iterator);
            if (leftResult.kind === "ok") {
                return leftResult;
            }
            return right.expandFallible(iterator);
        },
    };
}
exports.or = or;
