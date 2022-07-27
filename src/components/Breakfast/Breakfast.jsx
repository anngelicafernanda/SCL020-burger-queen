import React from "react";
import addSign from "../../imagesApp/signomas.png";
import lessSign from "../../imagesApp/menos.png";
import "./Breakfast.css";

const Breakfast = ({ currentMenu }) => {
  return (
    <>
      {currentMenu.map((currentValue) => (
        <div key={currentValue.name} className="containerOrderBreakfast">
          <p>{currentValue.name}</p>
          <p>{currentValue.price}</p>
          <div className="containerSigns">
            <img className="lessSign" src={lessSign} alt="lessSign" />
            <p>1</p>
            <img className="addSign" src={addSign} alt="addSign" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Breakfast;
