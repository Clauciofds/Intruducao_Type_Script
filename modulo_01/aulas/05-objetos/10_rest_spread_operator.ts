// rest -> resto ou sobra

const pessoas = ['Cláucio', 'Pedro', 'Ana', 'João']

const [item, ...novaArray] = pessoas


console.log(novaArray, item)

const usuarios={
    nome:'Cláucio',
    email:'clauciofds@gmail.com',
    idade:50
}

const {idade, ...novaObjeto}=usuarios

console.log(novaObjeto, idade)

// spread -> espalhamento
const carros=['Pálio', 'Gol']

const novosCarroComum=[...carros,'Ferrari','Fuscão'] 

console.log(novosCarroComum)

const listaCarros={
    marca: 'Ford',
    modelo: 'Ranger'
}

const listaCarros1={
    ...listaCarros,
    cor:'Preto',
    ano:84
}

console.log(listaCarros1)