import './EzTable.scss'
import React, {useState} from "react";
import {EzTableProps} from "../../types/types";

const EzTable = ({
                     dataHeaders,
                     dataItems,
                     defaultColor = 'black',
                     userTextColor = '',
                     userColor = '',
                     expand = false,
                     children
                 }: EzTableProps) => {

    // table global logic
    const rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*(?:0|1)?(?:\.\d+)?)?\s*\)$/;

    const overrideUserColor = (color: string, type: string) => {
        if (rgbaRegex.test(color)) {
            return {[type]: color}
        } else {
            return {}
        }
    }

    const checkUserColor = () => {
        // user select color


        const overUserColor = overrideUserColor(userColor, 'background')
        const overUserTextColor = overrideUserColor(userTextColor, 'color')
        return {...overUserColor, ...overUserTextColor}


    }

    // table header logic
    const tableClassName = `table ${defaultColor}`

    const changeGridCss = () => {
        return {
            display: 'grid',
            gridTemplateColumns: `repeat(${dataHeaders.length}, 1fr)`, // 수정된 부분
            gridGap: '10px',
        };
    }


    // table body logic


    // table cell logic

    // user custom color darken changer
    const customColorVariation = (color: string, percent: number, value = '-') => {

        if (color !== '') {
            const matchResult = color.match(/(\d+)/g)!;
            const [r, g, b, a] = matchResult;

            let newR, newG, newB

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
                    break
            }

            return `rgba(${newR}, ${newG}, ${newB}, ${a})`;
        }

    };

    // user custom color changer
    const userHoverStyle = (index: number) => {
        if (hoveredCells[index]) {
            return {background: customColorVariation(userColor, 10)};
        }
        return {};
    }


    // user custom color hover logic
    const [hoveredCells, setHoveredCells] = useState(new Array(dataItems.length).fill(false));
    const handleHover = (index: number) => {
        const newHoveredCells = [...hoveredCells];
        newHoveredCells.forEach((ele, idx) => {
            newHoveredCells[idx] = false
            if (index === idx) {
                newHoveredCells[index] = true
            }
        })
        setHoveredCells(newHoveredCells);
    };

    // user custom color hover leave
    const handleLeave = (index: number) => {
        const newHoveredCells = [...hoveredCells];
        newHoveredCells.forEach((ele, idx) => {
            newHoveredCells[index] = false
        })
        setHoveredCells(newHoveredCells);
    };

    // expand logic
    const [expandCell, setExpandCell] = useState(new Array(dataItems.length).fill(false));

    const [expandViewAllValue, setExpandViewAllValue] = useState(new Array(dataItems.length).fill({whiteSpace: 'nowrap'}))
    const handleExpandCell = (index: number) => {
        if (expand) {
            // expand col
            const newExpandCell = [...expandCell];
            newExpandCell[index] = !newExpandCell[index]
            setExpandCell(newExpandCell)

            // hidden value open , change css nowrap
            const newViewValue = [...expandViewAllValue];
            if (expandViewAllValue[index].whiteSpace === 'wrap') {
                newViewValue[index] = { ...newViewValue[index], whiteSpace: 'nowrap' };
            } else {
                newViewValue[index] = { ...newViewValue[index], whiteSpace: 'wrap' };
            }
            setExpandViewAllValue(newViewValue);
        }
    }


    // table footer logic

    return (
        <section
            className={tableClassName}
            style={checkUserColor()}
        >
            <header className={'table__header'}
                    style={changeGridCss()}
            >
                {dataHeaders.map((header, index: number) => (<div key={header.value}>
                    {header.render}
                </div>))}
            </header>
            <main className={'table__body'}>
                {dataItems.map((item, index) => (<div
                    key={index}
                    className="table__cell"
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleLeave(index)}
                    style={userHoverStyle(index)}
                    onClick={() => handleExpandCell(index)}
                >
                    <div className={'table__cell__box'} style={changeGridCss()}>
                        {Object.entries(item).map(([key, value]) => (
                            <div key={key} className="table__content"
                                style={expandViewAllValue[index]}
                            >
                                <>{value}</>
                            </div>))}
                    </div>

                    {expandCell[index] ? <div className={'table__expand__cell'}>{children}</div> : null}
                </div>))}


            </main>
            <footer className={'table__footer'}>
                foooterererer
            </footer>
        </section>

    )
}

export default EzTable;