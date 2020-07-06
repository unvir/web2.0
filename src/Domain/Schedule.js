"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchedule = exports.WholeWeek = exports.DaysOfWeek = void 0;
exports.DaysOfWeek = {
    Mon: "Mon",
    Tue: "Tue",
    Wed: "Wed",
    Thu: "Thu",
    Fri: "Fri",
    Sat: "Sat",
    Sun: "Sun"
};
exports.WholeWeek = Object.keys(exports.DaysOfWeek);
function createSchedule(days) {
    return {
        days: Object.keys(exports.DaysOfWeek).map(function (x) { return ({ enabled: days.includes(x), name: x }); }),
        tzOffset: new Date().getTimezoneOffset(),
        startOffset: 0,
        endOffset: 1439
    };
}
exports.createSchedule = createSchedule;
