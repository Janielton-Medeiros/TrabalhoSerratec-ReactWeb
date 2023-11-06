import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardProduto = ({ produto }) => {
    
    const navigate = useNavigate()

    const handleChangeRouter = (produto) => {

        navigate(`/produtos/${produto.id}`)
    }
    
    return (

        <div onClick={() => { handleChangeRouter(produto) }} className='item'>

            <img className='teste2' src={produto.urlimg} alt="foto-produto" />

            <div id="quadro">
                <span>{produto.nome}</span> <br />
                <h4>R${produto.preco}</h4>
            </div>
        </div>   
    )
}

export default CardProduto