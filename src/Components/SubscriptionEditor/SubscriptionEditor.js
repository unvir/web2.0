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
var React = __importStar(require("react"));
var Toggle_1 = require("@skbkontur/react-ui/components/Toggle");
var Checkbox_1 = require("@skbkontur/react-ui/components/Checkbox");
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var HelpDot_1 = __importDefault(require("@skbkontur/react-icons/HelpDot"));
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var ContactSelect_1 = __importDefault(require("../ContactSelect/ContactSelect"));
var TagDropdownSelect_1 = __importDefault(require("../TagDropdownSelect/TagDropdownSelect"));
var ScheduleEdit_1 = __importDefault(require("../ScheduleEdit/ScheduleEdit"));
var CodeRef_1 = __importDefault(require("../CodeRef/CodeRef"));
var SubscriptionEditor_less_1 = __importDefault(require("./SubscriptionEditor.less"));
var SubscriptionEditor = /** @class */ (function (_super) {
    __extends(SubscriptionEditor, _super);
    function SubscriptionEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderThrottlingExplanation = function () { return React.createElement("span", null, "If trigger emit to many events they will be grouped into single message."); };
        _this.renderTagsExplanation = function () { return React.createElement("span", null,
            "Notification will be sent if trigger contains ",
            React.createElement("strong", null, "ALL"),
            " of selected tags."); };
        _this.renderDegradationExplanation = function () { return React.createElement("div", null,
            "Only following state switches triggers notification:",
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "OK"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "WARN")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "OK"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "ERROR")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "OK"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "NODATA")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "WARN"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "ERROR")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "WARN"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "NODATA")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "ERROR"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "NODATA"))); };
        _this.renderWarnExclusionExplanation = function () { return React.createElement("div", null,
            "Do not triggers notification on following switches:",
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "OK"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "WARN")),
            React.createElement("div", null,
                React.createElement(CodeRef_1.default, null, "WARN"),
                " \u2192 ",
                React.createElement(CodeRef_1.default, null, "OK"))); };
        return _this;
    }
    SubscriptionEditor.prototype.render = function () {
        var _a = this.props, subscription = _a.subscription, contacts = _a.contacts, onChange = _a.onChange, tags = _a.tags;
        var _b = subscription.plotting, plotting = _b === void 0 ? { enabled: true, theme: "light" } : _b;
        return React.createElement("div", { className: SubscriptionEditor_less_1.default("form") },
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement("div", { className: SubscriptionEditor_less_1.default("caption") }, "Target delivery channels:"),
                React.createElement("div", { className: SubscriptionEditor_less_1.default("value", "with-input") },
                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateContacts() },
                        React.createElement(ContactSelect_1.default, { contactIds: subscription.contacts, onChange: function (contactIds) { return onChange({ contacts: contactIds }); }, availableContacts: contacts })))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement("div", { className: SubscriptionEditor_less_1.default("caption") },
                    "Tags:",
                    " ",
                    React.createElement(Tooltip_1.Tooltip, { trigger: "click", render: this.renderTagsExplanation, closeButton: false, pos: "right middle" },
                        React.createElement(HelpDot_1.default, { color: "#3072c4" }))),
                React.createElement("div", { className: SubscriptionEditor_less_1.default("value", "with-input") },
                    React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("right middle"), validationInfo: this.validateTags() },
                        React.createElement(TagDropdownSelect_1.default, { width: 470, value: subscription.tags, onChange: function (nextTags) {
                                onChange({
                                    tags: nextTags
                                });
                            }, availableTags: tags, isDisabled: subscription.any_tags })))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement("span", null,
                    React.createElement(Toggle_1.Toggle, { checked: subscription.any_tags, onValueChange: function (checked) { return onChange({
                            any_tags: checked,
                            tags: checked ? [] : subscription.tags
                        }); } }),
                    " Any tags")),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement("div", { className: SubscriptionEditor_less_1.default("caption") }, "Delivery schedule:"),
                React.createElement("div", { className: SubscriptionEditor_less_1.default("value") },
                    React.createElement(ScheduleEdit_1.default, { schedule: subscription.sched, onChange: function (value) { return onChange({ sched: value }); } }))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement(Checkbox_1.Checkbox, { checked: subscription.throttling, onValueChange: function (checked) { return onChange({ throttling: checked }); } }, "Throttle messages"),
                " ",
                React.createElement(Tooltip_1.Tooltip, { trigger: "click", render: this.renderThrottlingExplanation, closeButton: false, pos: "right middle" },
                    React.createElement(HelpDot_1.default, { color: "#3072c4" }))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement(Checkbox_1.Checkbox, { checked: subscription.ignore_recoverings, onValueChange: function (checked) { return onChange({ ignore_recoverings: checked }); } }, "Send notifications when triggers degraded only"),
                " ",
                React.createElement(Tooltip_1.Tooltip, { trigger: "click", render: this.renderDegradationExplanation, closeButton: false, pos: "right middle" },
                    React.createElement(HelpDot_1.default, { color: "#3072c4" }))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement(Checkbox_1.Checkbox, { checked: subscription.ignore_warnings, onValueChange: function (checked) { return onChange({ ignore_warnings: checked }); } },
                    "Do not send ",
                    React.createElement(CodeRef_1.default, null, "WARN"),
                    " notifications"),
                " ",
                React.createElement(Tooltip_1.Tooltip, { trigger: "click", render: this.renderWarnExclusionExplanation, closeButton: false, pos: "right middle" },
                    React.createElement(HelpDot_1.default, { color: "#3072c4" }))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement(Checkbox_1.Checkbox, { checked: plotting.enabled, onValueChange: function (checked) { return onChange({ plotting: __assign(__assign({}, plotting), { enabled: checked }) }); } }, "Add graph to notification"),
                plotting.enabled && React.createElement("div", { className: SubscriptionEditor_less_1.default("row-options") },
                    React.createElement("label", null,
                        "Light",
                        React.createElement("span", { className: SubscriptionEditor_less_1.default("graph-theme-toggle") },
                            React.createElement(Toggle_1.Toggle, { checked: plotting.theme === "dark", onChange: function () { return onChange({
                                    plotting: __assign(__assign({}, plotting), { theme: plotting.theme === "dark" ? "light" : "dark" })
                                }); } })),
                        "Dark"))),
            React.createElement("div", { className: SubscriptionEditor_less_1.default("row") },
                React.createElement(Checkbox_1.Checkbox, { checked: subscription.enabled, onValueChange: function (checked) { return onChange({ enabled: checked }); } }, "Enabled"),
                " "));
    };
    SubscriptionEditor.prototype.validateContacts = function () {
        var subscription = this.props.subscription;
        if (subscription.contacts.length === 0) {
            return {
                message: "Please add one or more delivery channels",
                type: "submit"
            };
        }
        return null;
    };
    SubscriptionEditor.prototype.validateTags = function () {
        var subscription = this.props.subscription;
        if (subscription.tags.length === 0 && !subscription.any_tags) {
            return {
                message: "Please add one or more tags",
                type: "submit"
            };
        }
        return null;
    };
    return SubscriptionEditor;
}(React.Component));
exports.default = SubscriptionEditor;
