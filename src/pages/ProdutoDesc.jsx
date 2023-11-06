import { useEffect, useState, useContext } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"
import { api } from '../api/Api'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { ProdutoDetalhes } from "../components/ProdutoDetalhes"
import { SiGithubsponsors } from "react-icons/si";

const StyledDiv = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: #2f2f2f5f;
    display: flex;
    align-items: center;
    justify-content: center; 

    #btnFinalizarPedido , #teste {

        width: 190px;
        height: 75px;
        background: #720e9e;
        color: white;
        font-size: 1.3em;
        cursor: pointer;
        box-shadow: 0 0 5px 5px #44444434;
        border-radius: 12px;
        border: none;
        position: relative;
        top: 39%;
        left: -19%;
        bottom: 15%;
        right: 29%;
        
        &:hover {
            transform: scale(1.2);
            transition: .7s;
        }

        &:active {
            transform: scale(.9);
        }
    }
`

const ProdutoDesc = () => {

    const navigate = useNavigate()

    useEffect(() => {
        handleAtualizarLista()
    }, [])

    const { produto, setProduto, produtos, setProdutos } = useContext(CarrinhoContext)

    const { id } = useParams()

    const handleAtualizarLista = () => {
        getProduto()
    }

    const getProduto = async () => {

        const response = await api.get(`/produtos/${id}`)
        setProduto(response.data)
    }

    const handleLike = () => {

        api.patch(`/produtos/${produto.id}`, { likes: produto.likes + 1 });
        setProduto({ ...produto, likes: produto.likes + 1 })
    }


    return (

        <StyledDiv>
            <ProdutoDetalhes produto={produto} />
            <button id="teste" onClick={handleLike}>
                <SiGithubsponsors /> {produto.likes}
            </button>
        </StyledDiv>
    )
}

export default ProdutoDesc