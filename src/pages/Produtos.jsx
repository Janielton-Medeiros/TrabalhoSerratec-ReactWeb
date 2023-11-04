import React, { useEffect, useState } from "react"
import { api } from '../api/Api'
import CardProduto from "../components/CardProduto"
import styled from 'styled-components'
import { Navbar } from "../components/Navbar"
import { Link, useParams } from 'react-router-dom'

const StyledDiv = styled.div`

    width: 100vw;
    height: calc(100% - 70px);
    position: relative;
    bottom: 0;

    h1 {

        padding-top: 20px;
        margin: 10px;
    }

    #container {

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;

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

            #quadro {

                margin-top: 60px;
                width: 100%;
                height: 20%;
                padding: 12px;
                background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
                color: #2f2f2f;

                span {

                    font-size: 1.2em;
                }

                h4 {

                    font-size: 1.5em;
                }
            }
        }
    }
`

const Produtos = () => {

    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [descricao, setDescricao] = useState('')
    const [img, setImg] = useState('')
    const [favoritos, setFavoritos] = useState('')
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        async function getProdutos() {
          const response = await api.get("/produtos");
          setProdutos(response.data);
        }
    
        getProdutos();
      }, []);

    const handleSave = async (e) => {

        e.preventDefault()
        await api.post('/produtos', { nome, preco, quantidade, descricao, img, favoritos })
    }

    const handleAtualizarLista = () => {
        getProduto()
    }

    const getProduto = async () => {

        const response = await api.get('/produtos')
        setProdutos(response.data)
    }

    useEffect(() => {

        handleAtualizarLista()
    }, [])

    const [resultadosDaPesquisa, setResultadosDaPesquisa] = useState(produtos)
    const filtrarProdutos = () => {

        if (nome === '') {
            setResultadosDaPesquisa(produtos)
        } else {
            const resultados = produtos.filter((produto) => produto.nome.includes(nome))
            setResultadosDaPesquisa(resultados)
        }
    }
    
    useEffect(() => {
        filtrarProdutos()
    }, [nome])

    return (
        <>
            <Navbar />
            <StyledDiv>
                <h1>Produtos</h1>

                <input type="text" placeholder="Pesquisar produtos" onChange={(e) => setNome(e.target.value)} />
                <div id="container">
                    {resultadosDaPesquisa.map((produto) => <CardProduto produto={produto} />)}

                </div>
            </StyledDiv>
        </>
    )
}

export default Produtos