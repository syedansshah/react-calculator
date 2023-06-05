import React from 'react'
import classes from "./Style/Home.module.css"
import Buttons from './Buttons'

function Home() {
    const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="]
    return (
        <div className={classes.home}>
            <div className={classes.inner}>
                <div className={classes.display}>
                    <div className={classes.result}>1</div>
                </div>
                <div className={classes.lower}>
                    {buttons.map((element, index) => { return <Buttons key={index} value={element} /> })}
                </div>
            </div>
        </div>
    )
}

export default Home