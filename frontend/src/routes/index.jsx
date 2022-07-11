import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App";
import Atividade001 from "../pages/atividade001";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/atividade001" exact element={<Atividade001 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas