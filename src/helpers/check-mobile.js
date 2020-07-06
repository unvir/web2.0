"use strict";
// @noflow
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var check = {
    androidChrome: function (userAgent) { return /Android/i.test(userAgent) && /Chrome\/[.0-9]*\sMobile/i.test(userAgent); },
    androidWebView: function (userAgent) { return /\bwv\b/i.test(userAgent) && /Chrome\/[.0-9]*\sMobile/i.test(userAgent); },
    androidFirefox: function (userAgent) { return /Android/i.test(userAgent) && /Gecko\/[.0-9]*\sFirefox\/[.0-9]*/i.test(userAgent); },
    iOSChrome: function (userAgent) { return /iPhone|iPad/i.test(userAgent) && /CriOS\/[.0-9]*\sMobile/i.test(userAgent); },
    iOSFirefox: function (userAgent) { return /iPhone|iPad/i.test(userAgent) && /FxiOS\/[.0-9]*\sMobile/i.test(userAgent); },
    iOSSafari: function (userAgent) { return /iPhone|iPad/i.test(userAgent) && /Version\/[.0-9]*\sMobile\/[A-Za-z0-9]*\sSafari\/[.0-9]*/i.test(userAgent); }
};
var checkMobile = function (userAgent) { return Object.values(check).some(function (callback) { return callback(userAgent); }); };
exports.default = checkMobile;
