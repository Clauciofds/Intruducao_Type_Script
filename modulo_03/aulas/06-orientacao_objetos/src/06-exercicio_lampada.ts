/*
    Implemente uma classe Lampada que, ao ser instanciada, deverá receber a sua potência em Watts.
    A classe terá três funcionalidade.

    Ligar (altera o estado da lâmpada para true)
    Desligar (alterar o estado da lâmpada para false)
    Medir Potência (retorna a potência da lâmpada em watts)

    Faça o teste com outros exemplos
*/

class Lampada{
    private potencia?: number
    private estado: boolean

    constructor(watts:number) {
        this.estado = false
        this.potencia = watts
    }

    public ligar(): void {
        this.estado = true
    }
    public desligar(): void {
        this.estado = false
    }
    public medirPotencia(): string {
        return `A potência da lâmpada é ${this.potencia} Watts`
    }
}

const l40W = new Lampada(50)

console.log(l40W)
console.log(l40W.medirPotencia())
l40W.ligar()
console.log(l40W)
l40W.desligar()