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
exports.Tab = void 0;
var React = __importStar(require("react"));
var Tabs_1 = require("@skbkontur/react-ui/components/Tabs");
var Tabs_less_1 = __importDefault(require("./Tabs.less"));
var TabsTab = Tabs_1.Tabs.Tab;
var TabsCustom = /** @class */ (function (_super) {
    __extends(TabsCustom, _super);
    function TabsCustom(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            active: props.value
        };
        return _this;
    }
    TabsCustom.prototype.render = function () {
        var _this = this;
        var active = this.state.active;
        var children = this.props.children;
        if (React.Children.toArray(children).filter(Boolean).length === 0) {
            return React.createElement("div", null);
        }
        if (React.Children.toArray(children).filter(Boolean).length === 1) {
            return React.createElement("div", null, children);
        }
        return React.createElement("div", null,
            React.createElement("div", { className: Tabs_less_1.default("header") },
                React.createElement(Tabs_1.Tabs, { value: active, onValueChange: function (value) { return _this.setState({ active: value }); } }, React.Children.map(children, function (_a) {
                    var props = _a.props;
                    return React.createElement(TabsTab, { id: props.id }, props.label);
                }))),
            React.Children.toArray(children).filter(function (_a) {
                var props = _a.props;
                return props.id === active;
            }));
    };
    TabsCustom.Tab = function Tab(_a) {
        var children = _a.children;
        return React.createElement("div", null, children);
    };
    return TabsCustom;
}(React.Component));
exports.default = TabsCustom;
exports.Tab = TabsCustom.Tab;
