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
var React = __importStar(require("react"));
var Modal_1 = require("@skbkontur/react-ui/components/Modal");
var Gapped_1 = require("@skbkontur/react-ui/components/Gapped");
var Button_1 = require("@skbkontur/react-ui/components/Button");
var react_ui_validations_1 = require("@skbkontur/react-ui-validations");
var ContactEditForm_1 = __importDefault(require("../ContactEditForm/ContactEditForm"));
var NewContactModal = /** @class */ (function (_super) {
    __extends(NewContactModal, _super);
    function NewContactModal(props) {
        var _this = _super.call(this, props) || this;
        _this.handleCreateContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var onCreate, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateForm()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        onCreate = this.props.onCreate;
                        this.setState({ createInProcess: true });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, onCreate()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        this.setState({ createInProcess: false });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.handleCreateAndTestContact = function () { return __awaiter(_this, void 0, void 0, function () {
            var onCreateAndTest, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.validateForm()];
                    case 1:
                        if (!(_a.sent())) {
                            return [2 /*return*/];
                        }
                        onCreateAndTest = this.props.onCreateAndTest;
                        this.setState({ createAndTestInProcess: true });
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, onCreateAndTest()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        this.setState({ createAndTestInProcess: false });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            createInProcess: false,
            createAndTestInProcess: false
        };
        _this.validationContainer = React.createRef();
        return _this;
    }
    NewContactModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, onChange = _a.onChange, onCancel = _a.onCancel, contactInfo = _a.contactInfo, contactDescriptions = _a.contactDescriptions;
        var _b = this.state, createInProcess = _b.createInProcess, createAndTestInProcess = _b.createAndTestInProcess;
        var _c = contactInfo || {}, value = _c.value, type = _c.type;
        var idActionButtonsDisabled = !value || !type || createInProcess || createAndTestInProcess;
        return React.createElement(Modal_1.Modal, { onClose: onCancel, ignoreBackgroundClick: true },
            React.createElement(Modal_1.Modal.Header, { sticky: false }, "Delivery channel adding"),
            React.createElement(Modal_1.Modal.Body, null,
                React.createElement(react_ui_validations_1.ValidationContainer, { ref: this.validationContainer },
                    React.createElement(ContactEditForm_1.default, { contactDescriptions: contactDescriptions, contactInfo: contactInfo, onChange: onChange }))),
            React.createElement(Modal_1.Modal.Footer, { panel: true, sticky: true },
                React.createElement(Gapped_1.Gapped, { gap: 10 },
                    React.createElement(Button_1.Button, { use: "primary", loading: createInProcess, disabled: idActionButtonsDisabled, onClick: function () {
                            _this.handleCreateContact();
                        } }, "Add"),
                    React.createElement(Button_1.Button, { disabled: idActionButtonsDisabled, loading: createAndTestInProcess, onClick: function () {
                            _this.handleCreateAndTestContact();
                        } }, "Add and test"))));
    };
    NewContactModal.prototype.validateForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.validationContainer.current == null) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, this.validationContainer.current.validate()];
            });
        });
    };
    return NewContactModal;
}(React.Component));
exports.default = NewContactModal;
