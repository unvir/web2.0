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
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var Global_1 = require("../Domain/Global");
var Status_1 = require("../Domain/Status");
var MoiraApiInjection_1 = require("../Api/MoiraApiInjection");
var RouterLink_1 = __importDefault(require("../Components/RouterLink/RouterLink"));
var Layout_1 = __importStar(require("../Components/Layout/Layout"));
var TriggerEditForm_1 = __importDefault(require("../Components/TriggerEditForm/TriggerEditForm"));
var ItemsStack_1 = require("../Components/ItemsStack/ItemsStack");
var TriggerAddContainer = /** @class */ (function (_super) {
    __extends(TriggerAddContainer, _super);
    function TriggerAddContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true,
            error: null,
            config: null,
            trigger: {
                name: "",
                desc: "",
                targets: [""],
                tags: [],
                patterns: [],
                expression: "",
                ttl: 600,
                ttl_state: Status_1.Statuses.NODATA,
                sched: {
                    startOffset: 0,
                    endOffset: 1439,
                    tzOffset: new Date().getTimezoneOffset(),
                    days: [{ name: "Mon", enabled: true }, { name: "Tue", enabled: true }, { name: "Wed", enabled: true }, { name: "Thu", enabled: true }, { name: "Fri", enabled: true }, { name: "Sat", enabled: true }, { name: "Sun", enabled: true }]
                },
                is_remote: false,
                error_value: null,
                warn_value: null,
                trigger_type: "rising",
                mute_new_metrics: false
            },
            tags: null
        };
        _this.validationContainer = React.createRef();
        return _this;
    }
    TriggerAddContainer.prototype.componentDidMount = function () {
        document.title = "Moira - Add trigger";
        this.getData(this.props);
    };
    TriggerAddContainer.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ loading: true });
        this.getData(nextProps);
    };
    TriggerAddContainer.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, error = _a.error, trigger = _a.trigger, tags = _a.tags, config = _a.config;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            React.createElement(Layout_1.LayoutContent, null,
                React.createElement(Layout_1.LayoutTitle, null, "Add trigger"),
                trigger && React.createElement("form", null,
                    React.createElement(ItemsStack_1.ColumnStack, { block: true, gap: 4 },
                        React.createElement(ItemsStack_1.Fit, null,
                            React.createElement(react_ui_validations_1.ValidationContainer, { ref: this.validationContainer }, config != null && React.createElement(TriggerEditForm_1.default, { data: trigger, remoteAllowed: config.remoteAllowed, tags: tags || [], onChange: function (update) { return _this.handleChange(update); } }))),
                        React.createElement(ItemsStack_1.Fit, null,
                            React.createElement(ItemsStack_1.RowStack, { gap: 3, baseline: true },
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(Button_1.Button, { use: "primary", onClick: function () {
                                            _this.handleSubmit();
                                        } }, "Add trigger")),
                                React.createElement(ItemsStack_1.Fit, null,
                                    React.createElement(RouterLink_1.default, { to: Global_1.getPageLink("index") }, "Cancel")))),
                        React.createElement(ItemsStack_1.Fit, { style: { height: 50 } })))));
    };
    TriggerAddContainer.prototype.handleSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var trigger, _a, moiraApi, history, isValid, id, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        trigger = this.state.trigger;
                        _a = this.props, moiraApi = _a.moiraApi, history = _a.history;
                        if (!(this.validationContainer.current !== null)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.validationContainer.current.validate()];
                    case 1:
                        isValid = _b.sent();
                        if (!(isValid && trigger)) return [3 /*break*/, 5];
                        this.setState({ loading: true });
                        if (trigger.trigger_type === "expression") {
                            trigger = __assign(__assign({}, trigger), { error_value: null, warn_value: null });
                        }
                        if (trigger.trigger_type === "rising" || trigger.trigger_type === "falling") {
                            trigger = __assign(__assign({}, trigger), { expression: "" });
                        }
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, moiraApi.addTrigger(trigger)];
                    case 3:
                        id = (_b.sent()).id;
                        history.push(Global_1.getPageLink("trigger", id));
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _b.sent();
                        this.setState({ error: error_1.message, loading: false });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    TriggerAddContainer.prototype.handleChange = function (update) {
        this.setState(function (prevState) { return ({ trigger: __assign(__assign({}, prevState.trigger), update) }); });
    };
    TriggerAddContainer.prototype.getData = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, localDataString, localTags, list_1, config_1, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = props.moiraApi;
                        localDataString = localStorage.getItem("moiraSettings");
                        localTags = (typeof localDataString === "string" ? JSON.parse(localDataString) : { tags: [] }).tags;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        return [4 /*yield*/, moiraApi.getTagList()];
                    case 2:
                        list_1 = (_a.sent()).list;
                        return [4 /*yield*/, moiraApi.getConfig()];
                    case 3:
                        config_1 = _a.sent();
                        this.setState(function (prevState) { return ({
                            config: config_1,
                            tags: list_1,
                            trigger: __assign(__assign({}, prevState.trigger), { tags: localTags })
                        }); });
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _a.sent();
                        this.setState({ error: error_2.message });
                        return [3 /*break*/, 6];
                    case 5:
                        this.setState({ loading: false });
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return TriggerAddContainer;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(TriggerAddContainer);
