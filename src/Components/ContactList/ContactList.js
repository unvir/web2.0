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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Center_1 = require("@skbkontur/react-ui/components/Center");
var Gapped_1 = require("@skbkontur/react-ui/components/Gapped");
var Add_1 = __importDefault(require("@skbkontur/react-icons/Add"));
var NewContactModal_1 = __importDefault(require("../NewContactModal/NewContactModal"));
var ContactEditModal_1 = __importDefault(require("../ContactEditModal/ContactEditModal"));
var ContactTypeIcon_1 = __importDefault(require("../ContactTypeIcon/ContactTypeIcon"));
var ContactList_less_1 = __importDefault(require("./ContactList.less"));
var ContactList = /** @class */ (function (_super) {
    __extends(ContactList, _super);
    function ContactList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            newContactModalVisible: false,
            newContact: null,
            editContactModalVisible: false,
            editableContact: null
        };
        _this.handleCreateAndTestContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, onAddContact, onTestContact, newContact, contact;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onAddContact = _a.onAddContact, onTestContact = _a.onTestContact;
                        newContact = this.state.newContact;
                        if (newContact === null || newContact === undefined) {
                            throw new Error("InvalidProgramState");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, onAddContact(newContact)];
                    case 2:
                        contact = _b.sent();
                        if (!(contact !== null && contact !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, onTestContact(contact)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setState({
                            newContactModalVisible: false,
                            newContact: null
                        });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.handleCancelCreateNewContact = function () {
            _this.setState({
                newContactModalVisible: false,
                newContact: null
            });
        };
        _this.handleChangeNewContact = function (newContactUpdate) {
            var newContact = _this.state.newContact;
            _this.setState({
                newContact: __assign(__assign({}, newContact), newContactUpdate)
            });
        };
        _this.handleCreateNewContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var onAddContact, newContact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onAddContact = this.props.onAddContact;
                        newContact = this.state.newContact;
                        if (newContact == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, onAddContact(newContact)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            newContactModalVisible: false,
                            newContact: null
                        });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleDeleteContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var onRemoveContact, editableContact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onRemoveContact = this.props.onRemoveContact;
                        editableContact = this.state.editableContact;
                        if (editableContact == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, onRemoveContact(editableContact)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            editContactModalVisible: false,
                            editableContact: null
                        });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleAddContact = function () {
            _this.setState({
                newContactModalVisible: true
            });
        };
        _this.handleBeginEditContact = function (contact) {
            _this.setState({
                editContactModalVisible: true,
                editableContact: contact
            });
        };
        _this.handleRemoveContact = function (contact) {
            var onRemoveContact = _this.props.onRemoveContact;
            onRemoveContact(contact);
        };
        _this.handleChangeEditableContact = function (contactUpdate) {
            var editableContact = _this.state.editableContact;
            _this.setState({
                editableContact: __assign(__assign({}, editableContact), contactUpdate)
            });
        };
        _this.handleCancelEditContact = function () {
            _this.setState({
                editContactModalVisible: false,
                editableContact: null
            });
        };
        _this.handleUpdateContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var onUpdateContact, editableContact;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onUpdateContact = this.props.onUpdateContact;
                        editableContact = this.state.editableContact;
                        if (editableContact == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, onUpdateContact(editableContact)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            editContactModalVisible: false,
                            editableContact: null
                        });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleUpdateAndTestContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, onUpdateContact, onTestContact, editableContact;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onUpdateContact = _a.onUpdateContact, onTestContact = _a.onTestContact;
                        editableContact = this.state.editableContact;
                        if (editableContact == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 4, 5]);
                        return [4 /*yield*/, onUpdateContact(editableContact)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, onTestContact(editableContact)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.setState({
                            editContactModalVisible: false,
                            editableContact: null
                        });
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    ContactList.renderContactIcon = function (type) {
        return React.createElement(ContactTypeIcon_1.default, { type: type });
    };
    ContactList.prototype.render = function () {
        var _this = this;
        var _a = this.props, items = _a.items, contactDescriptions = _a.contactDescriptions;
        var _b = this.state, newContact = _b.newContact, newContactModalVisible = _b.newContactModalVisible, editContactModalVisible = _b.editContactModalVisible, editableContact = _b.editableContact;
        return React.createElement("div", null,
            items.length > 0 ? React.createElement("div", null,
                React.createElement("h3", { className: ContactList_less_1.default("header") }, "Delivery channels"),
                React.createElement("div", { className: ContactList_less_1.default("items-cotnainer") },
                    React.createElement("table", { className: ContactList_less_1.default("items") },
                        React.createElement("tbody", null, items.map(function (contact) { return React.createElement("tr", { key: contact.id, className: ContactList_less_1.default("item"), onClick: function () { return _this.handleBeginEditContact(contact); } },
                            React.createElement("td", { className: ContactList_less_1.default("icon") }, ContactList.renderContactIcon(contact.type)),
                            React.createElement("td", { className: ContactList_less_1.default("value") }, contact.value)); })))),
                React.createElement("div", { className: ContactList_less_1.default("actions-block") },
                    React.createElement(Button_1.Button, { icon: React.createElement(Add_1.default, null), onClick: this.handleAddContact }, "Add delivery channel"))) : this.renderEmptyListMessage(),
            newContactModalVisible && React.createElement(NewContactModal_1.default, { contactDescriptions: contactDescriptions, contactInfo: newContact, onChange: this.handleChangeNewContact, onCancel: this.handleCancelCreateNewContact, onCreate: this.handleCreateNewContact, onCreateAndTest: this.handleCreateAndTestContact }),
            editContactModalVisible && editableContact !== null && React.createElement(ContactEditModal_1.default, { contactDescriptions: contactDescriptions, contactInfo: editableContact, onChange: this.handleChangeEditableContact, onCancel: this.handleCancelEditContact, onUpdate: this.handleUpdateContact, onUpdateAndTest: this.handleUpdateAndTestContact, onDelete: this.handleDeleteContact }));
    };
    ContactList.prototype.renderEmptyListMessage = function () {
        return React.createElement(Center_1.Center, null,
            React.createElement(Gapped_1.Gapped, { vertical: true, gap: 20 },
                React.createElement("div", null,
                    "To start receiving notifications you have to",
                    " ",
                    React.createElement(Button_1.Button, { use: "link", onClick: this.handleAddContact }, "add delivery channel"),
                    " ",
                    "for notifications."),
                React.createElement(Center_1.Center, null,
                    React.createElement(Button_1.Button, { use: "primary", icon: React.createElement(Add_1.default, null), onClick: this.handleAddContact }, "Add delivery channel"))));
    };
    return ContactList;
}(React.Component));
exports.default = ContactList;
