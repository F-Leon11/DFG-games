import React from "react";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "../Context/CartContext";
import "../Styles/Header.css";

const Header = ({ setShowLogin, setShowRegister, setShowCart }) => {
  const { cart } = useCart();

  // Contamos los productos sumando las cantidades
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo / nombre */}
        <h1 className="logo">DFGAMES</h1>

        {/* Navegación */}
        <nav>
          <ul className="nav-list">
            {/* Botón de login */}
            <li>
              <button onClick={() => setShowLogin(true)} className="nav-btn">
                <User className="icon" size={20} />
                Iniciar sesión
              </button>
            </li>

            {/* Botón de registro */}
            <li>
              <button onClick={() => setShowRegister(true)} className="nav-btn">
                Registrarse
              </button>
            </li>

            {/* Botón del carrito */}
            <li className="cart-wrapper">
              <button onClick={() => setShowCart(true)} className="nav-btn">
                <ShoppingCart className="icon" size={20} />
              </button>
              {/* Si hay productos, mostramos el numerito */}
              {cartItemsCount > 0 && (
                <span className="cart-count">{cartItemsCount}</span>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
