import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppProvider";

const Home = () => {
  const { email } = useContext(AppContext);
  return (
    <>
      <h1>INICIO DE SESIÓN EXITOSO</h1>
      <p>{email}</p>
      <Link to="/">Volver al login</Link>
      {/* <button onClick={() => signOutSession()}>Cerrar Sesión</button>
      {isUserLogIn && <Navigate to="/" replace />} */}
    </>
  );
};

export default Home;
