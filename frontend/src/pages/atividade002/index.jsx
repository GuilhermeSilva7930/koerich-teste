import React, { useEffect, useRef, useState } from "react"
import list from "../../api/repositorio.json"
import "./index.css"
import { Link } from "react-router-dom"

function Atividade002() {

    const input = useRef()
    let [listAtualizada, setListaAtualizada] = useState(list)

    function atualizarTabela() {
        let texto = input.current.value.toLowerCase()
        setListaAtualizada(list.filter(produto => produto.produto.toLowerCase().includes(texto)))
        localStorage.setItem("valueInput", input.current.value)
    }

    useEffect(() => {
        atualizarTabela()
    }, [])

    return (
        <main className="container atividade001">
            <div className="pesquisa">
                <Link to="/" className="link-voltar ms-3">Voltar</Link>
                <input onChange={atualizarTabela} value={localStorage.getItem("valueInput")} ref={input} type="text" className="me-3" placeholder="Digite para filtrar..." />
            </div>
            <div className="scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome do Produto</th>
                            <th>Quantidade em estoque</th>
                            <th>Peças com defeitos</th>
                            <th>Peças para venda</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listAtualizada.map(produto => (
                            <tr key={produto.key}>
                                <td>{produto.produto}</td>
                                <td>{produto.quantidade}</td>
                                <td>{produto.defeito}</td>
                                <td>{produto.quantidade - produto.defeito}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Atividade002