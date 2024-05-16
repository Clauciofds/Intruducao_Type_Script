let infomacoes: [string, number, boolean]

let inativo: 0 = 0
let ativo: 1 = 1
let status: boolean = true

infomacoes = ['Cláucio', 50, status]

let usuario: [string, number, string, 'ativo' | 'inativo']

usuario = ['Claucio', 50, 'clauciofds@gmail.com', 'inativo']

const useState: [string, () => any] = ['javascript', function() { console.log('Olá, mundo') }]

// Destruturando a variável acima
const [ estado, funcao ] = useState

console.log(estado)

funcao()

console.log(useState);
