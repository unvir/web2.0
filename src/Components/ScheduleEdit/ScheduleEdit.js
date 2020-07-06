"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var Input_1 = require("@skbkontur/react-ui/components/Input");
var Radio_1 = require("@skbkontur/react-ui/components/Radio");
var Checkbox_1 = require("@skbkontur/react-ui/components/Checkbox");
var HelpDot_1 = __importDefault(require("@skbkontur/react-icons/HelpDot"));
var ScheduleEdit_less_1 = __importDefault(require("./ScheduleEdit.less"));
var ScheduleEdit = /** @class */ (function (_super) {
    __extends(ScheduleEdit, _super);
    function ScheduleEdit(props) {
        var _this = _super.call(this, props) || this;
        var schedule = props.schedule;
        var startOffset = schedule.startOffset, endOffset = schedule.endOffset;
        _this.state = {
            allDay: startOffset === 0 && endOffset === 1439
        };
        return _this;
    }
    ScheduleEdit.formatTime = function (time) {
        var HOUR_IN_DAY = 24;
        var MIN_IN_HOUR = 60;
        var hours = Math.floor(time / MIN_IN_HOUR) < HOUR_IN_DAY ? Math.floor(time / MIN_IN_HOUR) : 0;
        var minutes = time % MIN_IN_HOUR < MIN_IN_HOUR ? time % MIN_IN_HOUR : 0;
        return (hours > 9 ? hours : "0" + hours) + ":" + (minutes > 9 ? minutes : "0" + minutes);
    };
    ScheduleEdit.parseTime = function (time) {
        var HOUR_IN_DAY = 24;
        var MIN_IN_HOUR = 60;
        var _a = time.split(":"), hours = _a[0], minutes = _a[1];
        var parsedHours = parseInt(hours, 10) < HOUR_IN_DAY ? parseInt(hours, 10) : 0;
        var parsedMinutes = parseInt(minutes, 10) < MIN_IN_HOUR ? parseInt(minutes, 10) : 0;
        return parsedHours * MIN_IN_HOUR + parsedMinutes;
    };
    ScheduleEdit.renderTimeRangeHelp = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: ScheduleEdit_less_1.default("time-range-description-title") }, "Either negative and positive intervals are allowed."),
            React.createElement("div", null,
                "For example: 23:00 - 06:00 specifies interval between 23:00 ",
                React.createElement("br", null),
                "of the current day to the 06:00 of the next day."));
    };
    ScheduleEdit.prototype.render = function () {
        var _this = this;
        var allDay = this.state.allDay;
        var _a = this.props, schedule = _a.schedule, onChange = _a.onChange;
        var days = schedule.days, startOffset = schedule.startOffset, endOffset = schedule.endOffset;
        return React.createElement("div", null,
            React.createElement("div", { className: ScheduleEdit_less_1.default("days") }, days.map(function (_a, i) {
                var name = _a.name, enabled = _a.enabled;
                return React.createElement(Checkbox_1.Checkbox, { key: name, checked: enabled, onValueChange: function (checked) { return onChange(__assign(__assign({}, schedule), { days: __spreadArrays(days.slice(0, i), [{ name: name, enabled: checked }], days.slice(i + 1)) })); } }, name);
            })),
            React.createElement("div", { className: ScheduleEdit_less_1.default("group") },
                React.createElement("span", { className: ScheduleEdit_less_1.default("radio") },
                    React.createElement(Radio_1.Radio, { checked: allDay, onValueChange: function () {
                            onChange(__assign(__assign({}, schedule), { startOffset: 0, endOffset: 1439 }));
                            _this.setState({ allDay: true });
                        }, value: "all_day" }, "All day")),
                React.createElement("span", { className: ScheduleEdit_less_1.default("radio") },
                    React.createElement(Radio_1.Radio, { checked: !allDay, value: "specific_interval", onValueChange: function () { return _this.setState({ allDay: false }); } }, "At specific interval"),
                    React.createElement(Input_1.Input, { value: ScheduleEdit.formatTime(startOffset), width: 60, mask: "99:99", disabled: allDay, onValueChange: function (value) { return onChange(__assign(__assign({}, schedule), { startOffset: ScheduleEdit.parseTime(value) })); } }),
                    React.createElement("span", null, "\u2014"),
                    React.createElement(Input_1.Input, { value: ScheduleEdit.formatTime(endOffset), width: 60, mask: "99:99", disabled: allDay, onValueChange: function (value) { return onChange(__assign(__assign({}, schedule), { endOffset: ScheduleEdit.parseTime(value) })); } }),
                    React.createElement(Tooltip_1.Tooltip, { pos: "top right", render: ScheduleEdit.renderTimeRangeHelp, trigger: "click" },
                        React.createElement(HelpDot_1.default, { color: "#3072c4" })))));
    };
    return ScheduleEdit;
}(React.Component));
exports.default = ScheduleEdit;
