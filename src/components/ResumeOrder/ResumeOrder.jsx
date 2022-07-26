import React from "react";
import "./ResumeOrder.css";

const ResumeOrder = ({ text, icon }) => {
  return (
    <div className="containerOrder">
      <h3 className="resumeOrder">Resumen de Pedido</h3>
      <div className="containerOrderGrid">
        <p>Pedido</p>
        <p>Estado</p>
        <p>Cant</p>
        <p>Precio</p>
        <p>Arepa asada de queso llanero</p>
        <p>{icon && <img src={icon} className="icon" alt="icon button" />}</p>
        <p>1</p>
        <p>$5000</p>
        <p>Arepa asada de queso llanero</p>
        <p>{icon && <img src={icon} className="icon" alt="icon button" />}</p>
        <p>1</p>
        <p>$5000</p>
        <p>Arepa asada de queso llanero</p>
        <p>{icon && <img src={icon} className="icon" alt="icon button" />}</p>
        <p>1</p>
        <p>$5000</p>
        <p>Arepa asada de queso llanero</p>
        <p>{icon && <img src={icon} className="icon" alt="icon button" />}</p>
        <p>1</p>
        <p>$5000</p>
        <p>Arepa asada de queso llanero</p>
        <p>{icon && <img src={icon} className="icon" alt="icon button" />}</p>
        <p>1</p>
        <p>$5000</p>
      </div>
      <div className="totalContainer">
        <h2>Total: $5000</h2>
      </div>
    </div>
  );
};

export default ResumeOrder;
