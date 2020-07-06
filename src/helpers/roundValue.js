"use strict";
// ToDo написать тесты, а потом исправить ошибки eslint
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
function roundValue(value, placeholder) {
    if (typeof value !== "number") {
        return placeholder === false ? "" : "—";
    }
    var parsedValue = parseFloat(value.toString());
    var sizes = ["", " K", " M", " G", " T", " P", " E", " Z", " Y"];
    if (parsedValue === 0) {
        return "0";
    }
    var x = 0;
    while (Math.pow(1000, x + 1) < Math.abs(parsedValue)) {
        x++;
    }
    var prefix = (parsedValue / Math.pow(1000, x)).toFixed(2).toString();
    if (x === 0) {
        prefix = value.toFixed(2).toString();
    }
    var tailToCut = 0;
    while (prefix[prefix.length - (tailToCut + 1)] === "0") {
        tailToCut++;
    }
    if (prefix[prefix.length - (tailToCut + 1)] === ".") {
        tailToCut++;
    }
    return prefix.substring(0, prefix.length - tailToCut) + (sizes[x] || "");
}
exports.default = roundValue;
/* eslint-enable */ 
