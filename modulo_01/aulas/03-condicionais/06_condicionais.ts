// O sistema a mensage do saldo de um cliente. O saldo era de 1 Real e o sistema está
// imprimindo a mensagem do saldo de um cliente. O saldo era de 1 Real e o sistema estava
// imprimindo a mensagem "Seu saldo é de R$ 1 reais" com o nome da moeda no plural, mas sabemos
// que o correto seria "1 real" e seria no plural apenas se o saldo fosse maior que 1.
// Crie um código para imprima a mensagem correta

const balance: number = 1

console.log(balance > 1 ? `Seu saldo é ${balance} reais` : `Seu saldo é ${balance} real`)
