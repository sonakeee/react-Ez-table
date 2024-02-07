import './EzTable.scss'
import {useState} from "react";

const EzTable = ({
                     dataHeaders, dataItems, defaultColor = 'black', userTextColor, userColor = '', expand = false, children
                 }) => {

    // table global logic
    const rgbaRegex = /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*(?:0|1)?(?:\.\d+)?)?\s*\)$/;

    const overrideUserColor = (color, type) => {
        if (rgbaRegex.test(color)) {
            return {[type]: color}
        } else {
            return {}
        }
    }

    const checkUserColor = () => {
        const overUserColor = overrideUserColor(userColor, 'background')
        const overUserTextColor = overrideUserColor(userTextColor, 'color')

        return {...overUserColor, ...overUserTextColor}
    }

    // table header logic
    const tableClassName = `table ${defaultColor}`


    // table body logic


    // table cell logic

    // user custom color darken changer
    const customColorVariation = (color, percent, value = '-') => {
        const [r, g, b, a] = color.match(/(\d+)/g);

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
    };

    // user custom color changer
    const userHoverStyle = (index) => {
        if (hoveredCells[index]) {
            return {background: customColorVariation(userColor, 10)};
        }
        return {};
    }


    // user custom color hover logic
    const [hoveredCells, setHoveredCells] = useState(new Array(dataItems.length).fill(false));
    const handleHover = (index) => {
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
    const handleLeave = (index) => {
        const newHoveredCells = [...hoveredCells];
        newHoveredCells.forEach((ele, idx) => {
            newHoveredCells[index] = false
        })
        setHoveredCells(newHoveredCells);
    };

    // expand logic
    const [expandCell, setExpandCell] = useState(new Array(dataItems.length).fill(false));

    const handleExpandCell = (index) => {
        if (expand) {
            const newExpandCell = [...expandCell];
            newExpandCell[index] = !newExpandCell[index]
            setExpandCell(newExpandCell)
        }
    }


    // table footer logic

    return (<section
            className={tableClassName}
            style={checkUserColor()}
        >
            <header className={'table__header'}
            >
                {dataHeaders.map((header, index) => (<div key={header.value}>
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
                    <div className={'table__cell__box'}>
                        {Object.entries(item).map(([key, value]) => (<div key={key} className="table__content">
                            <div>{key}: {value}</div>
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