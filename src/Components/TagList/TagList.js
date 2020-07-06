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
var flatten_1 = __importDefault(require("lodash/flatten"));
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Ok_1 = __importDefault(require("@skbkontur/react-icons/Ok"));
var Delete_1 = __importDefault(require("@skbkontur/react-icons/Delete"));
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var ContactTypeIcon_1 = __importDefault(require("../ContactTypeIcon/ContactTypeIcon"));
var TagList_less_1 = __importDefault(require("./TagList.less"));
function TagList(props) {
    var items = props.items, contacts = props.contacts, onRemove = props.onRemove, onRemoveContact = props.onRemoveContact;
    return React.createElement("div", null,
        React.createElement("div", { className: TagList_less_1.default("row", "header") },
            React.createElement("div", { className: TagList_less_1.default("name") }, "Tag"),
            React.createElement("div", { className: TagList_less_1.default("trigger-counter") }, "Triggers"),
            React.createElement("div", { className: TagList_less_1.default("subscription-counter") }, "Subscriptions"),
            React.createElement("div", { className: TagList_less_1.default("control") })),
        items.map(function (item) { return React.createElement(TagListItem, { key: item.name, data: item, allContacts: contacts, onRemove: function () { return onRemove(item.name); }, onRemoveContact: function (id) { return onRemoveContact(id); } }); }));
}
exports.default = TagList;
var TagListItem = /** @class */ (function (_super) {
    __extends(TagListItem, _super);
    function TagListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showInfo: false
        };
        return _this;
    }
    TagListItem.prototype.render = function () {
        var _this = this;
        var _a = this.props, data = _a.data, allContacts = _a.allContacts, onRemove = _a.onRemove, onRemoveContact = _a.onRemoveContact;
        var showInfo = this.state.showInfo;
        var name = data.name, subscriptions = data.subscriptions, triggers = data.triggers;
        var isSubscriptions = subscriptions.length !== 0;
        return React.createElement("div", { className: TagList_less_1.default("row", { active: showInfo, clicable: isSubscriptions }) },
            isSubscriptions ? React.createElement("button", { type: "button", className: TagList_less_1.default("name", "clicked"), onClick: function () { return _this.setState({ showInfo: !showInfo }); } }, name) : React.createElement("div", { className: TagList_less_1.default("name") }, name),
            React.createElement("div", { className: TagList_less_1.default("trigger-counter") }, triggers.length),
            React.createElement("div", { className: TagList_less_1.default("subscription-counter") }, subscriptions.length),
            React.createElement("div", { className: TagList_less_1.default("control") },
                React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onRemove(); } }, "Delete")),
            showInfo && React.createElement("div", { className: TagList_less_1.default("info") }, isSubscriptions && React.createElement("div", { className: TagList_less_1.default("group") }, subscriptions.map(function (_a) {
                var id = _a.id, enabled = _a.enabled, user = _a.user, contacts = _a.contacts;
                return React.createElement("div", { key: id, className: TagList_less_1.default("item") },
                    React.createElement("div", { className: TagList_less_1.default("enabled") }, enabled ? React.createElement(Ok_1.default, null) : React.createElement(Delete_1.default, null)),
                    React.createElement("div", { className: TagList_less_1.default("user") }, user),
                    React.createElement("div", { className: TagList_less_1.default("contacts") }, flatten_1.default(contacts.map(function (x) { return allContacts.filter(function (y) { return y.id === x; }); })).map(function (_a) {
                        var contactId = _a.id, type = _a.type, value = _a.value;
                        return React.createElement("div", { key: contactId },
                            React.createElement(ContactTypeIcon_1.default, { type: type }),
                            " ",
                            value);
                    })),
                    React.createElement("div", { className: TagList_less_1.default("sub-control") },
                        React.createElement(Button_1.Button, { use: "link", icon: React.createElement(Trash_1.default, null), onClick: function () { return onRemoveContact(id); } }, "Delete")));
            }))));
    };
    return TagListItem;
}(React.Component));
