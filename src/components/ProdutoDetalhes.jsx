import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiX } from "react-icons/fi";
import { BtnQuantidade } from './BtnQuantidade';
import { useNavigate } from 'react-router-dom';
import { CarrinhoContext } from '../context/CarrinhoContext';

const StyledDetalhes = styled.div`

    width: 50%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #720e9e; 
    border-radius: 24px;
    background-color: #f2f2f2;

    img {

        width: 60%;
        height: 95%;
        margin-left: 20px;
        border-radius: 12px;
    }

    #container {

        width: 45%;
        height: 100%;
        position: relative;

        #dados {

            width: 100%;
            height: 35%;
            margin: 20px 0;
            padding: 12px;
            color: #2f2f2f;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        h1 {

            font-size: 3em;
        }

        svg {

            width: 50px;
            height: 50px;
            background-color: red;
            border-radius: 4px;
            color: white;
            position: absolute;
            top: -10px;
            right: -10px;
            cursor: pointer;
        }

        .btn-more {

            height: 30%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;

            .rightButton {

                border-radius: 8px 0 0 8px;
            }

            .leftButton {

                border-radius: 0 8px 8px 0;
            }

            button {

                background: #720e9e;
                color: white;
                cursor: pointer;
            }
            
            button, input {

                width: 80px;
                height: 55px;
                border: none;
                font-size: 1.3em;
                text-align: center;
                outline: none;
            }

            input {

                border: 2px solid #720e9e;
            }
        }
    }
`

export const ProdutoDetalhes = () => {

    const navigate = useNavigate()

    const { produto, produtos, setProdutos, quantidade, setQuantidade, itens, setItens } = useContext(CarrinhoContext)

    const item = {

        nome: produto.nome,
        preco: produto.preco,
        quantidade: quantidade,
        descricao: produto.descricao,
        urlimg: produto.urlimg
    }

    const handleClick = () => {

        setItens([...itens, item])
        setProdutos([...produtos, produto])
        setQuantidade(1)
        navigate('/produtos')
    }

    return (

        <StyledDetalhes>

            <img src={produto.urlimg} alt="foto-produto" />

            <div id='container'>

                <div id='dados'>
                    <h2>{produto.nome}</h2>
                    <h3>{produto.descricao}</h3>
                    <h1>R$ {produto.preco}</h1><h4>23% off</h4>
                    <h3>Quantidade disponível:{produto.quantidade}</h3>
                    <h4>em 10x sem juros</h4>
                </div>

                <FiX onClick={() => { navigate('/produtos') }} />

                <div>
                    <BtnQuantidade produto={produto} />
                </div>

                <button onClick={ handleClick }>
                    Adicionar
                </button>
            </div>

        </StyledDetalhes>
    )
}
