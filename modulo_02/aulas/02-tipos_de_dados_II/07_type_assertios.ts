type TPessoa = {
    nome: string
    idade?: number
}

function saudacao(nome: string, idade: number) {
    console.log(`Meu nome é: ${nome}, tenho ${idade} anos`)
}

const clacuio: TPessoa = {
    nome: 'Claucio',
    idade: 50
}

// const idade = clacuio.idade as number

// saudacao(clacuio.nome, idade)

console.log('idade' in clacuio)
console.log(typeof clacuio.idade);


