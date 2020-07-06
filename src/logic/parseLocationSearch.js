"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var query_string_1 = __importDefault(require("query-string"));
/**
 * Разбирает строку с параметрами URL и возвращает объект с результатом
 * @param {string} search строка параметров
 * @returns {Object} результат разбора
 */
function parseLocationSearch(search) {
    var result = {
        page: 0,
        tags: [],
        onlyProblems: false,
        searchText: ""
    };
    var _a = query_string_1.default.parse(search, { arrayFormat: "index" }), page = _a.page, tags = _a.tags, onlyProblems = _a.onlyProblems;
    /*
        Данные пользовательские, поэтому нужно быть уверенным:
        - что page будет целым числом,
        - что tags будет массивом строк
        - что onlyProblems будет булевым
    */
    if (!Number.isNaN(Number(page))) {
        result.page = parseInt(page, 10);
    }
    if (Array.isArray(tags)) {
        result.tags = tags.map(function (value) { return value.toString(); });
    }
    if (onlyProblems !== undefined) {
        result.onlyProblems = onlyProblems === "false" ? false : Boolean(onlyProblems);
    }
    return result;
}
exports.default = parseLocationSearch;
