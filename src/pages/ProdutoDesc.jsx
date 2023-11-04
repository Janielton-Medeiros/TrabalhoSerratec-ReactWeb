import { useState } from "react"
import { api } from '../api/Api'
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

const ProdutoDesc = () => {

    const CadastroProd = () => {
        const [nome, setNome] = useState('')
        const [preco, setPreco] = useState('')
        const [quantidade, setQuantidade] = useState('')
        const [descricao, setDescricao] = useState('')
        const [img, setImg] = useState('')
        const [favoritos, setFavoritos] = useState('')

        const handleSave = async (e) => {
            e.preventDefault()
            await api.post('/produtos', { nome, preco, quantidade, descricao, img, favoritos, like: 0 })

        }

        const handleLimpar = () => {
            setNome('')
            setEmail('')
            setSenha('')
        }
    }

    return (

        <StyledDiv>
            <h1>Produto</h1>
        </StyledDiv>
    )
}

export default ProdutoDesc