import { Routes, Route } from "react-router-dom";
import Inicio from "../pages/Inicio/Inicio";

export default function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
        </Routes>
    )
}