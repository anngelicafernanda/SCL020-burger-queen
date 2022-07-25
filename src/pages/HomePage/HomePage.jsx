import { useState } from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";
import { signOutSession } from "../../firebase/auth";
import Header from '../../components/Header/Header'
import NormalButton from '../../components/NormalButton/NormalButton'
import OrderSentImage from '../../imagesApp/bolsa-de-la-compra-4.png'
import PreparingImage from '../../imagesApp/hora-de-comer-2.png'
import ReadyImage from '../../imagesApp/entrega-de-comida-3.png'
import EatingImage from '../../imagesApp/cubiertos.png'
import SignOutImage from '../../imagesApp/apagar.png'
import NextStepImage from '../../imagesApp/mover-al-siguiente.png'
import './HomePage.css'


// available | orderSent | preparing | ready | eating
const mapStatusToImage = (status) => {
  const imageMap = {
    orderSent: OrderSentImage,
    preparing: PreparingImage,
    ready: ReadyImage,
    eating: EatingImage
  }

  return imageMap[status]
}

const MESAS_INFO = [
  {
    id: '1',
    name: 'Mesa 1',
    status: 'orderSent'
  },
  {
    id: '2',
    name: 'Mesa 2',
    status: 'preparing'
  },
  {
    id: '3',
    name: 'Mesa 3',
    status: 'ready'
  },
  {
    id: '4',
    name: 'Mesa 4',
    status: 'eating'
  },
  {
    id: '5',
    name: 'Mesa 5',
    status: 'available'
  },
  {
    id: '6',
    name: 'Mesa 6',
    status: 'available'
  },
]


const HomePage = () => {
  const { isUserLogIn, setIsUserLogIn } = useContext(AppContext);

  return (
    <div className="homePage">
      <Header />

      <main className="homePageMain">
        <header className="homePageMainHeader">
          <button className="signOutButton" onClick={() => signOutSession(setIsUserLogIn)}>
            <img className="signOutImage" src={SignOutImage} alt="Sign out button" />
          </button>

          <div className="homePageTitle">
            <h4>Selección de mesa</h4>
          </div>
        </header>

        {/* MESAS GRID */}
        <section className="homePageMainTablesGrid">
          {MESAS_INFO.map((mesa) => (
            <div className='homePageMainTable' key={mesa.id}>
              <header className="homePageMainTableHeader">
                {mesa.name}
              </header>

              {
                mesa.status !== 'available' && (
                  <div className="homePageMainTableImageContainer">
                    <img className="tableStatusImage" src={mapStatusToImage(mesa.status)} alt='status table' />
                  </div>
                )
              }

            </div>
          ))}
        </section>

        <footer className="homePageMainFooter">
            <NormalButton
              icon={NextStepImage}
              text='Siguiente'
            />
        </footer>
      </main>

      
      {!isUserLogIn && <Navigate to="/" replace />}
    </div>
  );
};

export default HomePage;
