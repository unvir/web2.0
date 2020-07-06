"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUTCDate = exports.humanizeDuration = void 0;
var date_fns_1 = require("date-fns");
function getUTCDate() {
    var date = new Date();
    return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds()));
}
exports.getUTCDate = getUTCDate;
function humanizeDuration(unixTimestamp) {
    return date_fns_1.formatDistance(0, unixTimestamp * 1000);
}
exports.humanizeDuration = humanizeDuration;
