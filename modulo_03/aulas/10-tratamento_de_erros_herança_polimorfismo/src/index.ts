import express from 'express'
import { BadRequestError, NotFoundError } from './erros'

const app = express()

type TUsuario = {
    nome: string
    email: string
}

const usuario = []

app.use(express.json())

app.post('/usuario', (req, res) => {
    const { nome, email } = req.body
    try {
        if (!nome) {
            throw new BadRequestError('O nome é obrigatório.')
        }

        if (!email) {
            throw new NotFoundError('O email é obrigatório.')
        }

        usuario.push({
            nome,
            email
        })

        return res.status(201).json({ nome, email })
    } catch (error) {
        const errorsList = [BadRequestError, NotFoundError]
        for (const item of errorsList){
            if(error instanceof item){
                return res.status(error.statusCode).json({
                    message: error.message
                })
            }
        }
        // if (error instanceof BadRequestError || error instanceof NotFoundError) {
        //     return res.status(error.statusCode).json({
        //         message: error.message
        //     })
        // }

        return res.status(500).json({
            message: 'Erro interno do servidor'
        })
    }
})

app.listen(3000, () => {
    console.log('API started')
})