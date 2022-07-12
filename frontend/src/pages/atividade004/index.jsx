import React, { useEffect, useState } from "react"
import "./index.css"
import list from "../../api/repositorio.json"
import SetaVoltar from "../../components/setaVoltar"

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
        localStorage.setItem("item", "nome")
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
        localStorage.setItem("item", "estoque")
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
        localStorage.setItem("item", "defeito")
    }

    useEffect(() => {
        if (localStorage.getItem("item") === "nome") {
            filtrarPorNome()
        } else if (localStorage.getItem("item") === "estoque") {
            filtrarPorQtdEstoque()
        } else if (localStorage.getItem("item") === "defeito") {
            filtrarPorPcsComDefeito()
        } else {
            setLista(list)
        }
    }, [])

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    })

    return (
        <main className="container atividade003 mt-4">
            <div className="container items">
                <SetaVoltar></SetaVoltar>
                <span className="mt-2">
                    Ordernar:
                    <button className="btns" onClick={filtrarPorNome}>
                        Nome
                    </button>
                    <button className="btns" onClick={filtrarPorQtdEstoque}>
                        Qtd Estoque
                    </button>
                    <button className="btns" onClick={filtrarPorPcsComDefeito}>
                        Peças com Defeito
                    </button>
                </span>
            </div>
            {lista.map(produto => (
                <div key={produto.key} className="card fotos">
                    <img src={`assets/imagens/${produto.imagem}`} className="card-img-top img" alt="..." />
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

export default Atividade004