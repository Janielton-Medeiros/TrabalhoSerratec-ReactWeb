import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'
import { CarrinhoContext } from '../context/CarrinhoContext'
import { useContext, useEffect, useState } from 'react'
import { Item } from '../components/Item'
import styled from 'styled-components'
import { BiCheckSquare } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'

const StyledDiv = styled.div`

    width: 100%;
    height: calc(100% - 70px);
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;

    h1 {
        margin: 24px;
    }

    .quadro {

        width: 900px;
        height: 800px;
        background-color: #fff;
        border: 5px solid #ccc;
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;

        div:nth-child(1) {

            margin-top: 24px;
        }

        .input {

            display: flex;
            gap: 12px;
            align-items: center;
            margin: 12px;
        }

        .pagamentos, .descontos, .campo-pedido {

            width: 800px;
            background-color: #fff;
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.1);
        }

        .pagamentos, .descontos {

            h2 {
                margin-bottom: 12px;
            }

            h2::before,h2::after  {

                content: " - ";
                font-weight: lighter;
            }

            label {

                padding: 4px 24px 24px 4px;
            }

            button {

                width: 25px;
                height: 25px;
            }

            svg {

                width: 100%;
                height: 100%;

            }

            .pag {

                width: 120px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }

        .campo-pedido {

            height: 300px;
            overflow-y: scroll;

            .nome-produto {
                font-size: 18px;
                font-weight: bold;
                color: #333;
            }

            .quantidade-produto {
                font-size: 16px;
                color: #555;
            }

            .numero-pedido {
                
                font-size: 16px;
                color: #000;
            }
        }
    } 
`

export const Pedido = () => {

    const navigate = useNavigate()

    useEffect(() => {

        handleDesconto()
    }, [])

    const { itens, usuario } = useContext(CarrinhoContext)
    const [valorTotal, setValorTotal] = useState(0)
    const [cupom, setCupom] = useState('')

    const desconto = 10

    let valorInicial = 0


    const handleDesconto = () => {

        itens.map((item) => {

            if (cupom == '') {

                valorInicial += (item.preco * item.quantidade)
            } else if (cupom == "mengao") {

                alert(`O cupom ${cupom} foi aplicado`)
                valorInicial += (item.preco * item.quantidade) - 10
            } else {

                alert(`O cupom ${cupom} é inválido`)
                valorInicial += (item.preco * item.quantidade)
                setCupom('')
            }

            setValorTotal(valorInicial)
        })
    }

    const handleFinalizarPedido = async () => {

        const pedido = {

            idUsuario: usuario.id,
            itens: itens,
            valorTotal: valorTotal
        }

        await api.post('/pedidos', pedido)
        alert("o pedido foi finalizado.")
        navigate(`/pedidos/${usuario.id}`)
    
    }

    return (
        <>
            <Navbar />
            <StyledDiv>

                <h1>Finalizar Pedido</h1>

                <div className='quadro'>

                    <div className="campo-pedido">

                        <h2>itens: </h2>

                        {itens.map((item) => <Item item={item} />)}
                    </div>

                    <div className='pagamentos'>

                        <h2>Forma de Pagamento </h2>

                        <div className='pag'>
                            <label htmlFor="pix">Pix</label>
                            <input type="radio" name="pagamento" id='pix' />
                        </div>

                        <div className='pag'>
                            <label htmlFor="credito">Crédito</label>
                            <input type="radio" name="pagamento" id='credito' />
                        </div>

                        <div className='pag'>
                            <label htmlFor="debito">Débito</label>
                            <input type="radio" name="pagamento" id='debito' />
                        </div>
                    </div>

                    <div className="descontos">
                        <h2>Descontos</h2>

                        <label htmlFor="cupom">Digite o código do cupom: </label> <br />

                        <div className='input'>
                            <input type="text" onChange={(e) => { setCupom(e.target.value) }} />
                            <button onClick={handleDesconto}>
                                <BiCheckSquare />
                            </button>
                        </div>
                    </div>


                    <h3>Valor Total: R$ {valorTotal}</h3>

                    <button onClick={handleFinalizarPedido}>
                        Confirmar Pedido
                    </button>
                </div>

            </StyledDiv>
        </>
    )
}

