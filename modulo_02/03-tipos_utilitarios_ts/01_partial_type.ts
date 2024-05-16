/*
    Utilitário<Tipo> -> resulta em um novo tipo manupulado

*/

type TPessoa = {
    nome: string
    email: string
    idade: number
}

type TPessoaOpcional = Partial<TPessoa>

const usuario: TPessoa[] = []

function atualizarPessoa(pessoa: Partial<TPessoa>) {
    
}

usuario[usuario.length] = {
    nome: 'Claucio',
    idade: 50,
    email: 'clauciofss@email.com'
}

