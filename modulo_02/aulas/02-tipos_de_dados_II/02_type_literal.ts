let modelo: 'Ferrari'

// Quando se aplica um tipo literal para um variável, como no exemplo a variável não aceitará outro valor
modelo = 'Ferrari'
// modelo = 'Pálio'
// modelo = 'Ford Ká'


let inativo: 0
let ativo: 1

inativo = 0
// ativo = 0 // exemplo de erro por determinada atribuição de tipagem

type TCarroFord = {
    modelo: string
    marca: 'Ford'
    ano: number
    cor: string
}

const carros: TCarroFord[] = []

carros[carros.length] = {
    modelo: 'Fiesta',
    ano: 1990,
    marca: "Ford",
    cor: 'azul'
}