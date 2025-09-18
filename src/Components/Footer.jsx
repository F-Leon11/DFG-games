import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import "../Styles/Footer.css"; // Importamos los estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Nombre de la tienda */}
        <h3 className="footer-title">Mi Tienda de Juegos</h3>

        {/* Enlaces rápidos */}
        <ul className="footer-links">
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Preguntas</a>
          </li>
        </ul>

        {/* Redes sociales */}
        <div className="footer-socials">
          <a href="#">
            <Facebook size={20} />
          </a>
          <a href="#">
            <Twitter size={20} />
          </a>
          <a href="#">
            <Instagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          © {new Date().getFullYear()} Mi Tienda de Juegos
        </p>
      </div>
    </footer>
  );
};

export default Footer;
