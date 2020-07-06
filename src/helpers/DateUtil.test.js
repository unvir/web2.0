"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mockdate_1 = __importDefault(require("mockdate"));
var DateUtil_1 = require("./DateUtil");
describe("getUTCDate", function () {
    var result;
    beforeEach(function () {
        result = new Date("Tue Jun 09 2020 06:00:00 GMT+0000");
        mockdate_1.default.set("Tue Jun 09 2020 09:00:00 GMT+0300");
    });
    afterEach(function () {
        result = null;
        mockdate_1.default.reset();
    });
    it("returns correct UTC date from PC timezone", function () {
        expect(DateUtil_1.getUTCDate()).toStrictEqual(result);
    });
});
test("humanizeDuration", function () {
    expect(DateUtil_1.humanizeDuration(29)).toBe("less than a minute");
    expect(DateUtil_1.humanizeDuration(86400)).toBe("1 day");
    expect(DateUtil_1.humanizeDuration(2764800)).toBe("about 1 month");
});
