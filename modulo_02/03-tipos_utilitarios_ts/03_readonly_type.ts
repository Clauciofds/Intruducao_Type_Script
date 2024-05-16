/*
   readonly<Type> -> somente leitura

*/

type TPessoa = {
    nome: string
    email: string
    idade?: number
}

const usuario: Readonly<TPessoa> = {
    nome: 'Claucio',
    idade: 50,
    email: 'clauciofss@email.com'
}

// usuario.nome = 'Joao' // Dara erro

console.log(usuario);

const usuarios: Readonly<TPessoa> = {
    nome: 'Cleiton',
    idade: 48,
    email: 'cleiton@email.com'
}

// usuarios[0].nome = 'Joala'