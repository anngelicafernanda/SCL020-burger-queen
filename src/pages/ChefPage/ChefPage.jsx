import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import NormalButton from "../../components/NormalButton/NormalButton";
import SignOutImage from "../../imagesApp/apagar.png";
import "./ChefPage.css";
import { Link } from "react-router-dom";

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
              <NormalButton text="En Preparación" />
            </div>
          </div>

          <div className="containerOrderChefTwo">
            <h3 className="resumeOrderChef">Pedido Mesa 2</h3>
            <div className="containerOrderGridChef">
              <p className="resumeTitleChef">Pedido</p>
              <p className="resumeTitleChef">Cant</p>
              <p className="resumeTitleChef">Estado</p>
              <p className="resumeDetailsChef">Arepa Asada de Queso llanero</p>
              <p className="resumeDetailsChef">1</p>
              <NormalButton text="Para Servir" />
            </div>
          </div>

          <div className="containerOrderChefThree">
            <h3 className="resumeOrderChef">Pedido Mesa 3</h3>
            <div className="containerOrderGridChef">
              <p className="resumeTitleChef">Pedido</p>
              <p className="resumeTitleChef">Cant</p>
              <p className="resumeTitleChef">Estado</p>
              <p className="resumeDetailsChef">Arepa Asada de Queso llanero</p>
              <p className="resumeDetailsChef">1</p>
              <p className="resumeDetailsChef">Para Servir</p>
            </div>
          </div>
        </section>
        <Link to="/">
          <NormalButton text="Atrás" />
        </Link>
      </main>
    </div>
  );
};

export default ChefPage;
