import express, { Response, Request } from 'express'
import cors from 'cors'

import { AddressInfo } from "net";

import {users, user, UserType} from './users'

const app = express()

app.use(express.json())
app.use(cors())


app.get('/users', (req: Request, res: Response): void => {

    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send("Error searching for users!")
    }

})

app.get('/users/search', (req: Request, res: Response): void => {

    let errorMessage: string = "Erro!"

    try {

        const user: user | undefined = users.find(
            user => (user.name).toLowerCase().includes(String(req.query.name).toLowerCase())
        )

        if (!user) {
            errorMessage = "Não encontramos nenhum usuário com esse nome!"
            throw new Error()
        }

        res.status(200).send(user)

     } catch {
        res.status(401).send(errorMessage)
     }
})

app.get('/users/:type', (req: Request, res: Response): void => {

    let errorMessage: string = "Erro!"
    
    try {

        let params = req.params.type.toUpperCase()

        if (!(params in UserType)) {
            errorMessage = "Não existe esse tipo!"
            throw new Error()
        }

        const usersByType = users.filter( (user) => user.type === params)

        res.status(200).send(usersByType)

    } catch {
        res.status(400).send(errorMessage)
    }
})

app.post('/users/create', (req: Request, res: Response): void => {

    try {
        const {id, name, email, type, age} = req.body
        const user: user = {
            id,
            name,
            email, 
            type,
            age
        }

        users.push(user)
        res.status(200).send("Usuário criado com sucesso")

    } catch(error) {
        res.status(400).send("Erro ao criar usuário")
    }
})

app.put('/users/edit/:id', (req: Request, res: Response): void => {

        let errorMessage = "Erro!"

    try {

        const {name} = req.body
        const id = req.params.id

        const selectedUser: user | undefined = users.find(
          user => user.id === Number(id)
        )

        if (!selectedUser) {
            errorMessage = "Usuário não encontrado"
            throw new Error()
        }

        selectedUser.name = name + "-ALTERADO"

        res.status(200).send("Usuário editado com sucesso")
    } catch(error) {
        res.status(400).send(errorMessage)
    }
})

app.patch('/users/reedit/:id', (req: Request, res: Response): void => {

    let errorMessage = "Erro!"

    try {

        const {name} = req.body
        const id = req.params.id

        const selectedUser: user | undefined = users.find(
          user => user.id === Number(id)
        )

        if (!selectedUser) {
            errorMessage = "Usuário não encontrado"
            throw new Error()
        }

        selectedUser.name = name + "-REALTERADO"

        res.status(200).send("Usuário editado com sucesso")
    } catch(error) {
        res.status(400).send(errorMessage)
    }

})

app.delete('/users/delete/:id', (req: Request, res: Response): void => {

    let errorMessage = "Usuário não deletado!"

    try {

        const id = Number(req.params.id)

        const userIndex: number = users.findIndex(
            (user) => user.id === id
        )

        if (userIndex === -1) {
            errorMessage = "Usuário não encontrado"
            throw new Error()
        }

        users.splice(userIndex, 1)

        res.status(200).send("Usuário deletado com sucesso!")
    } catch(error) {
        res.status(400).send(errorMessage)
    }
})



// Configuração de rede:

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });