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
var storybook_react_router_1 = __importDefault(require("storybook-react-router"));
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var Status_1 = require("../Domain/Status");
var TriggerEditForm_1 = __importDefault(require("../Components/TriggerEditForm/TriggerEditForm"));
var sourceData = {
    is_remote: false,
    id: "69b1-91c1-423f-ab3b-d1a8",
    name: "ELK. Low disk space",
    desc: "",
    targets: ["aliasByNode(DevOps.system.vm-elk*.disk.root.gigabyte_percentfree,2)"],
    warn_value: 20,
    error_value: 5,
    tags: ["devops", "critical"],
    ttl_state: "NODATA",
    ttl: 600,
    sched: {
        days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
        tzOffset: -300,
        startOffset: 0,
        endOffset: 1439
    },
    patterns: ["DevOps.system.vm-elk*.disk.root.gigabyte_percentfree"],
    trigger_type: "falling",
    throttling: 0,
    expression: "",
    notify_about_new_metrics: false,
    mute_new_metrics: false
};
var allTags = ["devops", "critical", "error", "warning", "del", "moira"];
var stories = [{
        title: "Empty",
        data: {
            is_remote: false,
            name: "",
            desc: "",
            targets: [""],
            tags: [],
            patterns: [],
            expression: "",
            ttl: 600,
            ttl_state: Status_1.Statuses.NODATA,
            sched: {
                startOffset: 0,
                endOffset: 1439,
                tzOffset: -300,
                days: [{ name: "Mon", enabled: true }, { name: "Tue", enabled: true }, { name: "Wed", enabled: true }, { name: "Thu", enabled: true }, { name: "Fri", enabled: true }, { name: "Sat", enabled: true }, { name: "Sun", enabled: true }]
            }
        }
    }, {
        title: "Simple",
        data: __assign(__assign({}, sourceData), { targets: ["aliasByNode(DevOps.system.*ditrace*.process.*.uptime, 2, 4)"], sched: {
                startOffset: 613,
                endOffset: 1248,
                tzOffset: -300,
                days: [{ name: "Mon", enabled: true }, { name: "Tue", enabled: true }, { name: "Wed", enabled: true }, { name: "Thu", enabled: true }, { name: "Fri", enabled: true }, { name: "Sat", enabled: true }, { name: "Sun", enabled: true }]
            } })
    }, {
        title: "Advanced",
        data: __assign(__assign({}, sourceData), { trigger_type: "expression", expression: "t1 > 134500 ? ERROR : (PREV_STATE == OK ? (t1 > 5 : WARN ? OK) : (t1 > 6000000000 ? WARN : OK))", sched: {
                startOffset: 0,
                endOffset: 1439,
                tzOffset: -300,
                days: [{ name: "Mon", enabled: true }, { name: "Tue", enabled: true }, { name: "Wed", enabled: false }, { name: "Thu", enabled: true }, { name: "Fri", enabled: true }, { name: "Sat", enabled: true }, { name: "Sun", enabled: false }]
            } })
    }, {
        title: "Full filled",
        data: __assign(__assign({}, sourceData), { desc: "Very usefull trigger", targets: ["aliasByNode(DevOps.system.*ditrace*.process.*.uptime, 2, 4)", "aliasByNode(DevOps.system.*ditrace*.process.*.uptime, 6, 8)"], ttl_state: Status_1.Statuses.OK, notify_about_new_metrics: true })
    }];
var story = react_1.storiesOf("TriggerEditForm", module).addDecorator(storybook_react_router_1.default());
stories.forEach(function (_a) {
    var title = _a.title, data = _a.data;
    story.add(title, function () { return React.createElement(react_ui_validations_1.ValidationContainer, null,
        React.createElement(TriggerEditForm_1.default, { data: data, tags: allTags, remoteAllowed: data.is_remote, onChange: addon_actions_1.action("onChange") })); });
});
