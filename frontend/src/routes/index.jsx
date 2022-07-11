import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App";
import Atividade001 from "../pages/atividade001";
import Atividade002 from "../pages/atividade002";
import Atividade003 from "../pages/atividade003";
import Atividade004 from "../pages/atividade004";
import Atividade005 from "../pages/atividade005";

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/atividade001" exact element={<Atividade001 />} />
                <Route path="/atividade002" exact element={<Atividade002 />} />
                <Route path="/atividade003" exact element={<Atividade003 />} />
                <Route path="/atividade004" exact element={<Atividade004 />} />
                <Route path="/atividade005" exact element={<Atividade005 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas