"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var ContactEditForm_1 = __importDefault(require("../Components/ContactEditForm/ContactEditForm"));
var ContactConfigs_1 = __importDefault(require("./Data/ContactConfigs"));
var commonProps = {
    onChange: addon_actions_1.action("onChange"),
    contactDescriptions: ContactConfigs_1.default
};
react_1.storiesOf("ContactEditForm", module).addDecorator(function (story) { return React.createElement(react_ui_validations_1.ValidationContainer, null, story()); }).add("empty", function () { return React.createElement(ContactEditForm_1.default, __assign({}, commonProps, { contactInfo: null })); }).add("filled", function () { return React.createElement(ContactEditForm_1.default, __assign({}, commonProps, { contactInfo: {
        type: "email",
        value: "test@email"
    } })); });
