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
var Ok_1 = __importDefault(require("@skbkontur/react-icons/Ok"));
var Delete_1 = __importDefault(require("@skbkontur/react-icons/Delete"));
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var Gapped_1 = require("@skbkontur/react-ui/components/Gapped");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var ArrowBoldRight_1 = __importDefault(require("@skbkontur/react-icons/ArrowBoldRight"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var Global_1 = require("../../Domain/Global");
var RouterLink_1 = __importDefault(require("../RouterLink/RouterLink"));
var ContactTypeIcon_1 = __importDefault(require("../ContactTypeIcon/ContactTypeIcon"));
var StatusIndicator_1 = __importDefault(require("../StatusIndicator/StatusIndicator"));
var NotificationList_less_1 = __importDefault(require("./NotificationList.less"));
function NotificationList(props) {
    var items = props.items, onRemove = props.onRemove;
    return Object.keys(items).length === 0 ? React.createElement("div", { className: NotificationList_less_1.default("no-result") }, "Empty :-)") : React.createElement(Gapped_1.Gapped, { gap: 30, vertical: true },
        React.createElement("div", { className: NotificationList_less_1.default("row", "header") },
            React.createElement("div", { className: NotificationList_less_1.default("timestamp") }, "Timestamp"),
            React.createElement("div", { className: NotificationList_less_1.default("state") }, "State"),
            React.createElement("div", { className: NotificationList_less_1.default("trigger") }, "Trigger"),
            React.createElement("div", { className: NotificationList_less_1.default("user") }, "User"),
            React.createElement("div", { className: NotificationList_less_1.default("contact") }, "Contact"),
            React.createElement("div", { className: NotificationList_less_1.default("throttled") }, "Throttled"),
            React.createElement("div", { className: NotificationList_less_1.default("fails") }, "Fails"),
            React.createElement("div", { className: NotificationList_less_1.default("remove") })),
        Object.keys(items).map(function (key) {
            var _a = items[key][0], timestamp = _a.timestamp, trigger = _a.trigger, contact = _a.contact, throttled = _a.throttled, fails = _a.send_fail;
            var type = contact.type, value = contact.value, user = contact.user;
            var id = trigger.id, name = trigger.name;
            return React.createElement("div", { key: key, className: NotificationList_less_1.default("row") },
                React.createElement("div", { className: NotificationList_less_1.default("timestamp") },
                    date_fns_1.format(date_fns_1.fromUnixTime(timestamp), "MMMM d, HH:mm:ss"),
                    items[key].length > 1 ? " (" + items[key].length + "\u00D7)" : ""),
                React.createElement("div", { className: NotificationList_less_1.default("state") },
                    React.createElement("div", { className: NotificationList_less_1.default("prev-state") },
                        React.createElement(StatusIndicator_1.default, { statuses: uniq_1.default(items[key].map(function (n) { return n.event.old_state; })), size: 14 })),
                    React.createElement("div", { className: NotificationList_less_1.default("arrow") },
                        React.createElement(ArrowBoldRight_1.default, null)),
                    React.createElement("div", { className: NotificationList_less_1.default("curr-state") },
                        React.createElement(StatusIndicator_1.default, { statuses: uniq_1.default(items[key].map(function (n) { return n.event.state; })), size: 14 }))),
                React.createElement("div", { className: NotificationList_less_1.default("trigger") }, id ? React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("trigger", id) }, name) : React.createElement("span", null, "\u2014")),
                React.createElement("div", { className: NotificationList_less_1.default("user") }, user),
                React.createElement("div", { className: NotificationList_less_1.default("contact") },
                    React.createElement(ContactTypeIcon_1.default, { type: type }),
                    " ",
                    value),
                React.createElement("div", { className: NotificationList_less_1.default("throttled", { true: throttled, false: !throttled }) }, throttled ? React.createElement(Ok_1.default, null) : React.createElement(Delete_1.default, null)),
                React.createElement("div", { className: NotificationList_less_1.default("fails") }, fails),
                React.createElement("div", { className: NotificationList_less_1.default("remove") },
                    React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onRemove(key); } }, "Remove")));
        }));
}
exports.default = NotificationList;
