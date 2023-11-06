import styled from 'styled-components';

const Foter = styled.footer`

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 8px 0 rgba( 31, 38, 135, 0.37 );
    border-top: 2px solid #2f2f2f; 
    background: linear-gradient(to right, #c1c6c9, #f0f8ff);
    position: fixed;
    bottom: 0;
    font-weight: bold;
`;

const A = styled.a`

    text-decoration: none;
    color:white;
`;

const Footer = () => {

    return (

        <Foter class="fixarRodape">
            <A href="https://github.com/Janielton-Medeiros/TrabalhoSerratec-ReactWeb" target="_blank">React Web Grupo 4 &COPY2023</A>
            &nbsp; | &nbsp;
            <A href="https://www.instagram.com/serratecoficial/" target="_blank">Instagram</A>
            &nbsp; | &nbsp;
            <A href="https://www.youtube.com/@SerratecOficial" target="_blank">Youtube</A>
        </Foter>
    )
}

export default Footer