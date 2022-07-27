import { useState } from "react";
import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";
import "./OrderPage.css";
import { Link } from "react-router-dom";
import Breakfast from "../../components/Breakfast/Breakfast";
import { breakfastMenu, lunchsMenu, drinksMenu } from "../../constants/menus";

const OrderPage = () => {
  // const { isUserLogIn, setIsUserLogIn } = useContext(AppContext);
  const [currentMenu, setCurrentMenu] = useState(breakfastMenu)

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
          <NormalButton text="Desayuno" onClick={() => setCurrentMenu(breakfastMenu)} />
          <NormalButton text="Almuerzo" onClick={() => setCurrentMenu(lunchsMenu)} />
          <NormalButton text="Jugos / Café / Té" onClick={() => setCurrentMenu(drinksMenu)} />
        </div>
        <div className="containerFood">
        {/* COMPONENTE DE MENU */}
        <Breakfast currentMenu={currentMenu} />
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
