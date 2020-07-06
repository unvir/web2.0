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
var Paging_1 = require("@skbkontur/react-ui/components/Paging");
var Spinner_1 = require("@skbkontur/react-ui/components/Spinner");
var Menu_1 = __importDefault(require("@skbkontur/react-icons/Menu"));
var Filter_1 = __importDefault(require("@skbkontur/react-icons/Filter"));
var MobileTriggerListItem_1 = __importDefault(require("../MobileTriggerListItem/MobileTriggerListItem"));
var MobileHeader_1 = __importDefault(require("../MobileHeader/MobileHeader"));
var MobileTriggerListPage_less_1 = __importDefault(require("./MobileTriggerListPage.less"));
var MobileTriggerListPage = /** @class */ (function (_super) {
    __extends(MobileTriggerListPage, _super);
    function MobileTriggerListPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileTriggerListPage.prototype.render = function () {
        var _a = this.props, loading = _a.loading, triggers = _a.triggers, onOpenTagSelector = _a.onOpenTagSelector, activePage = _a.activePage, pageCount = _a.pageCount, onChange = _a.onChange;
        return React.createElement("div", null,
            React.createElement(MobileHeader_1.default, null,
                React.createElement(MobileHeader_1.default.HeaderBlock, null,
                    React.createElement(MobileHeader_1.default.LeftButton, { icon: React.createElement(Menu_1.default, null) }),
                    React.createElement(MobileHeader_1.default.Title, null,
                        "Moira: ",
                        this.renderTitle()),
                    React.createElement(MobileHeader_1.default.RightButton, { icon: React.createElement(Filter_1.default, null), onClick: onOpenTagSelector }))),
            React.createElement("div", { className: MobileTriggerListPage_less_1.default("content") },
                triggers != null && triggers.length === 0 && React.createElement("div", { style: { padding: 30, color: "#666", textAlign: "center" } }, "No results :-("),
                triggers != null && triggers.map(function (trigger) { return React.createElement(MobileTriggerListItem_1.default, { key: trigger.id, data: trigger }); }),
                triggers != null && loading && React.createElement("div", null,
                    React.createElement(Spinner_1.Spinner, { type: "mini", caption: "Loading..." }))),
            pageCount > 1 && React.createElement("div", { style: { padding: "25px 15px 50px" } },
                React.createElement(Paging_1.Paging, { caption: "Next page", activePage: activePage, pagesCount: pageCount, onPageChange: function (page) {
                        if (onChange) {
                            onChange({ page: page });
                        }
                    }, withoutNavigationHint: true })));
    };
    MobileTriggerListPage.prototype.renderTitle = function () {
        var _a = this.props, triggers = _a.triggers, loading = _a.loading, selectedTags = _a.selectedTags;
        if (triggers == null && loading) {
            return "Loading...";
        }
        if (selectedTags == null || selectedTags.length === 0) {
            return "All triggers";
        }
        if (selectedTags.length === 1) {
            return "#" + selectedTags[0];
        }
        return selectedTags.length + " tags";
    };
    return MobileTriggerListPage;
}(React.Component));
exports.default = MobileTriggerListPage;
