const USUARIOS_KEY = "nutresa.usuarios";
const SESION_KEY = "nutresa.sesion";

const leer = (key, defecto) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? defecto;
  } catch {
    return defecto;
  }
};

export const listarUsuarios = () => leer(USUARIOS_KEY, []);

/**
 * Usuario: { id: UUID, nombre, correo, rol, departamento, contrasenia }
 * Lanza Error si el correo ya existe.
 */
export function registrarUsuario({ id, nombre, correo, rol, departamento, contrasenia }) {
  const usuarios = listarUsuarios();
  const correoNorm = correo.trim().toLowerCase();
  if (usuarios.some((u) => u.correo === correoNorm)) {
    throw new Error("Ya existe una cuenta con este correo.");
  }
  const nuevo = {
    id,
    nombre: nombre.trim(),
    correo: correoNorm,
    rol,
    departamento,
    contrasenia, // DEMO: en producción la contraseña nunca se guarda en el cliente
  };
  localStorage.setItem(USUARIOS_KEY, JSON.stringify([...usuarios, nuevo]));
  return nuevo;
}

export function iniciarSesion(correo, contrasenia) {
  const usuario = listarUsuarios().find(
    (u) => u.correo === correo.trim().toLowerCase() && u.contrasenia === contrasenia
  );
  if (!usuario) throw new Error("Correo o contraseña incorrectos.");
  localStorage.setItem(SESION_KEY, usuario.id);
  return usuario;
}

export function abrirSesion(id) {
  localStorage.setItem(SESION_KEY, id);
}

export function usuarioActual() {
  const id = localStorage.getItem(SESION_KEY);
  return listarUsuarios().find((u) => u.id === id) ?? null;
}

export function cerrarSesion() {
  localStorage.removeItem(SESION_KEY);
}
