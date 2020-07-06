"use strict";
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
Object.defineProperty(exports, "__esModule", { value: true });
var data = [{
        is_remote: false,
        mute_new_metrics: false,
        error_value: 100.0,
        sched: {
            endOffset: 1439,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            tzOffset: -300
        },
        name: "EDI Test Cassandra Nodes Down",
        tags: ["normal", "EDI", "DevOps", "dbaas", "Cassandra"],
        throttling: 0,
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        id: "f1b45470-b0eb-498b-a22d-2c3ced467a91",
        patterns: ["EDITest.Cassandra.*.*.DownEndpointCount.DownEndpointCount"],
        trigger_type: "falling",
        ttl: 600,
        warn_value: 1.0,
        last_check: {
            metrics: {
                CatalogueTestingCluster: {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500473007
                },
                CatalogueCluster: {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500473007
                },
                CatalogueRtqBenchmarkCluster: {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500473007
                }
            },
            timestamp: 1500532289,
            state: "OK",
            score: 3000
        },
        expression: "",
        targets: ['groupByNode(EDITest.Cassandra.*.*.DownEndpointCount.DownEndpointCount,2,"maxSeries")'],
        desc: "\u041a\u0430\u0436\u0434\u0430\u044f \u043d\u043e\u0434\u0430 \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0435\u0435 \u043c\u043d\u0435\u043d\u0438\u044e \u0434\u0440\u0443\u0433\u0438\u0445 \u043d\u043e\u0434 \u0432 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435 \u0443\u043f\u0430\u043b\u043e. \u041c\u044b \u0431\u0435\u0440\u0435\u043c \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u043d\u043e\u0434 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u0441\u043b\u0435\u0434\u0438\u043c, \u0447\u0442\u043e\u0431\u044b \u043e\u043d\u043e \u0431\u044b\u043b\u043e \u043a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0431\u043b\u0438\u0436\u0435 \u043a \u043d\u0443\u043b\u044e. \u041f\u043e \u044d\u0442\u043e\u043c\u0443 \u0442\u0440\u0438\u0433\u0433\u0435\u0440\u0443 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c, \u0447\u0442\u043e \u0443\u043f\u0430\u043b\u0430 \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u043d\u043e\u0434\u0430, \u043d\u043e \u043a\u0430\u043a\u0430\u044f \u0438\u043c\u0435\u043d\u043d\u043e - \u043d\u0435 \u0443\u0442\u043e\u0447\u043d\u044f\u0435\u0442\u0441\u044f."
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 1500.0,
        sched: {
            tzOffset: -300,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            endOffset: 1439
        },
        name: "BillyElastic GC Time",
        ttl_state: "NODATA",
        notify_about_new_metrics: true,
        throttling: 1,
        tags: ["Billy"],
        id: "875ec87c-969b-4bc0-93ca-4db0efbe4ce6",
        patterns: ["Billy.elasticsearch.vm-sps-nix.metrics.*.jvm.gc.collection.time"],
        trigger_type: "falling",
        ttl: 600,
        warn_value: 1000.0,
        last_check: {
            metrics: {
                "nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el2.jvm.gc.collection.time)": {
                    timestamp: 1500531627,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472887
                },
                "nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el1.jvm.gc.collection.time)": {
                    timestamp: 1500531627,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472887
                },
                "nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el3.jvm.gc.collection.time)": {
                    timestamp: 1500531627,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472887
                }
            },
            timestamp: 1500532289,
            state: "OK",
            score: 3000
        },
        expression: "",
        targets: ["nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.*.jvm.gc.collection.time)"]
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 200.0,
        sched: {
            tzOffset: -300,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            endOffset: 1439
        },
        name: "Highlander-WebAPI 400 Count",
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        throttling: 0,
        tags: ["Highlander-WebApi", "KE"],
        id: "234225c0-7e6d-4aa5-9681-39ee17ffec0c",
        patterns: ["KE.Highlander-webapi.*.AfterThrottling.anyAction.status.status.4*.Count-Requests"],
        trigger_type: "falling",
        ttl: 600,
        warn_value: 50.0,
        last_check: {
            metrics: {
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1467708699,
                    state: "NODATA",
                    event_timestamp: 1467708699
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.404.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.404.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.404.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1500532210,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1499605699,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1468306341,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1467984257,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1467984774,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1467944898,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1467780794,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1467709372,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1467708687,
                    state: "NODATA",
                    event_timestamp: 1467708687
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1467780840,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1467780300,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.404.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.404.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1470111187,
                    state: "OK",
                    suppressed: false,
                    value: 0.0,
                    event_timestamp: 1468373062
                },
                "sumSeries(derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.401.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.405.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API1_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.400.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API2_10090_highlander.AfterThrottling.anyAction.status.status.415.Count-Requests),derivative(KE.Highlander-webapi.VM-HIGH-API3_10090_highlander.AfterThrottling.anyAction.status.status.409.Count-Requests))": {
                    timestamp: 1468339043,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1468305892,
                    value: 0.0
                },
                "sumSeries(derivative(KE.Highlander-webapi.*.AfterThrottling.anyAction.status.status.4*.Count-Requests))": {
                    timestamp: 1467705087,
                    state: "NODATA",
                    event_timestamp: 1467705087
                }
            },
            timestamp: 1500532271,
            state: "OK",
            score: 3000
        },
        expression: "",
        targets: ["sumSeries(derivative(KE.Highlander-webapi.*.AfterThrottling.anyAction.status.status.4*.Count-Requests))"]
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 2000.0,
        sched: {
            tzOffset: -300,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            endOffset: 1439
        },
        name: "BillyElastic Query Time",
        ttl_state: "NODATA",
        notify_about_new_metrics: true,
        throttling: 0,
        tags: ["Billy"],
        id: "03f11d7c-2260-455a-b296-6db6e094b1f0",
        patterns: ["Billy.elasticsearch.vm-sps-nix.metrics.*.indices._all.search.query_time_in_millis"],
        trigger_type: "falling",
        ttl: 600,
        warn_value: 1500.0,
        last_check: {
            metrics: {
                "scaleToSeconds(nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el1.indices._all.search.query_time_in_millis),1)": {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472830
                },
                "scaleToSeconds(nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el2.indices._all.search.query_time_in_millis),1)": {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472830
                },
                "scaleToSeconds(nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.billy-el3.indices._all.search.query_time_in_millis),1)": {
                    timestamp: 1500531687,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500472830
                }
            },
            timestamp: 1500532289,
            state: "OK",
            score: 3000
        },
        expression: "",
        targets: ["scaleToSeconds(nonNegativeDerivative(Billy.elasticsearch.vm-sps-nix.metrics.*.indices._all.search.query_time_in_millis), 1)"]
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 99.0,
        sched: {
            endOffset: 1439,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            tzOffset: -300
        },
        name: "Elasticsearch heap usage",
        tags: ["EgaisTest"],
        throttling: 0,
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        targets: ["ADK.elasticsearch.rosalco{26,27,28}.rosalco.jvm.mem.heap_used_percent"],
        patterns: ["ADK.elasticsearch.rosalco{26,27,28}.rosalco.jvm.mem.heap_used_percent"],
        trigger_type: "falling",
        ttl: 6000,
        warn_value: 95.0,
        last_check: {
            metrics: {
                "ADK.elasticsearch.rosalco28.rosalco.jvm.mem.heap_used_percent": {
                    timestamp: 1500526227,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500480087
                },
                "ADK.elasticsearch.rosalco26.rosalco.jvm.mem.heap_used_percent": {
                    timestamp: 1500526227,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500480087
                },
                "ADK.elasticsearch.rosalco27.rosalco.jvm.mem.heap_used_percent": {
                    timestamp: 1500526227,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500480087
                }
            },
            timestamp: 1500532288,
            state: "OK",
            score: 3000
        },
        expression: "",
        id: "024c6925-aa30-47b6-ac83-c3147b826ad7"
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 48.0,
        sched: {
            endOffset: 1439,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: false, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            tzOffset: -300
        },
        name: "Diff Backup",
        tags: ["SDI"],
        throttling: 0,
        ttl_state: "NODATA",
        notify_about_new_metrics: true,
        targets: ["aliasByNode(scale(exclude(sortByMaxima(currentBelow(KE.Databases.BackupAge.*.*.Diff.Minutes, 1000000000)), '(_tmp|_temp|_bak|_copy|_test|aspstate)'), 0.0166666666666667), 3, 4)"],
        patterns: ["KE.Databases.BackupAge.*.*.Diff.Minutes"],
        trigger_type: "falling",
        ttl: 600,
        warn_value: 36.0,
        last_check: {
            metrics: {
                "apple.konturcryptostatistics": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1457713344,
                    event_timestamp: 1500154489
                },
                "vm-referent-sql_referent.nblanks": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9274135276,
                    event_timestamp: 1500157910
                },
                "dbs-apple_apple.ccdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2399028748,
                    event_timestamp: 1500153169
                },
                "pfr-sql1.orbita_pfrservice2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3631223751,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.rdcb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2583794243,
                    event_timestamp: 1500153169
                },
                "pfr-sql1.orbita_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3822890418,
                    event_timestamp: 1500152569
                },
                "mint.billyaccounting": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.1695078997
                },
                "test.test": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2798960404,
                    event_timestamp: 1500152749
                },
                "dbs-phoenix-mc_phoenix.indexoptimize": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2787092868,
                    event_timestamp: 1500153002
                },
                "vm-referent-sql_referent.alkray": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9454323782
                },
                "apple.normativrecommendation": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154189,
                    value: 8.3330282783
                },
                "apple.normativbuhcalendar": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154009,
                    value: 8.3996862649
                },
                "pfr-sql1.tvercrypto_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0731570983,
                    event_timestamp: 1500152869
                },
                "dbs-cherry_cherry.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4129280343,
                    event_timestamp: 1500152569
                },
                "pfr-sql1.r73_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3142508553,
                    event_timestamp: 1500152689
                },
                "extern-regusers-small.r49_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152629,
                    value: 9.355988372
                },
                "dbs-lemon-mc_lemon.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2169905354,
                    event_timestamp: 1500153169
                },
                "miscdbs.csstudyinfo": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4381671921,
                    event_timestamp: 1500152509
                },
                "apple.websitespushnotificationservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1202808823,
                    event_timestamp: 1500154609
                },
                "extern-regusers-small.novag_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3754163736,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.normativapitest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2341563341
                },
                "vm-referent-sql_referent.analytics": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9448768227
                },
                "pfr-sql1.r18_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3461825031,
                    event_timestamp: 1500152629
                },
                "vm-referent-sql_referent.kemerovo": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.935731855
                },
                "vm-referent-sql_referent.hmao": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9382231754,
                    event_timestamp: 1500157850
                },
                "extern-regusers-small.mri7_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3773555643,
                    event_timestamp: 1500152569
                },
                "fts-sql.fts_monitor_indexcontext": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4097803612,
                    event_timestamp: 1500152569
                },
                "fts-sql.fts_formsservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4136649093,
                    event_timestamp: 1500152509
                },
                "pfr-sql1.rpcca_pfrservice2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3006440768,
                    event_timestamp: 1500152689
                },
                "pfr-sql1.rpcca_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3048064108,
                    event_timestamp: 1500152689
                },
                "extern-regusers-small.r58_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3523816023
                },
                "dbs-hector-mc_hector.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153229,
                    value: 9.2477418812
                },
                "dbs-orange_orange.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152569,
                    value: 9.4069779316
                },
                "dbs-apple_apple.microsoft_mgmtsvc_sqlserver": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2608013001
                },
                "apple.geoservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1260360912,
                    event_timestamp: 1500154550
                },
                "SC.microsoft_mgmtsvc_webappgallery": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.444442797,
                    event_timestamp: 1500152449
                },
                "extern-miscdbs.deliverylog_router": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4359493109,
                    event_timestamp: 1500152509
                },
                "extern-regusers-small.r15_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3673685816,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.normativthesaurustest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2267006522
                },
                "vm-referent-sql_referent.tomsk": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9002111368,
                    event_timestamp: 1500157970
                },
                "extern-regusers-small.r35_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3632062552,
                    event_timestamp: 1500152629
                },
                "extern-regusers-small.r69_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3487716255
                },
                "mint.mailerwarehouse": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2570295985
                },
                "extern-regusers-small.r73_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3448827366,
                    event_timestamp: 1500152689
                },
                "dbs-mint_mint.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4400157086,
                    event_timestamp: 1500153529
                },
                "vm-referent-sql_referent.vologda": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8988264726,
                    event_timestamp: 1500157970
                },
                "vm-referent-sql_referent.provodki": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9238091116,
                    event_timestamp: 1500157910
                },
                "extern-miscdbs.irudregistrator": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3842956639,
                    event_timestamp: 1500152569
                },
                "dbs-apple_apple.normativtest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2316953974
                },
                "dbs-hector_hector.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152629,
                    value: 9.4515864573
                },
                "extern-regusers-small.r52_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3543217053
                },
                "vm-referent-sql_referent.ynao": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8979974799,
                    event_timestamp: 1500158030
                },
                "dbs-lemon_lemon.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152569,
                    value: 9.4179410569
                },
                "pfr-sql1.skbkontur_r38_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0856527593,
                    event_timestamp: 1500152869
                },
                "vm-referent-sql_referent.metodic": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9304584304,
                    event_timestamp: 1500157910
                },
                "apple.sgd20pfr": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4216567506,
                    event_timestamp: 1500153949
                },
                "apple.sgd20ifns": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4224900839,
                    event_timestamp: 1500153949
                },
                "vm-referent-sql_referent.lipeck": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9351806526,
                    event_timestamp: 1500157910
                },
                "apple.normativqa": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.3733017151,
                    event_timestamp: 1500154069
                },
                "vm-referent-sql_referent.perm": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9243646672,
                    event_timestamp: 1500157910
                },
                "dbs-hector-mc_hector.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2452462246,
                    event_timestamp: 1500153229
                },
                "pfr-sql1.ces_r16_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4361522609,
                    event_timestamp: 1500152449
                },
                "mint.billyusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2311832541,
                    event_timestamp: 1500153062
                },
                "pfr-sql1.centralproviderlist": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4430919962,
                    event_timestamp: 1500152449
                },
                "dbs-phoenix_phoenix.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2703028053,
                    event_timestamp: 1500153002
                },
                "apple.konturedu": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.13382689
                },
                "dbs-hector-mc_hector.indexoptimize": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2524588473
                },
                "apple.konturexternnew": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154489,
                    value: 8.1446645643
                },
                "dbs-rapid_rapid.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153289,
                    value: 8.4917348969
                },
                "extern-regusers-small.r18_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152629,
                    value: 9.3651463593
                },
                "apple.normativmaintenance": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154009,
                    value: 8.3988572706
                },
                "mint.billypartners": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153469,
                    value: 8.6320165875
                },
                "mint.crmdata": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.956942797,
                    event_timestamp: 1500153289
                },
                "cl1aonag01_inst01.factor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4301203169,
                    event_timestamp: 1500152509
                },
                "dbs-apple_apple.microsoft_mgmtsvc_store": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2638568556
                },
                "regusers-sql-b1.r61_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3214687305,
                    event_timestamp: 1500152689
                },
                "mint.billy": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.9150634553,
                    event_timestamp: 1500153349
                },
                "extern-regusers-small.petrocrypt_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3709753529,
                    event_timestamp: 1500152629
                },
                "cl1aonag02_inst01.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4056136945,
                    event_timestamp: 1500152569
                },
                "vm-referent-sql_referent.stavr": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9018733483
                },
                "cl1aonag01_inst01.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3787401083,
                    event_timestamp: 1500152569
                },
                "vm-referent-sql_referent.region": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9215912314,
                    event_timestamp: 1500157910
                },
                "miscdbs.ulearn": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2785071515,
                    event_timestamp: 1500152749
                },
                "apple.websitesremotelog": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1375031045,
                    event_timestamp: 1500154550
                },
                "dbs-apple_apple.normativsaletest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2247335901,
                    event_timestamp: 1500153229
                },
                "apple.normativapi": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4013529315,
                    event_timestamp: 1500154009
                },
                "dbs-lemon-mc_lemon.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2197683131
                },
                "apple.normativsearchquality": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154249,
                    value: 8.298032619
                },
                "dbs-apple_apple.normativofflinetest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2311138012,
                    event_timestamp: 1500153169
                },
                "forms-sql.forms3": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4231006735,
                    event_timestamp: 1500152509
                },
                "forms-sql.forms2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152509,
                    value: 9.4244895624
                },
                "forms-sql.forms1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4256006735,
                    event_timestamp: 1500152509
                },
                "sps-miscdbs.websupporttools": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2712933386,
                    event_timestamp: 1500152749
                },
                "forms-sql.forms7": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4181093538,
                    event_timestamp: 1500152509
                },
                "forms-sql.forms6": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4194939024,
                    event_timestamp: 1500152509
                },
                "forms-sql.forms5": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4206050135,
                    event_timestamp: 1500152509
                },
                "apple.websitesadvertisingservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.1369432227
                },
                "apple.free_kontur_ru": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4132583134,
                    event_timestamp: 1500154009
                },
                "cl1aonag03_inst01.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4466453534,
                    event_timestamp: 1500152449
                },
                "dbs-apple_apple.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2702500858,
                    event_timestamp: 1500153062
                },
                "regusers-sql-b1.r70_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3161909527
                },
                "mint.billyadministration": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2406190108,
                    event_timestamp: 1500153062
                },
                "extern-miscdbs.bank": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4448078169,
                    event_timestamp: 1500152449
                },
                "vm-referent-sql_referent.sahalin": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9035400149
                },
                "extern-regusers-small.etalon_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4331715331,
                    event_timestamp: 1500152509
                },
                "mint.billymail": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2414566821
                },
                "regusers-sql-b1.r23_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3384088344,
                    event_timestamp: 1500152629
                },
                "apple.konturcrypto": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1468781251,
                    event_timestamp: 1500154489
                },
                "apple.fms77_1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1107539738,
                    event_timestamp: 1500154609
                },
                "pfr-sql1.petrocrypt_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3553445974,
                    event_timestamp: 1500152629
                },
                "extern-regusers-small.education_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4348381998,
                    event_timestamp: 1500152509
                },
                "apple.websitesmaildomain": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.13555866
                },
                "vm-referent-sql_referent.tipdog": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9004889146
                },
                "dbs-lemon-mc_lemon.indexoptimize": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2247639721
                },
                "apple.pro_feedback": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154009,
                    value: 8.4188746327
                },
                "dbs-orange_orange.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4078112649,
                    event_timestamp: 1500152569
                },
                "forms-sql.forms4": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4219939024,
                    event_timestamp: 1500152509
                },
                "SC.scspfdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152449,
                    value: 9.4444558124
                },
                "vm-referent-sql_referent.novosib": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9260269938
                },
                "dev-sql-n2_sc.msdb": {
                    timestamp: 1500532187,
                    state: "ERROR",
                    suppressed: false,
                    value: 2936.179681938,
                    event_timestamp: 1500480246
                },
                "mint.crmexternal": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.1088915789
                },
                "regusers-sql-b1.r64_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3184131749,
                    event_timestamp: 1500152689
                },
                "apple.fnstv": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1538095293,
                    event_timestamp: 1500154489
                },
                "apple.diagnostics": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0129675117,
                    event_timestamp: 1500153469
                },
                "extern-regusers-small.gpr": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4012357685,
                    event_timestamp: 1500152569
                },
                "dbs-apple_apple.mytest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2346988691
                },
                "pfr-sql1.consultant_r37_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4336522609,
                    event_timestamp: 1500152449
                },
                "vm-referent-sql_referent.primorye": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9240868894
                },
                "pfr-sql1.renome_r24_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3098064108,
                    event_timestamp: 1500152689
                },
                "SC.microsoft_mgmtsvc_sqlserver": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4452674452,
                    event_timestamp: 1500152449
                },
                "apple.elba_history": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4282496324,
                    event_timestamp: 1500153949
                },
                "pfr-sql1.rtcom_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2973107435,
                    event_timestamp: 1500152689
                },
                "apple.konturbuhta": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.3099293205,
                    event_timestamp: 1500154249
                },
                "apple.normativtaxes": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154249,
                    value: 8.2969215079
                },
                "dbs-cherry-mc_cherry.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.209395566,
                    event_timestamp: 1500153169
                },
                "vm-referent-sql_referent.nizhegor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9263024164
                },
                "apple.otchetru": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4085925141,
                    event_timestamp: 1500154009
                },
                "extern-regusers-small.r01_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3690309085,
                    event_timestamp: 1500152629
                },
                "extern-miscdbs.inspectorscache": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152569,
                    value: 9.3987357685
                },
                "apple.konturdiadoc": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1529935567,
                    event_timestamp: 1500154489
                },
                "vm-referent-sql_referent.kabarbal": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9368386259
                },
                "vm-referent-sql_referent.russia": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9135356759
                },
                "apple.konturalko": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1502027579,
                    event_timestamp: 1500154489
                },
                "mint.crmstorage": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153469,
                    value: 8.6247249123
                },
                "vm-referent-sql_referent.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9293473193,
                    event_timestamp: 1500157910
                },
                "regusers-sql-b1.r16_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3503491698,
                    event_timestamp: 1500152629
                },
                "extern-regusers-small.r72_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3465494033
                },
                "apple.konturkuba": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1482800161,
                    event_timestamp: 1500154489
                },
                "apple.elba": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.1365829657,
                    event_timestamp: 1500153349
                },
                "dbs-apple_apple.normativassessingtest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.233049799
                },
                "vm-referent-sql_referent.amur": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9451546004,
                    event_timestamp: 1500157850
                },
                "vm-referent-sql_referent.comment": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9398855014,
                    event_timestamp: 1500157850
                },
                "SC.sma": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152449,
                    value: 9.4441780346
                },
                "apple.normativsale": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.138306056
                },
                "vm-referent-sql_referent.arbitraj": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9437700506
                },
                "apple.otchetru_admin": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4052591808,
                    event_timestamp: 1500154009
                },
                "extern-regusers-small.r36_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3615395886,
                    event_timestamp: 1500152629
                },
                "extern-regusers-small.r49_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3573772609,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.normativsearchtest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2286311604
                },
                "apple.normativoffline": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154069,
                    value: 8.3799683817
                },
                "apple.normativassessing": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4005195982,
                    event_timestamp: 1500154009
                },
                "SC.microsoft_mgmtsvc_config": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152449,
                    value: 9.4455322025
                },
                "pfr-sql1.r52_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3264643899,
                    event_timestamp: 1500152689
                },
                "dbs-apple_apple.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2257926192,
                    event_timestamp: 1500153229
                },
                "vm-referent-sql_referent.habarovsk": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9385009532,
                    event_timestamp: 1500157850
                },
                "dbs-hector_hector.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4524154457,
                    event_timestamp: 1500152629
                },
                "apple.sgd20skbkontur": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153949,
                    value: 8.4241610909
                },
                "vm-referent-sql_referent.chelyab": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9401632792
                },
                "vm-referent-sql_referent.bashkiria": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9407144951
                },
                "dbs-apple_apple.konturcrmtest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2241000257,
                    event_timestamp: 1500153229
                },
                "dbs-apple_apple.adfsconfiguration": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2604584304
                },
                "apple.elba8010": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.9976940768,
                    event_timestamp: 1500153469
                },
                "dbs-apple_apple.normativtaxestest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2272509529,
                    event_timestamp: 1500153169
                },
                "apple.csedays": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1424119561,
                    event_timestamp: 1500154489
                },
                "apple.yetanotherforum": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1391697711,
                    event_timestamp: 1500154550
                },
                "extern-miscdbs.contactserverdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4426072964,
                    event_timestamp: 1500152449
                },
                "apple.konturfocus": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154489,
                    value: 8.1416133495
                },
                "fts-sql.fts_monitor_envelopescontext": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4111649093,
                    event_timestamp: 1500152509
                },
                "pfr-sql1.centralupfrlist": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4419808851,
                    event_timestamp: 1500152449
                },
                "dbs-phoenix-mc_phoenix.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2370469594,
                    event_timestamp: 1500153169
                },
                "SC.virtualmanagerdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4355712641,
                    event_timestamp: 1500152509
                },
                "vm-referent-sql_referent.sverdlov": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9013177927
                },
                "pfr-sql1.infanet_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4070025834,
                    event_timestamp: 1500152569
                },
                "extern-regusers-small.severstal_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2804471551,
                    event_timestamp: 1500152749
                },
                "vm-referent-sql_referent.dogovor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.938778731
                },
                "dbs-apple_apple.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2674766469
                },
                "vm-referent-sql_referent.crimea": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9393299458,
                    event_timestamp: 1500157850
                },
                "dbs-ice-mc_ice.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500366845,
                    value: 9.2759744744
                },
                "dbs-orange-mc_orange.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2051246322
                },
                "dev-sql-n1_sc.model": {
                    timestamp: 1500532187,
                    state: "ERROR",
                    suppressed: false,
                    value: 2504.2108360234,
                    event_timestamp: 1500480246
                },
                "forms-sql.system": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152869,
                    value: 9.0787083148
                },
                "vm-referent-sql_referent.yaroslav": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8985530354,
                    event_timestamp: 1500158030
                },
                "dbs-mint_mint.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2736355074
                },
                "pfr-sql1.practic_r36_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.352571392,
                    event_timestamp: 1500152629
                },
                "forms-sql.forms8": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4169982426,
                    event_timestamp: 1500152509
                },
                "dbs-phoenix_phoenix.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153002,
                    value: 9.2694694719
                },
                "pfr-sql1.rt13_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2984218546,
                    event_timestamp: 1500152689
                },
                "vm-referent-sql_referent.rostov": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9190912314
                },
                "vmm-dbs.virtualmachinebillingdata": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2760112123,
                    event_timestamp: 1500152749
                },
                "regusers-sql-b1.sibtel_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2878707658,
                    event_timestamp: 1500152749
                },
                "dbs-cherry_cherry.indexoptimize": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4176459224,
                    event_timestamp: 1500152569
                },
                "miscdbs.csstudy": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4398338587,
                    event_timestamp: 1500152449
                },
                "vm-referent-sql_referent.tatarstan": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9007666924
                },
                "apple.normativ": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4030152713,
                    event_timestamp: 1500154009
                },
                "apple.konturelba": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154489,
                    value: 8.1491046678
                },
                "SC.microsoft_mgmtsvc_store": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4449942435,
                    event_timestamp: 1500152449
                },
                "extern-miscdbs.irucregistrator": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3973512194,
                    event_timestamp: 1500152569
                },
                "apple.konturca": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1513182094,
                    event_timestamp: 1500154489
                },
                "vm-referent-sql_referent.vlgrad": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8991042504,
                    event_timestamp: 1500157970
                },
                "miscdbs.csstudyprolongation": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4370560809,
                    event_timestamp: 1500152509
                },
                "vm-referent-sql_referent.refmat": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9229757783
                },
                "dbs-apple_apple.normativbuhcalendartest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2322205748,
                    event_timestamp: 1500153169
                },
                "dbs-cherry-mc_cherry.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2124466828
                },
                "dev-sql-n1_sc.msdb": {
                    timestamp: 1500532187,
                    state: "ERROR",
                    suppressed: false,
                    event_timestamp: 1500480246,
                    value: 2504.1747292514
                },
                "vm-referent-sql_referent.tyumen": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8993820282,
                    event_timestamp: 1500157970
                },
                "extern-regusers-small.reg_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3062759689
                },
                "mint.mailerconfiguration": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2592474804,
                    event_timestamp: 1500153062
                },
                "rapid_monster.cs_info": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4992262167,
                    event_timestamp: 1500153229
                },
                "dev-sql-n2_sc.master": {
                    timestamp: 1499071906,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1499071906
                },
                "extern-regusers-small.rt13_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.281836044,
                    event_timestamp: 1500152749
                },
                "dev-sql-n2_sc.model": {
                    timestamp: 1500532187,
                    state: "ERROR",
                    suppressed: false,
                    value: 2936.2166221583,
                    event_timestamp: 1500480246
                },
                "extern-miscdbs.fss": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4106802129,
                    event_timestamp: 1500152509
                },
                "extern-regusers-small.r67_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152689,
                    value: 9.3504382922
                },
                "apple.normativthesaurus": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.2963702919,
                    event_timestamp: 1500154249
                },
                "dbs-apple_apple.vfirewall": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2353455826
                },
                "dbs-phoenix-mc_phoenix.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2320515858
                },
                "extern-regusers-small.infanet_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3998468796,
                    event_timestamp: 1500152569
                },
                "vm-referent-sql_referent.krasnodar": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.935731855
                },
                "pfr-sql1.spko_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0803749815,
                    event_timestamp: 1500152869
                },
                "apple.konturexpert": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154489,
                    value: 8.1438312309
                },
                "dbs-rapid_rapid.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4945126747,
                    event_timestamp: 1500153289
                },
                "dbs-apple-mc_apple.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2491221583,
                    event_timestamp: 1500153169
                },
                "rapid_monster.cs": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153229,
                    value: 8.5886706611
                },
                "dbs-monster_monster.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153409,
                    value: 9.1731099903
                },
                "fts-sql.fts_monitor_permissionscontext": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4083914723,
                    event_timestamp: 1500152569
                },
                "vmm-dbs.virtualmanagerdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2735112123,
                    event_timestamp: 1500152749
                },
                "mint.mailerdata": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2584141471,
                    event_timestamp: 1500153062
                },
                "apple.konturfocusforum": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1430022384,
                    event_timestamp: 1500154489
                },
                "apple.konturzakupki": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1410622327,
                    event_timestamp: 1500154550
                },
                "vm-referent-sql_referent.karelia": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9362830703
                },
                "vm-referent-sql_referent.spburg": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9027066816
                },
                "extern-regusers-small.pascal_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3731975752,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.microsoft_mgmtsvc_webappgallery": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2619167524
                },
                "apple.normativsmsnotifications": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154249,
                    value: 8.2974770634
                },
                "apple.websiteslanding": {
                    timestamp: 1500532187,
                    event_timestamp: 1500154550,
                    state: "OK",
                    value: 8.1208321116,
                    maintenance: 1485951561,
                    suppressed: false
                },
                "dbs-apple_apple.adfsartifactstore": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2593429661,
                    event_timestamp: 1500153169
                },
                "regusers-sql-b1.mri_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4036735902,
                    event_timestamp: 1500152569
                },
                "extern-regusers-small.r38_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3593173663,
                    event_timestamp: 1500152629
                },
                "dbs-apple_apple.sma": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2572856739,
                    event_timestamp: 1500153169
                },
                "apple.newbuhonline": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1285708268,
                    event_timestamp: 1500154550
                },
                "dbs-monster_monster.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2072723164,
                    event_timestamp: 1500153289
                },
                "dbs-apple_apple.normativsmsnotificationstest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2280799519,
                    event_timestamp: 1500153169
                },
                "vm-referent-sql_referent.irkutsk": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9379453976,
                    event_timestamp: 1500157850
                },
                "vm-referent-sql_referent.archive": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9412700506
                },
                "apple.skbkonturnew": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.1230499798
                },
                "pfr-sql1.sibtel_pfrservice2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.290092988,
                    event_timestamp: 1500152749
                },
                "dbs-mint-mc_mint.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153529,
                    value: 8.5367518208
                },
                "dbs-apple_apple.microsoft_mgmtsvc_portalconfigstore": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2646901889
                },
                "pfr-sql1.sibtel_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2931440768,
                    event_timestamp: 1500152749
                },
                "dbs-apple_apple.normativrecommendationtest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2297335901,
                    event_timestamp: 1500153169
                },
                "pfr-sql1.blackwhitelist": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4444808851,
                    event_timestamp: 1500152449
                },
                "vm-referent-sql_referent.nvgorod": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9254714382,
                    event_timestamp: 1500157910
                },
                "dbs-mint-mc_mint.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2606450495,
                    event_timestamp: 1500153062
                },
                "dbs-ice-mc_ice.master": {
                    timestamp: 1500366267,
                    state: "NODATA",
                    event_timestamp: 1500280340
                },
                "pfr-sql1.novag_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3984001529,
                    event_timestamp: 1500152569
                },
                "regusers-sql-b1.r24_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.3339643899,
                    event_timestamp: 1500152689
                },
                "pfr-sql1.escsamara_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.432263372,
                    event_timestamp: 1500152509
                },
                "dbs-apple_apple.normativqatest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2305625848
                },
                "dbs-orange-mc_orange.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2029073411,
                    event_timestamp: 1500153169
                },
                "vm-referent-sql_referent.nauditor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9276849798,
                    event_timestamp: 1500157910
                },
                "apple.normativsearch": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.3027505005,
                    event_timestamp: 1500154249
                },
                "SC.microsoft_mgmtsvc_usage": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4447164657,
                    event_timestamp: 1500152449
                },
                "apple.sgdmonitor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.2055499798,
                    event_timestamp: 1500154429
                },
                "apple.konturpf": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154489,
                    value: 8.1477244606
                },
                "cl1aonag04_inst01.maintanancedb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152449,
                    value: 9.4481153067
                },
                "vm-referent-sql_referent.kadrmet": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9365608481
                },
                "apple.otchetrusales": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4060968549,
                    event_timestamp: 1500154009
                },
                "pfr-sql1.nalog13_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4020069235,
                    event_timestamp: 1500152569
                },
                "apple.programmingcontest": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.1402635216
                },
                "dbs-ice_ice.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152509,
                    value: 9.4236875851
                },
                "apple.fms52": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154609,
                    value: 8.1071428627
                },
                "dbs-cherry_cherry.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152569,
                    value: 9.4123724788
                },
                "apple.fms55": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1149206404,
                    event_timestamp: 1500154609
                },
                "dbs-apple-mc_apple.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153169,
                    value: 9.2535666028
                },
                "pfr-sql1.skbkontur_pfrservice2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152869,
                    value: 9.1128707658
                },
                "pfr-sql1.skbkontur_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2087040991,
                    event_timestamp: 1500152809
                },
                "dbs-mint_mint.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2744644938,
                    event_timestamp: 1500153002
                },
                "extern-miscdbs.registry": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152749,
                    value: 9.2851648578
                },
                "vm-referent-sql_referent.kryarsk": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9354540773,
                    event_timestamp: 1500157910
                },
                "SC.microsoft_mgmtsvc_mysql": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152449,
                    value: 9.4455365424
                },
                "apple.konturbuh": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1524293205,
                    event_timestamp: 1500154489
                },
                "dbs-apple_apple.microsoft_mgmtsvc_config": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2652414036,
                    event_timestamp: 1500153062
                },
                "vm-referent-sql_referent.pskov": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9232535561
                },
                "extern-miscdbs.exchangelogs2": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4315092058,
                    event_timestamp: 1500152509
                },
                "dbs-ice-mc_ice.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500366845,
                    value: 9.2931966967
                },
                "apple.websitesantivirus": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500154550,
                    value: 8.1361098894
                },
                "apple.konturcrm": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.1196559029,
                    event_timestamp: 1500154609
                },
                "vm-referent-sql_referent.orenburg": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9246381049,
                    event_timestamp: 1500157910
                },
                "pfr-sql1.severstal_pfrservice1": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2961996324,
                    event_timestamp: 1500152689
                },
                "vm-referent-sql_referent.nalog": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9282405353,
                    event_timestamp: 1500157910
                },
                "vm-referent-sql_referent.mordovia": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9293516464,
                    event_timestamp: 1500157910
                },
                "vm-referent-sql_referent.sysbase": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9010444702
                },
                "extern-regusers-small.router_regusers": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500152749,
                    value: 9.2832249329
                },
                "vm-referent-sql_referent.omsk": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9251936604
                },
                "apple.sgd20rosstat": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4269345283,
                    event_timestamp: 1500153949
                },
                "pfr-sql1.etalon_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4280967053,
                    event_timestamp: 1500152509
                },
                "SC.microsoft_mgmtsvc_portalconfigstore": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4452631052,
                    event_timestamp: 1500152449
                },
                "pfr-sql1.smoltelecom_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0825972037,
                    event_timestamp: 1500152869
                },
                "dbs-apple_apple.microsoft_mgmtsvc_usage": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2627500858
                },
                "dbs-lemon_lemon.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4187743903,
                    event_timestamp: 1500152569
                },
                "vm-referent-sql_referent.samara": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157970,
                    value: 7.9032622371
                },
                "pfr-sql1.tomline_pfrservice": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.0753793205,
                    event_timestamp: 1500152869
                },
                "vm-referent-sql_referent.cchr": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9404367173
                },
                "dbs-ice_ice.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.4242431406,
                    event_timestamp: 1500152509
                },
                "apple.adklic": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.4196341783,
                    event_timestamp: 1500154009
                },
                "vm-referent-sql_referent.rlight": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157910,
                    value: 7.9190912314
                },
                "apple.svetofor": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2441654449,
                    event_timestamp: 1500153169
                },
                "vm-referent-sql_referent.msdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.9290738686,
                    event_timestamp: 1500157910
                },
                "apple.monitoringmetas": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 8.6810666028,
                    event_timestamp: 1500153829
                },
                "vm-referent-sql_referent.tula": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 7.8996598059,
                    event_timestamp: 1500157970
                },
                "vm-referent-sql_referent.ivanovo": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500157850,
                    value: 7.9376719592
                },
                "dbs-apple_apple.scspfdb": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2658837722,
                    event_timestamp: 1500153062
                },
                "dbs-apple_apple.microsoft_mgmtsvc_mysql": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    value: 9.2635747369,
                    event_timestamp: 1500153062
                },
                "dbs-mint-mc_mint.model": {
                    timestamp: 1500532187,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500153062,
                    value: 9.2614783828
                }
            },
            timestamp: 1500532289,
            state: "OK",
            score: 2400
        },
        expression: "",
        id: "ec8b5099-35a4-45fb-9084-c471c21adf2e",
        desc: "\u0412\u0440\u0435\u043c\u044f \u0441 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0433\u043e \u0434\u0438\u0444\u0444 \u0431\u044d\u043a\u0430\u043f\u0430 \u0432 \u0447\u0430\u0441\u0430\u0445. \u043d\u0435 \u0434\u0435\u043b\u0430\u044e\u0442\u0441\u044f \u0441 \u043f\u044f\u0442\u043d\u0438\u0446\u044b \u043d\u0430 \u0441\u0443\u0431\u0431\u043e\u0442\u0443, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432 \u0441\u0443\u0431\u0431\u043e\u0442\u0443 \u0432\u0440\u0435\u043c\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u0431\u0443\u0434\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 36 \u0447\u0430\u0441\u043e\u0432 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0432\u0430\u0440\u043d\u0438\u043d\u0433."
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: null,
        sched: {
            endOffset: 1439,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            tzOffset: -300
        },
        name: "Edi_ORVIS_api for client reports: Network Utilization",
        tags: ["edi_orvis_api"],
        throttling: 0,
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        targets: ["EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection.bytestotal-sec", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection2.bytestotal-sec", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection.currentbandwidth", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection2.currentbandwidth"],
        patterns: ["EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection.currentbandwidth", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection2.bytestotal-sec", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection2.currentbandwidth", "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection.bytestotal-sec"],
        trigger_type: "expression",
        ttl: 600,
        warn_value: null,
        last_check: {
            metrics: {
                "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection.currentbandwidth": {
                    timestamp: 1476261624,
                    state: "NODATA"
                },
                "EDI_Orvis.system.icat25.networkadapter.intelri350gigabitnetworkconnection2.currentbandwidth": {
                    timestamp: 1476261624,
                    state: "NODATA"
                }
            },
            timestamp: 1500532319,
            state: "OK",
            score: 2000
        },
        expression: "ERROR if (800*(t1+t2)/(t3+t4)) > 95 else WARN if (800*(t1+t2)/(t3+t4)) > 90 else OK",
        id: "ee8abb13-fdf3-4651-9676-8abc01a4037f"
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 1.0,
        sched: {
            tzOffset: -300,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            endOffset: 1439
        },
        name: "kladr p95",
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        throttling: 0,
        tags: ["KLADR"],
        id: "d22d1517-8932-4158-b7e1-8b20f0dae6b2",
        patterns: ["KLADR.nginx.*.upstream_response_time.total.p95"],
        trigger_type: "rising",
        ttl: 600,
        warn_value: 0.5,
        last_check: {
            metrics: {
                'movingAverage(KLADR.nginx.kladr_kontur_ru.upstream_response_time.total.p95,"10min")': {
                    timestamp: 1500531569,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500463290
                },
                'movingAverage(KLADR.nginx.fkopf1_skbkontur_ru.upstream_response_time.total.p95,"10min")': {
                    timestamp: 1500531569,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500474268
                }
            },
            timestamp: 1500532288,
            state: "OK",
            score: 2000
        },
        expression: "",
        targets: ["movingAverage(KLADR.nginx.*.upstream_response_time.total.p95, '10min')"]
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 10000000000000000.0,
        sched: {
            endOffset: 1439,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            tzOffset: -300
        },
        name: "Cassandra GC metrics missing",
        tags: ["Cassandra", "DevOps", "dbaas", "normal"],
        throttling: 0,
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        targets: ["aliasByNode({Alko,EDI,EDITest,KE,KE-cloud,KE-dev}.Cassandra.*.*.GC.StopTheWorld.sum, 0, 2, 3)"],
        patterns: ["{Alko,EDI,EDITest,KE,KE-cloud,KE-dev}.Cassandra.*.*.GC.StopTheWorld.sum"],
        trigger_type: "expression",
        ttl: 1800,
        warn_value: 1000000000000000.0,
        last_check: {
            metrics: {
                "Alko.EgaisCluster.rosalco44": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 318925.0,
                    event_timestamp: 1499489492
                },
                "EDI.RemoteLockCluster.edi03": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 236022.0
                },
                "Alko.EgaisCluster.rosalco41": {
                    timestamp: 1499682153,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1499615792
                },
                "Alko.EgaisCluster.rosalco42": {
                    timestamp: 1499682153,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1499613757
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass2": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 354098.0,
                    event_timestamp: 1499072312
                },
                "EDI.CqlCoreCluster.edi13": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 289613.0
                },
                "EDI.WebCluster.rosalco34": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482571,
                    value: 189564.0
                },
                "EDITest.CatalogueRtqBenchmarkCluster.rtqbench-cass-3": {
                    timestamp: 1500532112,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500037292,
                    value: 11478.0
                },
                "EDI.BlobStorageCluster.edi17": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1499253874,
                    value: 61292.0
                },
                "EDITest.CatalogueRtqBenchmarkCluster.rtqbench-cass-1": {
                    timestamp: 1500532112,
                    state: "OK",
                    suppressed: false,
                    value: 35304.0,
                    event_timestamp: 1500037232
                },
                "EDI.WebCluster.rosalco32": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 144914.0
                },
                "EDI.WebCluster.rosalco33": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 157871.0
                },
                "EDI.QueueCluster.rosalco11": {
                    timestamp: 1500532232,
                    value: 161130.0,
                    state: "OK",
                    event_timestamp: 1499167053,
                    maintenance: 1499352028,
                    suppressed: true
                },
                "EDI.QueueCluster.rosalco10": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 242271.0
                },
                "EDI.QueueCluster.rosalco13": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 360158.0
                },
                "EDI.QueueCluster.rosalco12": {
                    timestamp: 1500532232,
                    value: 194989.0,
                    state: "OK",
                    event_timestamp: 1499533651,
                    maintenance: 1499802592,
                    suppressed: true
                },
                "EDI.CoreCluster.rosalco16": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 1018212.0
                },
                "EDI.QueueCluster.rosalco14": {
                    timestamp: 1500532232,
                    event_timestamp: 1498683692,
                    state: "OK",
                    value: 173594.0,
                    maintenance: 1499242863,
                    suppressed: true
                },
                "EDI.CoreCluster.rosalco15": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 710525.0,
                    event_timestamp: 1498568492
                },
                "EDI.BillingCluster.edi09": {
                    timestamp: 1500531692,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498521211,
                    value: 105376.0
                },
                "EDI.BillingCluster.edi08": {
                    timestamp: 1500532112,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1500425731,
                    value: 31673.0
                },
                "EDI.WebCluster.edi10": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 113330.0
                },
                "EDI.EventsCluster.rosalco30": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482571,
                    value: 140030.0
                },
                "EDI.CoreCluster.rosalco17": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 1061968.0
                },
                "EDI.LegacyCluster.rosalco35": {
                    timestamp: 1500532232,
                    event_timestamp: 1500122612,
                    state: "OK",
                    value: 421040.0,
                    maintenance: 1500689899,
                    suppressed: true
                },
                "EDI.LegacyCluster.rosalco25": {
                    timestamp: 1500532232,
                    event_timestamp: 1499680112,
                    state: "OK",
                    value: 163971.0,
                    maintenance: 1500035382,
                    suppressed: true
                },
                "EDITest.CatalogueCluster.edi-csl-01": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498484431,
                    value: 60742.0
                },
                "EDITest.CatalogueCluster.edi-csl-02": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498484431,
                    value: 96875.0
                },
                "EDITest.CatalogueCluster.edi-csl-03": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498484431,
                    value: 85418.0
                },
                "EDI.CqlCoreCluster.EDI11": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482571,
                    value: 142793.0
                },
                "EDI.LegacyCluster.rosalco24": {
                    timestamp: 1500532232,
                    value: 213358.0,
                    state: "OK",
                    event_timestamp: 1499680052,
                    maintenance: 1500035386,
                    suppressed: true
                },
                "EDITest.CatalogueTestingCluster.edi-csl-2": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 28694.0,
                    event_timestamp: 1498484431
                },
                "EDITest.CatalogueTestingCluster.edi-csl-3": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498484431,
                    value: 15671.0
                },
                "EDITest.CatalogueTestingCluster.edi-csl-1": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498484431,
                    value: 24634.0
                },
                "EDI.BlobStorageCluster.edi16": {
                    timestamp: 1500532232,
                    event_timestamp: 1499253814,
                    state: "OK",
                    value: 61308.0,
                    maintenance: 1499843157,
                    suppressed: true
                },
                "EDI.CoreCluster.rosalco18": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 315201.0,
                    event_timestamp: 1498568731
                },
                "EDI.CoreCluster.rosalco09": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498569572,
                    value: 71605.0
                },
                "Alko.StoreCluster.rosalco26": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 132413.0
                },
                "Alko.StoreCluster.rosalco27": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482571,
                    value: 127655.0
                },
                "EDI.CqlCoreCluster.edi12": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 230782.0
                },
                "Alko.EgaisCluster.egcass03": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 131286.0
                },
                "Alko.StoreCluster.rosalco28": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 137455.0
                },
                "EDI.EventsCluster.rosalco29": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 104745.0
                },
                "Alko.EgaisCluster.egcass04": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 125511.0,
                    event_timestamp: 1499680714
                },
                "EDI.WebCluster.edi09": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 297932.0
                },
                "KE.3DSpanCassandraCluster.spancass-sd1-02": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 801885.0
                },
                "EDITest.CatalogueRtqBenchmarkCluster.rtqbench-cass-2": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 1596.0,
                    event_timestamp: 1500037292
                },
                "EDI.WebCluster.edi08": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 461244.0
                },
                "KE-dev.TestCassandraCluster.vm-ke-cass1": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482691,
                    value: 8818.0
                },
                "KE-dev.TestCassandraCluster.vm-ke-cass2": {
                    timestamp: 1500532172,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482752,
                    value: 10639.0
                },
                "KE-dev.TestCassandraCluster.vm-ke-cass3": {
                    timestamp: 1500532172,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482691,
                    value: 13985.0
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass6": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 645537.0
                },
                "EDI.RemoteLockCluster.edi02": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 478754.0
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass5": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 570861.0,
                    event_timestamp: 1498569572
                },
                "EDI.RemoteLockCluster.edi04": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 548394.0
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass3": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 167851.0
                },
                "EDI.BillingCluster.edi10": {
                    timestamp: 1500531752,
                    state: "OK",
                    suppressed: false,
                    value: 121915.0,
                    event_timestamp: 1499898211
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass1": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 262598.0
                },
                "EDI.BlobStorageCluster.edi15": {
                    timestamp: 1500532232,
                    event_timestamp: 1499253695,
                    state: "OK",
                    value: 41647.0,
                    maintenance: 1499843560,
                    suppressed: true
                },
                "EDI.CoreCluster.rosalco19": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    value: 172150.0,
                    event_timestamp: 1498569275
                },
                "Alko.EgaisCluster.egcass02": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 137612.0
                },
                "EDI.EventsCluster.edi05": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 110769.0
                },
                "EDI.EventsCluster.edi06": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 193764.0
                },
                "EDI.EventsCluster.edi07": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 133299.0
                },
                "EDI.QueueCluster.rosalco08": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 434504.0
                },
                "KE-cloud.SpanCloudCassandraCluster.vm-span-cass4": {
                    timestamp: 1500532232,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498482631,
                    value: 307154.0
                }
            },
            timestamp: 1500532292,
            state: "OK",
            score: 2000
        },
        expression: "OK",
        id: "6e620e2a-481e-4e45-8619-fdf4643e65ff",
        desc: "\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0442\u0440\u0438\u0433\u0433\u0435\u0440 GC \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u0442 maxSeries \u043e\u0442 \u0432\u0441\u0435\u0445 \u043d\u043e\u0434 \u043e\u0434\u043d\u043e\u0433\u043e \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430, \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u2014 \u043d\u0435 \u0432\u0438\u0434\u0438\u0442, \u043a\u043e\u0433\u0434\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438 \u0443\u0445\u043e\u0434\u044f\u0442 \u0432 NODATA. \u042d\u0442\u043e\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0442\u0440\u0438\u0433\u0433\u0435\u0440 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e NODATA, \u043d\u043e \u043f\u043e \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043c\u0435\u0442\u0440\u0438\u043a\u0435 GC. \u0415\u0441\u043b\u0438 \u0442\u0443\u0442 \u0447\u0442\u043e-\u0442\u043e \u0443\u043f\u0430\u043b\u043e - \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e, \u0434\u0435\u043b\u043e \u0432 logstash \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0441 \u041a\u0430\u0441\u0441\u0430\u043d\u0434\u0440\u043e\u0439."
    }, {
        is_remote: false,
        mute_new_metrics: false,
        error_value: 100000000000.0,
        sched: {
            tzOffset: -180,
            days: [{ enabled: true, name: "Mon" }, { enabled: true, name: "Tue" }, { enabled: true, name: "Wed" }, { enabled: true, name: "Thu" }, { enabled: true, name: "Fri" }, { enabled: true, name: "Sat" }, { enabled: true, name: "Sun" }],
            startOffset: 0,
            endOffset: 1439
        },
        name: "Ceph free node space",
        ttl_state: "NODATA",
        notify_about_new_metrics: false,
        throttling: 0,
        tags: ["Ceph", "SPS"],
        id: "28b75586-8a4c-499b-8f5d-0811e6584ab0",
        patterns: ["SPS.ceph.servers.*.diskspace.*.byte_avail"],
        trigger_type: "falling",
        ttl: 900,
        warn_value: 150000000000.0,
        last_check: {
            metrics: {
                ceph1: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1485283353,
                    value: 969035071488.0
                },
                ceph3: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1485283353,
                    value: 1136751493120.0
                },
                ceph2: {
                    timestamp: 1500531396,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500452935
                },
                ceph5: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1485283353,
                    value: 939107971072.0
                },
                app145: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1498337645,
                    value: 321257492480.0
                },
                ceph7: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1485283353,
                    value: 669281247232.0
                },
                ceph4: {
                    timestamp: 1500531396,
                    state: "NODATA",
                    suppressed: false,
                    event_timestamp: 1500459835
                },
                ceph6: {
                    timestamp: 1500532236,
                    state: "OK",
                    suppressed: false,
                    event_timestamp: 1487569625,
                    value: 1424943304704.0
                }
            },
            timestamp: 1500532315,
            state: "OK",
            score: 2000
        },
        expression: "",
        targets: ["groupByNode(SPS.ceph.servers.*.diskspace.*.byte_avail, 3, 'sum')"]
    }];
exports.default = data;
