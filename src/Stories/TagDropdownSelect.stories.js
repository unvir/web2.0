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
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var range_1 = __importDefault(require("lodash/range"));
var TagDropdownSelect_1 = __importDefault(require("../Components/TagDropdownSelect/TagDropdownSelect"));
var TagDropdownSelectContainer = /** @class */ (function (_super) {
    __extends(TagDropdownSelectContainer, _super);
    function TagDropdownSelectContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            tags: []
        };
        return _this;
    }
    TagDropdownSelectContainer.prototype.render = function () {
        var _this = this;
        var _a = this.props, availableTags = _a.availableTags, _b = _a.allowCreateNewTags, allowCreateNewTags = _b === void 0 ? false : _b;
        var tags = this.state.tags;
        return React.createElement(TagDropdownSelect_1.default, { width: 500, allowCreateNewTags: allowCreateNewTags, value: tags, onChange: function (x) { return _this.setState({ tags: x }); }, availableTags: availableTags });
    };
    return TagDropdownSelectContainer;
}(React.Component));
react_1.storiesOf("TagDropdownSelect", module).add("Default", function () { return React.createElement(TagDropdownSelect_1.default, { width: 500, value: [], onChange: addon_actions_1.action("onChange"), availableTags: ["tag1", "tag2"] }); }).add("Statefull", function () { return React.createElement(TagDropdownSelectContainer, { availableTags: ["tag1", "tag2"] }); }).add("AllowCreateNewTags", function () { return React.createElement(TagDropdownSelectContainer, { allowCreateNewTags: true, availableTags: ["tag1", "tag2"] }); }).add("StatefullManyTags", function () { return React.createElement(TagDropdownSelectContainer, { availableTags: __spreadArrays(["tag1", "tag2"], range_1.default(0, 10).map(function (x) { return "'a-tag" + x + "'"; }), range_1.default(0, 10).map(function (x) { return "'b-tag" + x + "'"; }), range_1.default(0, 10).map(function (x) { return "'c-tag" + x + "'"; }), range_1.default(0, 10).map(function (x) { return "'d-tag" + x + "'"; }), range_1.default(0, 10).map(function (x) { return "'e-tag" + x + "'"; }), range_1.default(0, 10).map(function (x) { return "'z-tag" + x + "'"; })) }); }).add("StatefullAnomalyManyTags", function () { return React.createElement(TagDropdownSelectContainer, { availableTags: __spreadArrays(["tag1", "tag2"], range_1.default(0, 50).map(function (x) { return "'a-tag" + x + "'"; }), range_1.default(0, 50).map(function (x) { return "'b-tag" + x + "'"; }), range_1.default(0, 50).map(function (x) { return "'c-tag" + x + "'"; }), range_1.default(0, 50).map(function (x) { return "'d-tag" + x + "'"; }), range_1.default(0, 50).map(function (x) { return "'e-tag" + x + "'"; }), range_1.default(0, 50).map(function (x) { return "'z-tag" + x + "'"; })) }); }).add("ManySelectedTags", function () { return React.createElement(TagDropdownSelect_1.default, { width: 500, value: __spreadArrays(range_1.default(0, 30).map(function (x) { return "'a-tag" + x + "'"; })), onChange: addon_actions_1.action("onChange"), availableTags: __spreadArrays(range_1.default(0, 50).map(function (x) { return "'a-tag" + x + "'"; })) }); });
