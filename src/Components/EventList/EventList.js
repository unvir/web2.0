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
var date_fns_1 = require("date-fns");
var ArrowBoldRight_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldRight"));
var StatusIndicator_1 = __importDefault(require("../StatusIndicator/StatusIndicator"));
var roundValue_1 = __importDefault(require("../../helpers/roundValue"));
var EventList_less_1 = __importDefault(require("./EventList.less"));
function EventList(props) {
    var items = props.items;
    return React.createElement("section", null,
        React.createElement("div", { className: EventList_less_1.default("row", "header") },
            React.createElement("div", { className: EventList_less_1.default("name") }, "Metric"),
            React.createElement("div", { className: EventList_less_1.default("state-change") }, "State change"),
            React.createElement("div", { className: EventList_less_1.default("date") }, "Event time")),
        Object.keys(items).map(function (key) { return React.createElement("div", { key: key, className: EventList_less_1.default("group") }, items[key].map(function (_a, i) {
            var oldState = _a.old_state, state = _a.state, timestamp = _a.timestamp, value = _a.value;
            var oldValue = items[key][i + 1] && items[key][i + 1].value;
            return React.createElement("div", { key: key + "-" + timestamp, className: EventList_less_1.default("row") },
                React.createElement("div", { className: EventList_less_1.default("name") }, i === 0 && key),
                React.createElement("div", { className: EventList_less_1.default("state-change") },
                    React.createElement("div", { className: EventList_less_1.default("prev-value") }, roundValue_1.default(oldValue, false)),
                    React.createElement("div", { className: EventList_less_1.default("prev-state") },
                        React.createElement(StatusIndicator_1.default, { statuses: [oldState], size: 14 })),
                    React.createElement("div", { className: EventList_less_1.default("arrow") },
                        React.createElement(ArrowBoldRight_1.default, null)),
                    React.createElement("div", { className: EventList_less_1.default("curr-state") },
                        React.createElement(StatusIndicator_1.default, { statuses: [state], size: 14 })),
                    React.createElement("div", { className: EventList_less_1.default("curr-value") }, roundValue_1.default(value, false))),
                React.createElement("div", { className: EventList_less_1.default("date") }, date_fns_1.format(date_fns_1.fromUnixTime(timestamp), "MMMM d, HH:mm:ss")));
        })); }));
}
exports.default = EventList;
