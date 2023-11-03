import React from "react"
import styled from 'styled-components'

const StyledDiv = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 10em; 
    }
    
`

export const Home = () => {
    return (

        <>
            <StyledDiv>
                <h1>home</h1> 
            </StyledDiv>
        </>
    )
}
