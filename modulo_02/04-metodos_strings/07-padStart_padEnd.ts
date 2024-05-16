/*
    padSart -> completar o inicio da string com a correspondência, de acordo com o tamanho definido
    padEnd -> completar o fim da string com a correspondência, de acordo com o tamanho definido
*/

const texto = 'Cláucio'

console.log(texto.padStart(10, '- '))

const numCartao = '1234 5678 9012 3456'

console.log(numCartao.slice(-4).padStart(numCartao.length, '**** '))