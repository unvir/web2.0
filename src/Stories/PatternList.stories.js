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
var PatternList_1 = __importDefault(require("../Components/PatternList/PatternList"));
var items = [{
        metrics: ["KE.system.busc.vm-busc1.cpu.usage", "KE.system.busc.vm-busc2.cpu.usage"],
        pattern: "pattern.with.triggers.and.metrics",
        triggers: [{
                notify_about_new_metrics: false,
                mute_new_metrics: false,
                is_remote: false,
                id: "e872a927-e6d2-4b2e-b1fb-63d2345357f2",
                name: "KE_SYSTEM_CPU",
                targets: ["KE.system.busc.*.cpu.usage"],
                warn_value: 80,
                error_value: 90,
                tags: ["KE-Test.System"],
                ttl_state: "NODATA",
                throttling: 1,
                trigger_type: "rising",
                expression: "",
                ttl: 600,
                sched: {
                    days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
                    tzOffset: -300,
                    startOffset: 0,
                    endOffset: 1439
                },
                patterns: ["KE.system.busc.*.cpu.usage"]
            }]
    }, {
        metrics: [],
        pattern: "pattern.with.triggers.and.without.metrics",
        triggers: [{
                notify_about_new_metrics: false,
                mute_new_metrics: false,
                is_remote: false,
                id: "f08977e6-bfcd-4ca4-8e4a-5b3ffc56284b",
                name: "focus351 Elasticsearch cluster status",
                desc: "",
                targets: ["alias(movingMax(minSeries(focus.elasticsearch.focus351.*.cluster_health.status ), '10min' ), 'cluster_health' )"],
                warn_value: 1,
                error_value: 0,
                tags: ["Elasticsearch", "Focus", "DevOps"],
                ttl_state: "NODATA",
                throttling: 1,
                trigger_type: "falling",
                expression: "",
                ttl: 600,
                sched: {
                    days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
                    tzOffset: -300,
                    startOffset: 0,
                    endOffset: 1439
                },
                patterns: ["focus.elasticsearch.focus351.*.cluster_health.status"]
            }]
    }, {
        metrics: ["DevOps.elasticsearch.vm-elk-s1.hot.jvm.gc.collection.time", "DevOps.elasticsearch.vm-elk-s2.master.jvm.gc.collection.time", "DevOps.elasticsearch.vm-elk-s2.hot.jvm.gc.collection.time", "DevOps.elasticsearch.vm-elk-s3.hot.jvm.gc.collection.time", "DevOps.elasticsearch.vm-elk-s3.master.jvm.gc.collection.time", "DevOps.elasticsearch.vm-elk-s1.master.jvm.gc.collection.time"],
        pattern: "pattern.without.triggers.and.with.metrics",
        triggers: []
    }, {
        metrics: [],
        pattern: "pattern.without.triggers.and.metrics",
        triggers: []
    }];
react_1.storiesOf("PatternList", module).addDecorator(storybook_react_router_1.default()).add("Default", function () { return React.createElement(PatternList_1.default, { items: items, onRemove: addon_actions_1.action("onRemove"), sortingColumn: "metric" }); });
