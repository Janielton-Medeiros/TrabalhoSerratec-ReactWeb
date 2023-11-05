import React from 'react'
import styled from 'styled-components'
import { FiX } from "react-icons/fi";
import { useContext } from "react"
import { CarrinhoContext } from '../context/CarrinhoContext';

const StyledCarrinho = styled.div`

    width: 100%;
    background-color: #2f2f2f5f;
    border-radius: 2px;
    position: fixed;
    top: 70px;
    right: 0;
    left: auto;
    bottom: 0;

    div {

        animation: aparecer 1s ease-in-out;
        width: 30%;
        background: linear-gradient(-115deg, #c1c6c9, #f0f8ff);
        border-radius: 24px 0 0 24px ;
        position: fixed;
        top: 70px;
        right: 0;
        left: auto;
        bottom: 0;

        h1, h2 {

            padding: 24px;
        }

        svg {

            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: 20px;
        }

        @keyframes aparecer {
            
            from {

                transform: translateX(300px);
            }
        }
    }
`

export const Carrinho = ({ isOpen, setCarrinhoOpen }) => {

    const {produto} = useContext(CarrinhoContext)

    if ( isOpen ) {

        return (
            <>
            <StyledCarrinho>
                <div>
                    <h1>Carrinho</h1>
                    <FiX onClick={setCarrinhoOpen}/>
                    <h2>Itens</h2>
                    {produto.map((produto, index) => <p key={index}> {produto.nome}</p>  )}
                    <button>
                        Confirmar pedido
                    </button>
                </div>
            </StyledCarrinho>
            </>
        )
    } 

    return null
}
