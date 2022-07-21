import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AppContext } from "../../context/AppProvider";
import { login } from "../../firebase/auth";

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
        <h2>Bienvenidos</h2>
        <section>
          <div className="form">
            <h3>Selecciona tu usuario</h3>
            <select
              defaultValue={0}
              name="usuario"
              id=""
              onChange={(event) => setUserType(event.target.value)}
            >
              <option value="0" hidden>
                Usuario
              </option>
              <option value="Mesero">Mesero</option>
            </select>
            <input
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button onClick={() => login(email, password, setIsUserLogIn)}>
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
