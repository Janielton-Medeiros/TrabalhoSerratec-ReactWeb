import React, { useEffect, useState } from "react"
import { api } from '../api/Api'
import styled from 'styled-components'

import modelo from '../assets/img/modelo.jpg'

const StyledDiv = styled.div`

    width: 100vw;
    height: calc(100% - 70px);
    position: absolute;
    bottom: 0;

    h1 {

        font-size: 2em; 
        background: blue;
    }

    #container {

        width: 30%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: red;
        border-radius: 12px;
        margin: 24px;

        img {
            width: 45%;
        }

        #quadro {

            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 0 8px;
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

    const getProduto = async () => {

        const response = await api.get('/produtos')
        setProdutos(response.data)
    }


    useEffect(() => {

        getProduto()
    }, [])

    return (

        <>
            <StyledDiv>

                <h1>Produtos</h1>

                <div id="container">

                    <img src={modelo} alt="foto-produto" />

                    <div id="quadro">
                        <h2>Nome do produto</h2>
                        <h4>R$ 99,90</h4>
                    </div>
                </div>
            </StyledDiv>
        </>
    )
}

export default Produtos