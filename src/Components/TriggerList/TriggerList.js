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
var TriggerListItem_1 = __importDefault(require("../TriggerListItem/TriggerListItem"));
var TriggerList_less_1 = __importDefault(require("./TriggerList.less"));
function TriggerList(props) {
    var items = props.items, searchMode = props.searchMode, onChange = props.onChange, onRemove = props.onRemove;
    return React.createElement("div", null, items.length === 0 ? React.createElement("div", { className: TriggerList_less_1.default("no-result") }, "No results :-(") : items.map(function (item) { return React.createElement("div", { className: TriggerList_less_1.default("item"), key: item.id },
        React.createElement(TriggerListItem_1.default, { searchMode: searchMode, data: item, onChange: onChange && (function (metric, maintenance) { return onChange(item.id, metric, maintenance); }), onRemove: onRemove && (function (metric) { return onRemove(item.id, metric); }) })); }));
}
exports.default = TriggerList;
