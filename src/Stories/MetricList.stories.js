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
var MetricList_1 = __importDefault(require("../Components/MetricList/MetricList"));
var items = {
    "vm-ditrace2.nginx.vm-ditrace2.nginx.*.vm-ditrace2.nginx.vm-ditrace3.elasticsearch.vm-ditrace3.ditrace": {
        event_timestamp: 1503484033,
        state: "NODATA",
        suppressed: false,
        value: 10.453,
        timestamp: 1503496225,
        maintenance: 1555804800,
        maintenance_info: {
            setup_user: "Superman",
            setup_time: 1553158221
        }
    },
    "vm-ditrace3.ditrace": {
        event_timestamp: 1503486527,
        state: "WARN",
        suppressed: false,
        timestamp: 1503496225,
        maintenance: 1504100565
    },
    "vm-ditrace3.elasticsearch": {
        event_timestamp: 1503486527,
        state: "ERROR",
        suppressed: false,
        timestamp: 1503496225,
        value: 109389189,
        maintenance: 1504118563,
        maintenance_info: {
            setup_user: null,
            setup_time: null
        }
    },
    "vm-ditrace3.nginx": {
        event_timestamp: 1503484033,
        state: "OK",
        suppressed: false,
        timestamp: 1503496225,
        maintenance_info: {
            setup_user: null,
            setup_time: null
        }
    }
};
react_1.storiesOf("MetricList", module).addDecorator(storybook_react_router_1.default()).add("Default", function () { return React.createElement(MetricList_1.default, { items: items, sortingColumn: "value", onChange: addon_actions_1.action("onChange"), onRemove: addon_actions_1.action("onRemove") }); }).add("With Status Indicator", function () { return React.createElement(MetricList_1.default, { items: items, status: true, sortingColumn: "value", onChange: addon_actions_1.action("onChange"), onRemove: addon_actions_1.action("onRemove") }); }).add("With Remove all NODATA", function () { return React.createElement(MetricList_1.default, { items: items, status: true, noDataMerticCount: 5, sortingColumn: "value", onChange: addon_actions_1.action("onChange"), onRemove: addon_actions_1.action("onRemove"), onNoDataRemove: addon_actions_1.action("onNoDataRemove") }); });
