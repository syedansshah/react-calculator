import React from 'react'
import classes from './Style/Button.module.css'

function Buttons({value}) {
  return (
    <div className={classes.buttons}>{value}</div>
  )
}

export default Buttons;