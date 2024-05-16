/*
    Faça uma função que tm um parâmetro chamado idade e que determina a
    faixa etária de uma pessoa a partir dessa idade.

    21 anos ou menos -> jovem
    22 a 65 anos -> adulto(a)
    66 ou mais anos -> idaso(a)
*/

const faixaEtaria = (idade) => {
    if (idade < 21) {
        return 'Jovem'
    } else if (idade < 66) {
        return 'Adulto(a)'
    }
    return 'Idoso(a)'
}

console.log(faixaEtaria(17));
console.log(faixaEtaria(65));
console.log(faixaEtaria(66));