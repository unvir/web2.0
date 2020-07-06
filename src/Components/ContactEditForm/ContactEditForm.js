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
var Input_1 = require("@skbkontur/react-ui/components/Input");
var Select_1 = require("@skbkontur/react-ui/components/Select");
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var remarkable_1 = __importDefault(require("remarkable"));
var ContactTypeIcon_1 = __importDefault(require("../ContactTypeIcon/ContactTypeIcon"));
var ContactEditForm_less_1 = __importDefault(require("./ContactEditForm.less"));
var md = new remarkable_1.default({ breaks: true });
var ContactEditForm = /** @class */ (function (_super) {
    __extends(ContactEditForm, _super);
    function ContactEditForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContactEditForm.prototype.render = function () {
        var _a = this.props, onChange = _a.onChange, contactInfo = _a.contactInfo, contactDescriptions = _a.contactDescriptions;
        var _b = contactInfo || {}, _c = _b.value, value = _c === void 0 ? "" : _c, type = _b.type;
        var currentContactConfig = contactDescriptions.find(function (contact) { return contact.type === type; });
        var contactItems = contactDescriptions.map(function (contact) { return [contact.type, contact.label]; });
        return React.createElement("div", { className: ContactEditForm_less_1.default("form") },
            React.createElement("div", { className: ContactEditForm_less_1.default("row") },
                React.createElement(Select_1.Select, { placeholder: "Select channel type", width: "100%", value: type || null, renderItem: function (v, item) { return React.createElement("span", null,
                        v && React.createElement(ContactTypeIcon_1.default, { type: v }),
                        " ",
                        item); }, renderValue: function (v, item) { return React.createElement("span", null,
                        v && React.createElement(ContactTypeIcon_1.default, { type: v }),
                        " ",
                        item); }, onValueChange: function (v) {
                        // ToDo разобраться, почему value может отсутствовать
                        v && onChange({ type: v }); // eslint-disable-line
                    }, items: contactItems })),
            React.createElement("div", { className: ContactEditForm_less_1.default("row") },
                React.createElement(react_ui_validations_1.ValidationWrapperV1, { renderMessage: react_ui_validations_1.tooltip("top left"), validationInfo: this.validateValue() },
                    React.createElement(Input_1.Input, { width: "100%", disabled: type == null, placeholder: (currentContactConfig && currentContactConfig.placeholder) || "", value: value, onValueChange: function (v) { return onChange({ value: v }); } }))),
            currentContactConfig && currentContactConfig.help &&
                /* ToDo избавиться от dangerouslySetInnerHTML */
                /* eslint-disable */
                React.createElement("div", { dangerouslySetInnerHTML: {
                        __html: md.render(currentContactConfig.help)
                    }, className: ContactEditForm_less_1.default("row", "comment") })
        /* eslint-enable */
        );
    };
    ContactEditForm.prototype.validateValue = function () {
        var _a = this.props, contactInfo = _a.contactInfo, contactDescriptions = _a.contactDescriptions;
        if (!contactInfo) {
            return null;
        }
        var _b = contactInfo.value, value = _b === void 0 ? "" : _b, type = contactInfo.type;
        var currentContactConfig = contactDescriptions.find(function (x) { return x.type === type; });
        if (!currentContactConfig || !currentContactConfig.validation) {
            return null;
        }
        var re = new RegExp(currentContactConfig.validation, "i");
        return value.trim().match(re) ? null : {
            message: "Invalid format",
            type: "submit"
        };
    };
    return ContactEditForm;
}(React.Component));
exports.default = ContactEditForm;
