import React from 'react'
import { SiGithubsponsors } from "react-icons/si";

const CardProduto = ({ produto }) => {

    return (

        <div className='item'>

            <img src={produto.imgurl} alt="foto-produto" />

            <div id="quadro">
                <span>{produto.nome}</span> <br />
                <h4>R${produto.preco}</h4>
            </div>

            <i>
                <SiGithubsponsors/>
            </i>

        </div>
    )
}

export default CardProduto
