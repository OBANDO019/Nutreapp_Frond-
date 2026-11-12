export const ROLES = [
  { value: "ADMINISTRADOR", label: "Administrador" },
  { value: "GERENTE", label: "Gerente" },
  { value: "EMPLEADO", label: "Empleado" },
];

export const DEPARTAMENTOS = [
  { value: "TECNOLOGIA", label: "Tecnología" },
  { value: "RECURSOS_HUMANOS", label: "Recursos humanos" },
  { value: "FINANZAS", label: "Finanzas" },
  { value: "OPERACIONES", label: "Operaciones" },
  { value: "COMERCIAL", label: "Comercial" },
];

export const etiqueta = (lista, valor) =>
  lista.find((i) => i.value === valor)?.label ?? valor;
