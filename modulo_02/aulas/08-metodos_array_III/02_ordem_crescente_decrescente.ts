/*
    se a comparação retorna um valor negativo, o item 1 vem antes do item 2
    se a comparação terorna um valor positivo, o item 2 vem antes do item 1
    se a comparação retornar 0, nunhem item sofre alteração
*/

const numList = [5, 2, 40, 21, 1, 300]
const wordList = ['a', 'b', 'A', 'C', 'd']

// ordenação crescente
numList.sort(function(item1, item2){
    if (item1 < item2) {
        return -1
    }
    if (item1 > item2) {
        return 1
    }
    return 0
})

console.log(numList)

// ordenação decrescente
numList.sort(function(item1, item2){
    if (item1 < item2) {
        return 1
    }
    if (item1 > item2) {
        return -1
    }
    return 0
})

console.log(numList)

// ordenação decrescente
wordList.sort(function(item1, item2){
    if (item1 < item2) {
        return 1
    }
    if (item1 > item2) {
        return -1
    }
    return 0
})

console.log(wordList)