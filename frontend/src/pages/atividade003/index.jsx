import React from "react"
import "./index.css"
import list from "../../api/repositorio.json"
import { Link } from "react-router-dom"
import SetaVoltar from "../../components/setaVoltar"

function Atividade003() {

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    })

    return (
        <main className="container atividade003 mt-4">
            <div className="pesquisa">
                <SetaVoltar></SetaVoltar>
            </div>
            {list.map(produto => (
                <div key={produto.key} className="card fotos">
                    <img src={`assets/imagens/${produto.imagem}`} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{produto.produto}</h5>
                        <p className="card-text">Quantidade: {produto.quantidade - produto.defeito}</p>
                        <span className="botao">Valor: R$ {formatter.format(produto.valor)}</span>
                    </div>
                </div>
            ))}
        </main>
    )
}

export default Atividade003