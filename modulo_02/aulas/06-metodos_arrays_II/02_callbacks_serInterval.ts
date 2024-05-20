// Repete a função com um itervalo pré determinado
// clearInterval(id)

// setInterval(() => {
//     console.log('Olá mundo')
//     clearInterval(1)
// }, 1000)

let contador = 5

// function bomba() {
//     console.log(contador)
//     contador--

//     if (contador === 0) {
//         console.log('0 Booooommmm')
//         clearInterval(id)
//     }
// }

// // Contador regressivo que para em 0 usando arrow function
// const id = setInterval(() => {
//     console.log(contador)
//     contador--
//     if (contador === 0) {
//         console.log('0 Booomm')
//         clearInterval(id) // Interrompe o intervalo em 0
//     }
// }, 1000)

//  USANDO UM TERNÁRIO
const id: any = setInterval(() => (contador ?
    console.log(contador--) : (console.log('0 Booommm'),
    clearInterval(id))), 1000
)
