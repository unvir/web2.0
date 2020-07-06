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
var MoiraApiInjection_1 = require("../Api/MoiraApiInjection");
var PatternList_1 = __importDefault(require("../Components/PatternList/PatternList"));
var Layout_1 = __importStar(require("../Components/Layout/Layout"));
var PatternListContainer = /** @class */ (function (_super) {
    __extends(PatternListContainer, _super);
    function PatternListContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sortingColumn: "trigger",
            sortingDown: false,
            loading: false,
            error: null,
            list: null
        };
        return _this;
    }
    PatternListContainer.prototype.componentDidMount = function () {
        document.title = "Moira - Patterns";
        this.getData(this.props);
    };
    PatternListContainer.prototype.componentWillReceiveProps = function (nextProps) {
        this.getData(nextProps);
    };
    PatternListContainer.prototype.render = function () {
        var _this = this;
        var _a = this.state, loading = _a.loading, error = _a.error, list = _a.list, sortingColumn = _a.sortingColumn, sortingDown = _a.sortingDown;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            React.createElement(Layout_1.LayoutContent, null,
                React.createElement(Layout_1.LayoutTitle, null, "Patterns"),
                list && React.createElement(PatternList_1.default, { items: this.sortPatterns(list), onSort: function (sorting) {
                        if (sorting === sortingColumn) {
                            _this.setState({ sortingDown: !sortingDown });
                        }
                        else {
                            _this.setState({
                                sortingColumn: sorting,
                                sortingDown: true
                            });
                        }
                    }, sortingColumn: sortingColumn, sortingDown: sortingDown, onRemove: function (pattern) {
                        _this.removePattern(pattern);
                    } })));
    };
    PatternListContainer.prototype.getData = function (props) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi, patterns, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = props.moiraApi;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, moiraApi.getPatternList()];
                    case 2:
                        patterns = _a.sent();
                        this.setState(__assign({}, patterns));
                        return [3 /*break*/, 5];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ error: error_1.message });
                        return [3 /*break*/, 5];
                    case 4:
                        this.setState({ loading: false });
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    PatternListContainer.prototype.removePattern = function (pattern) {
        return __awaiter(this, void 0, void 0, function () {
            var moiraApi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        moiraApi = this.props.moiraApi;
                        this.setState({ loading: true });
                        return [4 /*yield*/, moiraApi.delPattern(pattern)];
                    case 1:
                        _a.sent();
                        this.getData(this.props);
                        return [2 /*return*/];
                }
            });
        });
    };
    PatternListContainer.prototype.sortPatterns = function (patterns) {
        var _a = this.state, sortingColumn = _a.sortingColumn, sortingDown = _a.sortingDown;
        var sorting = {
            trigger: function (x, y) {
                var valA = x.triggers.length || 0;
                var valB = y.triggers.length || 0;
                if (valA < valB) {
                    return sortingDown ? -1 : 1;
                }
                if (valA > valB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            },
            metric: function (x, y) {
                var valA = x.metrics.length || 0;
                var valB = y.metrics.length || 0;
                if (valA < valB) {
                    return sortingDown ? -1 : 1;
                }
                if (valA > valB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            }
        };
        return patterns.slice(0).sort(sorting[sortingColumn]);
    };
    return PatternListContainer;
}(React.Component));
exports.default = MoiraApiInjection_1.withMoiraApi(PatternListContainer);
