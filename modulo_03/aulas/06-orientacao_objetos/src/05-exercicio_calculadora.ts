/*
    Implemente uma classe Calculadora que contenha as seguintes funcionalidades:
    Soma, Subtrair, Multiplicar, Dividir

    A classe deverá receber em seu método construtor, dois argumentos numéricos que
    serão manipulados por cada funcionalidade. Cada método deverá retornar o resultado
    da operação entre dois números.

    Não deverá ser possível acessar os valores dos números informados no método construtor,
    após a criação do objeto. Faça o teste com outros exmplos.
*/

type TNumeros = {
    num1: number
    num2: number
}

class Calculadora{
    private num1: number
    private num2: number

    constructor(valores: TNumeros) {
        this.num1 = valores.num1
        this.num2 = valores.num2
    }

    public somar(): number {
        return this.num1 + this.num2
    }
    public subtrair(): number {
        return this.num1 - this.num2
    }
    public multiplicar(): number {
        return this.num1 * this.num2
    }
    public dividir(): number {
        return this.num1 / this.num2
    }
}

const calcular = new Calculadora({num1: 2, num2: 4})
console.log(calcular.somar())