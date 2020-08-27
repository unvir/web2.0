import * as React from "react";
import { format, fromUnixTime } from "date-fns";
import { Link as ReactRouterLink } from "react-router-dom";
import ErrorIcon from "@skbkontur/react-icons/Error";
import FlagSolidIcon from "@skbkontur/react-icons/FlagSolid";
import { getPageLink } from "../../Domain/Global";
import { Trigger } from "../../Domain/Trigger";
import { Status } from "../../Domain/Status";
import { MetricList } from "../../Domain/Metric";
import { Maintenance } from "../../Domain/Maintenance";
import { Statuses, StatusesInOrder, getStatusColor, getStatusCaption } from "../../Domain/Status";
import RouterLink from "../RouterLink/RouterLink";
import StatusIndicator from "../StatusIndicator/StatusIndicator";
import TagGroup from "../TagGroup/TagGroup";
import Tabs, { Tab } from "../Tabs/Tabs";
import MetricListView from "../MetricList/MetricList";

import groupMetricsByStatuses, { IMetricByStatuses } from "../../helpers/group-metrics-by-statuses";

import cn from "./TriggerListItem.less";

type Props = {
    data: Trigger;
    searchMode: boolean;
    onChange?: (triggerId: string, metric: string, maintenance: Maintenance) => void;
    onRemove?: (metric: string) => void;
};

type State = {
    showMetrics: boolean;
    groupedMetrics: IMetricByStatuses;
};

