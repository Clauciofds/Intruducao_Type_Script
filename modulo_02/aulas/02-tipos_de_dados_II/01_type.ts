import { log } from "console"

type TNome = string

const nome: TNome = 'Cláucio'

console.log(nome)

type TUsuario = {
    nome: string
    email: string
    idade: number
}

const usuario: TUsuario = {
    nome: 'Cleiton',
    email: 'cleiton@gmail.com',
    idade: 12
}

// Para determinar um array basta acrescentar a tipagem os colchetes []
const usuarios: TUsuario[] = [
    {
        nome: 'Cleiton',
        email: 'cleiton@gmail.com',
        idade: 12
    },
    {
        nome: 'Cleiton',
        email: 'cleiton@gmail.com',
        idade: 12
    }, {
        nome: 'Cleiton',
        email: 'cleiton@gmail.com',
        idade: 12
    }
]