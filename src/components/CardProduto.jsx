import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Quadro = styled.div`

    width: 100%;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;

    img {

        text-align: center !important;
    }

    #quadro {

        width: 100%;
        height: 20%;
        background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
        margin-top: 60px;
        padding: 8px;
        left: 14px;
        color: #2f2f2f;

        span {
            font-size: 1.2em;
        }

        h4 {
            font-size: 1.5em;
        } 
    }
`

const CardProduto = ({ produto }) => {
    
    const navigate = useNavigate()

    const handleChangeRouter = (produto) => {
        
        navigate(`/produtos/${produto.id}`)
    }

    const ProdutoDisponivel = produto.quantidade > 0

    const handleH4 = () => {

        if (ProdutoDisponivel) {
            return (
                <h5>Qtd: {produto.quantidade}</h5>
            )
        } 
    }

    return (

        <div onClick={() => { handleChangeRouter(produto) }} className='item' style={{ display: ProdutoDisponivel ? "block" : "none" }}>

            <Quadro>
                <img src={produto.urlimg} alt="foto-produto" />
                <div id="quadro">
                    <span>{produto.nome}</span> <br />
                    <h4>R${produto.preco}</h4>
                    {handleH4()}
                </div>
            </Quadro>
        </div>   
    )
}

export default CardProduto