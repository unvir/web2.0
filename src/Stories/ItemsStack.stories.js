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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var ItemsStack_1 = require("../Components/ItemsStack/ItemsStack");
function Outline(props) {
    var children = props.children;
    return React.createElement("div", { style: {
            padding: "5px 3px",
            height: "100%",
            border: "1px solid #333",
            boxSizing: "border-box"
        } }, children);
}
react_1.storiesOf("ItemsStack", module).add("RowStack", function () { return React.createElement(ItemsStack_1.RowStack, { block: true, gap: 2 },
    React.createElement(ItemsStack_1.Fit, null,
        React.createElement(Outline, null, "Fit Item")),
    React.createElement(ItemsStack_1.Fill, null,
        React.createElement(Outline, null, "Fill Item")),
    React.createElement(ItemsStack_1.Fixed, { width: 70 },
        React.createElement(Outline, null,
            "Item with fixed width and long, long word ",
            '"',
            "Eyjafjallaj\u00F6kull",
            '"'))); }).add("ColumnStack", function () { return React.createElement(ItemsStack_1.ColumnStack, { block: true, stretch: true, gap: 2, style: { height: "300px" } },
    React.createElement(ItemsStack_1.Fit, null,
        React.createElement(Outline, null, "Fit Item")),
    React.createElement(ItemsStack_1.Fill, null,
        React.createElement(Outline, null, "Fill Item (when parent have fixed height)")),
    React.createElement(ItemsStack_1.Fit, null,
        React.createElement(Outline, null, "Fit Item"))); });
