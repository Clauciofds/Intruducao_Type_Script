// pop -> Remove o ultimo elemento do array e retorna o elemento que foi removido.

const arrayNum: number[] = [12, 1, 45, 76, 100]

const arrayNova: number[] = []

function guardarElementoRemovidos(arrayOriginal: number[]): number[] | string {
    // Remove o último elemento da array original
    let elementoRemovido: number | undefined = arrayOriginal.pop()
    
    if (elementoRemovido !== undefined) {
        //Crie uma nova array e adicione o elemento removido
        arrayNova.push(elementoRemovido)
        return arrayNova
    } else {
        return 'Array original vazia'
    }
}

console.log(guardarElementoRemovidos(arrayNum))
console.log(guardarElementoRemovidos(arrayNum))
console.log(arrayNum);
