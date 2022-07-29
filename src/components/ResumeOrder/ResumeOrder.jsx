import { useContext } from "react";
import "./ResumeOrder.css";
import { AppContext } from "../../context/AppProvider";
import { Link } from "react-router-dom";

const ResumeOrder = ({ mainClass }) => {
  const { tablesInfo, currentTable } = useContext(AppContext);
  const order = tablesInfo.find(
    (currentTableState) => currentTableState.id === currentTable
  ).order;
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
        {order.map((currentFood) => (
          <>
            <p className="resumeTitle">{currentFood.name}</p>
            <p className="resumeTitle">estado</p>
            <p className="resumeTitle">{currentFood.amount}</p>
            <p className="resumeTitle">{`$ ${currentFood.price}`}</p>
          </>
        ))}
      </div>
      <div className="totalContainer">
        <h2>
          Total: ${" "}
          {order.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.price * currentValue.amount,
            0
          )}
        </h2>
      </div>
    </div>
  );
};

export default ResumeOrder;
