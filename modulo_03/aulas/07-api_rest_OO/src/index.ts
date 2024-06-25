import express from 'express'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json('Ok')
})

app.listen(process.env.PORT, () => {
    console.log('Server inicialized')
})