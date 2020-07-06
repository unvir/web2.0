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
var TriggerSimpleModeEditor_1 = __importDefault(require("../Components/TriggerSimpleModeEditor/TriggerSimpleModeEditor"));
react_1.storiesOf("TriggerSimpleModeEditor", module).addDecorator(function (story) { return React.createElement(react_ui_validations_1.ValidationContainer, null, story()); }).add("Rising", function () { return React.createElement(TriggerSimpleModeEditor_1.default, { watchFor: "rising", risingValues: { warn_value: 10, error_value: 20 }, fallingValues: { warn_value: null, error_value: null }, onChange: addon_actions_1.action("onChange"), onSwitch: addon_actions_1.action("onSwitch") }); }).add("Falling", function () { return React.createElement(TriggerSimpleModeEditor_1.default, { watchFor: "falling", risingValues: { warn_value: null, error_value: null }, fallingValues: { warn_value: 20, error_value: 10 }, onChange: addon_actions_1.action("onChange"), onSwitch: addon_actions_1.action("onSwitch") }); }).add("Both values", function () { return React.createElement(TriggerSimpleModeEditor_1.default, { watchFor: "rising", risingValues: { warn_value: 10, error_value: 20 }, fallingValues: { warn_value: 20, error_value: 10 }, onChange: addon_actions_1.action("onChange"), onSwitch: addon_actions_1.action("onSwitch") }); });
