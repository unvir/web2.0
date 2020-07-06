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
var remarkable_1 = __importDefault(require("remarkable"));
var dompurify_1 = require("dompurify");
var Link_1 = require("@skbkontur/react-ui/components/Link");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Dropdown_1 = require("@skbkontur/react-ui/components/Dropdown");
var MenuItem_1 = require("@skbkontur/react-ui/components/MenuItem");
var Tooltip_1 = require("@skbkontur/react-ui/components/Tooltip");
var Error_1 = __importDefault(require("@skbkontur/react-icons/Error"));
var Clock_1 = __importDefault(require("@skbkontur/react-icons/Clock"));
var Edit_1 = __importDefault(require("@skbkontur/react-icons/Edit"));
var Clear_1 = __importDefault(require("@skbkontur/react-icons/Clear"));
var DocumentCopy_1 = __importDefault(require("@skbkontur/react-icons/DocumentCopy"));
var User_1 = __importDefault(require("@skbkontur/react-icons/User"));
var TagGroup_1 = __importDefault(require("../TagGroup/TagGroup"));
var Maintenance_1 = require("../../Domain/Maintenance");
var Global_1 = require("../../Domain/Global");
var DOMPurify_1 = require("../../Domain/DOMPurify");
var RouterLink_1 = __importDefault(require("../RouterLink/RouterLink"));
var TriggerInfo_less_1 = __importDefault(require("./TriggerInfo.less"));
var DateUtil_1 = require("../../helpers/DateUtil");
var md = new remarkable_1.default({ breaks: true });
function maintenanceDelta(maintenance) {
    return (maintenance || 0) - date_fns_1.getUnixTime(DateUtil_1.getUTCDate());
}
function maintenanceCaption(delta) {
    return React.createElement("span", null,
        React.createElement(Clock_1.default, null),
        "\u00A0",
        delta <= 0 ? "Maintenance" : DateUtil_1.humanizeDuration(delta));
}
function ScheduleView(props) {
    var data = props.data;
    var days = data.days, startOffset = data.startOffset, endOffset = data.endOffset, tzOffset = data.tzOffset;
    var startTime = date_fns_1.format(date_fns_1.addMinutes(date_fns_1.startOfDay(DateUtil_1.getUTCDate()), startOffset), "HH:mm");
    var endTime = date_fns_1.format(date_fns_1.addMinutes(date_fns_1.startOfDay(DateUtil_1.getUTCDate()), endOffset), "HH:mm");
    var timeZone = date_fns_1.format(date_fns_1.addMinutes(date_fns_1.startOfDay(DateUtil_1.getUTCDate()), Math.abs(tzOffset)), "HH:mm");
    var timeZoneSign = tzOffset < 0 ? "+" : "−";
    var enabledDays = days.filter(function (_a) {
        var enabled = _a.enabled;
        return enabled;
    });
    return React.createElement(React.Fragment, null,
        days.length === enabledDays.length ? "Everyday" : enabledDays.map(function (_a) {
            var name = _a.name;
            return name;
        }).join(", "),
        " ",
        startTime,
        "\u2014",
        endTime,
        " (GMT ",
        timeZoneSign,
        timeZone,
        ")");
}
function TriggerInfo(_a) {
    var data = _a.data, triggerState = _a.triggerState, supportEmail = _a.supportEmail, onThrottlingRemove = _a.onThrottlingRemove, onSetMaintenance = _a.onSetMaintenance;
    var id = data.id, name = data.name, desc = data.desc, targets = data.targets, expression = data.expression, errorValue = data.error_value, warnValue = data.warn_value, ttlState = data.ttl_state, ttl = data.ttl, sched = data.sched, tags = data.tags, throttling = data.throttling, isRemote = data.is_remote;
    var state = triggerState.state, exceptionMessage = triggerState.msg, maintenance = triggerState.maintenance, maintenanceInfo = triggerState.maintenanceInfo;
    var hasExpression = expression != null && expression !== "";
    var hasMultipleTargets = targets.length > 1;
    var delta = maintenanceDelta(maintenance);
    return React.createElement("section", null,
        React.createElement("header", { className: TriggerInfo_less_1.default("header") },
            React.createElement("h1", { className: TriggerInfo_less_1.default("title") }, name != null && name !== "" ? name : "[No name]"),
            React.createElement("div", { className: TriggerInfo_less_1.default("controls") },
                throttling !== 0 && React.createElement("span", { className: TriggerInfo_less_1.default("control") },
                    React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Clear_1.default, null), onClick: function () { return onThrottlingRemove(id); } }, "Disable throttling")),
                React.createElement("span", { className: TriggerInfo_less_1.default("control") },
                    React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("triggerEdit", id), icon: React.createElement(Edit_1.default, null) }, "Edit")),
                React.createElement("span", { className: TriggerInfo_less_1.default("control") },
                    React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("triggerDuplicate", id), icon: React.createElement(DocumentCopy_1.default, null) }, "Duplicate")),
                React.createElement("span", { className: TriggerInfo_less_1.default("control") },
                    React.createElement(Dropdown_1.Dropdown, { use: "link", caption: maintenanceCaption(delta) }, Object.keys(Maintenance_1.Maintenances).map(function (key) { return React.createElement(MenuItem_1.MenuItem, { key: key, onClick: function () { return onSetMaintenance(key); } }, Maintenance_1.getMaintenanceCaption(key)); }))),
                React.createElement("span", null, delta > 0 && maintenanceInfo && maintenanceInfo.setup_user && maintenanceInfo.setup_time && React.createElement(Tooltip_1.Tooltip, { render: function () { return React.createElement("div", null,
                        "Maintenance was set",
                        React.createElement("br", null),
                        "by ",
                        maintenanceInfo.setup_user,
                        React.createElement("br", null),
                        "at",
                        " ",
                        date_fns_1.format(date_fns_1.fromUnixTime(maintenanceInfo.setup_time), "MMMM d, HH:mm:ss")); } },
                    React.createElement(User_1.default, { className: TriggerInfo_less_1.default("maintenance-info") }))))),
        React.createElement("dl", { className: TriggerInfo_less_1.default("list") },
            React.createElement("dt", null,
                "Target ",
                isRemote && "(remote)"),
            React.createElement("dd", null, targets.map(function (target) { return React.createElement("div", { key: target }, target); })),
            desc && React.createElement("dt", null, "Description"),
            desc && React.createElement("dd", { className: TriggerInfo_less_1.default("description", "wysiwyg"), dangerouslySetInnerHTML: {
                    __html: dompurify_1.sanitize(md.render(desc), DOMPurify_1.purifyConfig)
                } }),
            !expression && React.createElement("dt", null, "Value"),
            !expression && React.createElement("dd", null,
                warnValue != null && "Warning: " + warnValue + ". ",
                errorValue != null && "Error: " + errorValue + ". ",
                "Set ",
                ttlState,
                " if has no value for ",
                ttl,
                " seconds"),
            expression && React.createElement("dt", null, "Expression"),
            expression && React.createElement("dd", null, expression + ". ",
                "Set ",
                ttlState,
                " if has no value for ",
                ttl,
                " seconds"),
            sched && React.createElement("dt", null, "Schedule"),
            sched && React.createElement("dd", null,
                React.createElement(ScheduleView, { data: sched })),
            React.createElement("dt", null, "Tags"),
            React.createElement("dd", null,
                React.createElement(TagGroup_1.default, { tags: tags })),
            (state === "EXCEPTION" || state === "ERROR") && React.createElement("dt", null),
            (state === "EXCEPTION" || state === "ERROR") && React.createElement("dd", { className: TriggerInfo_less_1.default("exception-explanation") },
                React.createElement("div", { className: TriggerInfo_less_1.default("line-1") },
                    React.createElement(Error_1.default, { color: "#D43517" }),
                    " Trigger in ",
                    state,
                    " state.",
                    " ",
                    exceptionMessage),
                React.createElement("div", { className: TriggerInfo_less_1.default("line-2") },
                    "Please verify trigger target",
                    hasMultipleTargets ? "s" : "",
                    hasExpression ? " and expression" : "",
                    " on",
                    " ",
                    React.createElement(RouterLink_1.default, { to: "/trigger/" + data.id + "/edit" }, "trigger edit page"),
                    ".",
                    supportEmail && React.createElement("span", null,
                        " ",
                        "Or ",
                        React.createElement(Link_1.Link, { href: "mailto:" + supportEmail }, "contact"),
                        " with server administrator.")))));
}
exports.default = TriggerInfo;
