"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var contactConfigs = [{
        type: "email",
        label: "E-mail"
    }, {
        type: "slack",
        label: "Slack",
        validation: "^[@#][a-zA-Z0-9-_]+",
        placeholder: "Slack #channel or @user"
    }, {
        type: "phone",
        label: "Phone",
        validation: "^9\\d{9}$",
        placeholder: "In format 98743210",
        help: "Phone for Kontur SMS"
    }];
exports.default = contactConfigs;
