import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";
import "./OrderPage.css";
import { Link } from "react-router-dom";

const OrderPage = () => {
  // const { isUserLogIn, setIsUserLogIn } = useContext(AppContext);

  return (
    <div className="orderPage">
      <Header />
      <main className="containerMain">
        <div className="containerBackMesa">
          <Link to="/home">
            <NormalButton text="Atrás" icon={BackStepImage} />
          </Link>
          <h3 className="orderTable">Pedido Mesa 2</h3>
        </div>
        <div className="containerCliente">
          <h4>Cliente:</h4>
          <input className="inputCliente" type="text" />
        </div>
        <div className="containerSelect">
          <NormalButton text="Desayuno" />
          <NormalButton text="Almuerzo" />
          <NormalButton text="Jugos / Café / Té" />
        </div>
        <div className="containerFood">
          <div className="containerOrderGrid">
            <p>Pedido</p>
            <p>Estado</p>
            <p>Cant</p>
            <p>Precio</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
            <p>Arepa asada de queso llanero</p>
            <p>1</p>
            <p>$5000</p>
          </div>
        </div>
      </main>
      <section className="sectionResume">
        <ResumeOrder />
        <div className="containerFooterButtom">
          <NormalButton text="Enviar a Cocina" />
          <NormalButton text="Facturar" />
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
