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
var ArrowBoldDown_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldDown"));
var ArrowBoldUp_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldUp"));
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var Global_1 = require("../../Domain/Global");
var RouterLink_1 = __importDefault(require("../RouterLink/RouterLink"));
var PatternList_less_1 = __importDefault(require("./PatternList.less"));
function PatternList(props) {
    var items = props.items, onRemove = props.onRemove, sortingColumn = props.sortingColumn, sortingDown = props.sortingDown, onSort = props.onSort;
    var sortingIcon = sortingDown ? React.createElement(ArrowBoldDown_1.default, null) : React.createElement(ArrowBoldUp_1.default, null);
    return React.createElement("div", null,
        React.createElement("div", { className: PatternList_less_1.default("row", "header") },
            React.createElement("div", { className: PatternList_less_1.default("name") }, "Pattern"),
            React.createElement("button", { type: "button", className: PatternList_less_1.default("trigger-counter", { sorting: onSort }), onClick: onSort && (function () { return onSort("trigger"); }) },
                "Triggers",
                " ",
                sortingColumn === "trigger" && React.createElement("span", { className: PatternList_less_1.default("icon") }, sortingIcon)),
            React.createElement("button", { type: "button", className: PatternList_less_1.default("metric-counter", { sorting: onSort }), onClick: onSort && (function () { return onSort("metric"); }) },
                "Metric",
                " ",
                sortingColumn === "metric" && React.createElement("span", { className: PatternList_less_1.default("icon") }, sortingIcon)),
            React.createElement("div", { className: PatternList_less_1.default("control") })),
        items.map(function (item) { return React.createElement(PatternListItem, { key: item.pattern, data: item, onRemove: function () { return onRemove(item.pattern); } }); }));
}
exports.default = PatternList;
var PatternListItem = /** @class */ (function (_super) {
    __extends(PatternListItem, _super);
    function PatternListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showInfo: false
        };
        return _this;
    }
    PatternListItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, onRemove = _a.onRemove;
        var pattern = data.pattern, triggers = data.triggers, metrics = data.metrics;
        var showInfo = this.state.showInfo;
        var isTriggers = triggers.length !== 0;
        var isMetrics = metrics.length !== 0;
        return React.createElement("div", { className: PatternList_less_1.default("row", { active: showInfo, clicable: isTriggers || isMetrics }) },
            isTriggers || isMetrics ? React.createElement("button", { type: "button", className: PatternList_less_1.default("name", "clicked"), onClick: function () { return _this.setState({ showInfo: !showInfo }); } }, pattern) : React.createElement("div", { className: PatternList_less_1.default("name") }, pattern),
            React.createElement("div", { className: PatternList_less_1.default("trigger-counter") }, triggers.length),
            React.createElement("div", { className: PatternList_less_1.default("metric-counter") }, metrics.length),
            React.createElement("div", { className: PatternList_less_1.default("control") },
                React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onRemove(); } }, "Delete")),
            showInfo && React.createElement("div", { className: PatternList_less_1.default("info") },
                isTriggers && React.createElement("div", { className: PatternList_less_1.default("group") },
                    React.createElement("b", null, "Triggers"),
                    triggers.map(function (_a) {
                        var id = _a.id, name = _a.name;
                        return React.createElement("div", { key: id, className: PatternList_less_1.default("item") },
                            React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("trigger", id) }, name));
                    })),
                isMetrics && React.createElement("div", { className: PatternList_less_1.default("group") },
                    React.createElement("b", null, "Metrics"),
                    metrics.map(function (metric) { return React.createElement("div", { key: metric, className: PatternList_less_1.default("item") }, metric); }))));
    };
    return PatternListItem;
}(React.Component));
