import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AppContext } from "../../context/AppProvider";
import { login } from "../../firebase/auth";
import "./LoginPage.css";

const LoginPage = () => {
  const {
    email,
    password,
    // userType,
    setEmail,
    setPassword,
    isUserLoggedIn,
    setIsUserLoggedIn,
    // setUserType,
  } = useContext(AppContext);

  return (
    <div className="container">
      <Header />
      <main>
        <h2 className="welcome">Bienvenidos</h2>
        <section className="sectionGeneral">
          <div className="form">
            <input
              className="input"
              placeholder="Email"
              value={email}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              className="input"
              placeholder="Password"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button
              className="btnAcceder"
              onClick={() => login(email, password, setIsUserLoggedIn)}
            >
              Ingresar
            </button>
            {isUserLoggedIn && <Navigate to="/home" replace />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
