// type TCarros = {
//     modelo:string
//     marca:string
//     ano:number
//     cor?:string  // Quando a tipagem é opcional devemos colocar o ? antes da tipagem
// }

// const carro: TCarros={
//     modelo:'Pálio',
//     marca:'Fiat',
//     ano:2000,
//     cor:'Vermeho'
// }

type TPessoa={
    nome:string
    senha:number
}

const fila:string[]=['Guido', 'João', 'Maira', 'Pedro', 'Joana', 'Ana']

const pessoas:TPessoa[]=[]

for(let i=0;i<fila.length;i++){
    pessoas[i]={
        nome: fila[i],
        senha: i+1
    }
}

console.log(pessoas)