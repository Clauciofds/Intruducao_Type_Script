// A utilização do caracter | (pipe) adiciona opção de tipagem para variável
const identificador: number | string | '123' = '123'

type TPessao = {
    nome: string
    email: string
    idade?: number | string  // O ( ? ) torna essa propriedade opcional
}

const usuarios: TPessao[] = []

usuarios[usuarios.length] = {
    nome: 'Cláucio',
    email: 'clauciofds@gmail.com',
    idade: 50
}

usuarios[usuarios.length] = {
    nome: 'cleiton',
    email: 'cleiton@gmail.com',
}

usuarios[usuarios.length] = {
    nome: 'Nicolas',
    email: 'nicolas@gmail.com',
    idade: '12'
}

console.log(usuarios);
