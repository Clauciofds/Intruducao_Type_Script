/*
    findIndex -> busca um elemento em um array e retorna o indice do elemento,
    caso ele exista, pelo contrário retorna -1.
*/
type TPeople = {
    nome: string
    idade: number
}

const peopleList: TPeople[] = [
    {nome: 'Claucio', idade: 50},
    {nome: 'Nicolas', idade: 9},
    {nome: 'Cleiton', idade: 48}
]

const peopleFind = peopleList.findIndex((p) => {
    return p.nome === 'Claucio'
})

console.log(peopleFind)

const numList = [1, 23, 5, 89, 56, 110]

const result = numList.findIndex(function(n) {
    return n <= 23
})

if (result !== -1) {
    console.log('Ok')
} else {
    console.log('Nok')
}

console.log(result)