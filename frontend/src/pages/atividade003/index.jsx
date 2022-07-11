import React from "react"
import "./index.css"
import list from "../../api/repositorio.json"
import { Link } from "react-router-dom"

function Atividade003() {
    return (
        <main className="container atividade003 mt-4">
            <div className="pesquisa">
                <Link to="/" className="link-voltar ms-3">Voltar</Link>
            </div>
            {list.map(produto => (
                <div key={produto.key} className="card fotos">
                    <img src={`assets/imagens/${produto.imagem}`} className="card-img-top img" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{produto.produto}</h5>
                        <p className="card-text">Quantidade: {produto.quantidade - produto.defeito}</p>
                        <span className="btn btn-primary">Valor: R$ {produto.valor.toString().replace(".", ",")}</span>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Atividade003