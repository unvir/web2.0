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
/* eslint-disable */
var React = __importStar(require("react"));
var Input_1 = require("@skbkontur/react-ui/components/Input");
var FilteredInput_less_1 = __importDefault(require("./FilteredInput.less"));
function usedForDestructuring(_value) { }
var FilteredInput = /** @class */ (function (_super) {
    __extends(FilteredInput, _super);
    function FilteredInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            displayValue: null,
            hintValue: null,
            hintClip: null
        };
        // eslint-disable-next-line react/sort-comp
        _this.focused = false;
        _this.selectionStart = 0;
        _this.selectionEnd = 0;
        return _this;
    }
    FilteredInput.prototype.componentWillMount = function () {
        this.reformatValueForView(this.props.value);
    };
    FilteredInput.prototype.componentDidMount = function () {
        this.reformatValueForView(this.props.value);
    };
    FilteredInput.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.value !== this.props.value) {
            if (!this.focused) {
                this.reformatValueForView(nextProps.value);
            }
        }
    };
    FilteredInput.prototype.handleInputChange = function (value) {
        var _this = this;
        var _a = this.props, onChange = _a.onChange, filterValue = _a.filterValue;
        var filteredValue = filterValue(value);
        if (filteredValue !== null) {
            this.setState(__assign({ displayValue: filteredValue.displayValue }, this.getHintState(filteredValue.hintValue, filteredValue.displayValue)));
            onChange(filteredValue.actualValue);
        }
        else if (this.refs.innerInput != null) {
            this.setState({}, function () {
                if (_this.refs.innerInput != null) {
                    _this.refs.innerInput.setSelectionRange(_this.selectionStart, _this.selectionEnd);
                }
            });
        }
    };
    FilteredInput.prototype.getHintState = function (hintValue, displayValue) {
        if (hintValue === null || hintValue === undefined) {
            return null;
        }
        return {
            hintValue: hintValue,
            hintClip: this.getClip(displayValue)
        };
    };
    FilteredInput.prototype.getViewHintState = function (value) {
        var _a = this.props, hintForView = _a.hintForView, valueForView = _a.valueForView;
        if (hintForView === null || hintForView === undefined) {
            return {};
        }
        return {
            hintValue: hintForView(value),
            hintClip: this.getClip(valueForView(value))
        };
    };
    FilteredInput.prototype.getEditHintState = function (value) {
        var _a = this.props, hintForEdit = _a.hintForEdit, valueForEdit = _a.valueForEdit;
        if (hintForEdit === null || hintForEdit === undefined) {
            return {};
        }
        return {
            hintValue: hintForEdit(value),
            hintClip: this.getClip(valueForEdit(value))
        };
    };
    FilteredInput.prototype.getClip = function (value) {
        if (this.refs.testWidth != null && this.refs.root != null) {
            this.refs.testWidth.innerHTML = value || "";
            var result = this.refs.root.offsetWidth - this.refs.testWidth.offsetWidth;
            return result - 9;
        }
        return 0;
    };
    FilteredInput.prototype.reformatValueForView = function (value) {
        if (this.state.displayValue !== this.props.valueForView(value)) {
            this.setState(__assign({ displayValue: this.props.valueForView(value) }, this.getViewHintState(value)));
        }
    };
    FilteredInput.prototype.reformatValueForEdit = function (value) {
        if (this.state.displayValue !== this.props.valueForEdit(value)) {
            this.setState(__assign({ displayValue: this.props.valueForEdit(value) }, this.getEditHintState(value)));
        }
    };
    FilteredInput.prototype.handleBlur = function (event) {
        var displayValueForEdit = this.props.valueForEdit(this.props.value);
        var nextDisplayValue = this.props.valueForView(this.props.value);
        this.setState(__assign({ displayValue: nextDisplayValue }, this.getViewHintState(this.props.value)));
        var filteredValue = this.props.filterValue(displayValueForEdit);
        if (filteredValue !== null) {
            this.props.onChange(filteredValue.actualValue);
        }
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }
    };
    FilteredInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, _value = _a.value, 
        // eslint-disable-line no-unused-vars
        _filterValue = _a.filterValue, 
        // eslint-disable-line no-unused-vars
        _valueForView = _a.valueForView, 
        // eslint-disable-line no-unused-vars
        _valueForEdit = _a.valueForEdit, 
        // eslint-disable-line no-unused-vars
        _hintForView = _a.hintForView, 
        // eslint-disable-line no-unused-vars
        _hintForEdit = _a.hintForEdit, 
        // eslint-disable-line no-unused-vars
        onKeyDown = _a.onKeyDown, onBlur = _a.onBlur, onFocus = _a.onFocus, onChange = _a.onChange, restProps = __rest(_a, ["value", "filterValue", "valueForView", "valueForEdit", "hintForView", "hintForEdit", "onKeyDown", "onBlur", "onFocus", "onChange"]);
        var hintClip = this.state.hintClip;
        usedForDestructuring(onChange);
        return React.createElement("span", { className: FilteredInput_less_1.default("root"), ref: "root" },
            React.createElement("div", { className: FilteredInput_less_1.default("test-width"), ref: "testWidth" }),
            this.state.hintValue && hintClip !== null && hintClip !== undefined && React.createElement("div", { className: FilteredInput_less_1.default("hint-container"), style: { clip: "rect(auto," + hintClip + "px,auto,0px)" } },
                React.createElement(Input_1.Input, __assign({}, restProps, { disabled: true, borderless: true, placeholder: this.state.hintValue ? this.state.hintValue : "", value: "" }))),
            React.createElement(Input_1.Input, __assign({}, restProps, { ref: "innerInput", value: this.state.displayValue || "", onValueChange: function (value) { return _this.handleInputChange(value); }, onBlur: function (event) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    _this.focused = false;
                    _this.handleBlur(event);
                    if (onBlur !== null && onBlur !== undefined) {
                        onBlur.apply(void 0, __spreadArrays([event], rest));
                    }
                }, onFocus: function (event) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    _this.focused = true;
                    _this.reformatValueForEdit(_this.props.value);
                    if (onFocus !== null && onFocus !== undefined) {
                        onFocus.apply(void 0, __spreadArrays([event], rest));
                    }
                }, onKeyDown: function (event) {
                    var rest = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        rest[_i - 1] = arguments[_i];
                    }
                    var target = event.target;
                    if (target instanceof HTMLInputElement) {
                        _this.selectionStart = target.selectionStart;
                        _this.selectionEnd = target.selectionEnd;
                        if (onKeyDown !== null && onKeyDown !== undefined) {
                            onKeyDown.apply(void 0, __spreadArrays([event], rest));
                        }
                    }
                } })));
    };
    return FilteredInput;
}(React.Component));
exports.default = FilteredInput;
