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
var query_string_1 = __importDefault(require("query-string"));
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var MoiraApiInjection_1 = require("../../Api/MoiraApiInjection");
var Maintenance_1 = require("../../Domain/Maintenance");
var transformPageFromHumanToProgrammer_1 = __importDefault(require("../../logic/transformPageFromHumanToProgrammer"));
// ToDo решить, нужно ли подтягивать данные с сервера, если что-то изменилось
var TriggerPage = /** @class */ (function (_super) {
    __extends(TriggerPage, _super);
    function TriggerPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: true,
            error: null,
            page: 1,
            pageCount: 1,
            trigger: null,
            triggerState: null,
            triggerEvents: []
        };
        _this.disableThrottling = function (triggerId) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, moiraApi.delThrottling(triggerId)];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.setTriggerMaintenance = function (triggerId, maintenance) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, Maintenance_1.setTriggerMaintenance(moiraApi, triggerId, maintenance)];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.setMetricMaintenance = function (triggerId, metric, maintenance) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, Maintenance_1.setMetricMaintenance(moiraApi, triggerId, metric, maintenance)];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.removeMetric = function (triggerId, metric) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, moiraApi.delMetric(triggerId, metric)];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.removeNoDataMetric = function (triggerId) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, moiraApi.delNoDataMetric(triggerId)];
                    case 1:
                        _a.sent();
                        this.loadData();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.changeLocationSearch = function (update) {
            var _a = _this.props, location = _a.location, history = _a.history;
            var locationSearch = TriggerPage.parseLocationSearch(location.search);
            history.push("?" + query_string_1.default.stringify(__assign(__assign({}, locationSearch), update), {
                arrayFormat: "index",
                encode: true
            }));
        };
        return _this;
    }
    TriggerPage.prototype.componentDidMount = function () {
        document.title = "Moira - Trigger";
        this.loadData();
    };
    TriggerPage.prototype.componentDidUpdate = function (_a) {
        var prevLocation = _a.location;
        var currentLocation = this.props.location;
        if (!isEqual_1.default(prevLocation, currentLocation)) {
            this.loadData();
        }
    };
    TriggerPage.parseLocationSearch = function (search) {
        var START_PAGE = 1;
        var page = query_string_1.default.parse(search).page;
        return {
            page: Number.isNaN(Number(page)) ? START_PAGE : Math.abs(parseInt(page, 10)),
            tags: [],
            searchText: "",
            onlyProblems: false
        };
    };
    TriggerPage.getEventMetricName = function (event, triggerName) {
        if (event.trigger_event) {
            return triggerName;
        }
        return event.metric.length !== 0 ? event.metric : "No metric evaluated";
    };
    TriggerPage.composeEvents = function (events, triggerName) {
        var _this = this;
        return events.reduce(function (data, event) {
            var metric = _this.getEventMetricName(event, triggerName);
            if (data[metric]) {
                data[metric].push(event);
            }
            else {
                data[metric] = [event]; // eslint-disable-line no-param-reassign
            }
            return data;
        }, {});
    };
    TriggerPage.prototype.render = function () {
        var _a = this.state, loading = _a.loading, error = _a.error, page = _a.page, pageCount = _a.pageCount, trigger = _a.trigger, triggerState = _a.triggerState, triggerEvents = _a.triggerEvents;
        var TriggerView = this.props.view;
        return React.createElement(TriggerView, { trigger: trigger, state: triggerState, events: triggerEvents, page: page, pageCount: pageCount, loading: loading, error: error, disableThrottling: this.disableThrottling, setTriggerMaintenance: this.setTriggerMaintenance, setMetricMaintenance: this.setMetricMaintenance, removeMetric: this.removeMetric, removeNoDataMetric: this.removeNoDataMetric, onPageChange: this.changeLocationSearch });
    };
    TriggerPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, moiraApi, match, location, page, id, _b, trigger, triggerState, triggerEvents, pageCount, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, moiraApi = _a.moiraApi, match = _a.match, location = _a.location;
                        page = TriggerPage.parseLocationSearch(location.search).page;
                        id = match.params.id;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([moiraApi.getTrigger(id, { populated: true }), moiraApi.getTriggerState(id), moiraApi.getTriggerEvents(id, transformPageFromHumanToProgrammer_1.default(page))])];
                    case 2:
                        _b = _c.sent(), trigger = _b[0], triggerState = _b[1], triggerEvents = _b[2];
                        pageCount = Math.ceil(triggerEvents.total / triggerEvents.size);
                        // ToDo написать проверку на превышение страниц
                        document.title = "Moira - Trigger - " + trigger.name;
                        this.setState({
                            page: page,
                            pageCount: Number.isNaN(pageCount) ? 1 : pageCount,
                            trigger: trigger,
                            triggerState: triggerState,
                            triggerEvents: triggerEvents.list || [],
                            loading: false
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        this.setState({ loading: false, error: error_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TriggerPage;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(TriggerPage);
