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
var Delete_1 = __importDefault(require("@skbkontur/react-icons/Delete"));
var color_hash_1 = __importDefault(require("color-hash"));
var Tag_less_1 = __importDefault(require("./Tag.less"));
function getColor(title) {
    var getBgColor = new color_hash_1.default({ lightness: 0.6, saturation: 0.25 });
    var getTextColor = new color_hash_1.default({ lightness: 0.98, saturation: 0 });
    return {
        backgroundColor: getBgColor.hex(title),
        color: getTextColor.hex(title)
    };
}
function Tag(props) {
    var title = props.title, focus = props.focus, onRemove = props.onRemove, onClick = props.onClick;
    if (typeof onClick === "function") {
        return React.createElement("div", { className: Tag_less_1.default({ tag: true, focused: focus }), style: getColor(title) },
            React.createElement("button", { type: "button", onClick: onClick, className: Tag_less_1.default("title", "clickable") }, title));
    }
    if (typeof onRemove === "function") {
        var handleRemove = function () {
            onRemove(title);
        };
        return React.createElement("div", { className: Tag_less_1.default({ tag: true, removeable: true, focused: focus }), style: getColor(title) },
            React.createElement("div", { className: Tag_less_1.default("title") }, title),
            React.createElement("button", { type: "button", className: Tag_less_1.default("remove"), onClick: handleRemove },
                React.createElement(Delete_1.default, null)));
    }
    return React.createElement("div", { className: Tag_less_1.default({ tag: true, removeable: onRemove, focused: focus }), style: getColor(title) },
        React.createElement("div", { className: Tag_less_1.default("title") }, title));
}
exports.default = Tag;
