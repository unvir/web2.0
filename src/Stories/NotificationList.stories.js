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
var NotificationList_1 = __importDefault(require("../Components/NotificationList/NotificationList"));
// item.timestamp + item.contact.id + item.event.sub_id;
var items = {
    "1505225036949654be-b364-4725-b2d2-e2b0ffbd058858661cb5-e6b2-4c8f-9a82-5e83673127d8": [{
            event: {
                timestamp: 1505222055,
                metric: "KE.houston.daemons.error.errors.Focus_Production_Bingo_ElFeederMspIndex.1",
                value: 0,
                state: "OK",
                trigger_id: "f51bdab7-11ed-4ac4-9836-8a88b184cb67",
                sub_id: "58661cb5-e6b2-4c8f-9a82-5e83673127d8",
                old_state: "ERROR",
                msg: ""
            },
            trigger: {
                id: "f51bdab7-11ed-4ac4-9836-8a88b184cb67",
                name: "Declarant errors",
                desc: "",
                targets: ["KE.houston.daemons.error.*.*ElFeeder*.*"],
                warn_value: 1,
                error_value: 2,
                __notifier_trigger_tags: ["critical", "ElFeeders", "Focus"]
            },
            contact: {
                type: "telegram",
                value: "@skbkontur",
                id: "949654be-b364-4725-b2d2-e2b0ffbd0588",
                user: "a.tolstov"
            },
            throttled: true,
            send_fail: 12,
            timestamp: 1505225036
        }],
    "15052239865d7c1ee2-78d8-46c0-bb67-16895303b4b058661cb5-e6b2-4c8f-9a82-5e83673127d8": [{
            event: {
                timestamp: 1505222055,
                metric: "KE.houston.daemons.error.errors.Focus_Production_Bingo_ElFeederMspIndex.1",
                value: 0,
                state: "OK",
                trigger_id: "f51bdab7-11ed-4ac4-9836-8a88b184cb67",
                sub_id: "58661cb5-e6b2-4c8f-9a82-5e83673127d8",
                old_state: "ERROR",
                msg: ""
            },
            trigger: {
                id: "f51bdab7-11ed-4ac4-9836-8a88b184cb67",
                name: "Focus Houston ElFeeders",
                desc: "",
                targets: ["KE.houston.daemons.error.*.*ElFeeder*.*"],
                warn_value: 1,
                error_value: 2,
                __notifier_trigger_tags: ["critical", "ElFeeders", "Focus"]
            },
            contact: {
                type: "mail",
                value: "user@skbkontur.ru",
                id: "5d7c1ee2-78d8-46c0-bb67-16895303b4b0",
                user: "a.tolstov"
            },
            throttled: false,
            send_fail: 0,
            timestamp: 1505223986
        }]
};
react_1.storiesOf("NotificationList", module).addDecorator(storybook_react_router_1.default()).add("Default", function () { return React.createElement(NotificationList_1.default, { items: items, onRemove: addon_actions_1.action("onRemove") }); }).add("Empty", function () { return React.createElement(NotificationList_1.default, { items: {}, onRemove: addon_actions_1.action("onRemove") }); });
