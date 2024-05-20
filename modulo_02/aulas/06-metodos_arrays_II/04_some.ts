/*
    some -> testa se pelo menos um dos elemento atende a
    condição implementada e retorna verdadeiro ou falso
*/

const num: number[] = [1, 5, 3, 4]

const resutadoNum = num.some((i) => {
    return i % 2 === 0
})

console.log(resutadoNum);

type TPeople = {
    nome: string
    idade: number
}

const people: TPeople[] = [
    {
        nome: 'Claucio',
        idade: 50
    },
    {
        nome: 'Nicolas',
        idade: 9
    },
    {
        nome: 'Cleiton',
        idade: 48
    }
]

const resutadoPeople = people.some((p) => {
    return p.idade < 18
})

console.log(resutadoPeople);
