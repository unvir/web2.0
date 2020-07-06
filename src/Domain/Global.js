"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPageLink = exports.getPagePath = exports.PagesLinks = exports.PagesPaths = void 0;
exports.PagesPaths = {
    index: "/",
    trigger: "/trigger/:id",
    triggerEdit: "/trigger/:id/edit",
    triggerDuplicate: "/trigger/:id/duplicate",
    triggerAdd: "/trigger/new",
    settings: "/settings",
    notifications: "/notifications",
    tags: "/tags",
    patterns: "/patterns"
};
exports.PagesLinks = {
    index: "/",
    trigger: "/trigger/%id%",
    triggerEdit: "/trigger/%id%/edit",
    triggerDuplicate: "/trigger/%id%/duplicate",
    triggerAdd: "/trigger/new",
    settings: "/settings",
    notifications: "/notifications",
    tags: "/tags",
    patterns: "/patterns",
    docs: "//moira.readthedocs.org/"
};
function getPagePath(page) {
    return exports.PagesPaths[page];
}
exports.getPagePath = getPagePath;
function getPageLink(page, id) {
    return id ? exports.PagesLinks[page].replace("%id%", id) : exports.PagesLinks[page];
}
exports.getPageLink = getPageLink;
