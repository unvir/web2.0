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
var UserSettings_1 = __importDefault(require("@skbkontur/react-icons/UserSettings"));
var MenuDots_1 = __importDefault(require("@skbkontur/react-icons/MenuDots"));
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var Redo_1 = __importDefault(require("@skbkontur/react-icons/Redo"));
var Modal_1 = require("@skbkontur/react-ui/components/Modal");
var MobileStatusIndicator_1 = __importDefault(require("../MobileStatusIndicator/MobileStatusIndicator"));
var roundValue_1 = __importDefault(require("../../../helpers/roundValue"));
var Maintenance_1 = require("../../../Domain/Maintenance");
var MobileMetricsListItem_less_1 = __importDefault(require("./MobileMetricsListItem.less"));
var DateUtil_1 = require("../../../helpers/DateUtil");
function isUnderkMaintenance(maintenance) {
    if (maintenance == null) {
        return false;
    }
    var delta = (maintenance || 0) - date_fns_1.getUnixTime(DateUtil_1.getUTCDate());
    return delta > 0;
}
var MobileMetricsListItem = /** @class */ (function (_super) {
    __extends(MobileMetricsListItem, _super);
    function MobileMetricsListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            buttonsState: "Default",
            deleted: false
        };
        _this.handleDeleteMetric = function () {
            var onRemove = _this.props.onRemove;
            _this.setState({ deleted: true });
            onRemove();
        };
        _this.handleSetMaintenance = function (interval) {
            var onSetMaintenance = _this.props.onSetMaintenance;
            _this.setState({ buttonsState: "Default" });
            onSetMaintenance(interval);
        };
        return _this;
    }
    MobileMetricsListItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, name = _a.name, value = _a.value;
        var _b = this.state, buttonsState = _b.buttonsState, deleted = _b.deleted;
        return React.createElement("div", { className: MobileMetricsListItem_less_1.default("root", { deleted: deleted }) },
            React.createElement("div", { className: MobileMetricsListItem_less_1.default("status") },
                this.renderStatus(),
                isUnderkMaintenance(value.maintenance) && React.createElement("div", { className: MobileMetricsListItem_less_1.default("maintenance-icon") },
                    React.createElement(UserSettings_1.default, null))),
            React.createElement("div", { className: MobileMetricsListItem_less_1.default("info") },
                React.createElement("div", { className: MobileMetricsListItem_less_1.default("name") }, name != null && name !== "" ? name : "[No name]"),
                React.createElement("div", { className: MobileMetricsListItem_less_1.default("tags") },
                    roundValue_1.default(value.value),
                    " @ ",
                    date_fns_1.format(date_fns_1.fromUnixTime(value.event_timestamp || 0), "MMMM d, HH:mm:ss"))),
            React.createElement("div", { className: MobileMetricsListItem_less_1.default("buttons") },
                React.createElement("div", { className: MobileMetricsListItem_less_1.default("button-block", { visible: buttonsState === "Default" }) },
                    React.createElement("button", { type: "button", className: MobileMetricsListItem_less_1.default("button"), onClick: function () { return _this.setState({ buttonsState: "SelectAction" }); } },
                        React.createElement(MenuDots_1.default, null))),
                React.createElement("div", { className: MobileMetricsListItem_less_1.default("button-block", { visible: buttonsState === "SelectAction" }) },
                    React.createElement("button", { type: "button", className: MobileMetricsListItem_less_1.default("button"), onClick: function () { return _this.setState({ buttonsState: "SetMaintenance" }); } },
                        React.createElement(UserSettings_1.default, null)),
                    React.createElement("button", { type: "button", onClick: this.handleDeleteMetric, className: MobileMetricsListItem_less_1.default("button") },
                        React.createElement(Trash_1.default, null)),
                    React.createElement("button", { type: "button", className: MobileMetricsListItem_less_1.default("button"), onClick: function () { return _this.setState({ buttonsState: "Default" }); } },
                        React.createElement(Redo_1.default, null))),
                buttonsState === "SetMaintenance" && React.createElement(Modal_1.Modal, { noClose: true, onClose: function () { return _this.setState({ buttonsState: "Default" }); } },
                    React.createElement(Modal_1.Modal.Body, null,
                        React.createElement("div", { className: MobileMetricsListItem_less_1.default("modal-content") },
                            React.createElement("div", { className: MobileMetricsListItem_less_1.default("modal-header") }, "Maintenance metric"),
                            Object.keys(Maintenance_1.Maintenances).map(function (key) { return React.createElement("button", { type: "button", onClick: function () { return _this.handleSetMaintenance(Maintenance_1.Maintenances[key]); }, className: MobileMetricsListItem_less_1.default("modal-button"), key: key }, Maintenance_1.getMaintenanceCaption(key)); }))))));
    };
    MobileMetricsListItem.prototype.renderStatus = function () {
        var value = this.props.value;
        var state = value.state;
        return React.createElement(MobileStatusIndicator_1.default, { statuses: [state], size: 30 });
    };
    return MobileMetricsListItem;
}(React.Component));
exports.default = MobileMetricsListItem;
