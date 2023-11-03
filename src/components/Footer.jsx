import styled from 'styled-components';

const Foter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    align-items: center;
    text-align: center;
    font-weight: bold;
`;

const A = styled.a`
    text-decoration: none;
    color:white;

`;

const Footer = () => {
    return (
    <>
    <Foter class="fixarRodape">
        <A href="https://github.com/Janielton-Medeiros/TrabalhoSerratec-ReactWeb" target="_blank">React Web Grupo 4 &COPY2023</A>
        &nbsp; | &nbsp;
        <A href="https://www.instagram.com/serratecoficial/" target="_blank">Instagram</A>
        &nbsp; | &nbsp;
        <A href="https://www.youtube.com/@SerratecOficial" target="_blank">Youtube</A> 
    </Foter>
    </>
    )
}

export default Footer