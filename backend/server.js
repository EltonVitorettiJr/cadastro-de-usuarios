import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.get(`/`)

app.get(`/usuarios`, async (req, res) => {

    const users = await prisma.user.findMany()

    res.status(201).json(users)

})

app.delete(`/usuarios/:id`, async (req, res) => {

    await prisma.user.delete({

        where: {
            
            id: req.params.id
            
        }

    })

    res.status(201).json('Usuário deletado com sucesso!')

})

app.post(`/usuarios`, async (req, res) => {
    
    const user = await prisma.user.create({
        
        data: {
           
            name: req.body.name,
            age: req.body.age,
            email: req.body.email

        }

    })

    res.status(201).json(user)
})

app.put(`/usuarios/:id`, async (req, res) => {

    const user = await prisma.user.update({
    
        where: {
            
            id: req.params.id
            
        },
        data: {
            
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
            
        }
    
    })

    res.status(201).json(user)

})

app.listen(3000)

/*
CRUD
C - create (post)
R - read (get)
U - update 
D - delete (delete)

http://localhost:3000/usuarios

MONGODB
 - eltonjr
 - 5pOxBRvirOWDPuYV
*/