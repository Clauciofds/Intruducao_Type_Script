"use strict";
/*
    Implemente uma classe Calculadora que contenha as seguintes funcionalidades:
    Soma, Subtrair, Multiplicar, Dividir

    A classe deverá receber em seu método construtor, dois argumentos numéricos que
    serão manipulados por cada funcionalidade. Cada método deverá retornar o resultado
    da operação entre dois números.

    Não deverá ser possível acessar os valores dos números informados no método construtor,
    após a criação do objeto. Faça o teste com outros exmplos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Calculadora {
    num1;
    num2;
    constructor(valores) {
        this.num1 = valores.num1;
        this.num2 = valores.num2;
    }
    somar() {
        return this.num1 + this.num2;
    }
    subtrair() {
        return this.num1 - this.num2;
    }
    multiplicar() {
        return this.num1 * this.num2;
    }
    dividir() {
        return this.num1 / this.num2;
    }
}
const calcular = new Calculadora({ num1: 2, num2: 4 });
console.log(calcular.somar());
