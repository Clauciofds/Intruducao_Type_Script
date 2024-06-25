const usuario={
    nome:'Cláucio',
    email:'clauciofds@gmail.com',
    endereco:{
        rua:'Rua A',
        numero:123
    }
}

const { nome, email, endereco:{ numero, rua} }=usuario

console.log(typeof email, rua, email)