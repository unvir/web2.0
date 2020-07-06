"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
/**
 * Разбирает строку настроек Мойры из локального хранилища и возвращает объект с результатом
 * @param {string} localData строка из локального хранилища
 * @returns {Object} результат разбора
 */
function parseLocalStorage(localData) {
    var DEFAULT_MOIRA_URL_PARAMS = {
        page: 0,
        tags: [],
        onlyProblems: false,
        searchText: ""
    };
    try {
        var result = __assign({}, DEFAULT_MOIRA_URL_PARAMS);
        var _a = JSON.parse(localData), tags = _a.tags, onlyProblems = _a.onlyProblems;
        /*
            Данные пользовательские, поэтому нужно быть уверенным:
            - что tags будет массивом строк
            - что onlyProblems будет булевым
        */
        if (Array.isArray(tags)) {
            result.tags = tags.map(function (value) { return value.toString(); });
        }
        if (onlyProblems !== undefined) {
            result.onlyProblems = onlyProblems === "false" ? false : Boolean(onlyProblems);
        }
        return result;
    }
    catch (error) {
        return __assign({}, DEFAULT_MOIRA_URL_PARAMS);
    }
}
exports.default = parseLocalStorage;
