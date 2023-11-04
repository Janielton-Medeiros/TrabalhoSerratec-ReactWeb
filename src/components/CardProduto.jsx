import React from 'react'
import styled from 'styled-components'

export const CardProduto = ({ produto }) => {

    return (
        <div className='item'>

            <img src={produto.imgurl} alt="foto-produto" />

            <p id="quadro">
                <h2>{produto.nome}</h2> <br />
                <h4>{produto.preco}</h4>
            </p>
        </div>
    )
}
