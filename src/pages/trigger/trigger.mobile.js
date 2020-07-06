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
var React = __importStar(require("react"));
var MobileTriggerInfoPage_1 = __importDefault(require("../../Components/Mobile/MobileTriggerInfoPage/MobileTriggerInfoPage"));
function TriggerMobile(_a) {
    var trigger = _a.trigger, state = _a.state, disableThrottling = _a.disableThrottling, setTriggerMaintenance = _a.setTriggerMaintenance, setMetricMaintenance = _a.setMetricMaintenance, removeMetric = _a.removeMetric;
    var metrics = (state || {}).metrics;
    return React.createElement(MobileTriggerInfoPage_1.default, { data: trigger, triggerState: state, metrics: metrics, onRemoveMetric: function (metric) { return removeMetric(trigger ? trigger.id : "", metric); }, onThrottlingRemove: function () { return disableThrottling(trigger ? trigger.id : ""); }, onSetMetricMaintenance: function (metric, maintenance) { return setMetricMaintenance(trigger ? trigger.id : "", maintenance, metric); }, onSetTriggerMaintenance: function (maintenance) { return setTriggerMaintenance(trigger ? trigger.id : "", maintenance); } });
}
exports.default = TriggerMobile;
