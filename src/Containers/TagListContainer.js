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
var MoiraApiInjection_1 = require("../Api/MoiraApiInjection");
var TagList_1 = __importDefault(require("../Components/TagList/TagList"));
var Layout_1 = __importStar(require("../Components/Layout/Layout"));
var TagListContainer = /** @class */ (function (_super) {
    __extends(TagListContainer, _super);
    function TagListContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: true,
            error: null,
            tags: null,
            contacts: null
        };
        return _this;
    }
    TagListContainer.prototype.componentDidMount = function () {
        document.title = "Moira - Tags";
        this.getData(this.props);
    };
    TagListContainer.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, error = _a.error, tags = _a.tags, contacts = _a.contacts;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            React.createElement(Layout_1.LayoutContent, null,
                React.createElement(Layout_1.LayoutTitle, null, "Tags"),
                tags && contacts && React.createElement(TagList_1.default, { items: tags, contacts: contacts, onRemove: function (tag) {
                        _this.removeTag(tag);
                    }, onRemoveContact: function (subscriptionId) {
                        _this.removeContact(subscriptionId);
                    } })));
    };
    TagListContainer.prototype.removeTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.delTag(tag)];
                    case 2:
                        _a.sent();
                        this.getData(this.props);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1.message, loading: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TagListContainer.prototype.removeContact = function (subscriptionId) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, moiraApi.delSubscription(subscriptionId)];
                    case 2:
                        _a.sent();
                        this.getData(this.props);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        this.setState({ error: error_2.message, loading: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TagListContainer.prototype.getData = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, tags, contacts, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = props.moiraApi;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, moiraApi.getTagStats()];
                    case 2:
                        tags = _a.sent();
                        return [4 /*yield*/, moiraApi.getContactList()];
                    case 3:
                        contacts = _a.sent();
                        this.setState({ tags: tags.list, contacts: contacts.list });
                        return [3 /*break*/, 6];
                    case 4:
                        error_3 = _a.sent();
                        this.setState({ error: error_3.message });
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({ loading: false });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return TagListContainer;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(TagListContainer);
