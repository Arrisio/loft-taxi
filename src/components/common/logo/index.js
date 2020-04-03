import React from "react";
import marker from "../../../assets/img/marker.svg";
import './logo.css'

const Logo = () => (
    <div className='logo'>
        <img className="logo__img" alt="balloon" src={marker} />
        <span className="logo__text_left">Loft</span>
        <span className={"logo__text_right"}>Taxi</span>
    </div>
);

export default Logo