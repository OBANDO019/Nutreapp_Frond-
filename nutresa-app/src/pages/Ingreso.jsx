import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { iniciarSesion } from "../services/usuarios.js";

export default function Ingreso() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ correo: "", contrasenia: "" });
  const [error, setError] = useState("");

  const cambiar = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const enviar = (e) => {
    e.preventDefault();
    try {
      iniciarSesion(form.correo, form.contrasenia);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <main className="pagina">
      <section className="marca" aria-hidden="true">
        <img src="/logo-nutresa.png" alt="" />
      </section>

      <section className="panel">
        <h1>Ingresa a tu cuenta</h1>
        <p className="subtitulo">Usa tu correo corporativo para continuar.</p>

        <form onSubmit={enviar} noValidate>
          <label className="campo">
            <span>Correo</span>
            <input
              type="email"
              name="correo"
              autoComplete="email"
              value={form.correo}
              onChange={cambiar}
              required
            />
          </label>

          <label className="campo">
            <span>Contraseña</span>
            <input
              type="password"
              name="contrasenia"
              autoComplete="current-password"
              value={form.contrasenia}
              onChange={cambiar}
              required
            />
          </label>

          {error && (
            <p className="error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="boton">
            Ingresar
          </button>
        </form>

        <p className="pie">
          ¿Aún no tienes cuenta? <Link to="/registro">Crear cuenta</Link>
        </p>
      </section>
    </main>
  );
}
