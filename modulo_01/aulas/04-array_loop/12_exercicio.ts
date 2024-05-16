/*
    Faça um programa que conta quantas letras "a" existem
    em um determinada palavra. Imprima o resultado na tela.

    Obs.: No caso abaixo a string contém um letra maiúscula.
          Desta forma deve-se tratar antes ou durante a comparação
          usando as funções toLowerCase() ou toUpperCase()
*/



const word: string = 'JavAscrit'

let counter: number = 0

for(let letter of word.toLowerCase()){
    if(letter==='a'){
        counter+=1
    }
}

console.log(counter)