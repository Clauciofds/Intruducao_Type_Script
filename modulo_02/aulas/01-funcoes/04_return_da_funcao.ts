function nomeCompleto(nome, sobrenome) {
    const nomeCompleto = `${nome} ${sobrenome}`
    return nomeCompleto
}

const imprimir = nomeCompleto('Claucio', 'Santos')

console.log(imprimir)

function verificarIdade(idade) {
    if (idade <= 17) {
        return 'Não é maior de idade'
    }

    return 'É maior de idade'
    
}

console.log(verificarIdade(19));