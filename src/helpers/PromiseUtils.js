"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function delay(timeout) {
    return new Promise(function (resolve) { return setTimeout(resolve, timeout); });
}
exports.default = delay;
