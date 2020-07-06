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
var MobileTriggerInfoPage_1 = __importDefault(require("../../Components/Mobile/MobileTriggerInfoPage/MobileTriggerInfoPage"));
var sourceData = {
    mute_new_metrics: false,
    notify_about_new_metrics: false,
    is_remote: false,
    error_value: 1000.0,
    sched: {
        endOffset: 1439,
        days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
        startOffset: 0,
        tzOffset: -300
    },
    name: "KE_SYSTEM_KAMCHATKA_HDD",
    tags: ["KE.System-kamchatka"],
    throttling: 0,
    ttl_state: "NODATA",
    id: "e8304401-718e-4a73-8d13-e9abe4c91d69",
    patterns: ["KE.system-kamchatka.allServers.*.volumes.c.freemegabytes"],
    trigger_type: "falling",
    ttl: 600,
    warn_value: 5000.0,
    expression: "",
    targets: ["KE.system-kamchatka.allServers.*.volumes.c.freemegabytes"],
    desc: "\u041c\u0435\u0441\u0442\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0430\u0445 \u043d\u0430 \u041a\u0430\u043c\u0447\u0430\u0442\u0441\u043a\u043e\u0439 \u043f\u043b\u043e\u0449\u0430\u0434\u043a\u0435."
};
var triggerState = {
    maintenance: null,
    metrics: {
        About: {
            event_timestamp: 1512204450,
            state: "NODATA",
            suppressed: false,
            timestamp: 1512206430
        }
    },
    score: 75000,
    state: "OK",
    timestamp: 1512207091,
    trigger_id: "e8304401-718e-4a73-8d13-e9abe4c91d69"
};
var stories = [{
        title: "Default",
        triggerState: __assign({}, triggerState),
        data: __assign({}, sourceData)
    }, {
        title: "With throttling",
        triggerState: __assign({}, triggerState),
        data: __assign(__assign({}, sourceData), { throttling: Date.now() })
    }, {
        title: "Not everyday",
        triggerState: __assign({}, triggerState),
        data: __assign(__assign({}, sourceData), { sched: {
                endOffset: 1439,
                days: [{ enabled: true, name: "Mon" }, { enabled: false, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: false, name: "Sat" }, { enabled: true, name: "Sun" }],
                startOffset: 0,
                tzOffset: -300
            } })
    }, {
        title: "WithError",
        triggerState: __assign(__assign({}, triggerState), { state: "EXCEPTION", msg: "Some error message message message message message." }),
        data: __assign(__assign({}, sourceData), { sched: {
                endOffset: 1439,
                days: [{ enabled: true, name: "Mon" }, { enabled: false, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: false, name: "Sat" }, { enabled: true, name: "Sun" }],
                startOffset: 0,
                tzOffset: -300
            } })
    }];
var story = react_1.storiesOf("Mobile/TriggerInfoPage", module).addDecorator(storybook_react_router_1.default()).addParameters({
    creevey: {
        skip: {
            stories: "Loading",
            reasons: "Loader animation"
        }
    }
});
story.add("Loading", function () { return React.createElement(MobileTriggerInfoPage_1.default, { data: null, triggerState: null, metrics: null, loading: true, onRemoveMetric: addon_actions_1.action("onRemoveMetric"), onSetMetricMaintenance: addon_actions_1.action("onSetMetricMaintenance"), onSetTriggerMaintenance: addon_actions_1.action("onSetTriggerMaintenance"), onThrottlingRemove: addon_actions_1.action("onThrottlingRemove") }); });
stories.forEach(function (_a) {
    var title = _a.title, data = _a.data, state = _a.triggerState;
    story.add(title, function () { return React.createElement(MobileTriggerInfoPage_1.default, { triggerState: state, data: data, metrics: null, onRemoveMetric: addon_actions_1.action("onRemoveMetric"), onSetMetricMaintenance: addon_actions_1.action("onSetMetricMaintenance"), onSetTriggerMaintenance: addon_actions_1.action("onSetTriggerMaintenance"), onThrottlingRemove: addon_actions_1.action("onThrottlingRemove") }); });
});
