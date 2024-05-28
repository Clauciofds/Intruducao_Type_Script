// join -> junta todos os elementos de um string

type TArry = string

const strinsPaises: string = 'Brasil Argentina Uruguai Paraguai Chile  '

function inverteArray(arrayEntrada: TArry): string {
    const criarArray = arrayEntrada.trim().split('')    
    const stringInvertida = criarArray.reverse().join('')
    return stringInvertida
}

console.log(inverteArray(strinsPaises))

const arrayNumero: number[] = [1, 2, 3, 4, 5]

console.log(arrayNumero.join()) // 1,2,3,4,5
console.log(arrayNumero.join('')) // 12345
console.log(arrayNumero.join(' ')) // 1 2 3 4 5
console.log(arrayNumero.join('-')) // 1-2-3-4-5