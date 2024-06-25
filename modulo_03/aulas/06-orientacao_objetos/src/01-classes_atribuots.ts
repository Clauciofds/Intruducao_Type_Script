class Carro {
    cor: string = ''
    marca: string = ''
    modelo: string = ''
    ano: number = 0
    potencia: number = 0
}

const fusca = new Carro()

fusca.ano = 1970
fusca.cor = 'Preto'
fusca.marca = 'Volkswagem'
fusca.modelo = 'Fafa'
fusca.potencia = 1300

const fiat = new Carro()

fiat.ano = 1980
fiat.cor = 'Branco'
fiat.marca = 'Fiat'
fiat.modelo = 'Uno'
fiat.potencia = 1000

console.table([fiat, fusca])