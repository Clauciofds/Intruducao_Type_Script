/*
    === ~> Operador de igualdade restritiva (não faz conversão de tipos)
    ==  ~> Operador de igualdade abstrata (faz conversão de tipo:
           Exemplo 12 == '12' -> true por que converte a string em number)
    !== ~> Operador de diferença restritiva
    !=  ~> Operador de diferença abstrata
    <   ~> Operador de menor que
    >   ~> Operador de maior que
    <=  ~> Operador de menor igual que
    >=  ~> Opreador de maior igual que
*/

let num1 = 12
let num2 = '12'

num1 == num2

console.log(num1 === num2)