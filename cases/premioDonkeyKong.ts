const simbolo1: string = 'a'
const simbolo2: string = 'c'
const simbolo3: string = 'a'



function solucao(simbolo1: string, simbolo2: string, simbolo3: string): string {
    if (simbolo1 === simbolo2 && simbolo2 === simbolo3) {
        return "GANHOU"
    } else {
        return "PERDEU"
    }
}

console.log(solucao(simbolo1, simbolo2, simbolo3))