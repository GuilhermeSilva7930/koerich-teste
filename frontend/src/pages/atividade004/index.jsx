import React, { useState } from "react"
import "./index.css"
import list from "../../api/repositorio.json"
import { Link } from "react-router-dom"

function Atividade004() {

    const [lista, setLista] = useState(list)
    const [filtroLigado, setFiltroLigado] = useState(false)

    function filtrarPorNome() {
        let listaFiltrada = lista.sort(function (a, b) {
            if (a.produto < b.produto) {
                return -1
            } else {
                return true
            }
        })
        setLista(listaFiltrada)
        setFiltroLigado(!filtroLigado)
    }

    function filtrarPorQtdEstoque() {
        let listaFiltrada = lista.sort(function (a, b) {
            if (a.quantidade > b.quantidade) {
                return -1
            } else {
                return true
            }
        })
        setLista(listaFiltrada)
        setFiltroLigado(!filtroLigado)
    }

    function filtrarPorPcsComDefeito() {
        let listaFiltrada = lista.sort(function (a, b) {
            if (a.defeito > b.defeito) {
                return -1
            } else {
                return true
            }
        })
        setLista(listaFiltrada)
        setFiltroLigado(!filtroLigado)
    }

    return (
        <main className="container atividade003 mt-4">
            <div className="pesquisa">
                <Link to="/" className="link-voltar ms-3">Voltar</Link>
                <span>
                    Ordernar:
                    <button onClick={filtrarPorNome}>Nome</button>
                    <button onClick={filtrarPorQtdEstoque}>Qtd Estoque</button>
                    <button onClick={filtrarPorPcsComDefeito}>Peças com Defeito</button>
                </span>
            </div>
            {lista.map(produto => (
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

export default Atividade004