import React, { useState,Fragment } from 'react';
import Navbar from './Navbar';
import Wrapper from './Wrapper.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Service from './Pages/Service.jsx';
import Contact from './Pages/Contact.jsx';
import {data} from './Navdata.jsx';
import style from "./navbar.module.css";
import Default from './Pages/Default.jsx';
import Footer from './Pages/Footer.jsx';
import Button from './Button.jsx';

const App = () => {
    let[page,setPage] = useState("");

    let handlePages = ele =>{
      setPage(ele.stateVal);
    };
  return (
    <div>
        <header>
        <nav className={style.parent}>
        <ul className={style.navbar}>
            {data?.map(ele =>{
                return(
                  <Fragment key={ele.text}>
                  <li onClick={()=>{handlePages(ele)}} 
                  key={ele.text}>{ele.text}</li>
                  <span></span>
                  </Fragment>
                )
            })}
        </ul>
        </nav>
        </header>
        <section>
            {page == "home"?<Home/>:null}
            {page == "about"?<About/>:null}
            {page == "services"?<Service/>:null}
            {page == "contact"?<Contact/>:null}
            {page==""?<Default/>:null}
          </section>
          {/* <section>
          {page==""?<Default/>:null}
        </section> */}
        <section>        
        {page!=""?<section style={{display:"flex"}}>
          <Button btnText="Login" bgcolor="orange"/>
          <Button btnText="Sign-up" bgcolor="orangered"/>
          <Button btnText="Add to Cart" bgcolor="yellow"/>
        </section>
        :null}
        </section>
        <section>
          {page!=""?<Footer/>:null}
        </section>
    </div>
  )
}

export default App