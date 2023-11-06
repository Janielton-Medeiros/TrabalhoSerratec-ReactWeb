import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'
import styled from 'styled-components'
import CardProduto from '../components/CardProduto'
import { CarrinhoContext } from '../context/CarrinhoContext'
import { useContext, useEffect, useState } from 'react'

const StyledPedido = styled.div`

  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;

`

export const Pedidos = () => {

  const { usuario } = useContext
  
  const [meusProdutos, setMeusProdutos] = useState([])

  useEffect(async () => {
    await getPedidos()
  }, [])

  const getPedidos = async () => {
    
    const response = await (await api.get(`/pedidos`)).data
    console.log(response)

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
        <h1>Meus pedidos</h1>
        <div>
          {meusProdutos.map((item) => <CardProduto produto={item}/> )}
        </div>
      </StyledPedido>
    </>
  )
}