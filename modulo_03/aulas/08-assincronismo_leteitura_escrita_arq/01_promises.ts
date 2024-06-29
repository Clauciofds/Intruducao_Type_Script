// console.log('Primeira etapa')

// setTimeout(() => {
//     console.log('Segunda etapa')
// }, 3000)

// console.log('Terceira etapa')

/*
    Promessas (Promises)
    Pending -> Pendente | Fultiled -> Resolvida | Rejected
*/

console.log('Primeira etapa')

async function imprimir(texto: string){
    return new Promise((resolver, rejeitar) => {
        resolver(texto)
    })
}

imprimir('segunda etapa').then( resultado => console.log(resultado))

console.log('Terceira etapa')
