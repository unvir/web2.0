"use strict";
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
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var addon_actions_1 = require("@storybook/addon-actions");
var storybook_react_router_1 = __importDefault(require("storybook-react-router"));
var TriggerListItem_1 = __importDefault(require("../Components/TriggerListItem/TriggerListItem"));
var sourceData = {
    mute_new_metrics: false,
    notify_about_new_metrics: false,
    is_remote: false,
    id: "3e93211b-7fec-4c70-b5e1-abb36d6a4a1d",
    trigger_type: "falling",
    name: "ke.notifications-dev.mail-sender.alive",
    targets: ["sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)"],
    tags: ["ke.notifications-dev", "ke.notifications"],
    patterns: ["KE-cloud.Notifications.*.MailSender.PfrReport.Alive"],
    expression: "",
    ttl: 1200,
    ttl_state: "NODATA",
    throttling: 0,
    sched: {
        endOffset: 1439,
        days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
        startOffset: 0,
        tzOffset: -420
    },
    warn_value: null,
    error_value: null,
    last_check: {
        metrics: {
            "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)": {
                timestamp: 1499416938,
                state: "OK"
            },
            "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)": {
                timestamp: 1499416938,
                state: "OK"
            },
            "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)": {
                timestamp: 1499416938,
                state: "OK"
            },
            "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)": {
                timestamp: 1499416938,
                state: "OK"
            },
            "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)": {
                timestamp: 1499416938,
                state: "OK",
                suppressed: false,
                event_timestamp: 1499331679
            }
        },
        timestamp: 1499418145,
        state: "OK",
        score: 14000
    }
};
var stories = [{
        title: "Default",
        data: __assign({}, sourceData)
    }, {
        title: "Long trigger name",
        data: __assign(__assign({}, sourceData), { name: "ke.notifications-dev.mail-sender.alive.cloud.noname.*.all.metrics.few.error.one.warning.zero.nodata.min.ok" })
    }, {
        title: "Large counters",
        data: __assign(__assign({}, sourceData), { last_check: {
                metrics: {
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "OK",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(KE-cloud.Noti2fications.*.MailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.A45live)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Not1ifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notifica3tions.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notificati1ons.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(KE-cloud.Notifications.*.M4ailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notificati21ons.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(KE-cloud.N1otificati21ons.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(KE-cloud7.Notifications.*.MailSender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-2cloud.Notifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notificatio4ns.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notific4ations.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(6KE-cloud.Notifications.*.M4ailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud7.Notifications.*.Mail6Sender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-2cloud.Notification6s.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-c6loud.Notificatio4ns.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud6.Notific4ations.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(KE-clou3d.Notifications.*.M4ailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud7.Notifications.*.MailSender.MrAp3plication.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-2cloud.3Notifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notificatio4ns.*.Mail3Sender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notific4at3ions.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN",
                        suppressed: false,
                        event_timestamp: 1499331679
                    },
                    "sumSeries(6KE-cloud.Not3ifications.*.M4ailSender.PfrReport.Al3ive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(K3E-cloud7.Notifications.*.Mail6Sender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-2cloud.Notification6s.*.MailSender.PfrIos.Aliv3e)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-c6loud.Notificat3io4ns.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    }
                },
                timestamp: 1499418145,
                state: "OK",
                score: 14000
            } })
    }, {
        title: "Few states",
        data: __assign(__assign({}, sourceData), { last_check: {
                metrics: {
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "ERROR"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    }
                },
                timestamp: 1499418145,
                state: "OK",
                score: 14000
            } })
    }, {
        title: "No metrics",
        data: __assign(__assign({}, sourceData), { last_check: {
                metrics: {},
                timestamp: 1499418145,
                state: "EXCEPTION",
                score: 14000
            } })
    }, {
        title: "Lot targets",
        data: __assign(__assign({}, sourceData), { targets: ["sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.Expert.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.K705Letter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrDemand.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.StatLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.StatReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.Submission.Alive)"] })
    }, {
        title: "One long target name",
        data: __assign(__assign({}, sourceData), { targets: ["sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive.KE-cloud.Notifications.*.MailSender.Expert.Alive.KE-cloud.Notifications.*.MailSender.K705Letter.Alive.KE-cloud.Notifications.*.MailSender.MrApplication.AliveKE-cloud.Notifications.*.MailSender.MrDemand.Alive.KE-cloud.Notifications.*.MailSender.MrIon.Alive)"] })
    }, {
        title: "Short tags",
        data: __assign(__assign({}, sourceData), { tags: ["dev", "test_"] })
    }, {
        title: "Long tags",
        data: __assign(__assign({}, sourceData), { tags: ["dev-or-not-dev-what-is-question", "ke.notifications-dev-test-sort"] })
    }, {
        title: "Lot tags",
        data: __assign(__assign({}, sourceData), { tags: ["dev", "test_", "ke.notifications", "ke.notifications-dev"] })
    }, {
        title: "Throttling flag",
        data: __assign(__assign({}, sourceData), { throttling: Date.now() })
    }, {
        title: "Lot of all data",
        data: __assign(__assign({}, sourceData), { throttling: Date.now(), last_check: {
                metrics: {
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)": {
                        timestamp: 1499416938,
                        state: "WARN"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "ERROR"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    }
                },
                timestamp: 1499418145,
                state: "OK",
                score: 14000
            }, name: "ke.notifications-dev.mail-sender.alive.cloud.noname.*.all.metrics.few.error.one.warning.zero.nodata.min.ok", targets: ["sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive.KE-cloud.Notifications.*.MailSender.Expert.Alive.KE-cloud.Notifications.*.MailSender.K705Letter.Alive.KE-cloud.Notifications.*.MailSender.MrApplication)", "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.Expert.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.K705Letter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrDemand.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.MrReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrIos.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.StatLetter.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.StatReport.Alive)", "sumSeries(KE-cloud.Notifications.*.MailSender.Submission.Alive)"], tags: ["dev", "test", "ke.notifications", "ke.notifications-dev", "very.long.tag.why.you.choice.that.name"] })
    }, {
        title: "Exception state",
        data: __assign(__assign({}, sourceData), { last_check: {
                metrics: {
                    "sumSeries(KE-cloud.Notifications.*.MailSender.PfrReport.Alive)": {
                        timestamp: 1499416938,
                        state: "OK"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrApplication.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.MrIon.Alive)": {
                        timestamp: 1499416938,
                        state: "ERROR"
                    },
                    "sumSeries(KE-cloud.Notifications.*.MailSender.BankNotification.Alive)": {
                        timestamp: 1499416938,
                        state: "NODATA",
                        suppressed: false,
                        event_timestamp: 1499331679
                    }
                },
                timestamp: 1499418145,
                state: "EXCEPTION",
                score: 14000
            } })
    }];
