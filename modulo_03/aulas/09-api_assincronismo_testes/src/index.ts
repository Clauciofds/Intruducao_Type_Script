import "dotenv/config"
import express, { Application } from 'express'
import routes from './routes'
import { application } from "express"

const app: Application = express()

app.use(express.json())

app.use(routes)

app.listen(process.env.PORT, () => {
    console.log('Server started.')
})