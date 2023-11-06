import React from 'react'
import { useContext } from "react"
import { CarrinhoContext } from "../context/CarrinhoContext"

export const BtnQuantidade = () => {

  const { produto } = useContext(CarrinhoContext)

  const { quantidade,setQuantidade } = useContext(CarrinhoContext)

  const handleChangeQuantidade = (e) => {

    setQuantidade(e.target.value)
  }

  const aumentarQuantidade = () => {

    quantidade < produto.quantidade && setQuantidade(quantidade + 1)
  }

  const diminuriQuantidade = () => {

    quantidade >= 2 && setQuantidade(quantidade - 1)   
  }

  return (

    <div className='btn-more'>
      <button className='rightButton' onClick={diminuriQuantidade}>
        -
      </button>

      <input onChange={handleChangeQuantidade} value={quantidade} type="number" min={1} max={produto.quantidade} />

      <button className='leftButton' onClick={aumentarQuantidade}>
        +
      </button>
      
    </div>
  )
}
