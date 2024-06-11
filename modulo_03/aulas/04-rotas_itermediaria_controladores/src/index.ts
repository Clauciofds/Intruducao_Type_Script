import 'dotenv/config'
import express from 'express'

const server = express()

server.get('/', (req, res) => {
    return res.send('Server is Ok!')
})

server.listen(process.env.PORT)