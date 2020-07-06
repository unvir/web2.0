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
var ArrowChevronLeft_1 = __importDefault(require("@skbkontur/react-icons/ArrowChevronLeft"));
var Global_1 = require("../Domain/Global");
var MobileHeader_1 = __importDefault(require("../Components/Mobile/MobileHeader/MobileHeader"));
function MobileErrorContainer() {
    return React.createElement(React.Fragment, null,
        React.createElement(MobileHeader_1.default, null,
            React.createElement(MobileHeader_1.default.HeaderBlock, null,
                React.createElement(MobileHeader_1.default.LeftButton, { icon: React.createElement(ArrowChevronLeft_1.default, null), linkTo: Global_1.getPageLink("index") }),
                React.createElement(MobileHeader_1.default.Title, null, "Moira"))),
        React.createElement("main", { style: { padding: "0 20px" } },
            React.createElement("h1", null, "404"),
            React.createElement("p", null, "Page not found")));
}
exports.default = MobileErrorContainer;
