import React from 'react'
import styled from 'styled-components'

const StyledItem = styled.div`

    width: 100%;

    .container {

        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        background: linear-gradient(56deg, #c1c6c9, #f0f8ff);
        color: #2f2f2f;
        padding: 12px;
        margin: 8px;
        border-radius: 8px;

        img {

            width: 100px;
            height: 100px;
            border-radius: 4px;
        }

        div {
            width: 100%;
        }

        section {
            
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }

`

export const Item = ({item}) => {

    return (

        <StyledItem>
            <div className='container'>
                <img src={item.urlimg} alt="foto-produto" />
                <div>
                    <section>
                        <h2>{item.nome}</h2>
                        <h2>SubTotal: R$ {item.quantidade * item.preco}</h2>
                    </section>
                    <h3>R$ {item.preco}</h3>
                    <h3> quantidade: {item.quantidade}</h3>
                </div>
            </div>
        </StyledItem>
    )
}
