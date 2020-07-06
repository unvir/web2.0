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
var SubscriptionEditor_1 = __importDefault(require("../Components/SubscriptionEditor/SubscriptionEditor"));
var Schedule_1 = require("../Domain/Schedule");
react_1.storiesOf("SubscriptionEditor", module).addDecorator(function (story) { return React.createElement(react_ui_validations_1.ValidationContainer, null, story()); }).add("empty", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: [],
        throttling: false,
        any_tags: false,
        contacts: [],
        enabled: true,
        ignore_recoverings: false,
        ignore_warnings: false,
        plotting: {
            enabled: true,
            theme: "light"
        }
    } }); }).add("with data", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: ["tag1"],
        throttling: false,
        contacts: ["1"],
        enabled: true,
        any_tags: false,
        user: "1",
        id: "1",
        ignore_recoverings: false,
        ignore_warnings: false
    } }); }).add("With Degradation", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: ["tag1"],
        throttling: false,
        contacts: ["1"],
        enabled: true,
        user: "1",
        id: "1",
        ignore_recoverings: true,
        ignore_warnings: false,
        any_tags: false
    } }); }).add("Without graph", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: ["tag1"],
        throttling: false,
        contacts: ["1"],
        enabled: true,
        user: "1",
        id: "1",
        ignore_recoverings: false,
        ignore_warnings: false,
        any_tags: false,
        plotting: {
            enabled: false,
            theme: "dark"
        }
    } }); }).add("With graph in dark theme", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: ["tag1"],
        throttling: false,
        contacts: ["1"],
        enabled: true,
        user: "1",
        id: "1",
        ignore_recoverings: false,
        ignore_warnings: false,
        any_tags: false,
        plotting: {
            enabled: true,
            theme: "dark"
        }
    } }); }).add("With graph in light theme", function () { return React.createElement(SubscriptionEditor_1.default, { onChange: addon_actions_1.action("onChange"), tags: ["tag1", "tag2"], contacts: [{
            id: "1",
            type: "email",
            user: "1",
            value: "test@mail.ru"
        }], subscription: {
        sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
        tags: ["tag1"],
        throttling: false,
        contacts: ["1"],
        enabled: true,
        user: "1",
        id: "1",
        ignore_recoverings: false,
        ignore_warnings: false,
        any_tags: false,
        plotting: {
            enabled: true,
            theme: "light"
        }
    } }); });
