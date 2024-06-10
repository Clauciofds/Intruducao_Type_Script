import express, { Request, Response } from 'express'

const server = express()

server.get('/home', (request: Request, response: Response) => {
    return response.send('Hello meu primeiro servidor NodeJS.js com express')
})

server.listen(3000)