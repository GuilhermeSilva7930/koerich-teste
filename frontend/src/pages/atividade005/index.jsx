import React from "react"
import produtos from "../../api/repositorio.json"
import "./index.css"
import SetaVoltar from "../../components/setaVoltar"

function Atividade005() {

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    })

    return (
        <main className="container atividade001">
            <SetaVoltar></SetaVoltar>
            <div className="scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Quantidade em estoque</th>
                            <th>Peças com defeitos</th>
                            <th>Peças para venda</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map(produto => (
                            <tr key={produto.key}>
                                <td>{produto.produto}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.defeito}</td>
                                <td>{produto.quantidade - produto.defeito}</td>
                                <td>{formatter.format(produto.valor)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Atividade005