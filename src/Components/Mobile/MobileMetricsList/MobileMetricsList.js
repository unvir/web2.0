"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var MobileMetricsListItem_1 = __importDefault(require("../MobileMetricsListItem/MobileMetricsListItem"));
var MobileMetricsList_less_1 = __importDefault(require("./MobileMetricsList.less"));
function MobileMetricsList(props) {
    var onSetMaintenance = props.onSetMaintenance, onRemove = props.onRemove, metrics = props.metrics;
    return React.createElement("div", { className: MobileMetricsList_less_1.default("root") }, Object.keys(metrics).map(function (x) { return React.createElement(MobileMetricsListItem_1.default, { key: x, name: x, value: metrics[x], onRemove: function () { return onRemove(x); }, onSetMaintenance: function (interval) { return onSetMaintenance(x, interval); } }); }));
}
exports.default = MobileMetricsList;
