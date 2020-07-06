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
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var TriggerModeEditor_1 = __importDefault(require("../Components/TriggerModeEditor/TriggerModeEditor"));
react_1.storiesOf("TriggerModeEditor", module).addDecorator(function (story) { return React.createElement(react_ui_validations_1.ValidationContainer, null, story()); }).add("rising", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "rising", expression: "", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange") }); }).add("rising with value", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "rising", expression: "", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: 1, error_value: 2 }, onChange: addon_actions_1.action("onChange") }); }).add("falling", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "falling", expression: "", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange") }); }).add("falling with value", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "falling", expression: "", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: 2, error_value: 1 }, onChange: addon_actions_1.action("onChange") }); }).add("expression", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "expression", expression: "", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange") }); }).add("expression with value", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "expression", expression: "t1 >= 10 ? ERROR : (t1 >= 1 ? WARN : OK)", validateExpression: addon_actions_1.action("validateExpression"), value: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange") }); }).add("expression with disabled simple mode", function () { return React.createElement(TriggerModeEditor_1.default, { triggerType: "expression", expression: "t1 >= 10 ? ERROR : (t1 >= 1 ? WARN : OK)", validateExpression: addon_actions_1.action("validateExpression"), disableSimpleMode: true, value: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange") }); });
