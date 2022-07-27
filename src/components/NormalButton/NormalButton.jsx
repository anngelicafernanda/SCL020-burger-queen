import React from "react";
import './NormalButton.css'

const NormalButton = ({ text, icon, onClick }) => {
    return(
        <button className="normalButton" onClick={onClick}>
            {text}
            { icon && <img src={icon} className="icon" alt="icon button" />}
        </button>
    )
}

export default NormalButton