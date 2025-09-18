import React from "react";
import { useCart } from "../Context/CartContext";
import { X, CreditCard } from "lucide-react";
import "../Styles/CartSummary.css";

function CartSummary({ onClose }) {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price =
      item.price === "Free" ? 0 : parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    alert("Procesando pago...");
  };

  return (
    <div className="overlay">
      <div className="cart-container">
        {/* Encabezado */}
        <div className="cart-header">
          <h2>Resumen del carrito</h2>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        {/* Si el carrito está vacío */}
        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío</p>
        ) : (
          <>
            {/* Lista de productos */}
            <ul className="cart-list">
              {cart.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>Cantidad: {item.quantity}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    <X size={20} />
                  </button>
                </li>
              ))}
            </ul>

            {/* Totales */}
            <div className="cart-totals">
              <div className="row">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="row">
                <span>Impuesto:</span>
                <span>${(total * 0.1).toFixed(2)}</span>
              </div>
              <div className="row total">
                <span>Total:</span>
                <span>${(total * 1.1).toFixed(2)}</span>
              </div>

              {/* Botón de pago */}
              <button onClick={handleCheckout} className="btn-pay">
                <CreditCard className="icon" />
                <span>Pagar</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartSummary;
