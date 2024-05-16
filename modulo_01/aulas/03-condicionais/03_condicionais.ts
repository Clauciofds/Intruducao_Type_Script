// Escreva um programa que receba uma média escoloar e imprima o resultado
// conforme as condiçoes abaixo:
// Média menor que 4 -> Reprovado
// Média maior ou igual a 4 e menor que 7 -> Recuperação
// Média maior ou igual a 7 -> Aprovado

const finalNote: number = 6.9

if (finalNote < 4) {
    console.log('Reprovado')
} else if (finalNote < 7) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}