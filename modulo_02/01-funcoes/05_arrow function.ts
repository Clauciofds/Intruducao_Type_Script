// arrow function

function verificarIdade(idade) {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }

    return 'É maior de idade'
    
}

console.log(verificarIdade(19))

const verificarIdade1 = (idade) => {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }
    return 'É maior de idade'
}

console.log(verificarIdade1(16));
