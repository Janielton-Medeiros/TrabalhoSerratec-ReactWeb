import React from 'react'
import { useNavigate } from 'react-router-dom';

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

            <img className='teste2' src={produto.urlimg} alt="foto-produto" />

            <div id="quadro">
                <span>{produto.nome}</span> <br />
                <h4>R${produto.preco}</h4>
                {handleH4()}
            </div>
        </div>   
    )
}

export default CardProduto