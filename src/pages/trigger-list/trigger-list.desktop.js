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
exports.default = void 0;
var React = __importStar(require("react"));
var difference_1 = __importDefault(require("lodash/difference"));
var Paging_1 = require("@skbkontur/react-ui/components/Paging");
var Toggle_1 = require("@skbkontur/react-ui/components/Toggle");
var Global_1 = require("../../Domain/Global");
var Layout_1 = __importStar(require("../../Components/Layout/Layout"));
var ItemsStack_1 = require("../../Components/ItemsStack/ItemsStack");
var SearchSelector_1 = __importDefault(require("../../Components/SearchSelector/SearchSelector"));
var AddingButton_1 = __importDefault(require("../../Components/AddingButton/AddingButton"));
var TriggerList_1 = __importDefault(require("../../Components/TriggerList/TriggerList"));
var TriggerListDesktop = /** @class */ (function (_super) {
    __extends(TriggerListDesktop, _super);
    function TriggerListDesktop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (tags, searchText) {
            var onChange = _this.props.onChange;
            onChange({ tags: tags, searchText: searchText });
        };
        _this.handleSearch = function (searchText) {
            var onChange = _this.props.onChange;
            onChange({ searchText: searchText });
        };
        return _this;
    }
    TriggerListDesktop.prototype.render = function () {
        var _a = this.props, selectedTags = _a.selectedTags, subscribedTags = _a.subscribedTags, allTags = _a.allTags, onlyProblems = _a.onlyProblems, triggers = _a.triggers, activePage = _a.activePage, pageCount = _a.pageCount, onChange = _a.onChange, searchText = _a.searchText, loading = _a.loading, error = _a.error, onSetMetricMaintenance = _a.onSetMetricMaintenance, onRemoveMetric = _a.onRemoveMetric;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            React.createElement(Layout_1.LayoutPlate, null,
                React.createElement(ItemsStack_1.RowStack, { verticalAlign: "baseline", block: true, gap: 3 },
                    React.createElement(ItemsStack_1.Fill, null,
                        React.createElement(SearchSelector_1.default, { search: searchText, selectedTokens: selectedTags, subscribedTokens: difference_1.default(subscribedTags, selectedTags), remainingTokens: difference_1.default(allTags, selectedTags), onChange: this.handleChange, onSearch: this.handleSearch })),
                    React.createElement(ItemsStack_1.Fit, null,
                        React.createElement(Toggle_1.Toggle, { checked: onlyProblems, onValueChange: function (value) { return onChange({ onlyProblems: value }); } }),
                        " ",
                        "Only Problems"))),
            React.createElement(Layout_1.LayoutContent, null,
                React.createElement(ItemsStack_1.ColumnStack, { block: true, gap: 6, horizontalAlign: "stretch" },
                    React.createElement(AddingButton_1.default, { to: Global_1.getPageLink("triggerAdd") }),
                    React.createElement(TriggerList_1.default, { searchMode: searchText !== "", items: triggers, onChange: onSetMetricMaintenance, onRemove: onRemoveMetric }))),
            pageCount > 1 && React.createElement(Layout_1.LayoutFooter, null,
                React.createElement(Paging_1.Paging, { caption: "Next page", activePage: activePage, pagesCount: pageCount, onPageChange: function (page) { return onChange({ page: page }); }, withoutNavigationHint: true })));
    };
    return TriggerListDesktop;
}(React.Component));
exports.default = TriggerListDesktop;
