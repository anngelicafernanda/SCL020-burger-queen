import { useContext } from "react";
import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import BackStepImage from "../../imagesApp/flecha-izquierda-3.png";
import ResumeOrder from "../../components/ResumeOrder/ResumeOrder";
import "./OrderPage.css";
import { Link } from "react-router-dom";
import Breakfast from "../../components/Breakfast/Breakfast";
import { AppContext } from "../../context/AppProvider";

const OrderPage = () => {
  const {
    menu,
    currentMenu,
    tablesInfo,
    currentTable,
    client,
    setCurrentMenu,
    setTablesInfo,
    setClient,
  } = useContext(AppContext);
  const currentTableInfo = tablesInfo?.find(
    (table) => table.id === currentTable
  );
  const clientName = tablesInfo.find(
    (table) => table.id === currentTable
  ).client;

  const addClientToTable = () => {
    tablesInfo.find((table) => table.id === currentTable).client = client;
    setClient("");
  };

  return (
    <div className="orderPage">
      <Header />
      <main className="containerMain">
        <div className="containerBackMesa">
          <Link to="/home">
            <NormalButton text="Atrás" icon={BackStepImage} />
          </Link>
          <h3 className="orderTable">Pedido: {currentTableInfo.name}</h3>
        </div>
        <div className="containerCliente">
          <h4>Cliente: </h4>
          {(clientName === "" && (
            <>
              <input
                value={client}
                onChange={(event) => setClient(event.target.value)}
                className="inputCliente"
                type="text"
              />
              <NormalButton text="Guardar" onClick={addClientToTable} />
            </>
          )) || <h4>{clientName}</h4>}
        </div>
        <div className="containerSelect">
          <NormalButton
            text="Desayuno"
            onClick={() => setCurrentMenu(menu.breakfast)}
          />
          <NormalButton
            text="Almuerzo"
            onClick={() => setCurrentMenu(menu.lunchs)}
          />
          <NormalButton
            text="Jugos / Café / Té"
            onClick={() => setCurrentMenu(menu.drinks)}
          />
        </div>
        <div className="containerFood">
          {/* COMPONENTE DE MENU */}
          <Breakfast
            order={currentTableInfo.order}
            currentMenu={currentMenu}
            setTablesInfo={setTablesInfo}
            tableId={currentTable}
          />
        </div>
      </main>
      <section className="sectionResume">
        {/* RECIBE PROP! */}
        <ResumeOrder order={currentTableInfo.order} />

        <div className="containerFooterButtom">
          <NormalButton text="Enviar a Cocina" />
          <NormalButton text="Facturar" />
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
