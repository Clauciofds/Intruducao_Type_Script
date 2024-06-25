type TCarro = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia?: number
}

class CarroNovo {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia: number

    constructor(carro: TCarro){
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia ?? 3.2
    }
}

const sedan = new CarroNovo({
    cor: 'Preto',
    marca: 'GM', 
    modelo: 'Opala',
    ano: 1980
})

const pickup = new CarroNovo({
    cor: 'Laranja',
    marca: 'Ford',
    modelo: 'Ranger',
    ano: 1970,
    potencia: 2.2
})

pickup.cor = 'Branca'

console.table([sedan, pickup])
