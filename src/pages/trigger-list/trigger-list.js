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
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var flattenDeep_1 = __importDefault(require("lodash/flattenDeep"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var intersection_1 = __importDefault(require("lodash/intersection"));
var query_string_1 = __importDefault(require("query-string"));
var transformPageFromHumanToProgrammer_1 = __importDefault(require("../../logic/transformPageFromHumanToProgrammer"));
var MoiraApiInjection_1 = require("../../Api/MoiraApiInjection");
var Maintenance_1 = require("../../Domain/Maintenance");
// ToDo вынести в хелперы
var clearInput = function (input) {
    var cleared = Array.isArray(input) ? input.join(" ") : input;
    cleared = cleared.trim();
    cleared = cleared.replace(/[\s]+/g, " ");
    return cleared;
};
var TriggerListPage = /** @class */ (function (_super) {
    __extends(TriggerListPage, _super);
    function TriggerListPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            loading: true,
            error: null,
            subscribedTags: [],
            allTags: [],
            triggers: [],
            activePage: 1,
            pageCount: 1
        };
        _this.changeLocationSearch = function (update) {
            var _a = _this.props, location = _a.location, history = _a.history;
            var locationSearch = TriggerListPage.parseLocationSearch(location.search);
            var settings = __assign(__assign({}, locationSearch), update);
            localStorage.setItem("moiraSettings", JSON.stringify(__assign(__assign({}, settings), { searchText: "" })));
            history.push("?" + query_string_1.default.stringify(settings, {
                arrayFormat: "index",
                encode: true
            }));
        };
        _this.setMetricMaintenance = function (triggerId, metric, maintenance) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                this.setState({ loading: true });
                moiraApi = this.props.moiraApi;
                Maintenance_1.setMetricMaintenance(moiraApi, triggerId, metric, maintenance);
                return [2 /*return*/];
            });
        }); };
        _this.removeMetric = function (triggerId, metric) { return __awaiter(_this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ loading: true });
                        moiraApi = this.props.moiraApi;
                        return [4 /*yield*/, moiraApi.delMetric(triggerId, metric)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    TriggerListPage.prototype.componentDidMount = function () {
        document.title = "Moira - Triggers";
        this.loadData();
    };
    TriggerListPage.prototype.componentDidUpdate = function (_a) {
        var prevLocation = _a.location;
        var currentLocation = this.props.location;
        if (!isEqual_1.default(prevLocation, currentLocation)) {
            this.loadData();
        }
    };
    TriggerListPage.parseLocationSearch = function (search) {
        var START_PAGE = 1;
        var _a = query_string_1.default.parse(search, {
            arrayFormat: "index"
        }), page = _a.page, tags = _a.tags, onlyProblems = _a.onlyProblems, searchText = _a.searchText;
        return {
            page: Number.isNaN(Number(page)) ? START_PAGE : Math.abs(parseInt(page, 10)),
            tags: Array.isArray(tags) ? tags.map(function (value) { return value.toString(); }) : [],
            onlyProblems: onlyProblems === "false" ? false : Boolean(onlyProblems),
            searchText: clearInput(searchText || "")
        };
    };
    TriggerListPage.prototype.render = function () {
        var location = this.props.location;
        var locationSearch = TriggerListPage.parseLocationSearch(location.search);
        var onlyProblems = locationSearch.onlyProblems, tags = locationSearch.tags, searchText = locationSearch.searchText;
        var _a = this.state, loading = _a.loading, error = _a.error, subscribedTags = _a.subscribedTags, allTags = _a.allTags, triggers = _a.triggers, activePage = _a.activePage, pageCount = _a.pageCount;
        var TriggerListView = this.props.view;
        return React.createElement(TriggerListView, { searchText: searchText || "", selectedTags: tags, subscribedTags: subscribedTags, allTags: allTags, onlyProblems: onlyProblems, triggers: triggers, activePage: activePage, pageCount: pageCount, loading: loading, error: error, onChange: this.changeLocationSearch, onSetMetricMaintenance: this.setMetricMaintenance, onRemoveMetric: this.removeMetric });
    };
    TriggerListPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, location, moiraApi, locationSearch, redirected, _b, settings, triggers, tags, error_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this.props, location = _a.location, moiraApi = _a.moiraApi;
                        locationSearch = TriggerListPage.parseLocationSearch(location.search);
                        redirected = this.loadLocalSettingsAndRedirectIfNeed(locationSearch.tags, locationSearch.onlyProblems);
                        if (redirected)
                            return [2 /*return*/];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all([moiraApi.getSettings(), moiraApi.getTriggerList(transformPageFromHumanToProgrammer_1.default(locationSearch.page), locationSearch.onlyProblems, locationSearch.tags, locationSearch.searchText), moiraApi.getTagList()])];
                    case 2:
                        _b = _c.sent(), settings = _b[0], triggers = _b[1], tags = _b[2];
                        if (this.compareTagsAndRedirectIfHasUnknownTags(locationSearch.tags, tags.list))
                            return [2 /*return*/];
                        if (this.checkPageAndRedirectIfNeed(triggers, locationSearch.page))
                            return [2 /*return*/];
                        this.setState({
                            subscribedTags: uniq_1.default(flattenDeep_1.default(settings.subscriptions.map(function (item) { return item.tags; }))),
                            allTags: tags.list,
                            triggers: triggers.list,
                            activePage: locationSearch.page,
                            pageCount: Math.ceil(triggers.total / triggers.size),
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
    TriggerListPage.prototype.checkPageAndRedirectIfNeed = function (triggers, page) {
        var pages = Math.ceil(triggers.total / triggers.size);
        if (page > pages && triggers.total !== 0) {
            var rightLastPage = pages || 1;
            this.changeLocationSearch({ page: rightLastPage });
            return true;
        }
        return false;
    };
    TriggerListPage.prototype.loadLocalSettingsAndRedirectIfNeed = function (tags, onlyProblems) {
        var localDataString = localStorage.getItem("moiraSettings");
        var _a = typeof localDataString === "string" ? JSON.parse(localDataString) : {}, localTags = _a.tags, localOnlyProblems = _a.onlyProblems;
        var searchToUpdate = {};
        var isTagParamEnabled = tags.length === 0 && localTags && localTags.length;
        var isOnlyProblemsParamEnabled = !onlyProblems && localOnlyProblems;
        if (isTagParamEnabled) {
            searchToUpdate.tags = localTags;
        }
        if (isOnlyProblemsParamEnabled) {
            searchToUpdate.onlyProblems = localOnlyProblems;
        }
        if (isTagParamEnabled || isOnlyProblemsParamEnabled) {
            this.changeLocationSearch(searchToUpdate);
            return true;
        }
        return false;
    };
    TriggerListPage.prototype.compareTagsAndRedirectIfHasUnknownTags = function (parsedTags, moiraTags) {
        var validSelectedTags = intersection_1.default(parsedTags, moiraTags);
        if (parsedTags.length > validSelectedTags.length) {
            this.changeLocationSearch({ tags: validSelectedTags });
            return true;
        }
        return false;
    };
    return TriggerListPage;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(TriggerListPage);
