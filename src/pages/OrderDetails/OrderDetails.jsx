import React from "react";
import "./OrderDetails.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";

const OrderDetails = ({ text, icon }) => {
  return (
    <div className="orderDetails">
      <Header />
      <main className="containerMainDetails">
        <div className="containerBackMesaDetails">
          <Link to="/order">
            <NormalButton text="Atrás" icon={BackStepImage} />
          </Link>
          <h3 className="orderTableDetails">Pedido Mesa 2</h3>
        </div>
        <div className="containerClienteDetails">
          <h4>Cliente:</h4>
          <p className="nameClienteDetails" type="text">
            Carolina Colmenares
          </p>
        </div>
        <ResumeOrder mainClass={"resumeOrderDetails"} />
      </main>
      <div className="containerButtomDetails">
        <NormalButton text="Pagado" />
        <NormalButton text="Liberar Mesa" />
      </div>
    </div>
  );
};

export default OrderDetails;
