// indexOf -> retorna o indice da correspondencia em uma string
// includes -> retorna verdadeiro ou falso caso encontre ou não correspondencia em um string

const texto: string = 'Eu adoro a Cubos Academy e adoro as aulas de lógica'

console.log(texto)

console.log(texto.indexOf('Eu'))
const searchWord: string = 'adoro'

if (texto.indexOf(searchWord) !== -1)
    console.log("Palavra encontrada")
else
    console.log("Não corresponde")

console.log(texto.includes('Eu') || texto.toLocaleLowerCase().includes('adoro')) 