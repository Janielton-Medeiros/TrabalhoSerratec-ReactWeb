import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Carrinho } from "../components/Carrinho"
import logo from '../assets/img/logo.svg'
import { User } from './User'

const StyledNavBar = styled.nav`

    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
    box-shadow: 0 2px 8px 0 rgba( 31, 38, 135, 0.37 );
    border-bottom: 2px solid #2f2f2f; 
    color: #2f2f2f;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    z-index: 1;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    ul {

        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;

        li {

            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            font-weight: regular;
            list-style-type: none; 

            &:hover {

                text-shadow: 0 2px 10px #444;
                transform: translateY(-5px);
                transition: .3s ease-out;
            }
        }
    }

    a {

        text-decoration: none;
        color: #2f2f2f;
    }
`

export const Navbar = () => {

    const [openCarrinho, setOpenCarrinho] = useState(false)
    const [openUser, setOpenUser] = useState(false)

    return (

        <StyledNavBar>

            <div>

                <Link  to={"/produtos"}>
                    <img src={logo}  />
                </Link>
                
            </div>

            <ul>
                <li>
                    <Link to={"/pedidos/:id"}>Pedidos</Link>
                </li>
                <li onClick={() => {setOpenCarrinho(true)}}>Carrinho</li>
                <li>Ajuda</li>
                <li onClick={() => {setOpenUser(true)}}>Meu Perfil</li>
            </ul>
            <Carrinho isOpen={openCarrinho} setCarrinhoOpen={() => setOpenCarrinho(!openCarrinho)} />
            <User isOpen={openUser} setOpenUser={() => setOpenUser(!setOpenUser)}/>
        </StyledNavBar>
    )
}
