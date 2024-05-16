const palavras: string = 'ajjçjjjçk'
const vogais: string = 'aeiouAEIO'
let result: boolean = false

for (let letra of palavras) {
    for (let vogal of 'aeiouAEIO') {
        if (letra === vogal) {
            result = true
        }
    } 
}
console.log(result)
