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
var Status_1 = require("../../Domain/Status");
var StatusIndicator_less_1 = __importDefault(require("./StatusIndicator.less"));
function renderPath(statuses) {
    var status1 = statuses[0], status2 = statuses[1], status3 = statuses[2], status4 = statuses[3];
    switch (statuses.length) {
        case 1:
            if (status1 === Status_1.Statuses.EXCEPTION) {
                return React.createElement("circle", { cx: "0", cy: "0", r: "1", fill: Status_1.getStatusColor(status1), className: StatusIndicator_less_1.default("blink") });
            }
            return React.createElement("circle", { cx: "0", cy: "0", r: "1", fill: Status_1.getStatusColor(status1) });
        case 2:
            return React.createElement("g", null,
                React.createElement("path", { d: "M 1 0 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0", fill: Status_1.getStatusColor(status1) }),
                React.createElement("path", { d: "M -1 1.2246467991473532e-16 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0", fill: Status_1.getStatusColor(status2) }));
        case 3:
            return React.createElement("g", null,
                React.createElement("path", { d: "M 1 0 A 1 1 0 0 1 -0.48175367410171543 0.8763066800438635 L 0 0", fill: Status_1.getStatusColor(status1) }),
                React.createElement("path", { d: "M -0.48175367410171543 0.8763066800438635 A 1 1 0 0 1 -0.48175367410171527 -0.8763066800438636 L 0 0", fill: Status_1.getStatusColor(status2) }),
                React.createElement("path", { d: "M -0.48175367410171527 -0.8763066800438636 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0", fill: Status_1.getStatusColor(status3) }));
        case 4:
            return React.createElement("g", null,
                React.createElement("path", { d: "M0 0-0.7 0.7A1 1 0 0 1-0.7-0.7Z", fill: Status_1.getStatusColor(status1) }),
                React.createElement("path", { d: "M0 0-0.7-0.7A1 1 0 0 1 0.7-0.7Z", fill: Status_1.getStatusColor(status2) }),
                React.createElement("path", { d: "M0 0 0.7-0.7A1 1 0 0 1 0.7 0.7Z", fill: Status_1.getStatusColor(status3) }),
                React.createElement("path", { d: "M0 0 0.7 0.7A1 1 0 0 1-0.7 0.7Z", fill: Status_1.getStatusColor(status4) }));
        default:
            return React.createElement("g", null);
    }
}
function StatusIndicator(props) {
    var statuses = props.statuses, disabled = props.disabled, _a = props.size, size = _a === void 0 ? 20 : _a;
    return React.createElement("svg", { viewBox: "-1 -1 2 2", width: size, height: size, className: StatusIndicator_less_1.default("svg", { disabled: disabled }) }, renderPath(statuses));
}
exports.default = StatusIndicator;
