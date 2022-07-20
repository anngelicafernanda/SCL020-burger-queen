import { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [cambur, setCambur] = useState(true);
  console.log('🚀 ~ cambur', cambur)
  return (
    <>
      <main>
        <h2>¡Bienvenid@s al Home!</h2>
        <p>Este es nuestro home con React.</p>
      </main>
      <button onClick={() => setCambur(!cambur)}>{`${cambur}`}</button>
      <nav>
        <Link to="/about">Nuestro Proyecto</Link>
      </nav>
    </>
  );
}

export default Home;