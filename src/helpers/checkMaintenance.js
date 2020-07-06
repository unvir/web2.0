"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var date_fns_1 = require("date-fns");
var DateUtil_1 = require("./DateUtil");
var Maintenance_1 = require("../Domain/Maintenance");
function checkMaintenance(maintenance) {
    if (!maintenance) {
        return Maintenance_1.getMaintenanceCaption("off");
    }
    var delta = maintenance - date_fns_1.getUnixTime(DateUtil_1.getUTCDate());
    return delta <= 0 ? Maintenance_1.getMaintenanceCaption("off") : DateUtil_1.humanizeDuration(delta);
}
exports.default = checkMaintenance;
