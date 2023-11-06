
import { api } from '../api/Api'
import { Navbar } from '../components/Navbar'

import styled from 'styled-components'

const StyledDiv = styled.div`
  /* width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content:center; */
    display: flex; 
    flex-direction: column; 
    justify-content: center; 
    align-items: center;
    height: 100vh; 


  .campo-pedido {
    width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 5px solid #ccc;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .nome-produto {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }

    .quantidade-produto {
      font-size: 16px;
      color: #555;
    }

    .numero-pedido {
      font-size: 16px;
      color: #000;
    }
  }
`;

const Pedidos = () => {
    return (
        <>
            <Navbar />
            <StyledDiv>
                <h1>Pedidos</h1>
                <br />
                <div className="campo-pedido">
                    <p className="nome-produto">Produto 1</p>
                    <p className="quantidade-produto">Quantidade: 1</p>
                    <p className="numero-pedido">Número do pedido: 123</p>
                </div>
                <button>Confirmar Pedido</button>
            </StyledDiv>
        </>
    );
};

export default Pedidos;
