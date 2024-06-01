/*
    filter -> filtra e retorna um novo array com todos os elementos
    encontrados.
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

const filterPeopleList = peopleList.filter((n) => {
    return n.idade < 50
})

console.log(filterPeopleList)

console.table(peopleList)