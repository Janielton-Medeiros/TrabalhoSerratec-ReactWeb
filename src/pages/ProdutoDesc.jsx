import { useEffect, useState } from "react"
import { api } from '../api/Api'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import CardProduto from "../components/CardProduto"

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

    const [produto, setProduto] = useState([])
    const { id } = useParams()

    
    

    const handleAtualizarLista = () => {
        getProduto()
    }

    const getProduto = async () => {

        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data)
    
    
}


    useEffect(() => {
    handleAtualizarLista()
    }, [])
    

    return (

        <StyledDiv>
            <CardProduto produto={produto} />
            <h1>{produto.nome}</h1>
            <button>Carrinho</button>
        </StyledDiv>
    )
}

export default ProdutoDesc