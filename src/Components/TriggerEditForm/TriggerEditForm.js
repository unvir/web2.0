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
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var remarkable_1 = __importDefault(require("remarkable"));
var dompurify_1 = require("dompurify");
var Remove_1 = __importDefault(require("@skbkontur/react-icons/Remove"));
var Add_1 = __importDefault(require("@skbkontur/react-icons/Add"));
var HelpDot_1 = __importDefault(require("@skbkontur/react-icons/HelpDot"));
var Gapped_1 = require("@skbkontur/react-ui/components/Gapped");
var Input_1 = require("@skbkontur/react-ui/components/Input");
var Textarea_1 = require("@skbkontur/react-ui/components/Textarea");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Link_1 = require("@skbkontur/react-ui/components/Link");
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var Tabs_1 = require("@skbkontur/react-ui/components/Tabs");
var RadioGroup_1 = require("@skbkontur/react-ui/components/RadioGroup");
var Radio_1 = require("@skbkontur/react-ui/components/Radio");
var Checkbox_1 = require("@skbkontur/react-ui/components/Checkbox");
var Trigger_1 = __importDefault(require("../../Domain/Trigger"));
var DOMPurify_1 = require("../../Domain/DOMPurify");
var FormattedNumberInput_1 = __importDefault(require("../FormattedNumberInput/FormattedNumberInput"));
var ScheduleEdit_1 = __importDefault(require("../ScheduleEdit/ScheduleEdit"));
var TriggerModeEditor_1 = __importDefault(require("../TriggerModeEditor/TriggerModeEditor"));
var StatusSelect_1 = __importDefault(require("../StatusSelect/StatusSelect"));
var TagDropdownSelect_1 = __importDefault(require("../TagDropdownSelect/TagDropdownSelect"));
var Status_1 = require("../../Domain/Status");
var CodeRef_1 = __importDefault(require("../CodeRef/CodeRef"));
var Formats_1 = require("../../helpers/Formats");
var TriggerEditForm_less_1 = __importDefault(require("./TriggerEditForm.less"));
var md = new remarkable_1.default({ breaks: true });
var TriggerEditForm = /** @class */ (function (_super) {
    __extends(TriggerEditForm, _super);
    function TriggerEditForm(props) {
        var _this = _super.call(this, props) || this;
        _this.renderNewMetricsAlertingHelp = function () { return React.createElement("div", { className: TriggerEditForm_less_1.default("new-metrics-help") },
            React.createElement("p", null, "If disabled, Moira will notify you about new metrics."),
            React.createElement("p", null,
                "In this case when you start sending new metric you will receive",
                " ",
                React.createElement(CodeRef_1.default, null, "NODATA"),
                " - ",
                React.createElement(CodeRef_1.default, null, "OK"),
                " notification.")); };
        _this.state = {
            descriptionMode: "edit"
        };
        return _this;
    }
    TriggerEditForm.validateRequiredString = function (value, message) {
        return value.trim().length === 0 ? {
            type: value.trim().length === 0 ? "submit" : "lostfocus",
            message: message || "Can't be empty"
        } : null;
    };
    TriggerEditForm.validateRequiredNumber = function (value) {
        return typeof value !== "number" ? {
            type: typeof value === "number" ? "lostfocus" : "submit",
            message: "Can't be empty"
        } : null;
    };
    TriggerEditForm.validateTTL = function (value) {
        if (typeof value !== "number") {
            return {
                type: typeof value === "number" ? "lostfocus" : "submit",
                message: "Can't be empty"
            };
        }
        if (value < 0) {
            return {
                type: typeof value === "number" ? "lostfocus" : "submit",
                message: "Can't be negative"
            };
        }
        return null;
    };
    TriggerEditForm.prototype.render = function () {
        var _this = this;
        var descriptionMode = this.state.descriptionMode;
        var _a = this.props, data = _a.data, onChange = _a.onChange, allTags = _a.tags, remoteAllowed = _a.remoteAllowed;
        var name = data.name, desc = data.desc, targets = data.targets, tags = data.tags, expression = data.expression, ttl = data.ttl, ttlState = data.ttl_state, sched = data.sched, isRemote = data.is_remote, triggerType = data.trigger_type, muteNewMetrics = data.mute_new_metrics;
        if (sched == null) {
            throw new Error("InvalidProgramState");
        }
        return React.createElement(Form, null,
            React.createElement(FormRow, { label: "Name" },
                React.createElement(react_ui_validations_1.ValidationWrapperV1, { validationInfo: TriggerEditForm.validateRequiredString(name), renderMessage: react_ui_validations_1.tooltip("right middle") },
                    React.createElement(Input_1.Input, { width: "100%", value: name, onValueChange: function (value) { return onChange({ name: value }); } }))),
            React.createElement(FormRow, { label: "Description", useTopAlignForLabel: true },
                React.createElement("div", { className: TriggerEditForm_less_1.default("description-mode-tabs") },
                    React.createElement(Tabs_1.Tabs, { value: descriptionMode, onValueChange: function (value) { return _this.setState({ descriptionMode: value }); } },
                        React.createElement(Tabs_1.Tabs.Tab, { id: "edit" }, "Edit"),
                        React.createElement(Tabs_1.Tabs.Tab, { id: "preview" }, "Preview"))),
                descriptionMode === "edit" ? React.createElement(Textarea_1.Textarea, { width: "100%", value: desc || "", onValueChange: function (value) { return onChange({ desc: value }); } }) : React.createElement("div", { className: TriggerEditForm_less_1.default("wysiwyg", "description-preview"), dangerouslySetInnerHTML: {
                        __html: dompurify_1.sanitize(md.render(desc || ""), DOMPurify_1.purifyConfig)
                    } })),
            React.createElement(FormRow, { label: "Target", useTopAlignForLabel: true },
                targets.map(function (x, i) {
                    /* eslint-disable-next-line react/no-array-index-key */
                    return React.createElement("div", { key: "target-" + i, className: TriggerEditForm_less_1.default("target") },
                        React.createElement("span", { className: TriggerEditForm_less_1.default("target-number") },
                            "T",
                            i + 1),
                        React.createElement("div", { className: TriggerEditForm_less_1.default("fgroup") },
                            React.createElement("div", { className: TriggerEditForm_less_1.default("fgroup-field") },
                                React.createElement(react_ui_validations_1.ValidationWrapperV1, { validationInfo: TriggerEditForm.validateRequiredString(x), renderMessage: react_ui_validations_1.tooltip("right middle") },
                                    React.createElement(Input_1.Input, { width: "100%", value: x, onValueChange: function (value) { return _this.handleUpdateTarget(i, value); } }))),
                            targets.length > 1 && React.createElement("div", { className: TriggerEditForm_less_1.default("fgroup-control") },
                                React.createElement(Button_1.Button, { onClick: function () { return _this.handleRemoveTarget(i); } },
                                    React.createElement(Remove_1.default, null)))));
                }),
                React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Add_1.default, null), onClick: function () { return _this.handleAddTarget(); } }, "Add one more")),
            React.createElement(FormRow, null,
                React.createElement(TriggerModeEditor_1.default, { triggerType: triggerType, value: { error_value: data.error_value, warn_value: data.warn_value }, expression: expression, validateExpression: TriggerEditForm.validateRequiredString, disableSimpleMode: targets.length > 1, onChange: function (value) { return onChange(value); } })),
            React.createElement(FormRow, { singleLineControlGroup: true },
                React.createElement(StatusSelect_1.default, { value: ttlState, availableStatuses: Object.keys(Status_1.Statuses).filter(function (x) { return x !== Status_1.Statuses.EXCEPTION; }), onChange: function (value) { return onChange({ ttl_state: value }); } }),
                React.createElement("span", null, "if has no value for"),
                React.createElement(react_ui_validations_1.ValidationWrapperV1, { validationInfo: TriggerEditForm.validateTTL(ttl), renderMessage: react_ui_validations_1.tooltip("right middle") },
                    React.createElement(FormattedNumberInput_1.default, { width: 80, value: typeof ttl === "number" ? ttl : null, editFormat: Formats_1.defaultNumberEditFormat, viewFormat: Formats_1.defaultNumberViewFormat, onChange: function (value) { return onChange({ ttl: value || 0 }); } })),
                React.createElement("span", null, "seconds")),
            React.createElement(FormRow, { singleLineControlGroup: true },
                React.createElement(Checkbox_1.Checkbox, { checked: muteNewMetrics, onValueChange: function (checked) { return onChange({ mute_new_metrics: checked }); } }, "Mute new metrics notifications"),
                React.createElement(Tooltip_1.Tooltip, { pos: "bottom left", render: this.renderNewMetricsAlertingHelp, trigger: "click" },
                    React.createElement(HelpDot_1.default, { color: "#3072c4" }))),
            React.createElement(FormRow, { label: "Watch time" },
                React.createElement(ScheduleEdit_1.default, { schedule: sched, onChange: function (schedule) { return onChange({ sched: schedule }); } })),
            React.createElement(FormRow, { label: "Tags", useTopAlignForLabel: true },
                React.createElement(react_ui_validations_1.ValidationWrapperV1, { validationInfo: tags.length === 0 ? {
                        type: "submit",
                        message: "Select at least one tag"
                    } : null, renderMessage: react_ui_validations_1.tooltip("right top") },
                    React.createElement(TagDropdownSelect_1.default, { allowCreateNewTags: true, value: tags, availableTags: allTags, width: 650, onChange: function (selectedTags) { return onChange({
                            tags: selectedTags
                        }); } }))),
            remoteAllowed && React.createElement(FormRow, { label: "Data source", singleLineControlGroup: true },
                React.createElement(RadioGroup_1.RadioGroup, { name: "data-source", defaultValue: !isRemote ? Trigger_1.default.LOCAL : Trigger_1.default.GRAPHITE, onValueChange: function (value) { return onChange({ is_remote: value !== Trigger_1.default.LOCAL }); } },
                    React.createElement(Gapped_1.Gapped, { vertical: true, gap: 10 },
                        React.createElement(Radio_1.Radio, { value: Trigger_1.default.LOCAL }, "Local (default)"),
                        React.createElement(Radio_1.Radio, { value: Trigger_1.default.GRAPHITE },
                            "Graphite. Be careful, it may cause",
                            " ",
                            React.createElement(Link_1.Link, { href: "http://moira.readthedocs.io/en/latest/user_guide/advanced.html#data-source" }, "extra load"))))));
    };
    TriggerEditForm.prototype.handleUpdateTarget = function (targetIndex, value) {
        var _a = this.props, onChange = _a.onChange, data = _a.data;
        var targets = data.targets;
        onChange({
            targets: __spreadArrays(targets.slice(0, targetIndex), [value], targets.slice(targetIndex + 1))
        });
    };
    TriggerEditForm.prototype.handleRemoveTarget = function (targetIndex) {
        var _a = this.props, onChange = _a.onChange, data = _a.data;
        var targets = data.targets;
        onChange({
            targets: __spreadArrays(targets.slice(0, targetIndex), targets.slice(targetIndex + 1))
        });
    };
    TriggerEditForm.prototype.handleAddTarget = function () {
        var _a = this.props, onChange = _a.onChange, data = _a.data;
        var targets = data.targets;
        onChange({
            trigger_type: "expression",
            targets: __spreadArrays(targets, [""])
        });
    };
    return TriggerEditForm;
}(React.Component));
exports.default = TriggerEditForm;
function Form(_a) {
    var children = _a.children;
    return React.createElement("div", { className: TriggerEditForm_less_1.default("form") }, children);
}
function FormRow(_a) {
    var label = _a.label, useTopAlignForLabel = _a.useTopAlignForLabel, singleLineControlGroup = _a.singleLineControlGroup, children = _a.children, style = _a.style;
    return React.createElement("div", { className: TriggerEditForm_less_1.default("row") },
        label != null && React.createElement("div", { className: TriggerEditForm_less_1.default("label", { "label-for-group": useTopAlignForLabel }) }, label),
        React.createElement("div", { className: TriggerEditForm_less_1.default("control") },
            React.createElement("div", { style: style, className: TriggerEditForm_less_1.default({ group: singleLineControlGroup }) }, children)));
}
