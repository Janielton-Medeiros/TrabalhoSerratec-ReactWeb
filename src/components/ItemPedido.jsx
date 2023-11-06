import React from 'react'
import styled from 'styled-components'
import { BtnQuantidade } from './BtnQuantidade'

const StyledItem = styled.div`

    width: 95%;
    height: 200px;
    display: flex;
    align-items: center;
    margin-top: 15px;
    border-radius: 12px;
    border: 1px solid #44444434;
    box-shadow: 0 0 5px 5px #44444434;
    background: linear-gradient(54deg, #c1c6c9, #f0f8ff, #c1c6c9);

    img {

        width: 35%;
        height: 80%;
        border-radius: 4px;
        margin-left: 10px;
    }

    #paragrafo {

        width: 80%;
        height: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h3, h5 {
            margin: 4px;
        }

        input {
            width: 40px;
            outline: none;
        }

        #btn-more {

            width: 200px;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            button {

                width: 30%;
                height: 50%;

                svg {

                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }

            input {

                width: 40%;
                height: 50%;
                text-align: center;
            }
        }

        #info {

            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
`

export const ItemPedido = ({ produto }) => {

    return (

        <StyledItem>

            <img src={produto.urlimg} alt="foto-produto" />

            <div id='paragrafo'>
                <div id="info">
                    <h3>{produto.nome}</h3>
                    <h5>R$ {produto.preco}</h5>
                </div>

                <div id='btn-more'>
                    <BtnQuantidade />
                </div>
            </div>
        </StyledItem>
    )
}
