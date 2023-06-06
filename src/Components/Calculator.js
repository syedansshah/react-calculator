import React, { useState } from 'react'
import classes from "./Style/Calculator.module.css"
import Buttons from './Buttons'

function Calculator() {
    const [value, setValue] = useState("")
    const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="]

    const findResults = () => {
        let result = Function("return "+value)()
        setValue(result.toString())
    }

    const handler = (arg) => {
        if (value === "Infinity" || value === "NaN") {
            setValue("") 
            return;
        }
        if (arg === "C") setValue("")
        else if (arg === "=") findResults()
        else if (arg === "Del") {
            let num = value.length;
            if (num > 0) setValue(value.slice(0, num - 1))
        }
        else setValue(value.concat(arg))
    }

    return (
        <div className={classes.home}>
            <div className={classes.inner}>
                <div className={classes.display}>
                    <div className={classes.result}>{value}</div>
                </div>
                <div className={classes.lower}>
                    {buttons.map((element, index) => {
                        return <>
                            <Buttons
                                key={index}
                                value={element}
                                handler={handler} />
                        </>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Calculator;