import React from 'react'
import classes from './Style/Button.module.css'

function Buttons({value}) {
  return (
    <div className={value==="C" ||  value==="=" ? `${classes.buttons} ${classes.result}` : `${classes.buttons}` }>{value}</div>
  )
}

export default Buttons;