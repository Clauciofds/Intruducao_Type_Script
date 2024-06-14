import { Request, Response} from 'express'

const users = [
    {name: 'Claucio', email: 'claucio@email.com'},
    {name: 'Cleiton', email: 'cleiton@email.com'},
    {nome: 'Maria', email: 'maria@email.com'}
]

export const itemProduts = (req: Request, res: Response) => {
    console.log(req.params.item)
    return res.send('Cheguei no controlador')
}

export const searchUser =  (req: Request, res: Response) => {
    const { email } = req.params
    const user = users.find((item) => item.email === email)
    if (!user ) {
        return res.send("User don't exist")
    }
    return res.send(user)
}

export const searchUserQuery = (req: Request, res: Response) => {
    const { email } = req.query
    if (!email) {
        return res.send('paramentro não encontrado')
    }
    const user = users.find(item => {
        return item.email === email
    })

    if (!user) {
        return res.send("User don't exist")
    }

    return res.send(user)
}