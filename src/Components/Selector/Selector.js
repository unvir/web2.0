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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var React = __importStar(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var react_foco_1 = __importDefault(require("react-foco"));
var Selector_less_1 = __importDefault(require("./Selector.less"));
var Portal = function (_a) {
    var children = _a.children;
    var container = document.body;
    if (!container) {
        throw new Error("Container for portal is empty");
    }
    return react_dom_1.default.createPortal(children, container);
};
// ToDo изменять размеры при ресайзе
var Dropdown = function (_a) {
    var anchor = _a.anchor, children = _a.children;
    var SELECTOR_OUTLINE_SIZE = 1;
    if (!anchor) {
        throw new Error("Anchor in Dropdown component is empty");
    }
    var _b = anchor.getBoundingClientRect(), anchorTop = _b.top, anchorLeft = _b.left, anchorHeight = _b.height, width = _b.width;
    var top = anchorTop + anchorHeight + SELECTOR_OUTLINE_SIZE + window.pageYOffset;
    var left = anchorLeft + window.pageXOffset;
    return React.createElement(Portal, null,
        React.createElement("div", { className: Selector_less_1.default("dropdown"), style: { top: top, left: left, width: width } }, children));
};
// ToDo прокинуть плейсхолдер
var Selector = /** @class */ (function (_super) {
    __extends(Selector, _super);
    function Selector(props) {
        var _this = _super.call(this, props) || this;
        // eslint-disable-next-line react/sort-comp
        _this.dropdownAnchorRef = React.createRef();
        _this.searchInputRef = React.createRef();
        _this.handleInputChange = function (evt) {
            var onInputChange = _this.props.onInputChange;
            // Here Flow types means that EventTarget haven`t field "value"
            // TODO: Remove if statement on TS
            if (evt.target instanceof HTMLInputElement) {
                onInputChange(evt.target.value);
            }
        };
        _this.handleInputKeyDown = function (evt) {
            var tokens = _this.props.tokens;
            if (evt.key === "Enter") {
                var onEnterKeyDown = _this.props.onEnterKeyDown;
                onEnterKeyDown();
                _this.closeDropdown();
            }
            // Here Flow types means that EventTarget haven`t field "value"
            // TODO: Remove if statement on TS
            if (!(evt.target instanceof HTMLInputElement)) {
                return;
            }
            if (evt.key === "Backspace" && evt.target.selectionStart === 0 && tokens.length !== 0) {
                var onBackspaceKeyDown = _this.props.onBackspaceKeyDown;
                onBackspaceKeyDown();
            }
        };
        _this.openDropdown = function () {
            var focused = _this.state.focused;
            if (!focused) {
                _this.setState({ focused: true });
            }
        };
        _this.closeDropdown = function () {
            var focused = _this.state.focused;
            if (focused) {
                if (_this.searchInputRef.current) {
                    _this.searchInputRef.current.blur();
                }
                _this.setState({ focused: false });
            }
        };
        _this.state = {
            focused: false
        };
        return _this;
    }
    Selector.prototype.render = function () {
        var focused = this.state.focused;
        var _a = this.props, search = _a.search, tokens = _a.tokens, renderToken = _a.renderToken, children = _a.children;
        return React.createElement(React.Fragment, null,
            React.createElement(react_foco_1.default, { className: Selector_less_1.default("wrapper"), onClickOutside: this.closeDropdown },
                React.createElement("label", { className: Selector_less_1.default({ selector: true, focused: focused }), htmlFor: "selector", ref: this.dropdownAnchorRef },
                    tokens.map(function (token) { return React.createElement("span", { key: token, className: Selector_less_1.default("token-container") }, renderToken(token)); }),
                    React.createElement("input", { className: Selector_less_1.default("input"), id: "selector", type: "text", value: search, autoComplete: "off", ref: this.searchInputRef, onChange: this.handleInputChange, onKeyDown: this.handleInputKeyDown, onFocus: this.openDropdown })),
                focused && React.createElement(Dropdown, { anchor: this.dropdownAnchorRef.current }, children)));
    };
    return Selector;
}(React.Component));
exports.default = Selector;
