"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusWeight = exports.getStatusCaption = exports.getStatusColor = exports.StatusesInOrder = exports.StatusesWeight = exports.StatusesColors = exports.StatusesCaptions = exports.Statuses = void 0;
exports.Statuses = {
    DEL: "DEL",
    EXCEPTION: "EXCEPTION",
    NODATA: "NODATA",
    ERROR: "ERROR",
    WARN: "WARN",
    OK: "OK"
};
exports.StatusesCaptions = {
    DEL: "DEL",
    EXCEPTION: "EXCEPTION",
    NODATA: "NODATA",
    ERROR: "ERROR",
    WARN: "WARN",
    OK: "OK"
};
exports.StatusesColors = {
    DEL: "#000",
    EXCEPTION: "#ff5722",
    NODATA: "#9e9e9e",
    ERROR: "#ff5722",
    WARN: "#ffc107",
    OK: "#00bfa5"
};
exports.StatusesWeight = {
    DEL: 100000,
    EXCEPTION: 100000,
    NODATA: 1000,
    ERROR: 100,
    WARN: 1,
    OK: 0
};
exports.StatusesInOrder = [exports.Statuses.EXCEPTION, exports.Statuses.NODATA, exports.Statuses.ERROR, exports.Statuses.WARN, exports.Statuses.OK, exports.Statuses.DEL];
function getStatusColor(status) {
    return exports.StatusesColors[status];
}
exports.getStatusColor = getStatusColor;
function getStatusCaption(status) {
    return exports.StatusesCaptions[status];
}
exports.getStatusCaption = getStatusCaption;
function getStatusWeight(status) {
    return exports.StatusesWeight[status];
}
exports.getStatusWeight = getStatusWeight;
