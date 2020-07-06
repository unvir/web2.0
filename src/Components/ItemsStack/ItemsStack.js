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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fixed = exports.Fill = exports.Fit = exports.ColumnStack = exports.RowStack = void 0;
/* eslint-disable */
// ToDo перевести на @skbkontur/react-stack-layout
var React = __importStar(require("react"));
var ItemsStacks_less_1 = __importDefault(require("./ItemsStacks.less"));
var RowStack = /** @class */ (function (_super) {
    __extends(RowStack, _super);
    function RowStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowStack.prototype.getFlexBoxAlignItems = function (horizontalAlign, baseline) {
        var resultHorizontalAlign = horizontalAlign || "top";
        if (baseline === true) {
            if (horizontalAlign !== undefined) {
                throw new Error("Should be specified horizontalAlign or one of it's shorthand");
            }
            resultHorizontalAlign = "baseline";
        }
        return RowStack.verticalAlignMap[resultHorizontalAlign];
    };
    RowStack.prototype.render = function () {
        var _a = this.props, tag = _a.tag, children = _a.children, block = _a.block, inline = _a.inline, baseline = _a.baseline, verticalAlign = _a.verticalAlign, className = _a.className, _b = _a.style, style = _b === void 0 ? {} : _b, _c = _a.gap, gap = _c === void 0 ? 0 : _c, id = _a.id;
        var TagComponent = tag || "div";
        if (block === true && inline === true) {
            throw new Error("Only one of block or inline property should be specified");
        }
        return React.createElement(TagComponent, { id: id, className: ItemsStacks_less_1.default("row-stack", "gap-" + gap.toString(), { block: block }, className), style: __assign(__assign({}, style), { alignItems: this.getFlexBoxAlignItems(verticalAlign, baseline || false) }) }, children);
    };
    RowStack.verticalAlignMap = {
        top: "flex-start",
        bottom: "flex-end",
        center: "center",
        baseline: "baseline",
        stretch: "stretch"
    };
    return RowStack;
}(React.Component));
exports.RowStack = RowStack;
var ColumnStack = /** @class */ (function (_super) {
    __extends(ColumnStack, _super);
    function ColumnStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnStack.prototype.getFlexBoxAlignItems = function (horizontalAlign, stretch) {
        var resultHorizontalAlign = horizontalAlign || "left";
        if (stretch === true) {
            if (horizontalAlign !== undefined) {
                throw new Error("Should be specified horizontalAlign or one of it's shorthand");
            }
            resultHorizontalAlign = "stretch";
        }
        return ColumnStack.alignMap[resultHorizontalAlign];
    };
    ColumnStack.prototype.render = function () {
        var _a = this.props, tag = _a.tag, children = _a.children, block = _a.block, inline = _a.inline, stretch = _a.stretch, horizontalAlign = _a.horizontalAlign, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.style, style = _c === void 0 ? {} : _c, _d = _a.gap, gap = _d === void 0 ? 0 : _d;
        if (block === true && inline === true) {
            throw new Error("Only one of block or inline property should be specified");
        }
        var TagComponent = tag || "div";
        return React.createElement(TagComponent, { className: ItemsStacks_less_1.default("column-stack", "gap-" + gap.toString(), { block: block }, className), style: __assign(__assign({}, style), { alignItems: this.getFlexBoxAlignItems(horizontalAlign, stretch || false) }) }, children);
    };
    ColumnStack.alignMap = {
        left: "flex-start",
        right: "flex-end",
        center: "center",
        stretch: "stretch"
    };
    return ColumnStack;
}(React.Component));
exports.ColumnStack = ColumnStack;
function Fit(_a) {
    var tag = _a.tag, className = _a.className, children = _a.children, rest = __rest(_a, ["tag", "className", "children"]);
    var TagComponent = tag || "div";
    return React.createElement(TagComponent, __assign({ className: ItemsStacks_less_1.default(className, "fit") }, rest), children);
}
exports.Fit = Fit;
function Fill(_a) {
    var tag = _a.tag, children = _a.children, className = _a.className, rest = __rest(_a, ["tag", "children", "className"]);
    var TagComponent = tag || "div";
    return React.createElement(TagComponent, __assign({ className: ItemsStacks_less_1.default("fill", className) }, rest), children);
}
exports.Fill = Fill;
function Fixed(_a) {
    var tag = _a.tag, children = _a.children, width = _a.width, className = _a.className, style = _a.style, allowWrap = _a.allowWrap, rest = __rest(_a, ["tag", "children", "width", "className", "style", "allowWrap"]);
    var TagComponent = tag || "div";
    return React.createElement(TagComponent, __assign({ className: ItemsStacks_less_1.default("fixed", { "no-overflow": !allowWrap }, className), style: __assign(__assign({}, style), { width: width }) }, rest), children);
}
exports.Fixed = Fixed;
