/*
    Crie um objeto que representara uma calculadora.
    O objeto deve conter quatro metodo que realizara as quatro operacoes
    matematicas: soma, subtracao, multiplicacao e divisao

    Cada metodo devera retornar o resultado da operacao;
    Implemente os metodos com suas respectivas tipagem de parametro e retono.
*/

type TNumero = (num1: number, num2: number) => number

type TCalculadora = {
    soma: TNumero,
    subtracao: TNumero,
    multiplicaca: TNumero,
    divisao: TNumero
}

const calculadora: TCalculadora = {
    soma: (num1: number, num2: number): number => (num1 + num2),
    subtracao:(num1: number, num2: number): number => (num1 - num2),
    multiplicaca: (num1: number, num2: number): number => (num1 * num2),
    divisao: (num1: number, num2: number): number => (num1 / num2)
}

console.log(calculadora.soma(1, 3),
            calculadora.subtracao(3, 1),
            calculadora.divisao(4, 2),
            calculadora.multiplicaca(2, 4));
