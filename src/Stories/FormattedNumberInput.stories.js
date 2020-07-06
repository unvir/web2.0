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
var addon_actions_1 = require("@storybook/addon-actions");
var FormattedNumberInput_1 = __importDefault(require("../Components/FormattedNumberInput/FormattedNumberInput"));
react_1.storiesOf("FormattedNumberInput", module).add("Default", function () { return React.createElement(FormattedNumberInput_1.default, { id: "id-1", width: 200, value: null, onChange: addon_actions_1.action("onChange") }); }).add("With value", function () { return React.createElement(FormattedNumberInput_1.default, { id: "id-2", width: 200, value: 12.3456789, onChange: addon_actions_1.action("onChange") }); }).add("With edit format", function () { return React.createElement(FormattedNumberInput_1.default, { id: "id-3", width: 200, value: 12.3456789, onChange: addon_actions_1.action("onChange"), editFormat: "0[.]000" }); }).add("With view and edit format", function () { return React.createElement(FormattedNumberInput_1.default, { id: "id-4", width: 200, value: 12.3456789, onChange: addon_actions_1.action("onChange"), viewFormat: "0[.]0", editFormat: "0[.]000" }); }).add("With custom align", function () { return React.createElement(FormattedNumberInput_1.default, { id: "id-5", width: 200, align: "right", value: 12.3456789, onChange: addon_actions_1.action("onChange") }); });
