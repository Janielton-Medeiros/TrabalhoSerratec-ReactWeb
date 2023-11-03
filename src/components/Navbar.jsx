import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNavBar = styled.nav`

    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
    box-shadow: 0 4px 10px #2f2f2f6e;
    color: #2f2f2f;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 500;
    position: absolute;
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

    return (

        <StyledNavBar>

            <div>
                <Link to={"/home"}>Logo</Link>
            </div>

            <ul>
                <li>
                    <Link to={"/pedidos/:id"}>Pedidos</Link>
                </li>
                <li>Sobre nós</li>
                <li>Ajuda</li>
                <li>Categoria</li>
                <li>Carrinho</li>
                <li>Meu Perfil</li>
            </ul>
            
        </StyledNavBar>
    )
}
