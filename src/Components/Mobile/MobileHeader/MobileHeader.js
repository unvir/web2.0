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
var react_router_dom_1 = require("react-router-dom");
var Delete_1 = __importDefault(require("@skbkontur/react-icons/Delete"));
var MobileHeader_less_1 = __importDefault(require("./MobileHeader.less"));
function MobileHeader(_a) {
    var color = _a.color, children = _a.children;
    return React.createElement("div", { style: { backgroundColor: color }, className: MobileHeader_less_1.default("root") }, children);
}
exports.default = MobileHeader;
MobileHeader.LeftButton = function LeftButton(props) {
    var icon = props.icon, linkTo = props.linkTo, onClick = props.onClick;
    if (linkTo != null) {
        return React.createElement(react_router_dom_1.Link, { className: MobileHeader_less_1.default("menu-button"), to: linkTo }, icon);
    }
    if (onClick != null) {
        return React.createElement("button", { type: "button", className: MobileHeader_less_1.default("menu-button"), onClick: function () {
                onClick();
                return false;
            } }, icon);
    }
    return React.createElement("div", { className: MobileHeader_less_1.default("menu-button") }, icon);
};
MobileHeader.RightButton = function RightButton(_a) {
    var icon = _a.icon, onClick = _a.onClick;
    return React.createElement("button", { type: "button", onClick: onClick, className: MobileHeader_less_1.default("filter-button") }, icon);
};
MobileHeader.Title = function Title(_a) {
    var children = _a.children;
    return React.createElement("div", { className: MobileHeader_less_1.default("title") }, children);
};
MobileHeader.HeaderInput = function HeaderInput(_a) {
    var placeholder = _a.placeholder, value = _a.value, onChange = _a.onChange, onClear = _a.onClear;
    return React.createElement("div", { className: MobileHeader_less_1.default("header-input") },
        React.createElement("div", { className: MobileHeader_less_1.default("header-input-wrapper") },
            React.createElement("input", { className: MobileHeader_less_1.default("input"), value: value, onChange: function (e) { return onChange(e, e.target.value); }, placeholder: placeholder }),
            React.createElement("button", { type: "button", className: MobileHeader_less_1.default("clear-button"), onClick: onClear },
                React.createElement(Delete_1.default, null))));
};
MobileHeader.HeaderBlock = function HeaderBlock(_a) {
    var color = _a.color, children = _a.children;
    return React.createElement("div", { style: { backgroundColor: color }, className: MobileHeader_less_1.default("header") }, children);
};
MobileHeader.DetailsBlock = function DetailsBlock(_a) {
    var children = _a.children;
    return React.createElement("div", { className: MobileHeader_less_1.default("details") }, children);
};
