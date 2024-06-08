type TListProdutos = {
    nome: string, price: number
}

const listBy: TListProdutos[] = [
    {nome: 'Sabonete', price: 23},
    {nome: 'Bolo', price: 20.10},
    {nome: 'Detergente', price: 15}
]
const arr = [885.9, 984.9, 444.9, 528.9, 528.9];
const min = Math.min(...arr);
const max = Math.max(...arr);
console.log(`Menor valor: ${min}`); // 444.9
console.log(`Maior valor: ${max}`); // 984.9

const prices = listBy.map((porduto) => 
porduto.price)
console.table(prices)

const minPrice = Math.min(...prices)

const produtPriceMin = listBy.find(produt => produt.price === minPrice)

console.table(produtPriceMin)
