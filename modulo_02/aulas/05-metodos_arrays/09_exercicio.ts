/*
    Faça um função que recebe parâmetros do tipo string e imprime na tela
    essa string invertida, ou seja, de trás para frente.
    Dica: Lembre-se que o método revere só pode ser chamado por arrays.
*/

type TArry = string

const strinsPaises: string = 'Brasil Argentina Uruguai Paraguai Chile  '

function inverteArray(arrayEntrada: TArry): string {
    const criarArray = arrayEntrada.trim().split('')    
    const explosaoInvertida = criarArray.reverse()
    let stringInvertida: string = ''

    for (const i of explosaoInvertida)
        stringInvertida += i
    return stringInvertida
}

console.log(inverteArray(strinsPaises))