const usuarios = {
    nome: 'Cláucio',
    idade: 33,
    temCNH: true,
    habilidades: ['javascritp', 'php', 'java', 'typescritp']
}

// console.log(usuarios['habilidades'][1])
// quando a propriedade não foi determinada gera um mesnagem de undefined

console.log(Object.keys(usuarios))
usuarios.idade = 50
usuarios.email = 'clauciofds@gmail.com'

console.log(Object.keys(usuarios)) // Lista as propriedades de um objeto

console.log(usuarios)
console.log(`Meu nome é ${usuarios.nome} e tenho ${usuarios.idade} anos`)