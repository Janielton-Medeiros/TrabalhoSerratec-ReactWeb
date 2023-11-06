import React from 'react'
import styled from 'styled-components'

const ButtonPrimary = styled.button`

    width: 190px;
    height: 75px;
    background: linear-gradient(to bottom, #c1c6c9, #2f2f2f);
    color: white;
    font-size: 1.3em;
    cursor: pointer;
    box-shadow: 0 0 5px 5px #44444434;
    border-radius: 12px;
    border: none;

    &:hover {
        transform: scale(1.2);
        transition: .7s;
    }

    &:active {
        transform: scale(.9);
    }
`
export const BtnPrimary = ({ children }) => {

    return (

        <ButtonPrimary>
            {children}
        </ButtonPrimary>
    )
}
