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
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var Layout_1 = __importDefault(require("../Components/Layout/Layout"));
function SpaceFiller(props) {
    var _a = props.width, width = _a === void 0 ? "100%" : _a, _b = props.height, height = _b === void 0 ? 300 : _b, _c = props.label, label = _c === void 0 ? "Children" : _c;
    return React.createElement("div", { style: {
            height: height,
            width: width,
            border: "1px solid #dee0e3",
            boxSizing: "border-box",
            color: "#000",
            display: "flex",
            flexFlow: "column",
            flex: "1 1 auto",
            alignItems: "center",
            justifyContent: "center",
            background: "repeating-linear-gradient(45deg, rgba(0,0,0,0.05), rgba(0,0,0,0.05) 10px, rgba(255,255,255,0) 10px, rgba(255,255,255,0) 20px )"
        } }, label);
}
SpaceFiller.defaultProps = {
    width: 300,
    height: "100%",
    label: "Children"
};
react_1.storiesOf("Layout", module).add("Default", function () { return React.createElement(Layout_1.default, null,
    React.createElement(Layout_1.default.Content, null,
        React.createElement(SpaceFiller, null))); }).add("With Error", function () { return React.createElement(Layout_1.default, { error: "Error message here" },
    React.createElement(Layout_1.default.Content, null,
        React.createElement(SpaceFiller, null))); }).add("With Plate", function () { return React.createElement(Layout_1.default, null,
    React.createElement(Layout_1.default.Plate, null,
        React.createElement(SpaceFiller, { height: 50, label: "Plate" })),
    React.createElement(Layout_1.default.Content, null,
        React.createElement(SpaceFiller, null))); }).add("With Paging", function () { return React.createElement(Layout_1.default, null,
    React.createElement(Layout_1.default.Content, null,
        React.createElement(SpaceFiller, null)),
    React.createElement(Layout_1.default.Footer, null,
        React.createElement(SpaceFiller, { height: 30, label: "Paging" }))); }).add("With Plate and paging", function () { return React.createElement(Layout_1.default, null,
    React.createElement(Layout_1.default.Plate, null,
        React.createElement(SpaceFiller, { height: 50, label: "Plate" })),
    React.createElement(Layout_1.default.Content, null,
        React.createElement(SpaceFiller, null)),
    React.createElement(Layout_1.default.Footer, null,
        React.createElement(SpaceFiller, { height: 30, label: "Paging" }))); });
