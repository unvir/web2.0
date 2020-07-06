"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mockdate_1 = __importDefault(require("mockdate"));
var checkMaintenance_1 = __importDefault(require("./checkMaintenance"));
describe("checkMaintenance", function () {
    var result;
    beforeEach(function () {
        result = +new Date("Tue Jun 09 2020 09:01:00 GMT+0300") / 1000;
        mockdate_1.default.set("Tue Jun 09 2020 09:00:00 GMT+0300");
    });
    afterEach(function () {
        result = null;
        mockdate_1.default.reset();
    });
    it("returns off if maintenance not set", function () {
        expect(checkMaintenance_1.default()).toStrictEqual("Off");
    });
    it("returns correct humanized value", function () {
        expect(checkMaintenance_1.default(result)).toStrictEqual("1 minute");
    });
    it("returns off if maintenance in pass", function () {
        expect(checkMaintenance_1.default(result - 60)).toStrictEqual("Off");
    });
});
