"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var group_metrics_by_statuses_1 = __importDefault(require("./group-metrics-by-statuses"));
var tests = [{
        title: "Empty metric list",
        input: {},
        output: {}
    }, {
        title: "Few metrics with one state",
        input: {
            "metric.state.del-1": {
                state: "DEL",
                timestamp: 1551098595
            },
            "metric.state.del-2": {
                state: "DEL",
                timestamp: 1551098595
            },
            "metric.state.del-3": {
                state: "DEL",
                timestamp: 1551098595
            }
        },
        output: {
            DEL: {
                "metric.state.del-1": {
                    state: "DEL",
                    timestamp: 1551098595
                },
                "metric.state.del-2": {
                    state: "DEL",
                    timestamp: 1551098595
                },
                "metric.state.del-3": {
                    state: "DEL",
                    timestamp: 1551098595
                }
            }
        }
    }, {
        title: "Metric list with all states",
        input: {
            "metric.state.del": {
                state: "DEL",
                timestamp: 1551098595
            },
            "metric.state.exception": {
                state: "EXCEPTION",
                timestamp: 1551098595
            },
            "metric.state.nodata": {
                state: "NODATA",
                timestamp: 1551098595
            },
            "metric.state.error": {
                state: "ERROR",
                timestamp: 1551098595
            },
            "metric.state.warn": {
                state: "WARN",
                timestamp: 1551098595
            },
            "metric.state.ok": {
                state: "OK",
                timestamp: 1551098595
            }
        },
        output: {
            DEL: {
                "metric.state.del": {
                    state: "DEL",
                    timestamp: 1551098595
                }
            },
            EXCEPTION: {
                "metric.state.exception": {
                    state: "EXCEPTION",
                    timestamp: 1551098595
                }
            },
            NODATA: {
                "metric.state.nodata": {
                    state: "NODATA",
                    timestamp: 1551098595
                }
            },
            ERROR: {
                "metric.state.error": {
                    state: "ERROR",
                    timestamp: 1551098595
                }
            },
            WARN: {
                "metric.state.warn": {
                    state: "WARN",
                    timestamp: 1551098595
                }
            },
            OK: {
                "metric.state.ok": {
                    state: "OK",
                    timestamp: 1551098595
                }
            }
        }
    }];
tests.forEach(function (_a) {
    var title = _a.title, input = _a.input, output = _a.output;
    test(title, function () {
        expect(group_metrics_by_statuses_1.default(input)).toMatchObject(output);
    });
});
