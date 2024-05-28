const endereco: string = ", 24, Cidade de Almeirim, AL";
const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const result = endereco.split(', ')

const numerCasa: string = result[1]

console.log(result);

for (const numero of numerCasa) {
    if (!numeros.includes(Number(numero))) {
        console.log('nao e numero')
        break
    }
}

if (!Number(numerCasa)) {
    console.log('naljlj')
}

console.log(!Number(numerCasa))