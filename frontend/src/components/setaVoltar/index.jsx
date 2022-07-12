import React from "react";
import { Link } from "react-router-dom"

function SetaVoltar() {
    return (
        <Link to="/" className="voltar">
            <i className="bi bi-arrow-left"></i>
        </Link>
    )
}

export default SetaVoltar