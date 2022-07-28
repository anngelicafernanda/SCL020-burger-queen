import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import { signOutSession } from "../../firebase/auth";
import Header from "../../components/Header/Header";
import NormalButton from "../../components/NormalButton/NormalButton";
import OrderSentImage from "../../imagesApp/bolsa-de-la-compra-4.png";
import PreparingImage from "../../imagesApp/hora-de-comer-2.png";
import ReadyImage from "../../imagesApp/entrega-de-comida-3.png";
import EatingImage from "../../imagesApp/cubiertos.png";
import SignOutImage from "../../imagesApp/apagar.png";
import NextStepImage from "../../imagesApp/mover-al-siguiente.png";
import "./HomePage.css";

// available | orderSent | preparing | ready | eating
const mapStatusToImage = (status) => {
  const imageMap = {
    orderSent: OrderSentImage,
    preparing: PreparingImage,
    ready: ReadyImage,
    eating: EatingImage,
  };

  return imageMap[status];
};

const HomePage = () => {
  const {
    isUserLogIn,
    setIsUserLogIn,
    tablesInfo,
    currentTable,
    setCurrentTable,
  } = useContext(AppContext);

  return (
    <div className="homePage">
      <Header />

      <main className="homePageMain">
        <header className="homePageMainHeader">
          <button
            className="signOutButton"
            onClick={() => signOutSession(setIsUserLogIn)}
          >
            <img
              className="signOutImage"
              src={SignOutImage}
              alt="Sign out button"
            />
          </button>

          <div className="homePageTitle">
            <h4>Selección de mesa</h4>
          </div>
        </header>

        {/* MESAS GRID */}
        <section className="homePageMainTablesGrid">
          {/* TABLE CARD */}
          {tablesInfo.map((table) => (
            <div
              className="homePageMainTable"
              key={table.id}
              onClick={() => setCurrentTable(table.id)}
            >
              <header className="homePageMainTableHeader">{table.name}</header>

              {table.status !== "available" && (
                <div className="homePageMainTableImageContainer">
                  <img
                    className="tableStatusImage"
                    src={mapStatusToImage(table.status)}
                    alt="status table"
                  />
                </div>
              )}
            </div>
          ))}
          {/* --------------  */}
        </section>

        <footer className="homePageMainFooter">
          <Link to="/order">
            <NormalButton icon={NextStepImage} text="Siguiente" />
          </Link>
        </footer>
      </main>

      {!isUserLogIn && <Navigate to="/" replace />}
    </div>
  );
};

export default HomePage;
