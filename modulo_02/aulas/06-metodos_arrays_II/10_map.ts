// map -> percorre todos os elementos de um array e retorna um novo 
// array com o formato implementado

type TPeople = {
    nome: string
    lastName: string
    age: number
}

const peopleList: TPeople[] = [
    { nome: 'Guido', lastName: 'backend', age: 34 },
    { nome: 'José', lastName: 'backend', age: 24 },
    { nome: 'Ana', lastName: 'frontend', age: 26 },
    { nome: 'Paulo', lastName: 'frontend', age: 31 },
    { nome: 'Beatriz', lastName: 'backend', age: 24 },
    { nome: 'Joana', lastName: 'frontend', age: 25 }
]

const newArray = peopleList.map((p) => {
    return {
        fullName: `${p.nome} ${p.lastName}`,
        age: p.age
    }
})

console.log(newArray)

const names = ['Guido', 'Antonio', 'Maria', 'Joana']

const peopleArray = names.map((name) => {
    return {
        name
    }
})

console.log(peopleArray)