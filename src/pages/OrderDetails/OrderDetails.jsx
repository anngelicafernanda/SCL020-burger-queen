import React from "react";
import "./OrderDetails.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";

const OrderDetails = ({ text, icon }) => {
  return (
    <div className="orderPage">
      <Header />
      <main className="containerMain">
        <div className="containerBackMesa">
          <Link to="/order">
            <NormalButton text="Atrás" icon={BackStepImage} />
          </Link>
          <h3 className="orderTable">Pedido Mesa 2</h3>
        </div>
        <div className="containerCliente">
          <h4>Cliente:</h4>
          <p className="nameCliente" type="text">
            Carolina Colmenares
          </p>
        </div>
      </main>
      <section className="sectionResume">
        <ResumeOrder className="resumeOrderComponent" />
        <div className="containerFooterButtom">
          <NormalButton text="Pagado" />
          <NormalButton text="Liberar Mesa" />
        </div>
      </section>
    </div>
  );
};

export default OrderDetails;
