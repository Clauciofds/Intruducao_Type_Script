import express from 'express'

const server = express()

const controler = (request, response) => {
    return response.send('Hello meu primeiro servidor NodeJS.js com express')
}

server.get('/home', controler)

server.listen(3000)