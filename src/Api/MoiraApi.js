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
exports.statusCode = void 0;
var query_string_1 = __importDefault(require("query-string"));
var ApiError = /** @class */ (function (_super) {
    __extends(ApiError, _super);
    function ApiError(_a) {
        var message = _a.message, status = _a.status;
        var _this = _super.call(this, message) || this;
        _this.name = "ApiError";
        _this.status = status;
        return _this;
    }
    return ApiError;
}(Error));
var statusCode = {
    NOT_FOUND: 404
};
exports.statusCode = statusCode;
var MoiraApi = /** @class */ (function () {
    function MoiraApi(apiUrl) {
        this.triggerListPageSize = 20;
        this.eventHistoryPageSize = 100;
        this.apiUrl = apiUrl;
    }
    MoiraApi.checkStatus = function (response) {
        return __awaiter(this, void 0, void 0, function () {
            var serverResponse, errorText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!(response.status >= 200 && response.status < 300)) return [3 /*break*/, 2];
                        serverResponse = null;
                        return [4 /*yield*/, response.text()];
                    case 1:
                        errorText = _a.sent();
                        try {
                            serverResponse = JSON.parse(errorText);
                        }
                        catch (error) {
                            throw new ApiError({ message: errorText, status: response.status });
                        }
                        throw new ApiError({
                            message: serverResponse ? serverResponse.status + (serverResponse.error ? ": " + serverResponse.error : "") : errorText,
                            status: response.status
                        });
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.get = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var fullUrl, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fullUrl = this.apiUrl + url;
                        return [4 /*yield*/, fetch(fullUrl, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.getConfig = function () {
        return this.get("/config");
    };
    MoiraApi.prototype.getSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get("/user/settings")];
                    case 1:
                        result = _a.sent();
                        result.subscriptions.forEach(function (s) {
                            // eslint-disable-next-line no-param-reassign
                            s.tags = s.tags === null ? [] : s.tags;
                        });
                        return [2 /*return*/, result];
                }
            });
        });
    };
    MoiraApi.prototype.getContactList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/contact";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.addContact = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/contact";
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin",
                                body: JSON.stringify(contact)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.testContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/contact/" + encodeURI(contactId) + "/test";
                        return [4 /*yield*/, fetch(url, {
                                method: "POST",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.updateContact = function (contact) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/contact/" + encodeURI(contact.id);
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin",
                                body: JSON.stringify(contact)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.addSubscription = function (subscription) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/subscription";
                        if (subscription.id != null) {
                            throw new Error("InvalidProgramState: id of subscription must be null or undefined");
                        }
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin",
                                body: JSON.stringify(subscription)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.updateSubscription = function (subscription) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/subscription/" + encodeURI(subscription.id);
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin",
                                body: JSON.stringify(subscription)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.testSubscription = function (subscriptionId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/subscription/" + encodeURI(subscriptionId) + "/test";
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.deleteContact = function (contactId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/contact/" + encodeURI(contactId);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getPatternList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/pattern";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.delPattern = function (pattern) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/pattern/" + encodeURI(pattern);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getTagList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/tag";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.getTagStats = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/tag/stats";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.delTag = function (tag) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/tag/" + encodeURI(tag);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getTriggerList = function (page, onlyProblems, tags, searchText) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/search?" + query_string_1.default.stringify({
                            /* eslint-disable */
                            p: page,
                            /* eslint-enable */
                            size: this.triggerListPageSize,
                            tags: tags,
                            onlyProblems: onlyProblems,
                            text: searchText
                        }, { arrayFormat: "index", encode: true });
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.getTrigger = function (id, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(id) + (params ? "?" + query_string_1.default.stringify(params) : "");
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.addTrigger = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger";
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.setTrigger = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(id);
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.delTrigger = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(id);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.setMaintenance = function (triggerId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(triggerId) + "/setMaintenance";
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                body: JSON.stringify(data),
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getTriggerState = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(id) + "/state";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.getTriggerEvents = function (id, page) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/event/" + encodeURI(id) + "?p=" + page + "&size=" + this.eventHistoryPageSize;
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.delThrottling = function (triggerId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(triggerId) + "/throttling";
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.delMetric = function (triggerId, metric) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(triggerId) + "/metrics?name=" + encodeURI(metric);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.delNoDataMetric = function (triggerId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/trigger/" + encodeURI(triggerId) + "/metrics/nodata";
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getNotificationList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/notification?start=0&end=-1";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.delNotification = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/notification?id=" + encodeURI(id);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.delAllNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/notification/all";
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.delAllNotificationEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/event/all";
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.delSubscription = function (subscriptionId) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/subscription/" + encodeURI(subscriptionId);
                        return [4 /*yield*/, fetch(url, {
                                method: "DELETE",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoiraApi.prototype.getNotifierState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/health/notifier";
                        return [4 /*yield*/, fetch(url, {
                                method: "GET",
                                credentials: "same-origin"
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    MoiraApi.prototype.setNotifierState = function (status) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.apiUrl + "/health/notifier";
                        return [4 /*yield*/, fetch(url, {
                                method: "PUT",
                                credentials: "same-origin",
                                body: JSON.stringify(status)
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, MoiraApi.checkStatus(response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return MoiraApi;
}());
exports.default = MoiraApi;
