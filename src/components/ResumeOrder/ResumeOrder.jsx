import "./ResumeOrder.css";
import { Link } from "react-router-dom";

const ResumeOrder = ({ order, mainClass }) => {
  return (
    <div className={`containerOrder ${mainClass ? mainClass : ""}`}>
      <Link to="/orderdetails">
        <h3 className="resumeOrder">Resumen de Pedido</h3>
      </Link>
      <div className="containerOrderGrid">
        <p className="resumeTitle">Pedido</p>
        <p className="resumeTitle">Estado</p>
        <p className="resumeTitle">Cant</p>
        <p className="resumeTitle">Precio</p>
      </div>
      <div className="totalContainer">
        <h2>Total: $5000</h2>
      </div>
    </div>
  );
};

export default ResumeOrder;
