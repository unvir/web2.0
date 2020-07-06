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
/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
var React = __importStar(require("react"));
var Toggle_1 = require("@skbkontur/react-ui/components/Toggle");
var Toggle_less_1 = __importDefault(require("./Toggle.less"));
function ToggleWithLabel(props) {
    var checked = props.checked, label = props.label, onChange = props.onChange;
    return React.createElement("label", { className: Toggle_less_1.default("toggle") },
        React.createElement(Toggle_1.Toggle, { checked: Boolean(checked), onChange: function () {
                onChange(!checked);
            } }),
        " ",
        label);
}
exports.default = ToggleWithLabel;
