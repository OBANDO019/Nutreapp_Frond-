import { Navigate, useNavigate } from "react-router-dom";
import { usuarioActual, cerrarSesion } from "../services/usuarios.js";
import { ROLES, DEPARTAMENTOS, etiqueta } from "../models/enums.js";

export default function Home() {
  const navigate = useNavigate();
  const usuario = usuarioActual();

  if (!usuario) return <Navigate to="/" replace />;

  const salir = () => {
    cerrarSesion();
    navigate("/");
  };

  return (
    <div className="home">
      <header className="barra">
        <img src="/logo-nutresa.png" alt="Grupo Nutresa" />
        <button type="button" className="boton boton-secundario" onClick={salir}>
          Cerrar sesión
        </button>
      </header>

      <main className="contenido">
        <h1>Hola, {usuario.nombre.split(" ")[0]}</h1>
        <p className="subtitulo">Estos son los datos de tu cuenta.</p>

        <dl className="datos">
          <dt>Nombre</dt>
          <dd>{usuario.nombre}</dd>
          <dt>Correo</dt>
          <dd>{usuario.correo}</dd>
          <dt>Rol</dt>
          <dd>{etiqueta(ROLES, usuario.rol)}</dd>
          <dt>Departamento</dt>
          <dd>{etiqueta(DEPARTAMENTOS, usuario.departamento)}</dd>
          <dt>Identificador</dt>
          <dd className="uuid">{usuario.id}</dd>
        </dl>
      </main>
    </div>
  );
}
