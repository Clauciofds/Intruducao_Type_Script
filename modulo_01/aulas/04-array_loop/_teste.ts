const notas = [10, 9.5, 8, 9.3, 4, 9]

let menorNota = notas[0]

for(let nota of notas){
    if(nota<menorNota){
        menorNota = nota
    }
}

console.log(menorNota)