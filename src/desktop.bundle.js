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
var react_router_dom_1 = require("react-router-dom");
var root_1 = require("react-hot-loader/root");
var HeaderContainer_1 = __importDefault(require("./Containers/HeaderContainer"));
var Footer_1 = __importDefault(require("./Components/Footer/Footer"));
var TriggerEditContainer_1 = __importDefault(require("./Containers/TriggerEditContainer"));
var TriggerDuplicateContainer_1 = __importDefault(require("./Containers/TriggerDuplicateContainer"));
var TriggerAddContainer_1 = __importDefault(require("./Containers/TriggerAddContainer"));
var SettingsContainer_1 = __importDefault(require("./Containers/SettingsContainer"));
var NotificationListContainer_1 = __importDefault(require("./Containers/NotificationListContainer"));
var TagListContainer_1 = __importDefault(require("./Containers/TagListContainer"));
var PatternListContainer_1 = __importDefault(require("./Containers/PatternListContainer"));
var ErrorContainer_1 = __importDefault(require("./Containers/ErrorContainer"));
var Global_1 = require("./Domain/Global");
var desktop_less_1 = __importDefault(require("./desktop.less"));
var trigger_list_1 = __importDefault(require("./pages/trigger-list/trigger-list"));
var trigger_list_desktop_1 = __importDefault(require("./pages/trigger-list/trigger-list.desktop"));
var trigger_1 = __importDefault(require("./pages/trigger/trigger"));
var trigger_desktop_1 = __importDefault(require("./pages/trigger/trigger.desktop"));
var ResponsiveRoute = function (_a) {
    var Container = _a.container, View = _a.view, Component = _a.component, rest = __rest(_a, ["container", "view", "component"]);
    return React.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) { return React.createElement(Container, __assign({}, props, { view: View })); } }));
};
function Desktop() {
    return React.createElement("div", { className: desktop_less_1.default("layout") },
        React.createElement(HeaderContainer_1.default, { className: desktop_less_1.default("header") }),
        React.createElement(react_router_dom_1.Switch, null,
            React.createElement(ResponsiveRoute, { exact: true, path: Global_1.getPagePath("index"), container: trigger_list_1.default, view: trigger_list_desktop_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("triggerAdd"), component: TriggerAddContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("triggerDuplicate"), component: TriggerDuplicateContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("triggerEdit"), component: TriggerEditContainer_1.default }),
            React.createElement(ResponsiveRoute, { exact: true, path: Global_1.getPagePath("trigger"), container: trigger_1.default, view: trigger_desktop_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("settings"), component: SettingsContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("notifications"), component: NotificationListContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("tags"), component: TagListContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { exact: true, path: Global_1.getPagePath("patterns"), component: PatternListContainer_1.default }),
            React.createElement(react_router_dom_1.Route, { component: ErrorContainer_1.default })),
        React.createElement(Footer_1.default, { className: desktop_less_1.default("footer") }));
}
exports.default = root_1.hot(Desktop);
