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
var Select_1 = require("@skbkontur/react-ui/components/Select");
var StatusIcon_1 = __importDefault(require("../StatusIcon/StatusIcon"));
var Status_1 = require("../../Domain/Status");
var ItemsStack_1 = require("../ItemsStack/ItemsStack");
function renderItem(value, item) {
    return React.createElement(ItemsStack_1.RowStack, { baseline: true, block: true, gap: 2 },
        React.createElement(ItemsStack_1.Fit, null,
            React.createElement(StatusIcon_1.default, { status: value })),
        React.createElement(ItemsStack_1.Fit, null, item));
}
function StatusSelect(props) {
    var availableStatuses = props.availableStatuses, value = props.value, onChange = props.onChange;
    return React.createElement(Select_1.Select, { width: 130, value: value, renderItem: renderItem, renderValue: renderItem, items: availableStatuses.map(function (x) { return [x, Status_1.getStatusCaption(x)]; }), onValueChange: function (v) { return onChange(v); } });
}
exports.default = StatusSelect;
