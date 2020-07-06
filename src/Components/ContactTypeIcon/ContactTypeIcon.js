"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Telegram2_1 = __importDefault(require("@skbkontur/react-icons/Telegram2"));
var Mail2_1 = __importDefault(require("@skbkontur/react-icons/Mail2"));
var Facebook2_1 = __importDefault(require("@skbkontur/react-icons/Facebook2"));
var Twitter2_1 = __importDefault(require("@skbkontur/react-icons/Twitter2"));
var Phone2_1 = __importDefault(require("@skbkontur/react-icons/Phone2"));
var WhatsApp2_1 = __importDefault(require("@skbkontur/react-icons/WhatsApp2"));
var Viber2_1 = __importDefault(require("@skbkontur/react-icons/Viber2"));
var SvgIcon_1 = __importDefault(require("../SvgIcon/SvgIcon"));
var pushover_logo_svg_1 = __importDefault(require("./pushover-logo.svg"));
var slack_logo_svg_1 = __importDefault(require("./slack-logo.svg"));
var msteams_logo_svg_1 = __importDefault(require("./msteams-logo.svg"));
var twilio_logo_svg_1 = __importDefault(require("./twilio-logo.svg"));
var webhook_logo_svg_1 = __importDefault(require("./webhook-logo.svg"));
var discord_logo_svg_1 = __importDefault(require("./discord-logo.svg"));
var pagerduty_logo_svg_1 = __importDefault(require("./pagerduty-logo.svg"));
var victorops_logo_svg_1 = __importDefault(require("./victorops-logo.svg"));
var opsgenie_logo_svg_1 = __importDefault(require("./opsgenie-logo.svg"));
var TypeToIcon = {
    slack: React.createElement(SvgIcon_1.default, { path: slack_logo_svg_1.default, size: 15, offsetTop: 2 }),
    msteams: React.createElement(SvgIcon_1.default, { path: msteams_logo_svg_1.default, size: 15, offsetTop: 2 }),
    telegram: React.createElement(Telegram2_1.default, null),
    facebook: React.createElement(Facebook2_1.default, null),
    viber: React.createElement(Viber2_1.default, null),
    whatsapp: React.createElement(WhatsApp2_1.default, null),
    twitter: React.createElement(Twitter2_1.default, null),
    mail: React.createElement(Mail2_1.default, null),
    email: React.createElement(Mail2_1.default, null),
    pushover: React.createElement(SvgIcon_1.default, { path: pushover_logo_svg_1.default, size: 14, offsetTop: 2 }),
    twilio: React.createElement(SvgIcon_1.default, { path: twilio_logo_svg_1.default, size: 14, offsetTop: 2 }),
    webhook: React.createElement(SvgIcon_1.default, { path: webhook_logo_svg_1.default, size: 14, offsetTop: 2 }),
    discord: React.createElement(SvgIcon_1.default, { path: discord_logo_svg_1.default, size: 14, offsetTop: 2 }),
    pagerduty: React.createElement(SvgIcon_1.default, { path: pagerduty_logo_svg_1.default, size: 14, offsetTop: 2 }),
    victorops: React.createElement(SvgIcon_1.default, { path: victorops_logo_svg_1.default, size: 14, offsetTop: 2 }),
    opsgenie: React.createElement(SvgIcon_1.default, { path: opsgenie_logo_svg_1.default, size: 14, offsetTop: 2 }),
    phone: React.createElement(Phone2_1.default, null),
    tel: React.createElement(Phone2_1.default, null),
    sms: React.createElement(Phone2_1.default, null)
};
function ContactTypeIcon(_a) {
    var type = _a.type;
    var iconKey = Object.keys(TypeToIcon).find(function (key) { return type.includes(key); });
    return iconKey ? TypeToIcon[iconKey] : React.createElement(Mail2_1.default, null);
}
exports.default = ContactTypeIcon;