export default class TriggerListItem extends React.Component<Props, State> {
    public state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            showMetrics: false,
            groupedMetrics: props.data.last_check
                ? groupMetricsByStatuses(props.data.last_check.metrics)
                : {},
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps: Props): void {
        const { data } = this.props;
        if (data !== nextProps.data) {
            this.setState({
                groupedMetrics: nextProps.data.last_check
                    ? groupMetricsByStatuses(nextProps.data.last_check.metrics)
                    : {},
            });
        }
    }

    static sortMetricsByValue(metrics: MetricList): MetricList {
        return Object.keys(metrics)
            .sort((x, y) => {
                const valueA = metrics[x].value || 0;
                const valueB = metrics[y].value || 0;
                if (valueA < valueB) {
                    return -1;
                }
                if (valueA > valueB) {
                    return 1;
                }
                return 0;
            })
            .reduce((data, key) => {
                data[key] = metrics[key];
                return data;
            }, {} as MetricList);
    }

    render(): React.ReactNode {
        const { searchMode, data } = this.props;
        const { id, name, targets, tags, throttling, highlights } = data;
        const { showMetrics } = this.state;
        const metrics = this.renderMetrics();
        const searchModeName = highlights && highlights.name;

        return (
            <div className={cn("row", { active: showMetrics })}>
                <div
                    className={cn("state", { active: metrics })}
                    onClick={() => {
                        if (metrics) {
                            this.toggleMetrics();
                        }
                    }}
                    data-tid="TriggerListItem_status"
                >
                    {this.renderStatus()}
                    {this.renderCounters()}
                </div>
                <div className={cn("data")}>
                    <div className={cn("header")}>
                        <ReactRouterLink className={cn("link")} to={getPageLink("trigger", id)}>
                            <div className={cn("title")}>
                                {searchMode ? (
                                    <div
                                        className={cn("name")}
                                        dangerouslySetInnerHTML={{
                                            __html: searchModeName || name,
                                        }}
                                    />
                                ) : (
                                    <div className={cn("name")}>{name}</div>
                                )}
                                {throttling !== 0 && (
                                    <div
                                        className={cn("flag")}
                                        title={`Throttling until
                                            ${format(
                                                fromUnixTime(throttling),
                                                "MMMM d, HH:mm:ss"
                                            )}`}
                                    >
                                        <FlagSolidIcon />
                                    </div>
                                )}
                            </div>
                            <div
                                className={cn({
                                    targets: true,
                                    dark: showMetrics,
                                })}
                            >
                                {targets.map((target) => (
                                    <div key={target} className={cn("target")}>
                                        {target}
                                    </div>
                                ))}
                            </div>
                        </ReactRouterLink>
                    </div>
                    <div className={cn("tags")}>
                        <TagGroup tags={tags} />
                    </div>
                    {showMetrics && metrics}
                </div>
            </div>
        );
    }

    getHasExceptionState(): boolean {
        const { data } = this.props;
        const { state: triggerStatus } = data.last_check || {};
        return triggerStatus === Statuses.EXCEPTION;
    }

    toggleMetrics(): void {
        const { showMetrics } = this.state;
        this.setState({ showMetrics: !showMetrics });
    }

    filterMetricsByStatus(status: Status): MetricList {
        const { groupedMetrics } = this.state;
        return groupedMetrics[status] || {};
    }

    renderCounters(): React.ReactNode {
        const counters = StatusesInOrder.map((status) => ({
            status,
            count: Object.keys(this.filterMetricsByStatus(status as Status)).length,
        }))
            .filter(({ count }) => count !== 0)
            .map(({ status, count }) => (
                <span key={status} style={{ color: getStatusColor(status as Status) }}>
                    {count}
                </span>
            ));
        return (
            <div className={cn("counters")}>
                {counters.length !== 0 ? counters : <span className={cn("NA")}>N/A</span>}
            </div>
        );
    }

    renderStatus(): React.ReactNode {
        const { data } = this.props;
        const { state: triggerStatus } = data.last_check || {};
        const metricStatuses = StatusesInOrder.filter(
            (x) => Object.keys(this.filterMetricsByStatus(x as Status)).length !== 0
        );
        const notOkStatuses = metricStatuses.filter((x) => x !== Statuses.OK);
        let statuses;
        if (triggerStatus && (triggerStatus !== Statuses.OK || metricStatuses.length === 0)) {
            statuses = [triggerStatus];
        } else if (notOkStatuses.length !== 0) {
            statuses = notOkStatuses;
        } else {
            statuses = [Statuses.OK];
        }
        return (
            <div className={cn("indicator")}>
                <StatusIndicator statuses={statuses as Array<Status>} />
            </div>
        );
    }

    renderExceptionHelpMessage(): React.ReactNode {
        const { data } = this.props;
        const hasExpression = data.expression != null && data.expression !== "";
        const hasMultipleTargets = data.targets.length > 1;
        return (
            <div className={cn("exception-message")}>
                <ErrorIcon color="#D43517" /> Trigger in EXCEPTION state. Please{" "}
                <RouterLink to={`/trigger/${data.id}/edit`}>verify</RouterLink> trigger target
                {hasMultipleTargets ? "s" : ""}
                {hasExpression ? " and expression" : ""} on{" "}
                <RouterLink to={`/trigger/${data.id}/edit`}>trigger edit page</RouterLink>.{" "}
                <RouterLink to={`/trigger/${data.id}`}>See more details</RouterLink> on trigger
                page.
            </div>
        );
    }

    renderMetrics(): React.ReactNode | null | undefined {
        const { onChange, onRemove, data } = this.props;
        if (!onChange || !onRemove) {
            return null;
        }
        const statuses = StatusesInOrder.filter(
            (x) => Object.keys(this.filterMetricsByStatus(x as Status)).length !== 0
        );
        if (statuses.length === 0) {
            return null;
        }
        const metrics: Array<React.ReactElement> = statuses.map((x) => (
            <Tab key={x} id={x} label={getStatusCaption(x as Status)}>
                <MetricListView
                    items={TriggerListItem.sortMetricsByValue(
                        this.filterMetricsByStatus(x as Status)
                    )}
                    sortingColumn="value"
                    sortingDown
                    onChange={
                        onChange &&
                        ((metric, maintenance) => onChange(data.id, metric, maintenance))
                    }
                    onRemove={(metric) => onRemove(metric)}
                />
            </Tab>
        ));
        return (
            <div className={cn("metrics")}>
                {this.getHasExceptionState() && this.renderExceptionHelpMessage()}
                {/* @ts-ignore*/}
                <Tabs value={statuses[0]}>{metrics}</Tabs>
            </div>
        );
    }
}