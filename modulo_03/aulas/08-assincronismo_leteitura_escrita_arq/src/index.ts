import express from 'express'
import fs from 'fs/promises'

const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    const bancoDeDados = await fs.readFile('bancoDeDados.json')

    const resultado = JSON.parse(bancoDeDados.toString())

    return res.json(resultado.usuarios)
})

app.post('/usuarios', async (req, res) => {
    const { nome, email, idade } = req.body

    const bancoDeDados = await fs.readFile('bancoDeDados.json')

    const resultado = JSON.parse(bancoDeDados.toString())

    resultado.usuarios.push({
        nome, email, idade
    })

    await fs.writeFile('bancoDeDados.json', JSON.stringify(resultado))

    return res.status(201).json({ nome, email, idade })
})

app.listen(3000)