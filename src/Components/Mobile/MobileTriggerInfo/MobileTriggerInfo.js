"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Sticky_1 = require("@skbkontur/react-ui/components/Sticky");
var Modal_1 = require("@skbkontur/react-ui/components/Modal");
var FlagSolid_1 = __importDefault(require("@skbkontur/react-icons/FlagSolid"));
var ArrowChevronLeft_1 = __importDefault(require("@skbkontur/react-icons/ArrowChevronLeft"));
var UserSettings_1 = __importDefault(require("@skbkontur/react-icons/UserSettings"));
var Global_1 = require("../../../Domain/Global");
var Maintenance_1 = require("../../../Domain/Maintenance");
var Status_1 = require("../../../Domain/Status");
var StatusColor_1 = __importStar(require("../Styles/StatusColor"));
var DateUtil_1 = require("../../../helpers/DateUtil");
var MobileHeader_1 = __importDefault(require("../MobileHeader/MobileHeader"));
var MobileTriggerInfo_less_1 = __importDefault(require("./MobileTriggerInfo.less"));
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
    return React.createElement("span", null,
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
function checkMaintenance(maintenance) {
    var delta = (maintenance || 0) - date_fns_1.getUnixTime(DateUtil_1.getUTCDate());
    return React.createElement("span", null, delta <= 0 ? "Maintenance" : DateUtil_1.humanizeDuration(delta));
}
var MobileTriggerInfo = /** @class */ (function (_super) {
    __extends(MobileTriggerInfo, _super);
    function MobileTriggerInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showThrottling: false,
            showMaintenance: false
        };
        _this.handleDisableThrottling = function () {
            var onThrottlingRemove = _this.props.onThrottlingRemove;
            _this.setState({ showThrottling: true });
            onThrottlingRemove();
        };
        _this.handleSetMaintenance = function (interval) {
            var onSetMaintenance = _this.props.onSetMaintenance;
            _this.setState({ showMaintenance: false });
            onSetMaintenance(interval);
        };
        return _this;
    }
    MobileTriggerInfo.prototype.render = function () {
        var _this = this;
        var _a = this.props, trigger = _a.data, triggerState = _a.triggerState;
        var _b = this.state, showThrottling = _b.showThrottling, showMaintenance = _b.showMaintenance;
        var sched = (trigger || {}).sched;
        var _c = triggerState || {}, msg = _c.msg, maintenance = _c.maintenance;
        return React.createElement("div", null,
            React.createElement(MobileHeader_1.default, { color: this.getHeaderColor() },
                React.createElement(Sticky_1.Sticky, { side: "top" },
                    React.createElement(MobileHeader_1.default.HeaderBlock, { color: this.getHeaderColor() },
                        React.createElement(MobileHeader_1.default.LeftButton, { icon: React.createElement(ArrowChevronLeft_1.default, null), linkTo: Global_1.getPageLink("index") }),
                        React.createElement(MobileHeader_1.default.Title, null, trigger != null ? trigger.name : "Loading trigger..."),
                        React.createElement(MobileHeader_1.default.RightButton, { icon: React.createElement(UserSettings_1.default, null), onClick: function () { return _this.setState({ showMaintenance: true }); } }))),
                React.createElement(MobileHeader_1.default.DetailsBlock, null, trigger != null && React.createElement("div", { className: MobileTriggerInfo_less_1.default("info") },
                    React.createElement("div", { className: MobileTriggerInfo_less_1.default("plain-row", "description") }, trigger.desc && trigger.desc),
                    sched != null && React.createElement("div", { className: MobileTriggerInfo_less_1.default("form-row") },
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("caption") }, "Schedule:"),
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("value") },
                            React.createElement(ScheduleView, { data: sched }))),
                    React.createElement("div", { className: MobileTriggerInfo_less_1.default("form-row") },
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("caption") }, "Tags:"),
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("value") }, trigger.tags.map(function (x) { return "#" + x; }).join(", "))),
                    maintenance && React.createElement("div", { className: MobileTriggerInfo_less_1.default("form-row") },
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("caption") }, "Maintenance:"),
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("value") }, checkMaintenance(maintenance))),
                    (trigger.throttling !== 0 || showThrottling) && React.createElement("div", { className: MobileTriggerInfo_less_1.default("plain-row") },
                        React.createElement(FlagSolid_1.default, null),
                        " ",
                        trigger.throttling !== 0 ? "Throttling enabled." : "No Throttling.",
                        " ",
                        React.createElement(BorderlessButton, { onClick: this.handleDisableThrottling, disabled: trigger.throttling === 0 }, "Disable")),
                    msg != null && msg !== "" && React.createElement("div", { className: MobileTriggerInfo_less_1.default("form-row") },
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("caption") }, "Exception:"),
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("value") }, msg))))),
            showMaintenance && React.createElement(Modal_1.Modal, { noClose: true, onClose: function () { return _this.setState({ showMaintenance: false }); } },
                React.createElement(Modal_1.Modal.Body, null,
                    React.createElement("div", { className: MobileTriggerInfo_less_1.default("modal-content") },
                        React.createElement("div", { className: MobileTriggerInfo_less_1.default("modal-header") }, "Maintenance trigger"),
                        Object.keys(Maintenance_1.Maintenances).map(function (key) { return React.createElement("button", { type: "button", onClick: function () { return _this.handleSetMaintenance(Maintenance_1.Maintenances[key]); }, className: MobileTriggerInfo_less_1.default("modal-button"), key: key }, Maintenance_1.getMaintenanceCaption(key)); })))));
    };
    MobileTriggerInfo.prototype.getWorstTriggerState = function () {
        var _a = this.props, trigger = _a.data, triggerState = _a.triggerState;
        if (trigger == null || triggerState == null) {
            return null;
        }
        var metrics = triggerState.metrics || {};
        var metricStatuses = Object.keys(Status_1.Statuses).filter(function (x) { return Object.keys(metrics).map(function (y) { return metrics[y].state; }).includes(x); });
        var notOkStatuses = metricStatuses.filter(function (x) { return x !== Status_1.Statuses.OK; });
        if (triggerState.state === Status_1.Statuses.EXCEPTION) {
            return Status_1.Statuses.EXCEPTION;
        }
        if (metricStatuses.length === 0) {
            return triggerState.state;
        }
        if (notOkStatuses.length === 0) {
            return Status_1.Statuses.OK;
        }
        if (notOkStatuses.includes(Status_1.Statuses.ERROR)) {
            return Status_1.Statuses.ERROR;
        }
        if (notOkStatuses.includes(Status_1.Statuses.WARN)) {
            return Status_1.Statuses.WARN;
        }
        return null;
    };
    MobileTriggerInfo.prototype.getHeaderColor = function () {
        var state = this.getWorstTriggerState();
        if (state == null) {
            return StatusColor_1.unknownColor;
        }
        return StatusColor_1.default(state);
    };
    return MobileTriggerInfo;
}(React.Component));
exports.default = MobileTriggerInfo;
function BorderlessButton(_a) {
    var children = _a.children, disabled = _a.disabled, onClick = _a.onClick;
    return React.createElement("button", { type: "button", onClick: onClick, className: MobileTriggerInfo_less_1.default("borderless-button", { disabled: disabled }) },
        React.createElement("span", null, children));
}
