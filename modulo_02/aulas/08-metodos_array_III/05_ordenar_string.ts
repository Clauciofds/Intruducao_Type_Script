// LocaleCompare -> método de comparação de strings

const word1 = 'c'
const word2 = 'b'

/*
    a - b = -1
    b - a = 1
    a - a = 0
*/

const wordList = ['a', 'b', 'A', 'C', 'd']

wordList.sort((a, b) => a.localeCompare(b))

console.log(wordList)
