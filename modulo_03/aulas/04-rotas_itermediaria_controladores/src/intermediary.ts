import { Request, Response, NextFunction } from "express"

// Função intermédiaria
export const myFirstItermediary = (rep: Request, res: Response, next: NextFunction) => {
    console.log('Passei pelo intermediário indepedente')
    if (rep.params.item === 'sair') {
        return res.send('A requisição foi respondida no intermediário, antes de chegar no controlador')
    } 
    next()
}

export const intermediaryDefault = (req: Request, res: Response, next: NextFunction) => {
    console.log('Passou no intermédiaro geral')
    next()
}