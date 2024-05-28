type TDados = {
    pedido: string
    quantidade: number
    estimativaEntrega: number
}

const diaAtual: number = 10
const dadosEntrega: TDados = {
    pedido: 'bola',
    quantidade: 9,
    estimativaEntrega: 11
}

console.log(diaAtual <= dadosEntrega.estimativaEntrega ? 'ENTREGA NAO ATRASADA' :'ENTREGA ATRASADA')

console.log(dadosEntrega.estimativaEntrega <= diaAtual? 'ENTREGA NAO ATRASADA' :'ENTREGA ATRASADA')

console.log(diaAtual > dadosEntrega.estimativaEntrega ? 'ENTREGA ATRASADA' : 'ENTREGA NAO ATRASADA')

console.log(dadosEntrega.estimativaEntrega < diaAtual? 'ENTREGA ATRASADA' : 'ENTREGA NAO ATRASADA')