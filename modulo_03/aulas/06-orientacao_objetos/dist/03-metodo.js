"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarroMetodo {
    cor;
    marca;
    modelo;
    ano;
    potencia;
    ligado;
    aceleracao;
    constructor(carro) {
        this.cor = carro.cor;
        this.marca = carro.marca;
        this.modelo = carro.modelo;
        this.ano = carro.ano;
        this.potencia = carro.potencia ?? 3.2;
        this.ligado = false;
        this.aceleracao = 0;
    }
    ligarOuDesliga() {
        if (this.ligado) {
            this.desacelerar();
            this.ligado = false;
        }
        else {
            this.ligado = true;
        }
        // this.ligado = this.ligado ? false : true
        // this.ligado = !this.ligado
    }
    acelerar(rpm) {
        this.aceleracao += rpm;
    }
    desacelerar() {
        this.aceleracao = 0;
    }
    estadoDoCarro() {
        return this.ligado ? 'O carro está ligado' : 'O carro está desligado';
    }
}
const suv = new CarroMetodo({
    cor: 'Preto',
    marca: 'GM',
    modelo: 'Taurus',
    ano: 1980
});
const hat = new CarroMetodo({
    cor: 'Laranja',
    marca: 'Ford',
    modelo: 'Celta',
    ano: 1970,
    potencia: 2.2
});
hat.cor = 'Branca';
// hat.modelo = 'lkj'
hat.ligarOuDesliga();
hat.acelerar(15);
console.table([suv, hat]);
console.log(hat.estadoDoCarro());
hat.ligarOuDesliga();
console.table([suv, hat]);
console.log(hat.estadoDoCarro());
