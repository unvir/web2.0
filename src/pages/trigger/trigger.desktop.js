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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var React = __importStar(require("react"));
var Paging_1 = require("@skbkontur/react-ui/components/Paging");
var Center_1 = require("@skbkontur/react-ui/components/Center");
var Layout_1 = __importStar(require("../../Components/Layout/Layout"));
var Tabs_1 = __importStar(require("../../Components/Tabs/Tabs"));
var TriggerInfo_1 = __importDefault(require("../../Components/TriggerInfo/TriggerInfo"));
var MetricList_1 = __importDefault(require("../../Components/MetricList/MetricList"));
var EventList_1 = __importDefault(require("../../Components/EventList/EventList"));
var Status_1 = require("../../Domain/Status");
var TriggerDesktop = /** @class */ (function (_super) {
    __extends(TriggerDesktop, _super);
    function TriggerDesktop(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            sortingColumn: "state",
            sortingDown: false
        };
        return _this;
    }
    TriggerDesktop.getEventMetricName = function (event, triggerName) {
        if (event.trigger_event) {
            return triggerName;
        }
        return event.metric.length !== 0 ? event.metric : "No metric evaluated";
    };
    TriggerDesktop.composeEvents = function (events, triggerName) {
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
    TriggerDesktop.prototype.render = function () {
        var _this = this;
        var _a = this.state, sortingColumn = _a.sortingColumn, sortingDown = _a.sortingDown;
        var _b = this.props, trigger = _b.trigger, state = _b.state, events = _b.events, page = _b.page, pageCount = _b.pageCount, disableThrottling = _b.disableThrottling, setTriggerMaintenance = _b.setTriggerMaintenance, setMetricMaintenance = _b.setMetricMaintenance, removeMetric = _b.removeMetric, removeNoDataMetric = _b.removeNoDataMetric, onPageChange = _b.onPageChange, loading = _b.loading, error = _b.error;
        var metrics = (state || {}).metrics;
        var isMetrics = metrics && Object.keys(metrics).length > 0;
        var isEvents = events && events.length > 0;
        var triggerId = trigger ? trigger.id : "";
        var noDataMerticCount = (metrics && Object.keys(metrics).filter(function (key) { return metrics[key].state === Status_1.Statuses.NODATA; }).length) || 0;
        return React.createElement(Layout_1.default, { loading: loading, error: error },
            trigger && state && React.createElement(Layout_1.LayoutPlate, null,
                React.createElement(TriggerInfo_1.default, { data: trigger, triggerState: state, onThrottlingRemove: function () { return disableThrottling(trigger.id); }, onSetMaintenance: function (maintenance) { return setTriggerMaintenance(trigger.id, maintenance); } })),
            React.createElement(Layout_1.LayoutContent, null, !(isMetrics || isEvents) ? React.createElement(Center_1.Center, null,
                React.createElement("span", { style: { color: "#888888" } }, "There is no metrics evaluated for this trigger.")) : // eslint-disable-next-line no-nested-ternary
                React.createElement(Tabs_1.default, { value: isMetrics ? page > 1 ? "events" : "state" : "state" },
                    isMetrics && triggerId && React.createElement(Tabs_1.Tab, { id: "state", label: "Current state" },
                        React.createElement(MetricList_1.default, { status: true, items: this.sortMetrics(metrics), onSort: function (sorting) {
                                if (sorting === sortingColumn) {
                                    _this.setState({ sortingDown: !sortingDown });
                                }
                                else {
                                    _this.setState({
                                        sortingColumn: sorting,
                                        sortingDown: true
                                    });
                                }
                            }, sortingColumn: sortingColumn, sortingDown: sortingDown, onChange: function (metric, maintenance) {
                                setMetricMaintenance(triggerId, maintenance, metric);
                            }, onRemove: function (metric) { return removeMetric(triggerId, metric); }, noDataMerticCount: noDataMerticCount, onNoDataRemove: function () { return removeNoDataMetric(triggerId); } })),
                    isEvents && trigger && trigger.name && React.createElement(Tabs_1.Tab, { id: "events", label: "Events history" },
                        React.createElement(EventList_1.default, { items: TriggerDesktop.composeEvents(events, trigger.name) }),
                        pageCount > 1 && React.createElement("div", { style: { paddingTop: 20 } },
                            React.createElement(Paging_1.Paging, { caption: "Next page", activePage: page, pagesCount: pageCount, onPageChange: function (newPage) { return onPageChange({ page: newPage }); }, withoutNavigationHint: true }))))));
    };
    // ToDo вместо пересортировки по одному и тому же параметру сделать reverse
    TriggerDesktop.prototype.sortMetrics = function (metrics) {
        var _a = this.state, sortingColumn = _a.sortingColumn, sortingDown = _a.sortingDown;
        var sorting = {
            state: function (x, y) {
                var stateA = Status_1.getStatusWeight(metrics[x].state);
                var stateB = Status_1.getStatusWeight(metrics[y].state);
                if (stateA < stateB) {
                    return sortingDown ? -1 : 1;
                }
                if (stateA > stateB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            },
            name: function (x, y) {
                var regex = /[^a-zA-Z0-9-.]/g;
                var nameA = x.trim().replace(regex, "").toLowerCase();
                var nameB = y.trim().replace(regex, "").toLowerCase();
                if (nameA < nameB) {
                    return sortingDown ? -1 : 1;
                }
                if (nameA > nameB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            },
            event: function (x, y) {
                var eventA = metrics[x].event_timestamp || 0;
                var eventB = metrics[y].event_timestamp || 0;
                if (eventA < eventB) {
                    return sortingDown ? -1 : 1;
                }
                if (eventA > eventB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            },
            value: function (x, y) {
                var valueA = Number.isFinite(metrics[x].value) && metrics[x].value != null ? metrics[x].value : Number.MIN_SAFE_INTEGER;
                var valueB = Number.isFinite(metrics[y].value) && metrics[y].value != null ? metrics[y].value : Number.MIN_SAFE_INTEGER;
                if (valueA < valueB) {
                    return sortingDown ? -1 : 1;
                }
                if (valueA > valueB) {
                    return sortingDown ? 1 : -1;
                }
                return 0;
            }
        };
        return Object.keys(metrics).sort(sorting[sortingColumn]).reduce(function (data, key) {
            var _a;
            return (__assign(__assign({}, data), (_a = {}, _a[key] = metrics[key], _a)));
        }, {});
    };
    return TriggerDesktop;
}(React.Component));
exports.default = TriggerDesktop;
