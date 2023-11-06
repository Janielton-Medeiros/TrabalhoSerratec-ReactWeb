import React from 'react'
import { SiGithubsponsors } from "react-icons/si";
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

            <img src={produto.urlimg} alt="foto-produto" />

            <div id="quadro">
                <span>{produto.nome}</span> <br />
                <h4>R${produto.preco}</h4>
                {handleH4()}
            </div>

            <i>
                <SiGithubsponsors />
            </i>

        </div>
    )
}

export default CardProduto