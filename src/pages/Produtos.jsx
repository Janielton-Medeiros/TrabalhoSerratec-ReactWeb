import React, { useEffect, useState } from "react"
import { api } from '../api/Api'
import CardProduto from "../components/CardProduto"
import styled from 'styled-components'
import { Navbar } from "../components/Navbar"

const StyledDiv = styled.div`

    width: 100vw;
    height: calc(100% - 70px);
    position: relative;
    bottom: 0;

    h1 {

        font-size: 35px;
        padding-top: 20px;
        margin: 10px;
        text-align: center;
    }

    input {

        width: 600px;
        height: 40px;
        margin: 0 auto;
        border: 5px solid #020202;
        border-radius: 4px;
        padding: 10px;
        font-size: 16px;
        text-align: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
    }

    #container {

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 50px;

        .item {

            width: 300px;
            height: 400px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            overflow: hidden;
            margin: 20px;
            border-radius: 12px;
            border: 1px solid #2b2b2b26;
            background: rgba( 255, 255, 255, 0.25 );
            backdrop-filter: blur( 4px );
            position: relative;

            img {

                margin-top: 10px;
                width: 200px;
                height: 250px;
                border-radius: 8px;
                box-shadow: 0 2px 8px 0 rgba( 31, 38, 135, 0.37 );
            }

            &:hover {

                box-shadow: -5px 5px 10px #c1c6c9;
                transform: scale(1.05);
                transition: .3s ease-in-out;
            }

            svg {

                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                top: 12px;
                right: 12px;
                transform: scale(2);

                &:hover {
                    color: red;
                }
            }
        }
    }
`

const Produtos = () => {

    const [nome, setNome] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [resultadosDaPesquisa, setResultadosDaPesquisa] = useState([]);

    useEffect(() => {

        const getProdutos = async () => {
            const response = await api.get('/produtos');
            setProdutos(response.data);
        }

        getProdutos();
    }, []);


    useEffect(() => {

        filtrarProdutos();
    }, [nome, produtos]);

    const filtrarProdutos = () => {

        if (nome === '') {
            setResultadosDaPesquisa(produtos);
        } else {
            const resultados = produtos.filter((produto) => produto.nome.toLowerCase().includes(nome.toLowerCase()));
            setResultadosDaPesquisa(resultados);
        }
    };

    return (
        <>
            <Navbar />
            <StyledDiv>
                <h1>Produtos</h1>
                <h1>Quais produtos deseja encontrar?</h1>
                <input type="text" placeholder="Pesquisar produtos" onChange={(e) => setNome(e.target.value)} />
                <div id="container">
                    {resultadosDaPesquisa.map((produto) => <CardProduto produto={produto} />)}
                </div>
            </StyledDiv>
        </>
    );
};

export default Produtos;