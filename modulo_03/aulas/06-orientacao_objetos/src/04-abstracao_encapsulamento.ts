type TCarroM = {
    cor: string
    marca: string
    modelo: string
    ano: number
    potencia?: number
}

class CarroMetodo {
    public cor: string
    private marca: string
    private modelo: string
    private ano: number
    private potencia: number

    private ligado: boolean
    private aceleracao: number

    constructor(carro: TCarroM){
        this.cor = carro.cor
        this.marca = carro.marca
        this.modelo = carro.modelo
        this.ano = carro.ano
        this.potencia = carro.potencia ?? 3.2
        this.ligado = false
        this.aceleracao = 0
    }

    public ligarOuDesliga(): void {
        if (this.ligado) {
            this.desacelerar()
            this.ligado = false
        } else {
            this.ligado = true
        }
        // this.ligado = this.ligado ? false : true
        // this.ligado = !this.ligado
    }

    public acelerar(rpm: number): void {
        this.aceleracao += rpm
    }

    public desacelerar(): void {
        this.aceleracao = 0
    }

    public estadoDoCarro(): string{
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado'
    }
    
    public equiparTurbo(cilindradas: number): number {
        return this.potencia += cilindradas
    }
}

const suv = new CarroMetodo({
    cor: 'Preto',
    marca: 'GM', 
    modelo: 'Taurus',
    ano: 1980
})

const hat = new CarroMetodo({
    cor: 'Laranja',
    marca: 'Ford',
    modelo: 'Celta',
    ano: 1970,
    potencia: 2.2
})

hat.cor = 'Branca'
// hat.modelo = 'lkj'

hat.ligarOuDesliga()

hat.acelerar(15)

console.table([suv, hat])

console.log(hat.estadoDoCarro())

hat.ligarOuDesliga()

hat.equiparTurbo(1.5)

console.table([suv, hat])

console.log(hat.estadoDoCarro());
