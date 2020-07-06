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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var React = __importStar(require("react"));
var numeral_1 = __importDefault(require("numeral"));
var FilteredInput_1 = __importDefault(require("../FilteredInput/FilteredInput"));
var FormattedNumberInput = /** @class */ (function (_super) {
    __extends(FormattedNumberInput, _super);
    function FormattedNumberInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormattedNumberInput.prototype.handleFilterValue = function (value) {
        var str = value ? value.replace(",", ".") : value;
        if (FormattedNumberInput.numberRegexp.test(str)) {
            if (str.trim() === "") {
                return {
                    displayValue: null,
                    actualValue: null
                };
            }
            return {
                displayValue: str,
                actualValue: parseFloat(str)
            };
        }
        return null;
    };
    FormattedNumberInput.prototype.handleValueForView = function (value) {
        return value != null ? numeral_1.default(value).format(this.props.viewFormat || this.props.editFormat || "0.0[00000]") : "";
    };
    FormattedNumberInput.prototype.handleValueForEdit = function (value) {
        return value != null ? numeral_1.default(value).format(this.props.editFormat || "0.0[00000]") : "";
    };
    FormattedNumberInput.prototype.render = function () {
        var _this = this;
        // eslint-disable-next-line no-unused-vars
        var _a = this.props, value = _a.value, _viewFormat = _a.viewFormat, _editFormat = _a.editFormat, restProps = __rest(_a, ["value", "viewFormat", "editFormat"]);
        return React.createElement(FilteredInput_1.default, __assign({ ref: "filteredInput" }, restProps, { value: value, filterValue: function (value) { return _this.handleFilterValue(value); }, valueForView: function (value) { return _this.handleValueForView(value); }, valueForEdit: function (value) { return _this.handleValueForEdit(value); } }));
    };
    FormattedNumberInput.numberRegexp = /^\-?\s*\d*(\.\d*)?\s*$/;
    return FormattedNumberInput;
}(React.Component));
exports.default = FormattedNumberInput;
