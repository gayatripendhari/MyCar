import React from 'react'
import style from "./navbar.module.css"
const Button = ({btnText,bgcolor}) => {
  return (
    <div>
     <button className={style.btn} style={{backgroundColor: bgcolor}}>{btnText}</button>
    </div>
  )
}

export default Button