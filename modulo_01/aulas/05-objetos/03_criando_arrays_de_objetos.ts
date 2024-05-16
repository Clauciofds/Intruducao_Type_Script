const usuarios = [
    {
        nome: 'Cláucio',
        email: 'clacuiofds@gmail.com'
    },
    {
        nome: 'João',
        email: 'joao@email.com'
    },
    {
        nome:'Maria',
        email:'maria@email.com'
    }
]

for(let usuario of usuarios){
    const espacoNome='.'.repeat(10 - usuario.nome.length)
    console.log(`Nome: ${usuario.nome}${espacoNome} Email: ${usuario.email}`)
}