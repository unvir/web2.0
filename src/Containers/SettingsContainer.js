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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var MoiraApiInjection_1 = require("../Api/MoiraApiInjection");
var Layout_1 = __importStar(require("../Components/Layout/Layout"));
var ContactList_1 = __importDefault(require("../Components/ContactList/ContactList"));
var SubscriptionList_1 = __importDefault(require("../Components/SubscriptionList/SubscriptionList"));
var SettingsContainer = /** @class */ (function (_super) {
    __extends(SettingsContainer, _super);
    function SettingsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            config: null,
            loading: true,
            error: null,
            settings: null,
            tags: null
        };
        _this.handleTestContact = function (contact) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.testContact(contact.id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleTestSubscription = function (subscription) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.testSubscription(subscription.id)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.setState({ error: error_2.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleAddContact = function (contact) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, contactType, newContact, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        contactType = contact.type;
                        if (settings == null || contactType == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.addContact({
                                value: SettingsContainer.normalizeContactValueForApi(contactType, contact.value),
                                type: contactType,
                                user: settings.login
                            })];
                    case 2:
                        newContact = _a.sent();
                        newContact = __assign(__assign({}, newContact), { value: SettingsContainer.normalizeContactValueForUi(newContact.type, newContact.value) });
                        this.setState({
                            settings: __assign(__assign({}, settings), { contacts: __spreadArrays(settings.contacts, [newContact]) })
                        });
                        return [2 /*return*/, newContact];
                    case 3:
                        error_3 = _a.sent();
                        this.setState({ error: error_3.message });
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleUpdateContact = function (contact) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, contacts, index, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        if (settings == null) {
                            throw new Error("InvalidProgramState");
                        }
                        contacts = settings.contacts;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.updateContact(__assign(__assign({}, contact), { value: SettingsContainer.normalizeContactValueForApi(contact.type, contact.value) }))];
                    case 2:
                        _a.sent();
                        index = contacts.findIndex(function (x) { return x.id === contact.id; });
                        this.setState({
                            settings: __assign(__assign({}, settings), { contacts: __spreadArrays(contacts.slice(0, index), [contact], contacts.slice(index + 1)) })
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_4 = _a.sent();
                        this.setState({ error: error_4.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleAddSubscription = function (subscription) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, newSubscriptions, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        if (settings == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.addSubscription(__assign(__assign({}, subscription), { user: settings.login }))];
                    case 2:
                        newSubscriptions = _a.sent();
                        this.setState({
                            settings: __assign(__assign({}, settings), { subscriptions: __spreadArrays(settings.subscriptions, [newSubscriptions]) })
                        });
                        return [2 /*return*/, newSubscriptions];
                    case 3:
                        error_5 = _a.sent();
                        this.setState({ error: error_5.message });
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleUpdateSubscription = function (subscription) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, subscriptions, index, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        if (settings == null) {
                            throw new Error("InvalidProgramState");
                        }
                        subscriptions = settings.subscriptions;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.updateSubscription(subscription)];
                    case 2:
                        _a.sent();
                        index = subscriptions.findIndex(function (x) { return x.id === subscription.id; });
                        this.setState({
                            settings: __assign(__assign({}, settings), { subscriptions: __spreadArrays(subscriptions.slice(0, index), [subscription], subscriptions.slice(index + 1)) })
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_6 = _a.sent();
                        this.setState({ error: error_6.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleRemoveSubscription = function (subscription) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        if (settings == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.delSubscription(subscription.id)];
                    case 2:
                        _a.sent();
                        this.setState({
                            settings: __assign(__assign({}, settings), { subscriptions: settings.subscriptions.filter(function (x) { return x.id !== subscription.id; }) })
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_7 = _a.sent();
                        this.setState({ error: error_7.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.handleRemoveContact = function (contact) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi, settings, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        settings = this.state.settings;
                        if (settings == null) {
                            throw new Error("InvalidProgramState");
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.deleteContact(contact.id)];
                    case 2:
                        _a.sent();
                        this.setState({
                            settings: __assign(__assign({}, settings), { contacts: settings.contacts.filter(function (x) { return x.id !== contact.id; }) })
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_8 = _a.sent();
                        this.setState({ error: error_8.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    SettingsContainer.prototype.componentDidMount = function () {
        document.title = "Moira - Settings";
        this.getData();
    };
    SettingsContainer.normalizeContactValueForApi = function (contactType, value) {
        var result = value.trim();
        if (contactType === "twilio voice" || contactType === "twilio sms") {
            if (result.length >= 11) {
                result = result.replace(/^8/, "+7");
                result = result.replace(/^7/, "+7");
            }
            else if (result.length === 10) {
                result = "+7" + result;
            }
            return result;
        }
        return result;
    };
    SettingsContainer.normalizeContactValueForUi = function (contactType, value) {
        return value;
    };
    SettingsContainer.prototype.render = function () {
        var _a = this.state, loading = _a.loading, error = _a.error, tags = _a.tags, settings = _a.settings, config = _a.config;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            React.createElement(Layout_1.LayoutContent, null,
                React.createElement(Layout_1.LayoutTitle, null, "Notifications"),
                config != null && settings != null && settings.contacts != null && React.createElement("div", { style: { marginBottom: 50 } },
                    React.createElement(ContactList_1.default, { contactDescriptions: config.contacts, items: settings.contacts, onTestContact: this.handleTestContact, onAddContact: this.handleAddContact, onUpdateContact: this.handleUpdateContact, onRemoveContact: this.handleRemoveContact })),
                settings != null && tags != null && settings.subscriptions != null && settings.contacts != null && settings.contacts.length > 0 && React.createElement(SubscriptionList_1.default, { tags: tags, contacts: settings.contacts, subscriptions: settings.subscriptions, onTestSubscription: this.handleTestSubscription, onAddSubscription: this.handleAddSubscription, onRemoveSubscription: this.handleRemoveSubscription, onUpdateSubscription: this.handleUpdateSubscription })));
    };
    SettingsContainer.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, tags, settings, config, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, 6, 7]);
                        return [4 /*yield*/, moiraApi.getTagList()];
                    case 2:
                        tags = (_a.sent()).list;
                        return [4 /*yield*/, moiraApi.getSettings()];
                    case 3:
                        settings = _a.sent();
                        return [4 /*yield*/, moiraApi.getConfig()];
                    case 4:
                        config = _a.sent();
                        settings = __assign(__assign({}, settings), { contacts: settings.contacts.map(function (x) { return (__assign(__assign({}, x), { value: SettingsContainer.normalizeContactValueForUi(x.type, x.value) })); }) });
                        this.setState({ settings: settings, config: config, tags: tags });
                        return [3 /*break*/, 7];
                    case 5:
                        error_9 = _a.sent();
                        this.setState({ error: error_9.message });
                        return [3 /*break*/, 7];
                    case 6:
                        this.setState({ loading: false });
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return SettingsContainer;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(SettingsContainer);
