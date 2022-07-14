import { Link } from "react-router-dom";
import AboutTitle from "../../components/AboutTitle/AboutTitle"

const About = () => {
  return (
    <>
      <main>
        <AboutTitle />
        <p>Hola Mundo, esta es nuestra primera descripción.</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;