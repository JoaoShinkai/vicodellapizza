import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";
import Cardapio from "../pages/Cardapio/Cardapio";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
        </Routes>
    )
}