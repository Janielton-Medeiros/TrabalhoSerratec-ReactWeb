import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import CardProduto from '../components/CardProduto'
import { CarrinhoContext } from '../context/CarrinhoContext'
import { useContext, useEffect, useState } from 'react'
import format from 'date-fns/format'

const StyledPedido = styled.div`

  width: 100%;
  background: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    
    padding: 12px;
    margin: 50px 0;
  }

  .container {

    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
    gap: 12px;
    padding: 24px;
    border-radius: 12px;
    border: 2px solid #2f2f2f;
    box-shadow: -15px 15px 15px #00000037;

    p {

      font-size: 1.2em;
    }

    .quadro {

      width: 500px;
      height: 100%;
      border-radius: 8px;
      background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
      border: 1px solid #2f2f2f;
      display: flex;
      justify-content: space-around;
      align-items: center;


      img {

        width: 220px;
        height: 310px;
        padding: 8px;
        border-radius: 12px;
      }
    }
  }
`

export const Pedidos = () => {
  
  const [meusProdutos, setMeusProdutos] = useState([])

  const currentDate = new Date()

  useEffect(async () => {

    await getPedidos()
  }, [])

  const getPedidos = async () => {
    
    const response = await (await api.get(`/pedidos`)).data

    const allItens = []
    response.forEach((item) => {
      allItens.push(...item.itens)
    })

    setMeusProdutos(allItens)
  }

  return (
    <>
      <Navbar />
      <StyledPedido>

        <h1>Meus pedidos: </h1>

        <div className='container'>

          <div >
            <p>Número do pedido: 001234124234-8 </p>
            <p>Data :{format(currentDate, 'dd/MM/yyyy')}</p>
          </div>

          { meusProdutos.map((item) => {

            return (

              <div >
                
                <div className='quadro'>
                  <img src={item.urlimg} alt="foto-produto" />
                  <section>
                    <h2>{item.nome}</h2>
                    <h3>{item.descricao}</h3>
                    <h4>Quantidade: {item.quantidade}</h4>
                  </section>
                </div>
              </div>
            )
          } )}
        </div>
      </StyledPedido>
      <Footer/>
    </>
  )
}