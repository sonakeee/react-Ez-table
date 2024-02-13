import React, {ChangeEvent, useState} from "react";
import './TestButton.scss'

const TestButton = () => {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    return (
        <div>
            <input type="text"
                   onChange={handleInput}
            />
            <div className={'backBlack'}>{inputValue}</div>
        </div>
    )
}

export default TestButton