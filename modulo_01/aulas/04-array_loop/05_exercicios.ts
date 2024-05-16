const numList: number[] = []

let i: number = 10
while (i > 0){
    numList[numList.length] = i
    i--
}

// console.log(numList.length)
// console.log(numList)

i = 0
while (i < numList.length){
    console.log(numList[i])
    i++
}
