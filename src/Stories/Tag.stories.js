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
var Tag_1 = __importDefault(require("../Components/Tag/Tag"));
var NewTagBadge_1 = __importDefault(require("../Components/NewTagBadge/NewTagBadge"));
react_1.storiesOf("Tag", module).addDecorator(function (story) { return React.createElement("div", { style: { padding: 5 } }, story()); }).addParameters({
    creevey: {
        skip: {
            stories: "NewTagBadge with remove",
            reasons: "Unstable draw button angles with border-radius"
        }
    }
}).add("Default", function () { return React.createElement(Tag_1.default, { title: "abonentsErrors" }); }).add("Long title", function () { return React.createElement(Tag_1.default, { title: "dmitry:ReplicaClusterError.ReplicaClusterWarn" }); }).add("Short title", function () { return React.createElement(Tag_1.default, { title: "test" }); }).add("With onClick", function () { return React.createElement(Tag_1.default, { title: "abonentsErrors", onClick: addon_actions_1.action("onClick") }); }).add("With onRemove", function () { return React.createElement(Tag_1.default, { title: "ReplicaClusterWarn", onRemove: addon_actions_1.action("onRemove") }); }).add("With onClick and onRemove", function () { return React.createElement(Tag_1.default, { title: "ReplicaClusterError", onClick: addon_actions_1.action("onClick"), onRemove: addon_actions_1.action("onRemove") }); }).add("Focused", function () { return React.createElement(Tag_1.default, { title: "ReplicaClusterError", focus: true, onClick: addon_actions_1.action("onClick"), onRemove: addon_actions_1.action("onRemove") }); }).add("NewTagBadge", function () { return React.createElement(NewTagBadge_1.default, { title: "ReplicaClusterError", onClick: addon_actions_1.action("onClick") }); }).add("NewTagBadgeFocused", function () { return React.createElement(NewTagBadge_1.default, { title: "ReplicaClusterError", focus: true, onClick: addon_actions_1.action("onClick") }); }).add("NewTagBadge with remove", function () { return React.createElement(NewTagBadge_1.default, { title: "ReplicaClusterError", onClick: addon_actions_1.action("onClick"), onRemove: addon_actions_1.action("onRemove") }); });
