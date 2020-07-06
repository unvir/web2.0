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
var union_1 = __importDefault(require("lodash/union"));
var difference_1 = __importDefault(require("lodash/difference"));
var ScrollContainer_1 = require("@skbkontur/react-ui/components/ScrollContainer");
var DropdownContainer_1 = require("@skbkontur/react-ui/internal/DropdownContainer");
var RenderLayer_1 = require("@skbkontur/react-ui/internal/RenderLayer");
var LayoutEvents = __importStar(require("@skbkontur/react-ui/lib/LayoutEvents"));
var Tag_1 = __importDefault(require("../Tag/Tag"));
var NewTagBadge_1 = __importDefault(require("../NewTagBadge/NewTagBadge"));
var TagDropdownSelect_less_1 = __importDefault(require("./TagDropdownSelect.less"));
var TagDropdownSelect = /** @class */ (function (_super) {
    __extends(TagDropdownSelect, _super);
    function TagDropdownSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickOutside = function () {
            _this.setState({ isFocused: false });
        };
        _this.handleFocusOutside = function () {
            _this.setState({ isFocused: false });
        };
        _this.handleRemoveTag = function (tag) {
            _this.removeTag(tag);
        };
        _this.removeTag = function (tag) {
            var _a = _this.props, onChange = _a.onChange, value = _a.value;
            onChange(difference_1.default(value, [tag]));
        };
        _this.state = {
            focusedIndex: 0,
            inputValue: "",
            isFocused: false
        };
        _this.containerRef = React.createRef();
        _this.tagsRef = React.createRef();
        _this.focusAnchorRef = React.createRef();
        return _this;
    }
    TagDropdownSelect.prototype.componentDidUpdate = function () {
        this.updateDropdownContainerMaxWidth();
        LayoutEvents.emit();
    };
    TagDropdownSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, width = _a.width, value = _a.value, availableTags = _a.availableTags, allowCreateNewTags = _a.allowCreateNewTags;
        var _b = this.state, inputValue = _b.inputValue, focusedIndex = _b.focusedIndex, opened = _b.isFocused;
        var filtredTags = this.filterTags(difference_1.default(availableTags, value));
        return React.createElement("span", { className: TagDropdownSelect_less_1.default("root"), style: { width: width }, ref: this.containerRef },
            React.createElement(RenderLayer_1.RenderLayer, { onClickOutside: this.handleClickOutside, onFocusOutside: this.handleFocusOutside, active: opened },
                React.createElement("div", { className: TagDropdownSelect_less_1.default("wrapper") },
                    this.renderInput(),
                    opened && React.createElement(DropdownContainer_1.DropdownContainer, { align: "left", getParent: function () { return _this.containerRef.current; }, offsetY: 1 },
                        React.createElement(ScrollContainer_1.ScrollContainer, { maxHeight: 300 },
                            React.createElement("div", { className: TagDropdownSelect_less_1.default("tags-menu"), style: { width: width }, ref: this.tagsRef }, filtredTags.length > 0 || allowCreateNewTags ? React.createElement("div", { className: TagDropdownSelect_less_1.default("tag-list") },
                                filtredTags.map(function (tag, i) { return React.createElement(Tag_1.default, { key: tag, focus: i === focusedIndex - 1, title: tag, onClick: function () { return _this.selectTag(tag); } }); }),
                                allowCreateNewTags && !this.tagExists(inputValue) && inputValue.trim() !== "" && React.createElement(NewTagBadge_1.default, { title: inputValue.trim(), focus: focusedIndex === filtredTags.length + 1, onClick: function () { return _this.selectTag(inputValue.trim()); } })) : React.createElement("div", { className: TagDropdownSelect_less_1.default("no-tags") }, "No matched tags found.")))))),
            React.createElement("span", { tabIndex: "-1", ref: this.focusAnchorRef }));
    };
    TagDropdownSelect.prototype.handleKeyDown = function (key, caretPosition) {
        var _a = this.state, focusedIndex = _a.focusedIndex, isFocused = _a.isFocused, inputValue = _a.inputValue;
        var _b = this.props, allowCreateNewTags = _b.allowCreateNewTags, value = _b.value, availableTags = _b.availableTags;
        var filtredTags = this.filterTags(difference_1.default(availableTags, value));
        if (isFocused) {
            switch (key) {
                case "Delete":
                    break;
                case "Backspace":
                    if (caretPosition === 0 && value.length !== 0) {
                        this.removeTag(value[value.length - 1]);
                    }
                    break;
                case "ArrowUp":
                    {
                        if (allowCreateNewTags) {
                            var newIndex = focusedIndex > 0 ? focusedIndex - 1 : filtredTags.length;
                            this.setState({ focusedIndex: newIndex });
                        }
                        else {
                            var newIndex = focusedIndex > 0 ? focusedIndex - 1 : filtredTags.length;
                            this.setState({ focusedIndex: newIndex });
                        }
                        break;
                    }
                case "ArrowDown":
                    {
                        if (allowCreateNewTags && !this.tagExists(inputValue)) {
                            var newIndex = focusedIndex < filtredTags.length + 1 ? focusedIndex + 1 : 0;
                            this.setState({ focusedIndex: newIndex });
                        }
                        else {
                            var newIndex = focusedIndex < filtredTags.length ? focusedIndex + 1 : 0;
                            this.setState({ focusedIndex: newIndex });
                        }
                        break;
                    }
                case "Enter":
                    if (focusedIndex !== 0) {
                        if (inputValue.trim() === "") {
                            break;
                        }
                        else if (allowCreateNewTags && !this.tagExists(inputValue) && focusedIndex === filtredTags.length + 1) {
                            this.selectTag(inputValue);
                        }
                        else {
                            this.selectTag(filtredTags[focusedIndex - 1]);
                        }
                    }
                    if (focusedIndex === 0) {
                        if (inputValue.trim() === "") {
                            break;
                        }
                        else if (allowCreateNewTags && !this.tagExists(inputValue)) {
                            this.selectTag(inputValue);
                        }
                        else if (filtredTags.length > 0) {
                            this.selectTag(filtredTags[filtredTags.length - 1]);
                        }
                        else {
                            break;
                        }
                    }
                    this.setState({ inputValue: "" });
                    break;
                default:
                    break;
            }
        }
    };
    TagDropdownSelect.prototype.updateDropdownContainerMaxWidth = function () {
        if (this.tagsRef) {
            var node = this.tagsRef.current;
            if (node !== null) {
                node.style.maxWidth = node.getBoundingClientRect().width + 40 + "px";
            }
        }
    };
    TagDropdownSelect.prototype.tagExists = function (name) {
        var availableTags = this.props.availableTags;
        return availableTags.includes(name);
    };
    TagDropdownSelect.prototype.selectTag = function (tag) {
        var _a = this.props, value = _a.value, onChange = _a.onChange;
        onChange(union_1.default(value, [tag]));
        this.setState({ inputValue: "", focusedIndex: 0 });
        if (this.focusAnchorRef.current != null) {
            this.focusAnchorRef.current.focus();
        }
    };
    TagDropdownSelect.prototype.filterTags = function (tags) {
        var inputValue = this.state.inputValue;
        if (inputValue.trim() === "") {
            return tags;
        }
        return tags.filter(function (x) { return x.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1; });
    };
    TagDropdownSelect.prototype.renderInput = function () {
        var _this = this;
        var _a = this.props, error = _a.error, value = _a.value, isDisabled = _a.isDisabled;
        var _b = this.state, isFocused = _b.isFocused, inputValue = _b.inputValue;
        return React.createElement("div", { className: isDisabled ? TagDropdownSelect_less_1.default("input-area-disabled") : TagDropdownSelect_less_1.default("input-area", { focused: isFocused, error: error }) },
            value.length !== 0 && value.map(function (tag) { return React.createElement("span", { className: TagDropdownSelect_less_1.default("tag-wrap"), key: tag },
                React.createElement(Tag_1.default, { title: tag, onRemove: function () { return _this.handleRemoveTag(tag); } })); }),
            React.createElement("input", { className: TagDropdownSelect_less_1.default("input"), value: inputValue, onKeyDown: function (event) { return event.target instanceof HTMLInputElement ? _this.handleKeyDown(event.key, event.target.selectionStart) : null; }, onChange: function (event) { return event.target instanceof HTMLInputElement ? _this.setState({ inputValue: event.target.value, focusedIndex: 0 }) : null; }, onFocus: function () { return _this.setState({ isFocused: true }); }, disabled: isDisabled }));
    };
    return TagDropdownSelect;
}(React.Component));
exports.default = TagDropdownSelect;
