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
var Radio_1 = require("@skbkontur/react-ui/components/Radio");
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var ItemsStack_1 = require("../ItemsStack/ItemsStack");
var FormattedNumberInput_1 = __importDefault(require("../FormattedNumberInput/FormattedNumberInput"));
var StatusIcon_1 = __importDefault(require("../StatusIcon/StatusIcon"));
var Formats_1 = require("../../helpers/Formats");
var TriggerSimpleModeEditor_less_1 = __importDefault(require("./TriggerSimpleModeEditor.less"));
var TriggerSimpleModeEditor = /** @class */ (function (_super) {
    __extends(TriggerSimpleModeEditor, _super);
    function TriggerSimpleModeEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangeWarnValue = function (warnValue) {
            var onChange = _this.props.onChange;
            onChange(warnValue, "warn_value");
        };
        _this.handleChangeErrorValue = function (errorValue) {
            var onChange = _this.props.onChange;
            onChange(errorValue, "error_value");
        };
        _this.handleSetWatchType = function (type) {
            var onSwitch = _this.props.onSwitch;
            onSwitch(type);
        };
        return _this;
    }
    TriggerSimpleModeEditor.prototype.render = function () {
        var _a = this.props, watchFor = _a.watchFor, risingValues = _a.risingValues, fallingValues = _a.fallingValues;
        return React.createElement("div", null,
            React.createElement(ItemsStack_1.ColumnStack, { block: true, gap: 4, stretch: true },
                React.createElement(ItemsStack_1.Fit, null,
                    React.createElement(ItemsStack_1.ColumnStack, { block: true, gap: 2, stretch: true },
                        React.createElement(ItemsStack_1.Fit, null,
                            React.createElement("span", { className: TriggerSimpleModeEditor_less_1.default("radio") },
                                React.createElement(Radio_1.Radio, { checked: watchFor === "rising", value: "rising", onValueChange: this.handleSetWatchType }, "Watch for value rising:"))),
                        React.createElement(ItemsStack_1.Fit, { className: TriggerSimpleModeEditor_less_1.default("state-block") },
                            React.createElement(ItemsStack_1.RowStack, { block: true, baseline: true, gap: 2 },
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(StatusIcon_1.default, { disabled: watchFor !== "rising", status: "WARN" })),
                                React.createElement(ItemsStack_1.Fixed, { className: TriggerSimpleModeEditor_less_1.default("state-caption", {
                                        disabled: watchFor !== "rising"
                                    }), width: 100 },
                                    "WARN if T1 \u2265",
                                    " "),
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateRisingWarn() },
                                        React.createElement(FormattedNumberInput_1.default, { width: 120, editFormat: Formats_1.defaultNumberEditFormat, viewFormat: Formats_1.defaultNumberViewFormat, value: risingValues.warn_value, onChange: this.handleChangeWarnValue, disabled: watchFor !== "rising" }))))),
                        React.createElement(ItemsStack_1.Fit, { className: TriggerSimpleModeEditor_less_1.default("state-block") },
                            React.createElement(ItemsStack_1.RowStack, { block: true, baseline: true, gap: 2 },
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(StatusIcon_1.default, { disabled: watchFor !== "rising", status: "ERROR" })),
                                React.createElement(ItemsStack_1.Fixed, { className: TriggerSimpleModeEditor_less_1.default("state-caption", {
                                        disabled: watchFor !== "rising"
                                    }), width: 100 },
                                    "ERROR if T1 \u2265",
                                    " "),
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateRisingError() },
                                        React.createElement(FormattedNumberInput_1.default, { width: 120, editFormat: Formats_1.defaultNumberEditFormat, viewFormat: Formats_1.defaultNumberViewFormat, value: risingValues.error_value, onChange: this.handleChangeErrorValue, disabled: watchFor !== "rising" }))))))),
                React.createElement(ItemsStack_1.Fit, null,
                    React.createElement(ItemsStack_1.ColumnStack, { block: true, gap: 2, stretch: true },
                        React.createElement(ItemsStack_1.Fit, null,
                            React.createElement("span", { className: TriggerSimpleModeEditor_less_1.default("radio") },
                                React.createElement(Radio_1.Radio, { checked: watchFor === "falling", value: "falling", onValueChange: this.handleSetWatchType }, "Watch for value falling:"))),
                        React.createElement(ItemsStack_1.Fit, { className: TriggerSimpleModeEditor_less_1.default("state-block") },
                            React.createElement(ItemsStack_1.RowStack, { block: true, baseline: true, gap: 2 },
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(StatusIcon_1.default, { disabled: watchFor !== "falling", status: "WARN" })),
                                React.createElement(ItemsStack_1.Fixed, { className: TriggerSimpleModeEditor_less_1.default("state-caption", {
                                        disabled: watchFor !== "falling"
                                    }), width: 100 },
                                    "WARN if T1 \u2264",
                                    " "),
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateFallingWarn() },
                                        React.createElement(FormattedNumberInput_1.default, { width: 120, editFormat: Formats_1.defaultNumberEditFormat, viewFormat: Formats_1.defaultNumberViewFormat, value: fallingValues.warn_value, onChange: this.handleChangeWarnValue, disabled: watchFor !== "falling" }))))),
                        React.createElement(ItemsStack_1.Fit, { className: TriggerSimpleModeEditor_less_1.default("state-block") },
                            React.createElement(ItemsStack_1.RowStack, { block: true, baseline: true, gap: 2 },
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(StatusIcon_1.default, { disabled: watchFor !== "falling", status: "ERROR" })),
                                React.createElement(ItemsStack_1.Fixed, { className: TriggerSimpleModeEditor_less_1.default("state-caption", {
                                        disabled: watchFor !== "falling"
                                    }), width: 100 },
                                    "ERROR if T1 \u2264",
                                    " "),
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateFallingError() },
                                        React.createElement(FormattedNumberInput_1.default, { width: 120, editFormat: Formats_1.defaultNumberEditFormat, viewFormat: Formats_1.defaultNumberViewFormat, value: fallingValues.error_value, onChange: this.handleChangeErrorValue, disabled: watchFor !== "falling" })))))))));
    };
    TriggerSimpleModeEditor.prototype.validateRisingWarn = function () {
        var _a = this.props, watchFor = _a.watchFor, value = _a.risingValues;
        if (watchFor !== "rising") {
            return null;
        }
        if (value.warn_value == null && value.error_value == null) {
            return { message: "At least one of values must be filled", type: "submit" };
        }
        return null;
    };
    TriggerSimpleModeEditor.prototype.validateRisingError = function () {
        var _a = this.props, watchFor = _a.watchFor, value = _a.risingValues;
        if (watchFor !== "rising") {
            return null;
        }
        if (value.error_value == null && value.warn_value == null) {
            return { message: "At least one of values must be filled", type: "submit" };
        }
        if (value.error_value != null && value.warn_value != null && value.warn_value >= value.error_value) {
            return { message: "Error value must be greater than to warn value", type: "submit" };
        }
        return null;
    };
    TriggerSimpleModeEditor.prototype.validateFallingWarn = function () {
        var _a = this.props, watchFor = _a.watchFor, value = _a.fallingValues;
        if (watchFor !== "falling") {
            return null;
        }
        if (value.warn_value == null && value.error_value == null) {
            return { message: "At least one of values must be filled", type: "submit" };
        }
        return null;
    };
    TriggerSimpleModeEditor.prototype.validateFallingError = function () {
        var _a = this.props, watchFor = _a.watchFor, value = _a.fallingValues;
        if (watchFor !== "falling") {
            return null;
        }
        if (value.error_value == null && value.warn_value == null) {
            return { message: "At least one of values must be filled", type: "submit" };
        }
        if (value.error_value != null && value.warn_value != null && value.warn_value <= value.error_value) {
            return { message: "Error value must be less than to warn value", type: "submit" };
        }
        return null;
    };
    return TriggerSimpleModeEditor;
}(React.Component));
exports.default = TriggerSimpleModeEditor;
