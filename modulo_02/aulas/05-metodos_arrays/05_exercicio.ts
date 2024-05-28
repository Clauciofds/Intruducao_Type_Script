/*
    1-  Crie um arraz com 5 nomes de países
    2-  Adicione um país ao fim da lista
    3-  Imprima a lista na tela
    4-  Remova um país do fim da lista
    5-  Imprima a lista na tela
    6-  Adicione um país o início da lesta
    7-  Imprima a lista na tela
    8-  Remova um país do início da lista
    9-  Imprima a lista na tela
    10- Imprima o última país da lista na tela
    11- Imprima o segundo país da lista na tela
    12- Imprima o país de indice 2 na tela
*/

// 1
const arrayPaises: string[] = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai', 'Chile']

// 2
arrayPaises.push('Peru')

// 3
console.log(arrayPaises)

// 4
arrayPaises.pop()

// 5
console.log(arrayPaises)

// 6
arrayPaises.push('Guiana Francesa')

// 7
console.log(arrayPaises)

// 8
arrayPaises.shift()

// 9
console.log(arrayPaises)

// 10
console.log(arrayPaises[arrayPaises.length - 1])

// 11
console.log(arrayPaises[1])

// 12
console.log(arrayPaises[2])