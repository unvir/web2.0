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
var date_fns_1 = require("date-fns");
var ArrowBoldDown_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldDown"));
var ArrowBoldUp_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldUp"));
var User_1 = __importDefault(require("@skbkontur/react-icons/User"));
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var Dropdown_1 = require("@skbkontur/react-ui/components/Dropdown");
var MenuItem_1 = require("@skbkontur/react-ui/components/MenuItem");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var roundValue_1 = __importDefault(require("../../helpers/roundValue"));
var Maintenance_1 = require("../../Domain/Maintenance");
var StatusIndicator_1 = __importDefault(require("../StatusIndicator/StatusIndicator"));
var MetricList_less_1 = __importDefault(require("./MetricList.less"));
var DateUtil_1 = require("../../helpers/DateUtil");
function maintenanceCaption(delta) {
    return React.createElement("span", null, delta <= 0 ? "Maintenance" : DateUtil_1.humanizeDuration(delta));
}
function maintenanceDelta(maintenance) {
    return (maintenance || 0) - date_fns_1.getUnixTime(DateUtil_1.getUTCDate());
}
function MetricList(props) {
    var status = props.status, items = props.items, onSort = props.onSort, onChange = props.onChange, onRemove = props.onRemove, noDataMerticCount = props.noDataMerticCount, onNoDataRemove = props.onNoDataRemove, sortingColumn = props.sortingColumn, sortingDown = props.sortingDown;
    var sortingIcon = sortingDown ? React.createElement(ArrowBoldDown_1.default, null) : React.createElement(ArrowBoldUp_1.default, null);
    return React.createElement("section", { className: MetricList_less_1.default("table") },
        React.createElement("header", { className: MetricList_less_1.default("row", "header") },
            status && React.createElement("div", { className: MetricList_less_1.default("state") }),
            React.createElement("div", { className: MetricList_less_1.default("name") },
                React.createElement("button", { type: "button", className: MetricList_less_1.default("a11y-span", { sorting: onSort }), onClick: onSort && (function () { return onSort("name"); }) },
                    "Name",
                    sortingColumn === "name" && React.createElement("span", { className: MetricList_less_1.default("icon") }, sortingIcon))),
            React.createElement("div", { className: MetricList_less_1.default("event") },
                React.createElement("button", { type: "button", className: MetricList_less_1.default("a11y-span", { sorting: onSort }), onClick: onSort && (function () { return onSort("event"); }) },
                    "Last event",
                    " ",
                    sortingColumn === "event" && React.createElement("span", { className: MetricList_less_1.default("icon") }, sortingIcon))),
            React.createElement("div", { className: MetricList_less_1.default("value") },
                React.createElement("button", { type: "button", className: MetricList_less_1.default("a11y-span", { sorting: onSort }), onClick: onSort && (function () { return onSort("value"); }) },
                    "Value",
                    " ",
                    sortingColumn === "value" && React.createElement("span", { className: MetricList_less_1.default("icon") }, sortingIcon))),
            React.createElement("div", { className: MetricList_less_1.default("maintenance") }),
            React.createElement("div", { className: MetricList_less_1.default("author") }),
            React.createElement("div", { className: MetricList_less_1.default("delete") }, typeof noDataMerticCount === "number" && noDataMerticCount > 1 && onNoDataRemove && React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onNoDataRemove(); } }, "Delete all NODATA"))),
        React.createElement("div", { className: MetricList_less_1.default("items") }, Object.keys(items).map(function (metric) {
            var _a = items[metric], value = _a.value, _b = _a.event_timestamp, eventTimestamp = _b === void 0 ? 0 : _b, state = _a.state, maintenance = _a.maintenance, maintenanceInfo = _a.maintenance_info;
            var delta = maintenanceDelta(maintenance);
            return React.createElement("div", { key: metric, className: MetricList_less_1.default("row") },
                status && React.createElement("div", { className: MetricList_less_1.default("state") },
                    React.createElement(StatusIndicator_1.default, { statuses: [state], size: 10 })),
                React.createElement("div", { className: MetricList_less_1.default("name") }, metric),
                React.createElement("div", { className: MetricList_less_1.default("event") }, date_fns_1.format(date_fns_1.fromUnixTime(eventTimestamp), "MMMM d, HH:mm:ss")),
                React.createElement("div", { className: MetricList_less_1.default("value") }, roundValue_1.default(value)),
                React.createElement("div", { className: MetricList_less_1.default("maintenance") },
                    React.createElement(Dropdown_1.Dropdown, { use: "link", caption: maintenanceCaption(delta) }, Object.keys(Maintenance_1.Maintenances).map(function (key) { return React.createElement(MenuItem_1.MenuItem, { key: key, onClick: function () { return onChange(metric, key); } }, Maintenance_1.getMaintenanceCaption(key)); }))),
                React.createElement("div", { className: MetricList_less_1.default("author") }, delta > 0 && maintenanceInfo && maintenanceInfo.setup_user && maintenanceInfo.setup_time && React.createElement(Tooltip_1.Tooltip, { render: function () { return React.createElement("div", null,
                        "Maintenance was set",
                        React.createElement("br", null),
                        "by ",
                        maintenanceInfo.setup_user,
                        React.createElement("br", null),
                        "at",
                        " ",
                        date_fns_1.format(date_fns_1.fromUnixTime(maintenanceInfo.setup_time || 0), "MMMM d, HH:mm:ss")); } },
                    React.createElement(User_1.default, { className: MetricList_less_1.default("maintenance-info") }))),
                React.createElement("div", { className: MetricList_less_1.default("delete") },
                    React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onRemove(metric); } }, "Delete")));
        })));
}
exports.default = MetricList;
