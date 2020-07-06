"use strict";
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
var React = __importStar(require("react"));
var root_1 = require("react-hot-loader/root");
var react_router_dom_1 = require("react-router-dom");
var MobileErrorContainer_1 = __importDefault(require("./Containers/MobileErrorContainer"));
var Global_1 = require("./Domain/Global");
var trigger_list_1 = __importDefault(require("./pages/trigger-list/trigger-list"));
var trigger_list_mobile_1 = __importDefault(require("./pages/trigger-list/trigger-list.mobile"));
var trigger_1 = __importDefault(require("./pages/trigger/trigger"));
var trigger_mobile_1 = __importDefault(require("./pages/trigger/trigger.mobile"));
var ResponsiveRoute = function (_a) {
    var Container = _a.container, View = _a.view, Component = _a.component, rest = __rest(_a, ["container", "view", "component"]);
    return React.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) { return React.createElement(Container, __assign({}, props, { view: View })); } }));
};
function Mobile() {
    return React.createElement(react_router_dom_1.Switch, null,
        React.createElement(ResponsiveRoute, { exact: true, path: Global_1.getPagePath("index"), container: trigger_list_1.default, view: trigger_list_mobile_1.default }),
        React.createElement(ResponsiveRoute, { exact: true, path: Global_1.getPagePath("trigger"), container: trigger_1.default, view: trigger_mobile_1.default }),
        React.createElement(react_router_dom_1.Route, { component: MobileErrorContainer_1.default }));
}
exports.default = root_1.hot(Mobile);
