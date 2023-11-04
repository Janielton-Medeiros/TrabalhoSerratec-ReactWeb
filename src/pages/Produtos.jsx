import React, { useEffect, useState } from "react"
import { api } from '../api/Api'
import { CardProduto } from "../components/CardProduto"
import styled from 'styled-components'

const StyledDiv = styled.div`

    width: 100vw;
    height: calc(100% - 100px);
    position: absolute;
    bottom: 0;

    h1 {
        margin: 10px;
    }

    #container {

        width: 100%;
        display: flex;
        justify-content: space-around;
        gap: 50px;
        flex-wrap: wrap;

        .item {

            width: 30%;
            background-color: blue;
        }
    }
`

const Produtos = () => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [img, setImg] = useState('')
    const [favoritos, setFavoritos] = useState('')
    const [produtos, setProdutos] = useState([])

    const handleSave = async (e) => {

        e.preventDefault()
        await api.post('/produtos', { nome, preco, quantidade, descricao, img, favoritos })
    }

    const handleAtualizarLista = () => {
        getProduto()
    }

    const getProduto = async () => {

        const response = await api.get('/produtos')
        setProdutos(response.data)
    }

    useEffect(() => {

        handleAtualizarLista()
    }, [])

    return (

        <StyledDiv>
            <h1>Produtos</h1>
            <div id="container">
                {produtos.map((produto) => <CardProduto produto={produto}/> )}
            </div>
        </StyledDiv>
    )
}

export default Produtos