import fs from 'fs/promises'

fs.readFile('./bancoDeDados.json').then( resultado => {
    const json = resultado.toString()
    const bancoDeDados = JSON.parse(json)

    bancoDeDados.usuarios.push({
        nome: 'João',
        email: 'joao@email.com',
        idade: 34
    })

    fs.writeFile('./bancoDeDados.json', JSON.stringify(bancoDeDados))

}).catch( () =>
    console.log('Arquivo não encontrado')
)
