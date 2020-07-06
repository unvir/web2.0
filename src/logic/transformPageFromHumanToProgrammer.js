"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
/**
 * Переводит номер страницы с человеческого на программистский
 * @param {number} page человеческий номер
 * @returns {number} программистский номер
 */
function transformPageFromHumanToProgrammer(page) {
    return page <= 0 ? 0 : page - 1;
}
exports.default = transformPageFromHumanToProgrammer;