var story = react_1.storiesOf("TriggerListItem", module).addDecorator(storybook_react_router_1.default()).addParameters({
    creevey: {
        tests: {
            States: function () {
                return __awaiter(this, void 0, void 0, function () {
                    var _a, _b, _c;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0: return [4 /*yield*/, this.browser.actions({ bridge: true }).move({
                                    origin: this.browser.findElement({
                                        css: "#root"
                                    }),
                                    // default cursor coordinate x=1, y=1 and element has hover
                                    y: 720
                                }).perform()];
                            case 1:
                                _d.sent();
                                _a = this.expect;
                                return [4 /*yield*/, this.takeScreenshot()];
                            case 2: return [4 /*yield*/, _a.apply(this, [(_d.sent())]).to.matchImage("simple")];
                            case 3:
                                _d.sent();
                                return [4 /*yield*/, this.browser.actions({ bridge: true }).move({
                                        origin: this.browser.findElement({
                                            css: 'div[data-tid="TriggerListItem_status"]'
                                        })
                                    }).perform()];
                            case 4:
                                _d.sent();
                                _b = this.expect;
                                return [4 /*yield*/, this.takeScreenshot()];
                            case 5: return [4 /*yield*/, _b.apply(this, [(_d.sent())]).to.matchImage("hovered")];
                            case 6:
                                _d.sent();
                                return [4 /*yield*/, this.browser.actions({ bridge: true }).click(this.browser.findElement({
                                        css: 'div[data-tid="TriggerListItem_status"]'
                                    })).perform()];
                            case 7:
                                _d.sent();
                                _c = this.expect;
                                return [4 /*yield*/, this.takeScreenshot()];
                            case 8: return [4 /*yield*/, _c.apply(this, [(_d.sent())]).to.matchImage("clicked")];
                            case 9:
                                _d.sent();
                                return [2 /*return*/];
                        }
                    });
                });
            }
        }
    }
});
stories.forEach(function (_a) {
    var title = _a.title, data = _a.data;
    story.add(title, function () { return React.createElement(TriggerListItem_1.default, { searchMode: false, data: data, onChange: addon_actions_1.action("onChange"), onRemove: addon_actions_1.action("onRemove") }); });
});
