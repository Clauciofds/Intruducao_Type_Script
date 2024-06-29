import fs from 'fs'

console.log('Ante de ler o arquivo')

const texto1 = fs.readFileSync('./texto.txt')
console.log(texto1.toString())

fs.writeFileSync('./texto1.txt', 'Um novo nome: Suzana')

const texto1Editado = fs.readFileSync('./texto1.txt')
console.log(texto1Editado.toString())

fs.writeFileSync('./texto2.txt', 'Ana, João e Maria')