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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./EzTable.css");
var react_1 = __importStar(require("react"));
var EzTable = function (_a) {
    var dataHeaders = _a.dataHeaders, dataItems = _a.dataItems, _b = _a.defaultColor, defaultColor = _b === void 0 ? 'black' : _b, _c = _a.userTextColor, userTextColor = _c === void 0 ? '' : _c, _d = _a.userColor, userColor = _d === void 0 ? '' : _d, _e = _a.expand, expand = _e === void 0 ? false : _e, children = _a.children;
    var rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*(?:0|1)?(?:\.\d+)?)?\s*\)$/;
    var overrideUserColor = function (color, type) {
        var _a;
        if (rgbaRegex.test(color)) {
            return _a = {}, _a[type] = color, _a;
        }
        else {
            return {};
        }
    };
    var checkUserColor = function () {
        var overUserColor = overrideUserColor(userColor, 'background');
        var overUserTextColor = overrideUserColor(userTextColor, 'color');
        return __assign(__assign({}, overUserColor), overUserTextColor);
    };
    var tableClassName = "table ".concat(defaultColor);
    var customColorVariation = function (color, percent, value) {
        if (value === void 0) { value = '-'; }
        var matchResult = color.match(/(\d+)/g);
        var r = matchResult[0], g = matchResult[1], b = matchResult[2], a = matchResult[3];
        var newR, newG, newB;
        switch (value) {
            case '+':
                newR = Math.max(0, parseInt(r, 10) + percent);
                newG = Math.max(0, parseInt(g, 10) + percent);
                newB = Math.max(0, parseInt(b, 10) + percent);
                break;
            default:
                newR = Math.max(0, parseInt(r, 10) - percent);
                newG = Math.max(0, parseInt(g, 10) - percent);
                newB = Math.max(0, parseInt(b, 10) - percent);
                break;
        }
        return "rgba(".concat(newR, ", ").concat(newG, ", ").concat(newB, ", ").concat(a, ")");
    };
    var userHoverStyle = function (index) {
        if (hoveredCells[index]) {
            return { background: customColorVariation(userColor, 10) };
        }
        return {};
    };
    var _f = (0, react_1.useState)(new Array(dataItems.length).fill(false)), hoveredCells = _f[0], setHoveredCells = _f[1];
    var handleHover = function (index) {
        var newHoveredCells = __spreadArray([], hoveredCells, true);
        newHoveredCells.forEach(function (ele, idx) {
            newHoveredCells[idx] = false;
            if (index === idx) {
                newHoveredCells[index] = true;
            }
        });
        setHoveredCells(newHoveredCells);
    };
    var handleLeave = function (index) {
        var newHoveredCells = __spreadArray([], hoveredCells, true);
        newHoveredCells.forEach(function (ele, idx) {
            newHoveredCells[index] = false;
        });
        setHoveredCells(newHoveredCells);
    };
    var _g = (0, react_1.useState)(new Array(dataItems.length).fill(false)), expandCell = _g[0], setExpandCell = _g[1];
    var handleExpandCell = function (index) {
        if (expand) {
            var newExpandCell = __spreadArray([], expandCell, true);
            newExpandCell[index] = !newExpandCell[index];
            setExpandCell(newExpandCell);
        }
    };
    return (react_1.default.createElement("section", { className: tableClassName, style: checkUserColor() },
        react_1.default.createElement("header", { className: 'table__header' }, dataHeaders.map(function (header, index) { return (react_1.default.createElement("div", { key: header.value }, header.render)); })),
        react_1.default.createElement("main", { className: 'table__body' }, dataItems.map(function (item, index) { return (react_1.default.createElement("div", { key: index, className: "table__cell", onMouseEnter: function () { return handleHover(index); }, onMouseLeave: function () { return handleLeave(index); }, style: userHoverStyle(index), onClick: function () { return handleExpandCell(index); } },
            react_1.default.createElement("div", { className: 'table__cell__box' }, Object.entries(item).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (react_1.default.createElement("div", { key: key, className: "table__content" },
                    react_1.default.createElement(react_1.default.Fragment, null,
                        key,
                        ": ",
                        value)));
            })),
            expandCell[index] ? react_1.default.createElement("div", { className: 'table__expand__cell' }, children) : null)); })),
        react_1.default.createElement("footer", { className: 'table__footer' }, "foooterererer")));
};
exports.default = EzTable;
