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
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var SubscriptionList_1 = __importDefault(require("../Components/SubscriptionList/SubscriptionList"));
var Schedule_1 = require("../Domain/Schedule");
var StoryUtils_1 = __importDefault(require("./StoryUtils"));
var commonProps = {
    onAddSubscription: StoryUtils_1.default("onAddSubscription", 2000),
    onRemoveSubscription: StoryUtils_1.default("onRemoveSubscription", 2000),
    onUpdateSubscription: StoryUtils_1.default("onUpdateSubscription", 2000),
    onTestSubscription: StoryUtils_1.default("onTestSubscription", 2000)
};
var tags = ["tag1", "tag2"];
var contacts = [{
        id: "1",
        type: "phone",
        user: "1",
        value: "9876543210"
    }, {
        id: "2",
        type: "email",
        user: "1",
        value: "test@mail.ru"
    }];
react_1.storiesOf("SubscriptionList", module).addDecorator(function (story) { return React.createElement(react_ui_validations_1.ValidationContainer, null, story()); }).add("Defualt", function () { return React.createElement(SubscriptionList_1.default, __assign({}, commonProps, { tags: tags, contacts: contacts, subscriptions: [{
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["1"],
            enabled: true,
            user: "1",
            id: "1",
            ignore_recoverings: false,
            ignore_warnings: false
        }, {
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["2"],
            enabled: true,
            user: "1",
            id: "2",
            ignore_recoverings: false,
            ignore_warnings: false
        }] })); }).add("WithDisabledItem", function () { return React.createElement(SubscriptionList_1.default, __assign({}, commonProps, { tags: tags, contacts: contacts, subscriptions: [{
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["1"],
            enabled: true,
            user: "1",
            id: "1",
            ignore_recoverings: false,
            ignore_warnings: false
        }, {
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["2"],
            enabled: false,
            user: "1",
            id: "2",
            ignore_recoverings: false,
            ignore_warnings: false
        }] })); }).add("FewChannelsForSubscription", function () { return React.createElement(SubscriptionList_1.default, __assign({}, commonProps, { tags: tags, contacts: contacts, subscriptions: [{
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["1"],
            enabled: true,
            user: "1",
            id: "1",
            ignore_recoverings: false,
            ignore_warnings: false
        }, {
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["1", "2"],
            enabled: false,
            user: "1",
            id: "2",
            ignore_recoverings: false,
            ignore_warnings: false
        }] })); }).add("WithManyTags", function () { return React.createElement(SubscriptionList_1.default, __assign({}, commonProps, { tags: tags, contacts: contacts, subscriptions: [{
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["1"],
            enabled: false,
            user: "1",
            id: "1",
            ignore_recoverings: false,
            ignore_warnings: false
        }, {
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["some-user:danger:warning", "EDI", "Octo", "KeWeb", "Moira", "Focus", "Pocus", "SomeAnotherProduct"],
            throttling: false,
            contacts: ["1"],
            enabled: true,
            user: "1",
            id: "2",
            ignore_recoverings: false,
            ignore_warnings: false
        }, {
            sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
            tags: ["1"],
            throttling: false,
            contacts: ["2"],
            enabled: false,
            user: "1",
            id: "3",
            ignore_recoverings: false,
            ignore_warnings: false
        }] })); });
