import React from 'react'
import { useEffect, useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { CarrinhoContext } from "../context/CarrinhoContext"

export const BtnQuantidade = ({ produto }) => {

  const navigate = useNavigate()

  const { quantidade,setQuantidade } = useContext(CarrinhoContext)

  const aumentarQuantidade = () => {

    quantidade < produto.quantidade && setQuantidade(quantidade + 1)
  }

  const diminuriQuantidade = () => {

    quantidade >= 2 && setQuantidade(quantidade - 1)   
  }

  return (

    <div className='btn-more'>
      <button className='leftButton' onClick={aumentarQuantidade}>
        +
      </button>

      <input value={quantidade} type="number" min={1} max={produto.quantidade} />
      
      <button className='rightButton' onClick={diminuriQuantidade}>
        -
      </button>

    </div>
  )
}
