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
var Tag_1 = __importDefault(require("../Tag/Tag"));
var TagGroup_less_1 = __importDefault(require("./TagGroup.less"));
function TagGroup(props) {
    var tags = props.tags, onClick = props.onClick, onRemove = props.onRemove;
    return React.createElement("div", { className: TagGroup_less_1.default("list") }, tags.map(function (tag) { return React.createElement("div", { key: tag, className: TagGroup_less_1.default("item") },
        React.createElement(Tag_1.default, { title: tag, onClick: onClick && (function () { return onClick(tag); }), onRemove: onRemove && (function () { return onRemove(tag); }) })); }));
}
exports.default = TagGroup;
