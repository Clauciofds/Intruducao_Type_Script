/*
    every -> testa se todos os elementos do array passam pelo
    teste implementado e retorna true ou false
*/

const num: number[] = [23, 3, 6, 87, 12, 15]

const resutado = num.every((elemento) => {
    return elemento < 100
})

console.log(resutado)