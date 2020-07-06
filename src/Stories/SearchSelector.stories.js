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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var SearchSelector_1 = __importDefault(require("../Components/SearchSelector/SearchSelector"));
var subscribed = new Array(5).fill("subscribed").map(function (v, i) { return v + " " + i; });
var remaining = __spreadArrays(subscribed, new Array(20).fill("remaining").map(function (v, i) { return v + " " + i; }));
react_1.storiesOf("SearchSelector", module).add("default", function () { return React.createElement(SearchSelector_1.default, { search: "", selectedTokens: [], subscribedTokens: subscribed, remainingTokens: remaining, onChange: addon_actions_1.action("onChange"), onSearch: function () { } }); }).add("with selected", function () { return React.createElement(SearchSelector_1.default, { search: "", selectedTokens: ["selected"], subscribedTokens: subscribed, remainingTokens: remaining, onChange: addon_actions_1.action("onSearch"), onSearch: function () { } }); }).add("with search query", function () { return React.createElement(SearchSelector_1.default, { search: "remaining", selectedTokens: ["selected"], subscribedTokens: subscribed, remainingTokens: remaining, onSearch: function () { }, onChange: addon_actions_1.action("onSearch") }); }).add("no tag for result", function () { return React.createElement(SearchSelector_1.default, { search: "trolo-lo-lo", selectedTokens: ["selected"], subscribedTokens: subscribed, remainingTokens: remaining, onSearch: function () { }, onChange: addon_actions_1.action("onSearch") }); });
