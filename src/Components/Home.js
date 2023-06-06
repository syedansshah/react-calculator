import React, { useState } from 'react'
import classes from "./Style/Home.module.css"
import Calculator from './Calculator'

function Home() {
    

    return (
        <div className={classes.home}>
            <Calculator />
        </div>
    )
}

export default Home