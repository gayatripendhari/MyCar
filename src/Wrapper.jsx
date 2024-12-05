import React from 'react';
import style from "./navbar.module.css";

const Wrapper = ({BgImg,headBanner,description}) => {
    return (
        <div>
            <section>
                <img src={BgImg} alt="Image not found" height={600} className={style.img} />
                <h1 className={style.head}>{headBanner}</h1>
                <p style={{ padding: "10px" }} className={style.para}>{description}</p>
            </section>
        </div>
    )
}

export default Wrapper