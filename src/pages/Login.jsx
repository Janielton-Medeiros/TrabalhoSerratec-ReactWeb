import React from 'react'
import modelo from '../assets/img/modelo.jpg'
import background from '../assets/img/background.jfif'
import styled from 'styled-components'
import { api } from '../api/Api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MainLogin = styled.div`

  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: aliceblue;
  background-image: url(${background});
`;

const LeftLogin = styled.div`
  width: 55vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LeftLoginH1 = styled.h1`
  color: #010101;
  font-size: 5vh;
`;

const RightLogin = styled.div`
  width: 50vh;
  height: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const LeftLoginImage = styled.img`
  width: 55vh;
  border-radius: 20px;
  box-shadow: 0px 10px 40px black;
`;

const CardLogin = styled.form`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 35px;
  background-color: #2F2F2F;
  border-radius: 20px;
  box-shadow: 0px 10px 40px black;
`;

const CardLoginLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 11px;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    color: #008cff;
  }

  &:active {
    color: black;
  }
`;

const Textfield = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 10px 0;
`;

const TextfieldInput = styled.input`

  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: #ffffff;
  font-size: 12pt;
  box-shadow: 0px 10px 40px black;
  outline: none;
  box-sizing: border-box;
  font-family: Arial, sans-serif;

  &::placeholder {
    color: #0000002a;
  }
`;

const TextfieldLabel = styled.label`
  color: #ffffff;
  margin-bottom: 10px;
  font-size: 14pt;
`;

const BtnLogin = styled.button`
  width: 100%;
  padding: 16px 0px;
  margin: 25px;
  border: none;
  border-radius: 8px;
  outline: none;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 3px;
  color: black;
  background-color:#E1E0E8;
  cursor: pointer;
  box-shadow: 0px 10px 40px -12px black;

  &:hover {
    color: white;
    background-color: #008cff;
  }
`;


function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [nome, setNome] = useState('')
  const [senha, setSenha] = useState('')
  const [listaLogin, setlistaLogin] = useState([])

  const handleSave = async (e) => {
    e.preventDefault()
    await api.post('/login', { nome, email, senha })

  }

  const handleLimpar = () => {
    setNome('')
    setEmail('')
    setSenha('')
  }

  const getUsers = async (e) => {

    e.preventDefault()
    
    const response = await api.get('/users', {params: {email, senha}})

    const dados = response.data

    console.log(dados)

    if (dados.length == 1) {
      
      navigate('/produtos')
    } else {
      alert('Senha ou usuário inválidos!')
    }
  }

  return (

    <>
      <MainLogin src={background} onSubmit={getUsers}>
        <LeftLogin>
          <LeftLoginH1></LeftLoginH1>
          <LeftLoginImage src={modelo} alt="modelo" />
        </LeftLogin>
        <RightLogin >
          <CardLogin>
            <RightLogin></RightLogin>
            <Textfield>
              <TextfieldLabel>Email</TextfieldLabel>
              <TextfieldInput onChange={(e) => { setEmail(e.target.value) }} type='email' name='email' placeholder='exemplo@gmail.com' autoComplete='off' />
            </Textfield>
            <Textfield>
              <TextfieldLabel >Senha</TextfieldLabel>
              <TextfieldInput onChange={(e) => { setSenha(e.target.value) }} type="password" name='senha' placeholder='4/16 caracteres' />
            </Textfield>
            <BtnLogin type='submit'>Entrar</BtnLogin>
            <CardLoginLink href=""><h3>Novo usuário? Cadastre-se!</h3></CardLoginLink>
          </CardLogin>
        </RightLogin>
      </MainLogin>
    </>
  )
}

export default Login

