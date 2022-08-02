import "./Footer.css";
import NormalButton from "../NormalButton/NormalButton";
import { Link } from "react-router-dom";
import NextStepImage from "../../imagesApp/mover-al-siguiente.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>“Una experiencia en sabores a la que querrás volver”</p>
      <Link to="/chef">
        <NormalButton icon={NextStepImage} text="Vista Chef" />
      </Link>
    </footer>
  );
};

export default Footer;
