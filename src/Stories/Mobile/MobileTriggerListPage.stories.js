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
var storybook_react_router_1 = __importDefault(require("storybook-react-router"));
var MobileTriggerListPage_1 = __importDefault(require("../../Components/Mobile/MobileTriggerListPage/MobileTriggerListPage"));
var Triggers_1 = __importDefault(require("../Data/Triggers"));
react_1.storiesOf("Mobile/TriggerListPage", module).addDecorator(storybook_react_router_1.default()).add("Default", function () { return React.createElement(MobileTriggerListPage_1.default, { triggers: Triggers_1.default, pageCount: 0, activePage: 0, selectedTags: [], onLoadMore: addon_actions_1.action("onLoadMore"), onOpenTagSelector: addon_actions_1.action("onOpenTagSelector"), onChange: function () { } }); }).add("Loading", function () { return React.createElement(MobileTriggerListPage_1.default, { triggers: null, selectedTags: [], pageCount: 0, activePage: 0, loading: true, onLoadMore: addon_actions_1.action("onLoadMore"), onOpenTagSelector: addon_actions_1.action("onOpenTagSelector"), onChange: function () { } }); });
