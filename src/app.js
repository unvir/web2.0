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
exports.default = void 0;
var React = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_router_dom_1 = require("react-router-dom");
var MoiraApi_1 = __importDefault(require("./Api/MoiraApi"));
var MoiraApiInjection_1 = require("./Api/MoiraApiInjection");
var mobile_bundle_1 = __importDefault(require("./mobile.bundle"));
var desktop_bundle_1 = __importDefault(require("./desktop.bundle"));
var check_mobile_1 = __importDefault(require("./helpers/check-mobile"));
require("./style.less");
var root = document.getElementById("root");
var moiraApi = new MoiraApi_1.default("/api");
var render = function (Component) {
    if (root !== null) {
        react_dom_1.default.render(React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(MoiraApiInjection_1.ApiProvider, { value: moiraApi },
                React.createElement(Component, null))), root);
    }
};
var isMobile = check_mobile_1.default(window.navigator.userAgent);
var load = function () {
    if (isMobile) {
        /*
            bundle-loader заменяет экспорт на свой. Вместо ожидаемого React.Component импортируется функция,
            возвращающая промис и принимающая коллбек, который будет вызван, когда промис зарезолвится.
            Из-за этого Флоу кидает ошибку. Специальный комментарий её отключает
        */
        // $FlowFixMe
        mobile_bundle_1.default(function (bundle) { return render(bundle.default); });
    }
    else {
        // $FlowFixMe
        desktop_bundle_1.default(function (bundle) { return render(bundle.default); });
    }
};
exports.default = load;
