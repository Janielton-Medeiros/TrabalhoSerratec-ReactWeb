import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'
import { CarrinhoContext } from '../context/CarrinhoContext'
import { useContext, useEffect, useState } from 'react'
import { Item } from '../components/Item'
import styled from 'styled-components'
import { BiCheckSquare } from "react-icons/bi";

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

        .pagamentos, .descontos, .campo-pedido {

            width: 800px;
            background-color: #fff;
            border: 2px solid #ccc;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 0px 20px 0px hsla(0, 0%, 0%, 0.1);

            h2::before,h2::after  {

                content: " - ";
                font-weight: lighter;
            }
        }

        .campo-pedido {

            height: 300px;
            margin: 0 auto;
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

    useEffect(() => {

        handleDesconto()
    }, [])

    const { itens } = useContext(CarrinhoContext)
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

                        <label htmlFor="pix">Pix</label>
                        <input type="radio" name="pagamento" id='pix' />

                        <label htmlFor="credito">Crédito</label>
                        <input type="radio" name="pagamento" id='credito' />

                        <label htmlFor="debito">Débito</label>
                        <input type="radio" name="pagamento" id='debito' />
                    </div>

                    <div className="descontos">
                        <h2>Descontos</h2>

                        <label htmlFor="cupom">Digite o código do cupom: </label> <br />
                        <input type="text" onChange={(e) => { setCupom(e.target.value) }} />
                        <button onClick={handleDesconto}>
                            <BiCheckSquare />
                        </button>
                    </div>


                    <h3>Valor Total: R$ {valorTotal}</h3>
                    <button>Confirmar Pedido</button>
                </div>


            </StyledDiv>
        </>
    )
}

