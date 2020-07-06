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
var Schedule_1 = require("../../Domain/Schedule");
var TagGroup_1 = __importDefault(require("../TagGroup/TagGroup"));
var ContactInfo_1 = __importDefault(require("../ContactInfo/ContactInfo"));
var SubscriptionEditModal_1 = __importDefault(require("../SubscriptionEditModal/SubscriptionEditModal"));
var CreateSubscriptionModal_1 = __importDefault(require("../CreateSubscriptionModal/CreateSubscriptionModal"));
var SubscriptionList_less_1 = __importDefault(require("./SubscriptionList.less"));
var SubscriptionList = /** @class */ (function (_super) {
    __extends(SubscriptionList, _super);
    function SubscriptionList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            newSubscriptionModalVisible: false,
            newSubscription: null,
            subscriptionEditModalVisible: false,
            subscriptionToEdit: null
        };
        _this.handleEditSubscription = function (subscription) {
            _this.setState({
                subscriptionEditModalVisible: true,
                subscriptionToEdit: subscription
            });
        };
        _this.handleAddSubscription = function () {
            _this.setState({
                newSubscriptionModalVisible: true,
                newSubscription: {
                    any_tags: false,
                    sched: Schedule_1.createSchedule(Schedule_1.WholeWeek),
                    tags: [],
                    throttling: false,
                    contacts: [],
                    enabled: true,
                    ignore_recoverings: false,
                    ignore_warnings: false,
                    plotting: {
                        enabled: true,
                        theme: "light"
                    }
                }
            });
        };
        _this.handleCreateSubscription = function () { return __awaiter(_this, void 0, void 0, function () {
            var onAddSubscription, newSubscription;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onAddSubscription = this.props.onAddSubscription;
                        newSubscription = this.state.newSubscription;
                        if (newSubscription == null) {
                            throw new Error("InvalidProgramState");
                        }
                        return [4 /*yield*/, onAddSubscription(newSubscription)];
                    case 1:
                        _a.sent();
                        this.setState({
                            newSubscriptionModalVisible: false,
                            newSubscription: null
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleCreateAndTestSubscription = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, onAddSubscription, onTestSubscription, newSubscription, subscription;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onAddSubscription = _a.onAddSubscription, onTestSubscription = _a.onTestSubscription;
                        newSubscription = this.state.newSubscription;
                        if (newSubscription == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 5, 6]);
                        return [4 /*yield*/, onAddSubscription(newSubscription)];
                    case 2:
                        subscription = _b.sent();
                        if (!(subscription !== null && subscription !== undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, onTestSubscription(subscription)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.setState({
                            newSubscriptionModalVisible: false,
                            newSubscription: null
                        });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.handleUpdateSubscription = function () { return __awaiter(_this, void 0, void 0, function () {
            var onUpdateSubscription, subscriptionToEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onUpdateSubscription = this.props.onUpdateSubscription;
                        subscriptionToEdit = this.state.subscriptionToEdit;
                        if (subscriptionToEdit == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, onUpdateSubscription(subscriptionToEdit)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            subscriptionEditModalVisible: false,
                            subscriptionToEdit: null
                        });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleUpdateAndTestSubscription = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, onUpdateSubscription, onTestSubscription, subscriptionToEdit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onUpdateSubscription = _a.onUpdateSubscription, onTestSubscription = _a.onTestSubscription;
                        subscriptionToEdit = this.state.subscriptionToEdit;
                        if (subscriptionToEdit == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, , 4, 5]);
                        return [4 /*yield*/, onUpdateSubscription(subscriptionToEdit)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, onTestSubscription(subscriptionToEdit)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.setState({
                            subscriptionEditModalVisible: false,
                            subscriptionToEdit: null
                        });
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.handleRemoveSubscription = function () { return __awaiter(_this, void 0, void 0, function () {
            var onRemoveSubscription, subscriptionToEdit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onRemoveSubscription = this.props.onRemoveSubscription;
                        subscriptionToEdit = this.state.subscriptionToEdit;
                        if (subscriptionToEdit == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, , 3, 4]);
                        return [4 /*yield*/, onRemoveSubscription(subscriptionToEdit)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            subscriptionEditModalVisible: false,
                            subscriptionToEdit: null
                        });
                        return [7 /*endfinally*/];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    SubscriptionList.prototype.render = function () {
        var _this = this;
        var _a = this.props, tags = _a.tags, contacts = _a.contacts, subscriptions = _a.subscriptions;
        var _b = this.state, newSubscriptionModalVisible = _b.newSubscriptionModalVisible, newSubscription = _b.newSubscription, subscriptionEditModalVisible = _b.subscriptionEditModalVisible, subscriptionToEdit = _b.subscriptionToEdit;
        return React.createElement("div", null,
            subscriptions.length > 0 ? React.createElement("div", null,
                React.createElement("h3", { className: SubscriptionList_less_1.default("header") }, "Subscriptions"),
                React.createElement("div", { className: SubscriptionList_less_1.default("items-container") },
                    React.createElement("table", { className: SubscriptionList_less_1.default("items") },
                        React.createElement("tbody", null, subscriptions.map(function (subscription) { return _this.renderSubscriptionRow(subscription); })))),
                React.createElement("div", { className: SubscriptionList_less_1.default("actions-block") },
                    React.createElement(Button_1.Button, { use: "primary", icon: React.createElement(Add_1.default, null), onClick: this.handleAddSubscription }, "Add subscription"))) : this.renderAddSubscriptionMessage(),
            newSubscriptionModalVisible && newSubscription != null && React.createElement(CreateSubscriptionModal_1.default, { subscription: newSubscription, tags: tags, contacts: contacts, onChange: function (update) { return _this.setState({ newSubscription: __assign(__assign({}, newSubscription), update) }); }, onCancel: function () { return _this.setState({ newSubscriptionModalVisible: false }); }, onCreateSubscription: this.handleCreateSubscription, onCreateAndTestSubscription: this.handleCreateAndTestSubscription }),
            subscriptionEditModalVisible && subscriptionToEdit != null && React.createElement(SubscriptionEditModal_1.default, { subscription: subscriptionToEdit, tags: tags, contacts: contacts, onChange: function (update) { return _this.setState({
                    subscriptionToEdit: __assign(__assign({}, subscriptionToEdit), update)
                }); }, onCancel: function () { return _this.setState({ subscriptionEditModalVisible: false }); }, onUpdateSubscription: this.handleUpdateSubscription, onUpdateAndTestSubscription: this.handleUpdateAndTestSubscription, onRemoveSubscription: this.handleRemoveSubscription }));
    };
    SubscriptionList.prototype.renderSubscriptionRow = function (subscription) {
        var _this = this;
        var contacts = this.props.contacts;
        return React.createElement("tr", { key: subscription.id, className: SubscriptionList_less_1.default("item"), onClick: function () { return _this.handleEditSubscription(subscription); } },
            React.createElement("td", { className: SubscriptionList_less_1.default("tags-cell") },
                React.createElement(TagGroup_1.default, { tags: subscription.tags })),
            React.createElement("td", { className: SubscriptionList_less_1.default("contacts-cell") },
                React.createElement(Gapped_1.Gapped, { gap: 10 }, subscription.contacts.map(function (x) { return contacts.find(function (y) { return y.id === x; }); }).filter(Boolean).map(function (x) { return React.createElement(ContactInfo_1.default, { key: x.id, contact: x }); }))),
            React.createElement("td", { className: SubscriptionList_less_1.default("enabled-cell") }, !subscription.enabled && React.createElement("span", { className: SubscriptionList_less_1.default("disabled-label") }, "Disabled")));
    };
    SubscriptionList.prototype.renderAddSubscriptionMessage = function () {
        return React.createElement(Center_1.Center, null,
            React.createElement(Gapped_1.Gapped, { vertical: true, gap: 20 },
                React.createElement("div", null,
                    "To start receiving notifications you have to",
                    " ",
                    React.createElement(Button_1.Button, { use: "link", onClick: this.handleAddSubscription }, "add subscription"),
                    "."),
                React.createElement(Center_1.Center, null,
                    React.createElement(Button_1.Button, { use: "primary", icon: React.createElement(Add_1.default, null), onClick: this.handleAddSubscription }, "Add subscription"))));
    };
    return SubscriptionList;
}(React.Component));
exports.default = SubscriptionList;
