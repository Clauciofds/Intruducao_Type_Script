interface ICarro {
    marca: string
    modelo: string
    ano: number
    acelerar(): string
}

class Carro implements ICarro {
    marca: string
    modelo: string
    ano: number

    velocidade: number

    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano

        this.velocidade = 0
    }
    
    acelerar(): string {
        return 'acelerando...'
    }
}

const uno: ICarro = new Carro('Fiat', 'Uno', 2000)

console.table(uno)