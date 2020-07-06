"use strict";
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
var react_router_dom_1 = require("react-router-dom");
var Link_1 = require("@skbkontur/react-ui/components/Link");
var Settings_1 = __importDefault(require("@skbkontur/react-icons/Settings"));
var HelpBook_1 = __importDefault(require("@skbkontur/react-icons/HelpBook"));
var Global_1 = require("../../Domain/Global");
var RouterLink_1 = __importDefault(require("../RouterLink/RouterLink"));
var Header_less_1 = __importDefault(require("./Header.less"));
var moira_logo_svg_1 = __importDefault(require("./moira-logo.svg"));
function Header() {
    return React.createElement("header", { className: Header_less_1.default("header") },
        React.createElement("div", { className: Header_less_1.default("container") },
            React.createElement(react_router_dom_1.Link, { to: Global_1.getPageLink("index"), className: Header_less_1.default("logo-link") },
                React.createElement("img", { className: Header_less_1.default("logo-img"), src: moira_logo_svg_1.default, alt: "Moira" })),
            React.createElement("nav", { className: Header_less_1.default("menu") },
                React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("settings"), icon: React.createElement(Settings_1.default, null) }, "Notifications"),
                React.createElement(Link_1.Link, { href: Global_1.getPageLink("docs"), icon: React.createElement(HelpBook_1.default, null) }, "Help"))));
}
exports.default = Header;
