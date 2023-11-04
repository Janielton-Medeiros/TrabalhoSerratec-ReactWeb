import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'

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

const Pedidos = () => {
    return (

        <>
            <Navbar />
            <StyledDiv>
                <h1>Pedidos</h1> 
            </StyledDiv>
        </>
    )
}

export default Pedidos