// indexof -> retorna o indicie do elemento no array

type TPessoa = {
    nome: string
    email: string
}

const arrayPessoas: TPessoa[]  = [
    {
        nome: 'Claucio',
        email: 'clacuio@email.com'
    },
    {
        nome: 'Cleiton',
        email: 'cleiton@email.com'
    }
]

const arrayPessoas1 = ['Claucio', 'Cleito', 'Cassia']

console.log(arrayPessoas1.indexOf('Claucio')) // retorna a posição do array ou -1 para quando não encontrado.

console.log(arrayPessoas.indexOf({
    nome: 'Clacio',
    email: 'clacucio@email.com'
}))

console.log(arrayPessoas.indexOf(arrayPessoas[0])
