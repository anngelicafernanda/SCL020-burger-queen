import React from "react";
import './NormalButton.css'

const NormalButton = ({ text, icon }) => {
    return(
        <button className="normalButton">
            {text}
            { icon && <img src={icon} className="icon" alt="icon button" />}
        </button>
    )
}

export default NormalButton