/*
    Crie um sistema de distribuição de senha por ordem de chegada
    a fila será representado pelo array ['Guido', 'João', 'Maira', 'Pedro', 'Joana', 'Ana']
    Você deve criar uma nova lista onde cada item representa um objeto contendo a senha e o nome de pessoa.
    A senha começa sempre em 1
*/

const fila = [
    'Guido', 'João', 'Maira', 'Pedro', 'Joana', 'Ana'
]

const pessoas = []

for(let i=0;i<fila.length;i++){
    pessoas[i]={
        nome: fila[i],
        senha: i+1
    }
}

console.log(pessoas)