import React from "react";

import './button-active.css'

const ButtonActive = ({ buttonClass, text }) => (
    <div style={{ textAlign: 'right' }}>
        <button className={`${buttonClass} button_active`}>{text}</button>
    </div>
);

export default ButtonActive