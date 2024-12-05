import React from 'react'
import car from '../assets/car6.jpg'
import style from '../navbar.module.css';
const Default = () => {
  return (
    <div className={style.default}>
        <img className={style.i1} src = {car} alt="Image Not Found"/>
        <h1 className={style.msg}>Oopssss, Something Went Wrong! Please try again after sometime.</h1>
    </div>
  )
}

export default Default