import React from "react"
import { api } from '../api/Api'
import { useState } from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 10em; 
    }
`

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
            <StyledDiv>
                <h1>Produtos</h1> 
            </StyledDiv>
        </>
    )
}

export default Produtos