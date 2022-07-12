import React from "react";
import SetaVoltar from "../setaVoltar";
import "./index.css"

function Atividade6e7(props) {
    return(
        <main className="centro">
            <h1>{props.texto}</h1>
            <div className="ms-3">
                <SetaVoltar></SetaVoltar>
            </div>
        </main>
    )
}

export default Atividade6e7