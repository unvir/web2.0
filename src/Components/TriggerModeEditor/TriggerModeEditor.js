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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var React = __importStar(require("react"));
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var Tabs_1 = require("@skbkontur/react-ui/components/Tabs");
var Input_1 = require("@skbkontur/react-ui/components/Input");
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var Link_1 = require("@skbkontur/react-ui/components/Link");
var HelpDot_1 = __importDefault(require("@skbkontur/react-icons/HelpDot"));
var TriggerSimpleModeEditor_1 = __importDefault(require("../TriggerSimpleModeEditor/TriggerSimpleModeEditor"));
var ItemsStack_1 = require("../ItemsStack/ItemsStack");
var CodeRef_1 = __importDefault(require("../CodeRef/CodeRef"));
var TriggerModeEditor_less_1 = __importDefault(require("./TriggerModeEditor.less"));
var TriggerModeEditor = /** @class */ (function (_super) {
    __extends(TriggerModeEditor, _super);
    function TriggerModeEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTabChange = function (value) {
            var watchFor = _this.state.watchFor;
            var _a = _this.props, disableSimpleMode = _a.disableSimpleMode, onChange = _a.onChange;
            if (!disableSimpleMode) {
                var triggerType = value === "advanced" ? "expression" : watchFor;
                _this.setState({ mode: value });
                onChange({ trigger_type: triggerType });
            }
        };
        _this.handleRadioChange = function (type) {
            var _a = _this.state, risingValues = _a.risingValues, fallingValues = _a.fallingValues;
            var onChange = _this.props.onChange;
            var value = type === "falling" ? __assign({}, fallingValues) : __assign({}, risingValues);
            _this.setState({ watchFor: type });
            onChange(__assign({ trigger_type: type }, value));
        };
        _this.handleInputChange = function (value, valueType) {
            var _a, _b, _c;
            var _d = _this.state, watchFor = _d.watchFor, risingValues = _d.risingValues, fallingValues = _d.fallingValues;
            var onChange = _this.props.onChange;
            if (watchFor === "rising") {
                _this.setState({ risingValues: __assign(__assign({}, risingValues), (_a = {}, _a[valueType] = value, _a)) });
            }
            if (watchFor === "falling") {
                _this.setState({ fallingValues: __assign(__assign({}, fallingValues), (_b = {}, _b[valueType] = value, _b)) });
            }
            onChange((_c = {}, _c[valueType] = value, _c));
        };
        _this.tooltipExpressionHelp = function () { return React.createElement("div", { className: TriggerModeEditor_less_1.default("expression-help") },
            React.createElement("div", { className: TriggerModeEditor_less_1.default("main-description") },
                "Expression uses",
                " ",
                React.createElement(Link_1.Link, { target: "_blank", href: "https://github.com/Knetic/govaluate/blob/master/MANUAL.md" }, "govaluate"),
                " ",
                "with predefined constants:"),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "t1"),
                ", ",
                React.createElement(CodeRef_1.default, null, "t2"),
                ", ... are values from your targets."),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "OK"),
                ", ",
                React.createElement(CodeRef_1.default, null, "WARN"),
                ", ",
                React.createElement(CodeRef_1.default, null, "ERROR"),
                ",",
                " ",
                React.createElement(CodeRef_1.default, null, "NODATA"),
                " are states that must be the result of evaluation."),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "PREV_STATE"),
                " is equal to previously set state, and allows you to prevent frequent state changes."),
            React.createElement("div", { className: TriggerModeEditor_less_1.default("note") }, "NOTE: Only T1 target can resolve into multiple metrics in Advanced Mode. T2, T3, ... must resolve to single metrics.")); };
        var modeType = TriggerModeEditor.getModeType(props.triggerType);
        var watchForType = TriggerModeEditor.getWatchForType(props.triggerType);
        _this.state = {
            mode: modeType,
            watchFor: watchForType,
            risingValues: watchForType === "rising" ? props.value : { warn_value: null, error_value: null },
            fallingValues: watchForType === "falling" ? props.value : { warn_value: null, error_value: null }
        };
        return _this;
    }
    TriggerModeEditor.getDerivedStateFromProps = function (props) {
        return props.triggerType === "expression" ? { mode: "advanced" } : null;
    };
    TriggerModeEditor.getWatchForType = function (type) {
        return type === "falling" ? type : "rising";
    };
    TriggerModeEditor.getModeType = function (type) {
        return type === "expression" ? "advanced" : "simple";
    };
    TriggerModeEditor.prototype.render = function () {
        var _a = this.state, mode = _a.mode, watchFor = _a.watchFor, risingValues = _a.risingValues, fallingValues = _a.fallingValues;
        var _b = this.props, expression = _b.expression, disableSimpleMode = _b.disableSimpleMode, validateExpression = _b.validateExpression, onChange = _b.onChange;
        return React.createElement(React.Fragment, null,
            React.createElement("div", { className: TriggerModeEditor_less_1.default("tabs") },
                React.createElement(Tabs_1.Tabs, { value: mode, onValueChange: this.handleTabChange },
                    React.createElement(Tabs_1.Tabs.Tab, { id: "simple", style: { color: disableSimpleMode ? "#888888" : "" } }, "Simple mode"),
                    React.createElement(Tabs_1.Tabs.Tab, { id: "advanced" }, "Advanced mode"))),
            mode === "simple" && React.createElement(TriggerSimpleModeEditor_1.default, { watchFor: watchFor, risingValues: risingValues, fallingValues: fallingValues, onChange: this.handleInputChange, onSwitch: this.handleRadioChange }),
            mode === "advanced" && React.createElement(ItemsStack_1.RowStack, { gap: 2, verticalAlign: "baseline", block: true },
                React.createElement(ItemsStack_1.Fill, null,
                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { validationInfo: validateExpression(expression, "Expression can't be empty"), renderMessage: react_ui_validations_1.tooltip("right middle") },
                        React.createElement(Input_1.Input, { width: "100%", value: expression, onValueChange: function (value) { return onChange({ expression: value }); }, placeholder: "t1 >= 10 ? ERROR : (t1 >= 1 ? WARN : OK)" }))),
                React.createElement(ItemsStack_1.Fit, null,
                    React.createElement(Tooltip_1.Tooltip, { pos: "top right", render: this.tooltipExpressionHelp, trigger: "click" },
                        React.createElement(HelpDot_1.default, { color: "#3072c4" })))));
    };
    return TriggerModeEditor;
}(React.Component));
exports.default = TriggerModeEditor;
