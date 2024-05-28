/*
    Type Narrowing -> Estreitamento
    Tecnica utilizada para deixar o mais assertivo possível um tipo de utilizado
*/


function soma(num1: number | string, num2: number | string) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2
        console.log(typeof num1, typeof num2)
    } else if (typeof num1 === 'number' && typeof num2 === 'string') {
        return num1 + Number(num2)
        console.log(typeof num1, typeof num2)
    } else if (typeof num1 === 'string' && typeof num2 === 'number') {
        return Number(num1) + num2
    }
}

console.log(soma(1, '1'));
