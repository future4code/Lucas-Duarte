import express, {Express, Response, Request} from 'express'
import cors from 'cors'

import {countries, country} from './countries'

const app: Express = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor pronto")
})

// GET 

app.get('/countries/all', (req: Request, res: Response) => {
    
    const result:{id: number, name: string}[] = countries.map(country => ({
            id: country.id,
            name: country.name
    }))
    
    res
    .status(200)
    .send(result)
})

app.get('/countries/search', (req: Request, res: Response) => {
    
    let result: country[] = countries
    try {

        if (req.query.name) {
            result = result.filter(
                country => (country.name).toLowerCase().includes(String(req.query.name).toLowerCase())
            )
        }
        if (req.query.capital) {
            result = result.filter(
                country => (country.capital).toLowerCase().includes(String(req.query.capital).toLowerCase())
            )
        }
        if (req.query.continent) {
            result = result.filter(
                country => (country.continent).toLowerCase().includes(String(req.query.continent).toLowerCase())
            )
        }
        if (!result.length) {
            throw new Error()
        }

        res
        .status(200)
        .send(result)

    } catch {
        res
        .status(404)
        .send("Country not found")
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {

    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )

    res
    .status(200)
    .send(result)
})

// PUT

app.put('/countries/edit/:id', (req: Request, res: Response) => {
    let errorCode: number = 401
    let errorMessage: string = "Unauthorized"

    const body = req.body

    try {

        if (!req.headers.authorization) {
            throw new Error()
        }

        if( (!body.name && !body.capital) ) {
            errorCode = 400
            errorMessage = "Faltou body."
            throw new Error()
        } 
        
        const selectedCountry: country | undefined = countries.find(
            country => country.id === Number(req.params.id)
        )
        
        if (selectedCountry === undefined) {
            errorCode = 404
            errorMessage = "Não encontramos esse país"
            throw new Error()
        }

        selectedCountry.name = body.name || selectedCountry.name
        selectedCountry.capital = body.capital || selectedCountry.capital
        
        res
        .status(200)
        .end()
        
    } catch {
        res
        .status(errorCode)
        .send(errorMessage)
    }

})
