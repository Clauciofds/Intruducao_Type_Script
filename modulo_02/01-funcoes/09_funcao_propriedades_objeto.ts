type TPessoa = {
    nome: string
    sobrenome: string
    nomeCompleto: () => void
}

const pessoa = {
    nome: 'Claucio',
    sobrenome: 'Santos',
    nomeComplento: function() {
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`)
    }
}

type pessoa1 = {
    nome: string
    sobrenome: string
    nomeCompleto: (idade: number) => void
}

const pessoa1 = {
    nome: 'Cleiton',
    sobrenome: 'Santos',
    nomeCompleto: function(idade: number) {
        console.log(`${this.nome} ${this.sobrenome}, ${idade}`)
    }
}

pessoa1.nomeCompleto(30)