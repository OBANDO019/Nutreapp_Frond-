import { Routes, Route, Navigate } from "react-router-dom";
import Ingreso from "./pages/Ingreso.jsx";
import Registro from "./pages/Registro.jsx";
import Home from "./pages/Home.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Ingreso />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
