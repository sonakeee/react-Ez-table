"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
if (process.env.REACT_APP_CSS_TYPE === 'css') {
    require('./EzTable.css');
}
else {
    require('./EzTable.scss');
}
const EzTable = ({ dataHeaders, dataItems, defaultColor = 'black', userTextColor = '', userColor = '', expand = false, children }) => {
    const rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*(?:0|1)?(?:\.\d+)?)?\s*\)$/;
    const overrideUserColor = (color, type) => {
        if (rgbaRegex.test(color)) {
            return { [type]: color };
        }
        else {
            return {};
        }
    };
    const checkUserColor = () => {
        const overUserColor = overrideUserColor(userColor, 'background');
        const overUserTextColor = overrideUserColor(userTextColor, 'color');
        return Object.assign(Object.assign({}, overUserColor), overUserTextColor);
    };
    const tableClassName = `table ${defaultColor}`;
    const changeGridCss = () => {
        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${dataHeaders.length}, 1fr)`,
            gridGap: '10px',
        };
    };
    const customColorVariation = (color, percent, value = '-') => {
        if (color !== '') {
            const matchResult = color.match(/(\d+)/g);
            const [r, g, b, a] = matchResult;
            let newR, newG, newB;
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
            return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
        }
    };
    const userHoverStyle = (index) => {
        if (hoveredCells[index]) {
            return { background: customColorVariation(userColor, 10) };
        }
        return {};
    };
    const [hoveredCells, setHoveredCells] = (0, react_1.useState)(new Array(dataItems.length).fill(false));
    const handleHover = (index) => {
        const newHoveredCells = [...hoveredCells];
        newHoveredCells.forEach((ele, idx) => {
            newHoveredCells[idx] = false;
            if (index === idx) {
                newHoveredCells[index] = true;
            }
        });
        setHoveredCells(newHoveredCells);
    };
    const handleLeave = (index) => {
        const newHoveredCells = [...hoveredCells];
        newHoveredCells.forEach((ele, idx) => {
            newHoveredCells[index] = false;
        });
        setHoveredCells(newHoveredCells);
    };
    const [expandCell, setExpandCell] = (0, react_1.useState)(new Array(dataItems.length).fill(false));
    const [expandViewAllValue, setExpandViewAllValue] = (0, react_1.useState)(new Array(dataItems.length).fill({ whiteSpace: 'nowrap' }));
    const handleExpandCell = (index) => {
        if (expand) {
            const newExpandCell = [...expandCell];
            newExpandCell[index] = !newExpandCell[index];
            setExpandCell(newExpandCell);
            const newViewValue = [...expandViewAllValue];
            if (expandViewAllValue[index].whiteSpace === 'wrap') {
                newViewValue[index] = Object.assign(Object.assign({}, newViewValue[index]), { whiteSpace: 'nowrap' });
            }
            else {
                newViewValue[index] = Object.assign(Object.assign({}, newViewValue[index]), { whiteSpace: 'wrap' });
            }
            setExpandViewAllValue(newViewValue);
        }
    };
    return (react_1.default.createElement("section", { className: tableClassName, style: checkUserColor() },
        react_1.default.createElement("header", { className: 'table__header', style: changeGridCss() }, dataHeaders.map((header, index) => (react_1.default.createElement("div", { key: header.value }, header.render)))),
        react_1.default.createElement("main", { className: 'table__body' }, dataItems.map((item, index) => (react_1.default.createElement("div", { key: index, className: "table__cell", onMouseEnter: () => handleHover(index), onMouseLeave: () => handleLeave(index), style: userHoverStyle(index), onClick: () => handleExpandCell(index) },
            react_1.default.createElement("div", { className: 'table__cell__box', style: changeGridCss() }, Object.entries(item).map(([key, value]) => (react_1.default.createElement("div", { key: key, className: "table__content", style: expandViewAllValue[index] },
                react_1.default.createElement(react_1.default.Fragment, null, value))))),
            expandCell[index] ? react_1.default.createElement("div", { className: 'table__expand__cell' }, children) : null)))),
        react_1.default.createElement("footer", { className: 'table__footer' }, "foooterererer")));
};
exports.default = EzTable;
