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
var ContactList_1 = __importDefault(require("../Components/ContactList/ContactList"));
var StoryUtils_1 = __importDefault(require("./StoryUtils"));
var ContactConfigs_1 = __importDefault(require("./Data/ContactConfigs"));
var commonProps = {
    contactDescriptions: ContactConfigs_1.default,
    onTestContact: StoryUtils_1.default("onTestContact", 2000),
    onRemoveContact: StoryUtils_1.default("onRemoveContact", 2000),
    onUpdateContact: StoryUtils_1.default("onUpdateContact", 2000),
    onAddContact: StoryUtils_1.default("onAddContact", 2000)
};
react_1.storiesOf("ContactList", module).add("empty", function () { return React.createElement(ContactList_1.default, __assign({}, commonProps, { items: [] })); }).add("one item", function () { return React.createElement(ContactList_1.default, __assign({}, commonProps, { items: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }] })); }).add("few items", function () { return React.createElement(ContactList_1.default, __assign({}, commonProps, { items: [{
            id: "1",
            type: "phone",
            user: "1",
            value: "9876543210"
        }, {
            id: "2",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }] })); });
