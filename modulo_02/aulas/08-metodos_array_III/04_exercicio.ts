/*
    Dado o array de usuário abaixo, faca o rodenação dos resultados de forma crescente,
    sgundo a idade de cada usuário, Após isso inverta a ordenção
*/

type TUser = { name: string, age: number }

const users: TUser[] = [
    {name: 'João', age: 23},
    {name: 'Maria', age: 18},
    {name: 'ana', age: 20},
    {name: 'Ana', age: 20},
    {name: 'Rodrigo', age: 17},
    {name: 'rodrigo', age: 18}
]

users.sort((a, b) => {
    return a.age - b.age
})

users.sort((a, b) => {
    return b.name.localeCompare(a.name)
})

console.log(users)