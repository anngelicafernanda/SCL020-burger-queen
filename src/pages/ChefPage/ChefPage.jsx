import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import NormalButton from "../../components/NormalButton/NormalButton";
import SignOutImage from "../../imagesApp/apagar.png";
import "./ChefPage.css";

const ChefPage = () => {
  return (
    <div className="ChefPage">
      <Header />
      <main className="chefPageMain">
        <header className="chefPageMainHeader">
          <button
            className="signOutButton"
            onClick={() => <Navigate to="/" replace />}
          >
            <img
              className="signOutImage"
              src={SignOutImage}
              alt="Sign out button"
            />
          </button>

          <div className="chefPageTitle">
            <h4>Pedidos Cocina</h4>
          </div>
        </header>
        <section>
          <div className="containerOrderChef">
            <h3 className="resumeOrderChef">Pedido Mesa 1</h3>
            <div className="containerOrderGridChef">
              <p className="resumeTitleChef">Pedido</p>
              <p className="resumeTitleChef">Cant</p>
              <p className="resumeTitleChef">Estado</p>
              <p className="resumeDetailsChef">Arepa Asada de Queso llanero</p>
              <p className="resumeDetailsChef">1</p>
              <NormalButton text="Pedido Recibido" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ChefPage;
