/*
Crie um array de números aleatórios e faça um programa
que calcule e imprima na tela a soma dos itens de uma array.
Requisito: usar o loop for tradicional
*/


const numList = [1, 34, 89, 23, 2, 4]
let result = 0

for (let i = 0; i < numList.length; i++){
    result += numList[i]
}

console.log(result)


// Cria lista vazia
let numRandomList: number[] = []

for (let i: number = 10; i > 0; i--){
    // Cria um número aleatório entre 0 - 10
    let numRandom: number = Math.random() * (10 - 0) + 0
    // Acrescenta o número inteiro a lista
    numRandomList[numRandomList.length] = Math.floor(numRandom)
}

// Ordena a lista criada
console.log(numRandomList.sort())
console.log(typeof numRandomList)