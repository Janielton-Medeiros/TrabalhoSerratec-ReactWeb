import React from 'react'
import { SiGithubsponsors } from "react-icons/si";
import { useNavigate } from 'react-router-dom';

const CardProduto = ({ produto }) => {

    const navigate = useNavigate()

    const handleChangeRouter = (produto) => {

        navigate(`/produtos/${produto.id}`)
    }

    return (

        <div onClick={() => { handleChangeRouter(produto) }} className='item'>

            <img src={produto.urlimg} alt="foto-produto" />

            <div id="quadro">
                <span>{produto.nome}</span> <br />
                <h4>R${produto.preco}</h4>
            </div>

            <i>
                <SiGithubsponsors />
            </i>

        </div>
    )
}

export default CardProduto