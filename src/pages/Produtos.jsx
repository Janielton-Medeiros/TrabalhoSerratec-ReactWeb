import React from "react"
import { api } from '../api/Api'
import { useState } from "react"

const Produtos = () => {
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [img, setImg] = useState('')
    const [favoritos, setFavoritos] = useState ('')

    const handleSave = async (e) => {
        e.preventDefault()
        await api.post('/produtos', {nome, preco, quantidade, descricao, img, favoritos})
        
    }
    return (

        <>
            <div>TESTE HOME</div>
        </>
    )
}

export default Produtos