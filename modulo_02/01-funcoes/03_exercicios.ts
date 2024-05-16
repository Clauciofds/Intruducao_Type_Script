/*
    Declare uma variável que aramazena um objeto contendo
    dados de uma pessoa: nome, idade profissoão e altura.

    Faça um função que tem um parâmetro. Essa função deve
    imprimir na tela a apresentação de uma pessoa, seguido o modelo abaixo:

    "Olá! Meu nome é João, sou um jovem de 12 anos, 1.3m de altura e sou estudante"
*/

const claucio = {
    nome: 'Claucio',
    idade: 50,
    profissao: 'Engenheiro de Produção',
    altura: 1.73
}

function printUsario(usuario) {
    return `Olá! Meu nome é ${usuario.nome}, sou um jovem de ${usuario.idade} anos, ${usuario.altura}m de altura e sou estudante`
}

console.log(printUsario(claucio))