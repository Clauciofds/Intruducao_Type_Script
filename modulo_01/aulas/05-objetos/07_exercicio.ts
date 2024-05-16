/*
    Crie um objeto que represente o cartão de consumo de um cliente. Deve ter:
    Nome
    Idade
    Produto consumido
    Cada produto terá:
    Nome do produto
    Preço unitário (em centavos)
    Quantidade comprada

    Coloque 03 produtos.
*/

type TCartao={
    cliente:string
    idade:number
    item:{
        nome:string
        preco:number
        quantidade:number
    }[]
}

const comanda:TCartao={
    cliente: 'Cláucio',
    idade: 50,
    item:[
        {
            nome:'Pizza',
            preco:9500,
            quantidade:1
        },
        {
            nome:'Pudim',
            preco:10000,
            quantidade:3
        }
    ]
}

console.log(comanda.item[1].preco)
// console.log(Object.keys(comanda))

/*
    Faça um programa que imprime um mesnsagem amigável do resumo do cartão de consumo
    (que inclui chamar o cliente pelo nome) que informa o valor que ele deve pagar.
*/

console.log(`Olá ${comanda.cliente}. Volte sempre!!\n`)

let total:number=0
console.log(`Item      Qtdde      Subtotal`)
for(let conta of comanda.item){
    const espacoNome='.'.repeat(10 - conta.nome.length)
    console.log(`${conta.nome}${espacoNome}${conta.quantidade}  ........${conta.quantidade*conta.preco}`)
    total+=conta.quantidade*conta.preco
}
console.log(`Total:...............${total}`)