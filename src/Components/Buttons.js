import React from 'react'
import classes from './Style/Button.module.css'

function Buttons({value, handler}) {
  return (
    <div 
    className={value==="C" ||  value==="=" ? `${classes.buttons} ${classes.result}` 
    :`${classes.buttons}` }
    onClick={()=>handler(value)}>
    {value}
    </div>
  )
}

export default Buttons;