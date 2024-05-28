const numList = [5, 2, 40, 21, 1, 300]
const wordList = ['a', 'b', 'A', 'C', 'd']

numList.sort((a, b) => {
    return a - b
})

console.log(numList)

numList.sort((a, b) => {
    return b - a
})

console.log(numList)