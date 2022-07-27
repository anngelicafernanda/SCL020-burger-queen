import React from "react";
import "./ResumeOrder.css";
import { Link } from "react-router-dom";

const ResumeOrder = (props) => {
  return (
    <div className={`containerOrder ${props.mainClass ? props.mainClass : ""}`}>
      <Link to="/orderdetails">
        <h3 className="resumeOrder">Resumen de Pedido</h3>
      </Link>
      <div className="containerOrderGrid">
        <p className="resumeTitle">Pedido</p>
        <p className="resumeTitle">Estado</p>
        <p className="resumeTitle">Cant</p>
        <p className="resumeTitle">Precio</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
        <p className="itemDescription">Arepa asada de queso llanero</p>
        <p>
          {props.icon && (
            <img src={props.icon} className="icon" alt="icon button" />
          )}
        </p>
        <p>1</p>
        <p className="itemPrice">$5000</p>
      </div>
      <div className="totalContainer">
        <h2>Total: $5000</h2>
      </div>
    </div>
  );
};

export default ResumeOrder;
