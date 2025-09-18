import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";
import "../Styles/Register.css";

const Register = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null); // Para manejar errores

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8081/api/register", {
        email,
        password,
      });
      console.log("Registro exitoso:", response.data);
      onClose(); // Cierra el formulario si todo salió bien
    } catch (error) {
      setError(error.response?.data?.message || "Error en el registro");
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="overlay">
      <div className="register-modal">
        <div className="register-header">
          <h2>Register</h2>
          <button onClick={onClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
