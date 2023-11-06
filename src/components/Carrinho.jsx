import React from 'react'
import styled from 'styled-components'
import { FiX } from "react-icons/fi";
import { useContext } from "react"
import { ItemPedido } from './ItemPedido';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useNavigate } from 'react-router-dom';


const StyledCarrinho = styled.div`

    width: 100%;
    background-color: #2f2f2f5f;
    border-radius: 2px;
    position: fixed;
    top: 70px;
    right: 0;
    left: auto;
    bottom: 0;

    #container {

        animation: aparecer 1s ease-in-out;
        width: 30%;
        height: 100vh;
        display: flex;
        flex-direction: column;
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

        .quadro {

            width: 100%;
            height: 70%;
            display: flex;
            flex-direction: column;
            justify-content: center;   
            align-items: center;   
            overflow-y: scroll;
        }

        #btnPedido {

            width: 200px;
            height: 50px;
            border: none;
            border-radius: 8px;
            margin-left: 210px;
            font-size: 1.2rem;
            background-color: #f2f2f2;
            box-shadow: 0 0 5px 5px #44444434;
            cursor: pointer;

            &:hover {

                animation: btnPedido .7s ease-out both;
                transform: scale(1.2);
                transition: .3s;
            }

            &:active {

                transform: scale(.99);
            }

            @keyframes btnPedido {
                
                to {

                    background-color: green;
                    color: #f2f2f2;
                    
                }
            }
        }

        #btnLimpar {

            width: 200px;
            height: 50px;
            border: none;
            border-radius: 8px;
            margin-left: 210px;
            font-size: 1.2rem;
            background-color: #f2f2f2;
            box-shadow: 0 0 5px 5px #44444434;
            cursor: pointer;

            &:hover {

            animation: btnLimpar .7s ease-out both;
            transform: scale(1.2);
            transition: .3s;
            }

            &:active {

            transform: scale(.99);
            }

            @keyframes btnLimpar {

            to {

                background-color: #800000;
                color: #f2f2f2;
                
            }
            }
            }

        
        @keyframes aparecer {
            
            from {
                
                transform: translateX(300px);
            }
        }

        ::-webkit-scrollbar {

            background: #2f2f2f5f;
            width: 10px;
        }

        ::-webkit-scrollbar-thumb {

            background: linear-gradient(-115deg, #c1c6c9, #f0f8ff);
            border-radius: 1rem;
            height: 20px;
        }

        ::-webkit-scrollbar-thumb:active {

            background-color: #2f2f2f5f;
        }
    }
    #teste{
        display: flex;
        justify-content: center;
        margin-top: 45px;
        font-size: 40px;
        
    }
`

export const Carrinho = ({ isOpen, setCarrinhoOpen }) => {

    const navigate = useNavigate()

    const { produtos, limparCarrinho } = useContext(CarrinhoContext);


    const handleLimparCarrinho = () => {

        limparCarrinho();
    }

    const handleConfirmarPedido = () => {
        if (produtos.length === 0) {
            alert('Seu carrinho está vazio!')
    } else{ navigate(`/finalizar`)}
    }

    if (isOpen) {

        return (

            <>
                <StyledCarrinho>
                    <div id='container'>
                        <h1>Carrinho</h1>

                        <FiX onClick={setCarrinhoOpen} />

                        <h2>Itens</h2>

                        <button id='btnPedido' onClick={handleConfirmarPedido}>
                            Confirmar pedido
                        </button>
                        <br />
                        <button id='btnLimpar' onClick={handleLimparCarrinho}>
                            Limpar carrinho
                        </button>

                        {produtos.length === 0 && (
                            <div id='teste'>
                            <span>O seu carrinho está vazio</span>
                            </div>
                        )}

                        <div className='quadro'>
                            {produtos.map((produto) => <ItemPedido produto={produto} />)}
                        </div>
                    </div>
                </StyledCarrinho>
            </>
        )
    }

    return null
}
