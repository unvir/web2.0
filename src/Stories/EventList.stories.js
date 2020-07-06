"use strict";
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
/* eslint-disable react/jsx-filename-extension, import/no-extraneous-dependencies */
var React = __importStar(require("react"));
var react_1 = require("@storybook/react");
var EventList_1 = __importDefault(require("../Components/EventList/EventList"));
var items = {
    "vm-ditrace2.elasticsearch": [{
            state: "OK",
            old_state: "NODATA",
            timestamp: 1504166060,
            value: 233245,
            metric: "vm-ditrace2.elasticsearch",
            msg: "This metric has been in bad state for more than 24 hours - please, fix.",
            trigger_id: "e3ab7290-0c5f-42df-965f-ff4bd160d704"
        }, {
            timestamp: 1504528667,
            metric: "vm-ditrace2.elasticsearch",
            value: 12345,
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "WARN"
        }, {
            timestamp: 1504528667,
            metric: "vm-ditrace2.elasticsearch",
            state: "WARN",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "ERROR"
        }, {
            timestamp: 1504528667,
            metric: "vm-ditrace2.elasticsearch",
            state: "ERROR",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "EXCEPTION"
        }, {
            timestamp: 1504528667,
            metric: "vm-ditrace2.elasticsearch",
            state: "EXCEPTION",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "DEL"
        }],
    "ditrace-lt.nginx": [{
            timestamp: 1504527066,
            metric: "ditrace-lt.nginx",
            value: 36059806,
            state: "OK",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "NODATA"
        }, {
            timestamp: 1504526684,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }, {
            timestamp: 1504526596,
            metric: "ditrace-lt.nginx",
            value: 11840200,
            state: "OK",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "NODATA"
        }, {
            timestamp: 1504526590,
            metric: "ditrace-lt.nginx",
            value: 5374721,
            state: "OK",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "NODATA"
        }, {
            timestamp: 1504526536,
            metric: "ditrace-lt.nginx",
            value: 1873956,
            state: "OK",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "NODATA"
        }, {
            timestamp: 1504526407,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }, {
            timestamp: 1504526407,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }, {
            timestamp: 1504526407,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }, {
            timestamp: 1504526407,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }, {
            timestamp: 1504526407,
            metric: "ditrace-lt.nginx",
            state: "NODATA",
            trigger_id: "351de571-015f-40ff-b16e-8ca57585b4e8",
            old_state: "OK"
        }]
};
react_1.storiesOf("EventList", module).add("Default", function () { return React.createElement(EventList_1.default, { items: items }); });
