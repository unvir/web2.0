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
exports.default = void 0;
var React = __importStar(require("react"));
var Selector_1 = __importDefault(require("../Selector/Selector"));
var Token_1 = __importDefault(require("../Token/Token"));
var SelectorInitialView_1 = __importDefault(require("./SelectorInitialView"));
var SelectorResultsView_1 = __importDefault(require("./SelectorResultsView"));
var SearchSelector_less_1 = __importDefault(require("./SearchSelector.less"));
// ToDo вынести в хелперы
var clearInput = function (input) {
    var cleared = input;
    cleared = cleared.trim();
    cleared = cleared.replace(/[\s]+/g, " ");
    return cleared;
};
// ToDo вынести в хелперы
var searchTokens = function (query, items) {
    var topMatchItems = [];
    var otherItems = [];
    var sort = function (a, b) { return a.length - b.length; };
    var queryLowerCase = query.toLowerCase();
    items.forEach(function (item) {
        var itemLowerCase = item.toLowerCase();
        var index = itemLowerCase.indexOf(queryLowerCase);
        if (index === -1) {
            return;
        }
        if (index === 0) {
            topMatchItems.push(item);
        }
        var prevChar = itemLowerCase[index - 1];
        if (prevChar === " " || prevChar === "." || prevChar === "-") {
            otherItems.push(item);
        }
    });
    return __spreadArrays(topMatchItems.sort(sort), otherItems.sort(sort));
};
var SearchSelector = /** @class */ (function (_super) {
    __extends(SearchSelector, _super);
    function SearchSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onRemoveLastToken = function () {
            var _a = _this.props, selectedTokens = _a.selectedTokens, onChange = _a.onChange;
            var clearedSearchValue = _this.state.clearedSearchValue;
            if (!selectedTokens.length)
                return;
            var index = selectedTokens.length - 1;
            onChange(__spreadArrays(selectedTokens.slice(0, index), selectedTokens.slice(index + 1)), clearedSearchValue);
        };
        _this.handleInputChange = function (value) {
            _this.setState({ clearedSearchValue: clearInput(value), searchText: value });
        };
        _this.handleEnterKeyDown = function () {
            var clearedSearchValue = _this.state.clearedSearchValue;
            var onSearch = _this.props.onSearch;
            onSearch(clearedSearchValue);
        };
        _this.handleTokenSelect = function (token) {
            var _a = _this.props, selectedTokens = _a.selectedTokens, onChange = _a.onChange;
            onChange(__spreadArrays(selectedTokens, [token]), "");
            _this.setState({
                searchText: "",
                clearedSearchValue: ""
            });
        };
        _this.handleTokenRemove = function (token) {
            var _a = _this.props, selectedTokens = _a.selectedTokens, onChange = _a.onChange;
            var clearedSearchValue = _this.state.clearedSearchValue;
            var index = selectedTokens.indexOf(token);
            if (index === -1)
                return;
            onChange(__spreadArrays(selectedTokens.slice(0, index), selectedTokens.slice(index + 1)), clearedSearchValue);
        };
        _this.renderToken = function (token) { return React.createElement(Token_1.default, { type: "removable", onRemove: _this.handleTokenRemove }, token); };
        var _a = props.search, search = _a === void 0 ? "" : _a;
        _this.state = {
            searchText: search,
            clearedSearchValue: clearInput(search)
        };
        return _this;
    }
    SearchSelector.prototype.componentDidMount = function () {
        var _a = this.props.search, search = _a === void 0 ? "" : _a;
        this.setState({
            searchText: search,
            clearedSearchValue: clearInput(search)
        });
    };
    SearchSelector.prototype.render = function () {
        var _a = this.props, selectedTokens = _a.selectedTokens, subscribedTokens = _a.subscribedTokens, remainingTokens = _a.remainingTokens;
        var _b = this.state, clearedSearchValue = _b.clearedSearchValue, searchText = _b.searchText;
        var resultTokens = searchTokens(clearedSearchValue, remainingTokens);
        return React.createElement(Selector_1.default, { search: searchText, tokens: selectedTokens, renderToken: this.renderToken, onEnterKeyDown: this.handleEnterKeyDown, onBackspaceKeyDown: this.onRemoveLastToken, onInputChange: this.handleInputChange },
            React.createElement("div", { className: SearchSelector_less_1.default("container") }, clearedSearchValue === "" ? React.createElement(SelectorInitialView_1.default, { tokens: subscribedTokens, onSelect: this.handleTokenSelect }) : React.createElement(SelectorResultsView_1.default, { tokens: resultTokens, onSelect: this.handleTokenSelect })));
    };
    return SearchSelector;
}(React.Component));
exports.default = SearchSelector;
