// const respostas: string[] = ['A', 'B', 'C', 'A', 'B']
// const gabarito: string[] = ['A', 'B', 'A', 'C', 'C']

// let acertos: number = 0

// respostas.forEach((r, i) => {
//     if(r === gabarito[i]) {
//         acertos++
//     }
// })

// console.log(acertos);

const resultadoConcurso: number[] = [23, 21, 1, 32, 40]
const meuRegistro: number = 2

resultadoConcurso.forEach((r) => {
    if (r === meuRegistro) {
        console.log('APROVADO');
        
    }
})
