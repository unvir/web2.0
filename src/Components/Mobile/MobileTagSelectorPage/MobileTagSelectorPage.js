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
var sortBy_1 = __importDefault(require("lodash/sortBy"));
var union_1 = __importDefault(require("lodash/union"));
var difference_1 = __importDefault(require("lodash/difference"));
var Toggle_1 = require("@skbkontur/react-ui/components/Toggle");
var ArrowChevronLeft_1 = __importDefault(require("@skbkontur/react-icons/ArrowChevronLeft"));
var MobileHeader_1 = __importDefault(require("../MobileHeader/MobileHeader"));
var MobileTagSelectorPage_less_1 = __importDefault(require("./MobileTagSelectorPage.less"));
var MobileTagSelectorPage = /** @class */ (function (_super) {
    __extends(MobileTagSelectorPage, _super);
    function MobileTagSelectorPage(props) {
        var _this = _super.call(this, props) || this;
        _this.handleApply = function () {
            var _a = _this.state, nextSelectedTags = _a.nextSelectedTags, nextOnlyProblems = _a.nextOnlyProblems;
            var onChange = _this.props.onChange;
            onChange(nextSelectedTags, nextOnlyProblems);
        };
        _this.renderTag = function (tag) {
            var nextSelectedTags = _this.state.nextSelectedTags;
            var tagSelected = nextSelectedTags.includes(tag);
            return (
            /* eslint-disable */
            React.createElement("div", { key: tag, className: MobileTagSelectorPage_less_1.default("tag"), onClick: function () { return _this.setState({
                    nextSelectedTags: !tagSelected ? union_1.default(nextSelectedTags, [tag]) : difference_1.default(nextSelectedTags, [tag])
                }); } },
                React.createElement("div", { className: MobileTagSelectorPage_less_1.default("checkbox-area") },
                    React.createElement("span", { className: MobileTagSelectorPage_less_1.default("checkbox", { checked: tagSelected }) })),
                React.createElement("div", { className: MobileTagSelectorPage_less_1.default("caption") }, tag)));
        };
        _this.state = {
            searchString: "",
            sortedTags: sortBy_1.default(difference_1.default(props.availableTags, props.selectedTags), function (x) { return x; }),
            nextSelectedTags: props.selectedTags,
            nextOnlyProblems: props.onlyProblems
        };
        return _this;
    }
    MobileTagSelectorPage.matches = function (target, str) {
        return str.toLowerCase().split(" ").some(function (x) { return target.toLowerCase().includes(x); });
    };
    MobileTagSelectorPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedTags = _a.selectedTags, availableTags = _a.availableTags, onClose = _a.onClose, onlyProblems = _a.onlyProblems;
        var _b = this.state, searchString = _b.searchString, sortedTags = _b.sortedTags, nextSelectedTags = _b.nextSelectedTags, nextOnlyProblems = _b.nextOnlyProblems;
        var hasChanges = difference_1.default(selectedTags, nextSelectedTags).length > 0 || difference_1.default(nextSelectedTags, selectedTags).length > 0 || Boolean(nextOnlyProblems) !== Boolean(onlyProblems);
        return React.createElement("div", { className: MobileTagSelectorPage_less_1.default("root") },
            React.createElement(MobileHeader_1.default, null,
                React.createElement(MobileHeader_1.default.HeaderBlock, null,
                    React.createElement(MobileHeader_1.default.LeftButton, { icon: React.createElement(ArrowChevronLeft_1.default, null), onClick: onClose }),
                    React.createElement(MobileHeader_1.default.HeaderInput, { placeholder: "Search tags...", value: searchString, onChange: function (e, value) { return _this.setState({ searchString: value }); }, onClear: function () { return _this.setState({ searchString: "" }); } }))),
            searchString === "" && React.createElement("div", null,
                this.renderOnlyProblemsToggle(),
                selectedTags.map(this.renderTag),
                sortedTags.map(this.renderTag)),
            searchString !== "" && React.createElement("div", null, availableTags.filter(function (x) { return MobileTagSelectorPage.matches(x, searchString); }).map(this.renderTag)),
            hasChanges && React.createElement(BottomFixedButton, { onClick: this.handleApply }, "Apply"));
    };
    MobileTagSelectorPage.prototype.renderOnlyProblemsToggle = function () {
        var _this = this;
        var nextOnlyProblems = this.state.nextOnlyProblems;
        return (
        /* eslint-disable */
        React.createElement("label", { className: MobileTagSelectorPage_less_1.default("toggle") },
            React.createElement("span", { className: MobileTagSelectorPage_less_1.default("toggle-label") }, "Show only problems"),
            React.createElement("span", { className: MobileTagSelectorPage_less_1.default("toggle-control") },
                React.createElement(Toggle_1.Toggle, { checked: nextOnlyProblems, onChange: function () { return _this.setState({ nextOnlyProblems: !nextOnlyProblems }); } }))));
    };
    return MobileTagSelectorPage;
}(React.Component));
exports.default = MobileTagSelectorPage;
function BottomFixedButton(_a) {
    var children = _a.children, onClick = _a.onClick;
    return React.createElement("div", { className: MobileTagSelectorPage_less_1.default("bottom-fixed-button-container") },
        React.createElement("button", { type: "button", className: MobileTagSelectorPage_less_1.default("bottom-fixed-button"), onClick: onClick }, children));
}
