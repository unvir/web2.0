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
exports.default = void 0;
var React = __importStar(require("react"));
var Token_1 = __importDefault(require("../Token/Token"));
var SearchSelector_less_1 = __importDefault(require("./SearchSelector.less"));
function SelectorResultsView(_a) {
    var tokens = _a.tokens, onSelect = _a.onSelect;
    return React.createElement(React.Fragment, null, tokens.length === 0 ? React.createElement("p", { className: SearchSelector_less_1.default("help-search") },
        "There are no tags for your request. Press",
        " ",
        React.createElement("span", { className: SearchSelector_less_1.default("keyboard-key") }, "Enter"),
        " for full text search") : React.createElement(React.Fragment, null,
        React.createElement("p", { className: SearchSelector_less_1.default("help-search") },
            "Press ",
            React.createElement("span", { className: SearchSelector_less_1.default("keyboard-key") }, "Enter"),
            " for full text search or select a tag from list with mouse click"),
        React.createElement("ul", { className: SearchSelector_less_1.default("token-list") }, tokens.map(function (token) { return React.createElement("li", { className: SearchSelector_less_1.default("token-list-item"), key: token },
            React.createElement(Token_1.default, { type: "selectable", onClick: onSelect }, token)); }))));
}
exports.default = SelectorResultsView;
