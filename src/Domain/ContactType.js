"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactTypeCaption = exports.ContactTypes = void 0;
exports.ContactTypes = {
    mail: "mail",
    email: "email",
    phone: "phone",
    pushover: "pushover",
    telegram: "telegram",
    msteams: "msteams",
    slack: "slack",
    "twilio sms": "twilio sms",
    "twilio voice": "twilio voice"
};
var ContactTypeCaptions = {
    mail: "EMail",
    email: "EMail",
    phone: "Phone",
    pushover: "Pushover",
    telegram: "Telegram",
    msteams: "Microsoft Teams",
    "twilio sms": "Twilio SMS",
    "twilio voice": "Twilio voice",
    slack: "slack"
};
function getContactTypeCaption(contactConfig) {
    if (ContactTypeCaptions[contactConfig.type] !== null) {
        return ContactTypeCaptions[contactConfig.type];
    }
    return contactConfig.type;
}
exports.getContactTypeCaption = getContactTypeCaption;
