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
var MobileTriggerListPage_1 = __importDefault(require("../../Components/Mobile/MobileTriggerListPage/MobileTriggerListPage"));
var MobileTagSelectorPage_1 = __importDefault(require("../../Components/Mobile/MobileTagSelectorPage/MobileTagSelectorPage"));
var TriggerListMobile = /** @class */ (function (_super) {
    __extends(TriggerListMobile, _super);
    function TriggerListMobile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showTagSelector: false
        };
        _this.handleChangeSelectedTags = function (nextTags, nextOnlyProblems) {
            var onChange = _this.props.onChange;
            _this.setState({ showTagSelector: false });
            if (onChange) {
                onChange({
                    tags: nextTags,
                    onlyProblems: nextOnlyProblems
                });
            }
        };
        return _this;
    }
    TriggerListMobile.prototype.render = function () {
        var _this = this;
        var _a = this.props, selectedTags = _a.selectedTags, allTags = _a.allTags, onlyProblems = _a.onlyProblems, triggers = _a.triggers, activePage = _a.activePage, pageCount = _a.pageCount, onChange = _a.onChange;
        var showTagSelector = this.state.showTagSelector;
        if (showTagSelector) {
            return React.createElement(MobileTagSelectorPage_1.default, { availableTags: allTags, selectedTags: selectedTags, onlyProblems: onlyProblems, onClose: function () { return _this.setState({ showTagSelector: false }); }, onChange: this.handleChangeSelectedTags });
        }
        return React.createElement(MobileTriggerListPage_1.default, { selectedTags: selectedTags, triggers: triggers, loading: false, onOpenTagSelector: function () { return _this.setState({ showTagSelector: true }); }, activePage: activePage, pageCount: pageCount, onChange: onChange });
    };
    return TriggerListMobile;
}(React.Component));
exports.default = TriggerListMobile;
