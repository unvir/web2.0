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
exports.LayoutFooter = exports.LayoutContent = exports.LayoutPlate = exports.LayoutTitle = void 0;
var React = __importStar(require("react"));
var Loader_1 = require("@skbkontur/react-ui/components/Loader");
var Warning_1 = __importDefault(require("@skbkontur/react-icons/Warning"));
var Layout_less_1 = __importDefault(require("./Layout.less"));
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        var _a = this.props, _b = _a.loading, loading = _b === void 0 ? false : _b, _c = _a.error, error = _c === void 0 ? null : _c, children = _a.children;
        return React.createElement("main", { className: Layout_less_1.default("layout") },
            error && React.createElement("div", { className: Layout_less_1.default("error") },
                React.createElement(Warning_1.default, null),
                " ",
                error),
            React.createElement(Loader_1.Loader, { className: Layout_less_1.default("loading"), active: loading, caption: "Loading" }, children));
    };
    Layout.Plate = function Plate(_a) {
        var children = _a.children;
        return React.createElement("div", { className: Layout_less_1.default("grey-plate") },
            React.createElement("div", { className: Layout_less_1.default("container") }, children));
    };
    Layout.Title = function Title(_a) {
        var children = _a.children;
        return React.createElement("h1", { className: Layout_less_1.default("title") }, children);
    };
    Layout.Content = function Content(_a) {
        var children = _a.children;
        return React.createElement("div", { className: Layout_less_1.default("content") },
            React.createElement("div", { className: Layout_less_1.default("container") }, children));
    };
    Layout.Footer = function Paging(_a) {
        var children = _a.children;
        return React.createElement("div", { className: Layout_less_1.default("paging") },
            React.createElement("div", { className: Layout_less_1.default("container") }, children));
    };
    return Layout;
}(React.Component));
exports.default = Layout;
exports.LayoutTitle = Layout.Title;
exports.LayoutPlate = Layout.Plate;
exports.LayoutContent = Layout.Content;
exports.LayoutFooter = Layout.Footer;
