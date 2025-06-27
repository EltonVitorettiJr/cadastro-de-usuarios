import { CardUsers, TrashIcon, UsersContainer } from "./styles"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

import api from "../../services/api"
import BackgroundImg from "../../components/TopBackground"
import Button from "../../components/Button"
import Title from "../../components/Title"
import UsersImage from "../../assets/users.png"
import MainContainer from "../../components/MainContainer"
import Trash from "../../assets/trash.svg"

function ListUsers() {

    const [users, setUsers] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        async function usersList() {

            const { data } = await api.get("/usuarios")

            setUsers(data)

        }

        usersList()

    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id )

        setUsers(updatedUsers)
    }

    return (

        <MainContainer>
            <BackgroundImg><img src={UsersImage} alt="users-image" /></BackgroundImg>
            <Title>Lista de Usuários</Title>
            <UsersContainer>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon onClick={() => deleteUser(user.id)} src={Trash} alt="trash-icon"/>
                    </CardUsers>
                ))}
            </UsersContainer>
            <Button type="button" onClick={() => navigate('/')}>voltar</Button>
        </MainContainer>

    )
}

export default ListUsers