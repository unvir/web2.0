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
var Add_1 = __importDefault(require("@skbkontur/react-icons/Add"));
var Delete_1 = __importDefault(require("@skbkontur/react-icons/Delete"));
var NewTagBadge_less_1 = __importDefault(require("./NewTagBadge.less"));
function NewTagBadge(props) {
    var onRemove = props.onRemove, doNotShowNewTagCaption = props.doNotShowNewTagCaption, title = props.title, focus = props.focus, onClick = props.onClick;
    return React.createElement("div", { className: NewTagBadge_less_1.default({ tag: true, removeable: onRemove, focused: focus }) },
        onClick ? React.createElement("button", { type: "button", onClick: onClick, className: NewTagBadge_less_1.default("title", "clickable") },
            React.createElement(Add_1.default, null),
            " ",
            doNotShowNewTagCaption ? "" : "new tag ",
            title) : React.createElement("div", { className: NewTagBadge_less_1.default("title") },
            React.createElement(Add_1.default, null),
            " ",
            doNotShowNewTagCaption ? "" : "new tag ",
            title),
        onRemove && React.createElement("button", { type: "button", className: NewTagBadge_less_1.default("remove"), onClick: onRemove },
            React.createElement(Delete_1.default, null)));
}
exports.default = NewTagBadge;
