// find -> busca um elemento em um array e retorna o próprio elemento

type TPeople = {
    nome: string
    idade: number
}

const people: TPeople[] = [
    {nome: 'Claucio', idade: 50},
    {nome: 'Nicolas', idade: 9},
    {nome: 'Cleiton', idade: 48}
]

const peopleFind = people.find((p) => {
    return p.nome === 'Claucio'
})

console.log(peopleFind)

const numList = [1, 23, 5, 89, 56, 110]

const result = numList.find(function(n) {
    return n === 23
})

if (result) {
    console.log('Número encontrado')
} else {
    console.log('Número não encontrado')
}

console.log(result)