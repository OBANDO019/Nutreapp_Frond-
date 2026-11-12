# Grupo Nutresa – App React

## Ejecutar
```bash
npm install
npm run dev
```

## Rutas
- `/` Ingreso (formulario) → navega a `/home`
- `/registro` Registro de usuario
- `/home` Pantalla principal (requiere sesión)

## Modelo de usuario
`{ id: UUID, nombre, correo, rol, departamento, contrasenia }`

Los valores de `Rol` y `Departamento` están en `src/models/enums.js`; ajústalos a los de tu backend.
`src/services/usuarios.js` guarda en localStorage solo para la demo: reemplázalo por llamadas a tu API.
