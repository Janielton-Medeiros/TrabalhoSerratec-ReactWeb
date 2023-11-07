import React, { useContext } from 'react'
import styled from 'styled-components'
import { FiX } from "react-icons/fi";
import { CarrinhoContext } from '../context/CarrinhoContext';
import { useNavigate } from 'react-router-dom';

const StyledUser = styled.div`

    width: 100%;
    background-color: #2f2f2f5f;
    border-radius: 2px;
    position: fixed;
    top: 70px;
    right: 0;
    left: auto;
    bottom: 0;

    #container {

        animation: aparecer 1s ease-in-out;
        width: 30%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        background: linear-gradient(-115deg, #c1c6c9, #f0f8ff);
        border-radius: 24px 0 0 24px ;
        position: fixed;
        top: 70px;
        right: 0;
        left: auto;
        bottom: 0;

        h1, h2 {
            padding: 24px;
        }

        svg {

            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
            top: 20px;
            right: 20px;
        }

        .quadro {

            width: 80%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            box-shadow: 0 2px 8px 0 rgba( 31, 38, 135, 0.37 );
            border-radius: 12px;
            background-color: #f2f2f2;

            img {

                width: 50%;
                border-radius: 50%;
                box-shadow: 0 2px 8px 0 rgba( 31, 38, 135, 0.37 );
                cursor: pointer;

                &:hover {

                    transform: scale(1.1);
                    transition: .3s;
                }
            }            
        }
    }


    @keyframes aparecer {
        
        from {
            
            transform: translateX(300px);
        }
    }

`

const Button = styled.button`

    width: 8.5em;
    height: 2.3em;
    margin: 0.5em;
    background: linear-gradient(115deg, #c1c6c9, #f0f8ff);
    color: #2f2f2f;
    border: 1px solid #ccc;
    border-radius: 0.625em;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    z-index: 1;
    overflow: hidden;

    &:hover {

        color: #2f2f2f;

        &:after {
            transform: skewX(-45deg) scale(1, 1);
            transition: all 0.5s;
        }
    }

    &::after {

        content: '';
        background: white;
        position: absolute;
        z-index: -1;
        left: -20%;
        right: -20%;
        top: 0;
        bottom: 0;
        transform: skewX(-45deg) scale(0, 1);
        transition: all 0.5s;
    }
`;

export const User = ({ isOpen, setOpenUser }) => {

    const { usuario } = useContext(CarrinhoContext)
    const navigate = useNavigate()

    const handleDeslogar = () => {

        alert("saindo...")
        navigate('/')
    }

    if (isOpen) {

        return (

            <StyledUser>
                <div id='container'>
                    <div className='quadro'>

                        <h1>Meu Perfil</h1>

                        <img onClick={() => { alert("tudo certo") }} src="https://i.pinimg.com/564x/a5/37/c0/a537c0c37e46b4bbb1133ad5ce583167.jpg" alt="foto perfil" />

                        <h2>{usuario.nome}</h2>

                        <h4>{usuario.email}</h4>

                    </div>

                    <FiX onClick={setOpenUser} />

                    <Button onClick={handleDeslogar}>
                        Deslogar
                    </Button>
                </div>


            </StyledUser>
        )
    }

    return null
}
