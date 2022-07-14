import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <h2>¡Bienvenid@s al Home!</h2>
        <p>Este es nuestro home con React.</p>
      </main>
      <nav>
        <Link to="/about">Nuestro Proyecto</Link>
      </nav>
    </>
  );
}

export default Home;