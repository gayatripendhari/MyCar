import React from 'react';
import { data } from './Navdata';
import style from "./navbar.module.css";
const Navbar = () => {
  return (
    <div>
        <nav className={style.parent}>
        <ul className={style.navbar}>
            {data?.map(ele =>{
                return<li className={style.li}>{ele.text}</li>
            })}
        </ul>
        </nav>
    </div>
  )
}

export default Navbar