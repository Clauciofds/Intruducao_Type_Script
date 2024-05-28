/*
   Required<Tipo> -> Tipos obrigatórios

*/

type TPessoa = {
    nome: string
    email: string
    idade?: number
}

const usuario: TPessoa[] = []

type TPessoaObrigatorio = Required<TPessoa>

function atualizarPessoa(pessoa: TPessoaObrigatorio) {
    // Cadastra usuaio
}

usuario[usuario.length] = {
    nome: 'Claucio',
    idade: 50,
    email: 'clauciofss@email.com'
}

atualizarPessoa({
    nome: 'Cleiton',
    idade: 49,
    email: 'cleiton@emial.com'
})

atualizarPessoa({
    nome: 'Claucio',
    email: 'clauciojds@email.com'
})