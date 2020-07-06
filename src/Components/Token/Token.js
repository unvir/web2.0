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
var Token_less_1 = __importDefault(require("./Token.less"));
var Token = function (props) {
    var children = props.children, type = props.type, onRemove = props.onRemove, onClick = props.onClick;
    if (type === "removable") {
        var handleRemove = function () {
            if (onRemove) {
                onRemove(children);
            }
        };
        return React.createElement("span", { className: Token_less_1.default("token", "removable") },
            children,
            React.createElement("button", { type: "button", className: Token_less_1.default("token-remove"), onClick: handleRemove, "aria-label": "Remove" }));
    }
    if (type === "selectable") {
        var handleClick = function () {
            if (onClick) {
                onClick(children);
            }
        };
        return React.createElement("button", { type: "button", className: Token_less_1.default("token", "selectable"), onClick: handleClick }, children);
    }
    return React.createElement("span", { className: Token_less_1.default("token") }, children);
};
exports.default = Token;
