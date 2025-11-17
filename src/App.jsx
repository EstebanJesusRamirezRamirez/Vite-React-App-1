import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Formulario from "./pages/Formulario";

// App Here

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Pedidos" element={<Formulario />} />
      </Routes>
    </Router>
  );
}
App;
