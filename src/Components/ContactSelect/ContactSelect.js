"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Trash_1 = __importDefault(require("@skbkontur/react-icons/Trash"));
var difference_1 = __importDefault(require("lodash/difference"));
var union_1 = __importDefault(require("lodash/union"));
var React = __importStar(require("react"));
var ComboBox_1 = require("@skbkontur/react-ui/components/ComboBox");
var A11yButtonWrapper_1 = __importDefault(require("../A11yButtonWrapper/A11yButtonWrapper"));
var ContactInfo_1 = __importDefault(require("../ContactInfo/ContactInfo"));
var ContactTypeIcon_1 = __importDefault(require("../ContactTypeIcon/ContactTypeIcon"));
var ContactSelect_less_1 = __importDefault(require("./ContactSelect.less"));
var ContactSelect = /** @class */ (function (_super) {
    __extends(ContactSelect, _super);
    function ContactSelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangeContactToAdd = function (value) {
            var _a = _this.props, onChange = _a.onChange, contactIds = _a.contactIds;
            onChange(union_1.default(contactIds, [value.value]));
        };
        _this.handleRemoveContact = function (contact) {
            var _a = _this.props, onChange = _a.onChange, contactIds = _a.contactIds;
            onChange(difference_1.default(contactIds, [contact.id]));
        };
        _this.getContactsForComboBox = function (query) { return __awaiter(_this, void 0, void 0, function () {
            var _a, contactIds, availableContacts;
            return __generator(this, function (_b) {
                _a = this.props, contactIds = _a.contactIds, availableContacts = _a.availableContacts;
                return [2 /*return*/, availableContacts.filter(function (x) { return !contactIds.includes(x.id); }).filter(function (x) { return ContactSelect.isContactMatch(x, query); }).slice(0, 10).map(function (x) { return ({
                        value: x.id,
                        label: x.value,
                        type: x.type
                    }); })];
            });
        }); };
        return _this;
    }
    ContactSelect.isContactMatch = function (contact, query) {
        if (query == null || query.trim() === "") {
            return true;
        }
        return contact.value.toLowerCase().includes(query.toLowerCase());
    };
    ContactSelect.prototype.render = function () {
        var _this = this;
        var _a = this.props, contactIds = _a.contactIds, availableContacts = _a.availableContacts, onFocus = _a.onFocus, onBlur = _a.onBlur, error = _a.error, warning = _a.warning, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave;
        return React.createElement("div", { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
            contactIds.map(function (x) { return availableContacts.find(function (contact) { return contact.id === x; }); }).filter(Boolean).map(function (x) { return React.createElement("div", { key: x.id, className: ContactSelect_less_1.default("contact") },
                React.createElement(ContactInfo_1.default, { contact: x }),
                " ",
                React.createElement(A11yButtonWrapper_1.default, { onClick: function () { return _this.handleRemoveContact(x); } },
                    React.createElement(Trash_1.default, null))); }),
            React.createElement("div", null,
                React.createElement(ComboBox_1.ComboBox, { error: error, warning: warning, width: "100%", onFocus: onFocus, onBlur: onBlur, onValueChange: this.handleChangeContactToAdd, getItems: this.getContactsForComboBox, placeholder: "Select delivery channel", renderNotFound: function () { return "No delivery channels found"; }, renderItem: function (item) { return React.createElement(React.Fragment, null,
                        React.createElement(ContactTypeIcon_1.default, { type: item.type }),
                        " ",
                        item.label); } })));
    };
    return ContactSelect;
}(React.Component));
exports.default = ContactSelect;
