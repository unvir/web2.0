"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownColor = void 0;
var Status_1 = require("../../../Domain/Status");
var variables_less_1 = __importDefault(require("./variables.less"));
var okColor = variables_less_1.default.okColor, errorColor = variables_less_1.default.errorColor, warnColor = variables_less_1.default.warnColor, noDataColor = variables_less_1.default.noDataColor, unknownColor = variables_less_1.default.unknownColor;
exports.unknownColor = unknownColor;
function getStatusColor(status) {
    if (status === Status_1.Statuses.OK) {
        return okColor;
    }
    if (status === Status_1.Statuses.NODATA) {
        return noDataColor;
    }
    if (status === Status_1.Statuses.WARN) {
        return warnColor;
    }
    if (status === Status_1.Statuses.ERROR) {
        return errorColor;
    }
    if (status === Status_1.Statuses.EXCEPTION) {
        return errorColor;
    }
    if (status === Status_1.Statuses.DEL) {
        return errorColor;
    }
    return "";
}
exports.default = getStatusColor;
