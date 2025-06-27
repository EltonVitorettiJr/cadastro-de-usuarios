import { ContainerButtons, ContainerInputs, Form, Input, InputLabel } from "./styles.js"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api.js"

import UsersImage from "../../assets/users.png"
import Button from "../../components/Button"
import BackgroundImg from "../../components/TopBackground"
import Title from "../../components/Title"
import MainContainer from "../../components/MainContainer"

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {

    const data = await api.post("/usuarios", {

      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value

    })

    console.log(data)

  }

  return (

    <MainContainer>

      <BackgroundImg>
        <img src={UsersImage} alt="Users-image" />
      </BackgroundImg>
      <Form>
        <Title>Cadastrar Usuário</Title>
        <ContainerInputs>
          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName}></Input>
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge}></Input>
          </div>
        </ContainerInputs>
        <div style={{ width: "100%" }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="Email do usuário" ref={inputEmail}></Input>
        </div>
        <ContainerButtons>
          <Button type="button" onClick={registerNewUser} theme="primary">Cadastrar Usuário</Button>
        </ContainerButtons>
        <Button type="button" onClick={() => navigate("/lista-de-usuarios")}>Ver Usuários</Button>
      </Form>

    </MainContainer>

  )
}

export default Home