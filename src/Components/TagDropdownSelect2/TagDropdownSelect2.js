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
var concat_1 = __importDefault(require("lodash/concat"));
var RenderLayer_1 = require("@skbkontur/react-ui/internal/RenderLayer");
var LayoutEvents = __importStar(require("@skbkontur/react-ui/lib/LayoutEvents"));
var ScrollContainer_1 = require("@skbkontur/react-ui/components/ScrollContainer");
var DropdownContainer_1 = require("@skbkontur/react-ui/internal/DropdownContainer");
var TagGroup_1 = __importDefault(require("../TagGroup/TagGroup"));
var Tag_1 = __importDefault(require("../Tag/Tag"));
var TagDropdownSelect2_less_1 = __importDefault(require("./TagDropdownSelect2.less"));
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
            var onRemove = _this.props.onRemove;
            onRemove(tag);
        };
        _this.state = {
            value: "",
            isFocused: false,
            focusedIndex: 0
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
        var _a = this.props, subscribed = _a.subscribed, remained = _a.remained, width = _a.width;
        var _b = this.state, focusedIndex = _b.focusedIndex, opened = _b.isFocused, value = _b.value;
        var filtredTags = this.filterTags(concat_1.default(subscribed, remained));
        return React.createElement("span", { className: TagDropdownSelect2_less_1.default("root"), style: { width: width }, ref: this.containerRef },
            React.createElement(RenderLayer_1.RenderLayer, { onClickOutside: this.handleClickOutside, onFocusOutside: this.handleFocusOutside, active: opened },
                React.createElement("div", { className: TagDropdownSelect2_less_1.default("wrapper") },
                    this.renderInput(),
                    opened && React.createElement(DropdownContainer_1.DropdownContainer, { align: "left", getParent: function () { return _this.containerRef.current; }, offsetY: 1 },
                        React.createElement("div", { className: TagDropdownSelect2_less_1.default("menu-container") },
                            React.createElement(ScrollContainer_1.ScrollContainer, { maxHeight: 300 },
                                React.createElement("div", { className: TagDropdownSelect2_less_1.default("tags-menu"), ref: this.tagsRef },
                                    subscribed.length !== 0 && value.length === 0 && React.createElement("div", { className: TagDropdownSelect2_less_1.default("group") },
                                        React.createElement("b", { className: TagDropdownSelect2_less_1.default("title") }, "Subscriptions"),
                                        React.createElement(TagGroup_1.default, { tags: subscribed, onClick: function (tag) { return _this.selectTag(tag); } })),
                                    remained.length !== 0 && value.length === 0 && React.createElement("div", { className: TagDropdownSelect2_less_1.default("group") },
                                        React.createElement("b", { className: TagDropdownSelect2_less_1.default("title") }, "All tags"),
                                        React.createElement(TagGroup_1.default, { tags: remained, onClick: function (tag) { return _this.selectTag(tag); } })),
                                    value.length !== 0 && React.createElement("div", { className: TagDropdownSelect2_less_1.default("group") },
                                        React.createElement("b", { className: TagDropdownSelect2_less_1.default("title") }, "Search results"),
                                        React.createElement("div", { className: TagDropdownSelect2_less_1.default("tag-list") }, filtredTags.length > 0 ? filtredTags.map(function (tag, i) { return React.createElement(Tag_1.default, { key: tag, focus: i === focusedIndex - 1, title: tag, onClick: function () { return _this.selectTag(tag); } }); }) : React.createElement("div", { className: TagDropdownSelect2_less_1.default("no-tags") }, "No matched tags found."))),
                                    " ")))))),
            React.createElement("span", { tabIndex: "-1", ref: this.focusAnchorRef }, " "));
    };
    TagDropdownSelect.prototype.handleKeyDown = function (key, caretPosition) {
        var _a = this.state, focusedIndex = _a.focusedIndex, isFocused = _a.isFocused;
        var _b = this.props, selected = _b.selected, subscribed = _b.subscribed, remained = _b.remained;
        var filtredTags = this.filterTags(concat_1.default(subscribed, remained));
        if (isFocused) {
            switch (key) {
                case "Delete":
                    break;
                case "Backspace":
                    if (caretPosition === 0 && selected.length !== 0) {
                        this.removeTag(selected[selected.length - 1]);
                    }
                    break;
                case "ArrowUp":
                    {
                        var newIndex = focusedIndex > 0 ? focusedIndex - 1 : filtredTags.length;
                        this.setState({ focusedIndex: newIndex });
                        break;
                    }
                case "ArrowDown":
                    {
                        var newIndex = focusedIndex < filtredTags.length ? focusedIndex + 1 : 0;
                        this.setState({ focusedIndex: newIndex });
                        break;
                    }
                case "Enter":
                    if (focusedIndex !== 0) {
                        this.selectTag(filtredTags[focusedIndex - 1]);
                    }
                    if (focusedIndex === 0) {
                        this.selectTag(filtredTags[filtredTags.length - 1]);
                    }
                    this.setState({ value: "" });
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
    TagDropdownSelect.prototype.renderInput = function () {
        var _this = this;
        var selected = this.props.selected;
        var _a = this.state, isFocused = _a.isFocused, value = _a.value;
        return React.createElement("div", { className: TagDropdownSelect2_less_1.default("input-area", { focused: isFocused }) },
            selected.length !== 0 && selected.map(function (tag) { return React.createElement("span", { className: TagDropdownSelect2_less_1.default("tag-wrap"), key: tag },
                React.createElement(Tag_1.default, { title: tag, onRemove: function () { return _this.handleRemoveTag(tag); } })); }),
            React.createElement("input", { className: TagDropdownSelect2_less_1.default("input"), value: value, onKeyDown: function (event) { return event.target instanceof HTMLInputElement ? _this.handleKeyDown(event.key, event.target.selectionStart) : null; }, onChange: function (event) { return event.target instanceof HTMLInputElement ? _this.setState({
                    value: event.target.value.replace(/\s/gi, ""),
                    focusedIndex: 0
                }) : null; }, onFocus: function () { return _this.setState({ isFocused: true }); } }));
    };
    TagDropdownSelect.prototype.selectTag = function (tag) {
        var onSelect = this.props.onSelect;
        this.setState({ value: "", focusedIndex: 0 });
        onSelect(tag);
        if (this.focusAnchorRef.current !== null) {
            this.focusAnchorRef.current.focus();
        }
    };
    TagDropdownSelect.prototype.filterTags = function (tags) {
        var value = this.state.value;
        if (value.trim() === "") {
            return tags;
        }
        return tags.filter(function (x) { return x.toLowerCase().indexOf(value.toLowerCase()) !== -1; });
    };
    return TagDropdownSelect;
}(React.Component));
exports.default = TagDropdownSelect;
