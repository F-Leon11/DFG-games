import React, { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import GameList from "./Components/GameList";
import ImageCarousel from "./Components/ImageCarousel";
import Register from "./Components/Register";
import Login from "./Components/Login";
import CartSummary from "./Components/CartSummary";
import { CartProvider } from "./context/CartContext";
import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="app-container">
        {/* Header */}
        <Header
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
          setShowCart={setShowCart}
        />

        {/* Main con carrusel y lista de juegos */}
        <main className="main-content">
          <div className="content-wrapper">
            <ImageCarousel />
            <GameList />
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Modales */}
        {showLogin && <Login onClose={() => setShowLogin(false)} />}
        {showRegister && <Register onClose={() => setShowRegister(false)} />}
        {showCart && <CartSummary onClose={() => setShowCart(false)} />}
      </div>
    </CartProvider>
  );
}

export default App;
