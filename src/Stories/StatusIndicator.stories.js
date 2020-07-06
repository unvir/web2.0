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
var Status_1 = require("../Domain/Status");
var StatusIndicator_1 = __importDefault(require("../Components/StatusIndicator/StatusIndicator"));
react_1.storiesOf("StatusIndicator", module).add("All single color variants", function () { return React.createElement("div", { style: { display: "flex" } }, Object.keys(Status_1.Statuses).map(function (x) { return React.createElement("div", { key: x, style: { marginRight: "5px" } },
    React.createElement(StatusIndicator_1.default, { statuses: [x] })); })); }).add("OK", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.OK] }); }).add("NODATA", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.NODATA] }); }).add("WARN", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.WARN] }); }).add("ERROR", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.ERROR] }); }).add("EXCEPTION", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.EXCEPTION] }); }).add("DEL", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.DEL] }); }).add("NODATA & WARN", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.NODATA, Status_1.Statuses.WARN] }); }).add("NODATA & ERROR", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.NODATA, Status_1.Statuses.ERROR] }); }).add("ERROR & WARN", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.ERROR, Status_1.Statuses.WARN] }); }).add("NODATA & ERROR & WARN", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.NODATA, Status_1.Statuses.ERROR, Status_1.Statuses.WARN] }); }).add("OK & NODATA & ERROR & WARN", function () { return React.createElement(StatusIndicator_1.default, { statuses: [Status_1.Statuses.OK, Status_1.Statuses.NODATA, Status_1.Statuses.ERROR, Status_1.Statuses.WARN] }); }).add("disabled", function () { return React.createElement(StatusIndicator_1.default, { disabled: true, statuses: [Status_1.Statuses.NODATA, Status_1.Statuses.ERROR, Status_1.Statuses.WARN] }); });
