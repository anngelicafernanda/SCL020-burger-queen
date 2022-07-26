import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";
import "./OrderPage.css";

const OrderPage = () => {
  // const { isUserLogIn, setIsUserLogIn } = useContext(AppContext);

  return (
    <div className="orderPage">
      <Header />
      <main className="containerMain">
        <div className="containerBackMesa">
          <NormalButton text="Atrás" icon={BackStepImage} />
          <h3>Pedido Mesa 2</h3>
        </div>
        <div className="containerCliente">
          <h4>Cliente:</h4>
          <input type="text" />
        </div>
        <div className="containerSelect">
          <NormalButton text="Desayuno" />
          <NormalButton text="Almuerzo" />
          <NormalButton text="Jugos / Café / Té" />
        </div>
        <div className="containerFood">Espacio</div>
        <ResumeOrder />
      </main>
    </div>
  );
};

export default OrderPage;
