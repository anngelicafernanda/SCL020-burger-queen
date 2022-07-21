import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AppContext } from "../../context/AppProvider";
import { login } from "../../firebase/auth";
import './LoginPage.css'

const LoginPage = () => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    setUserType,
    isUserLogIn,
    setIsUserLogIn,
  } = useContext(AppContext);
  return (
    <div className="container">
      <Header />
      <main>
        <h2 className="welcome">Bienvenidos</h2>
        <section className="sectionGeneral">
          <div className="form">
            <h3 className="selectUsuario">Selecciona tu usuario</h3>
            <select
            className="inputUsuario"
              defaultValue={0}
              name="usuario"
              id=""
              onChange={(event) => setUserType(event.target.value)}
            >
              <option color="#996E7D" value="0" hidden>
                Usuario
              </option>
              <option className="optionMesero" value="Mesero">Mesero</option>
            </select>
            <input
              className="inputName"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
            className="inputPassword"
             placeholder="Password"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button className="btnAcceder" onClick={() => login(email, password, setIsUserLogIn)}>
              Ingresar
            </button>
            {isUserLogIn && <Navigate to="/home" replace />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
