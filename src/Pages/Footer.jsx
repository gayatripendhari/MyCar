import React from 'react';
import style from '../navbar.module.css';

const Footer = () => {
  return (
    <div>
          <div className={style.footer}>
        <button className={style.btn1}>Contact</button>
        <button className={style.line}></button>
        <button className={style.btn1}>Social Media</button>
        <button className={style.line}></button>
        <button className={style.btn1}>Terms & Conditions</button>
        <button className={style.line}></button>
        <button className={style.btn1}>Policies</button>
    </div>
    </div>

  )
}

export default Footer;