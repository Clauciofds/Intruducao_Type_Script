"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CarroNovo {
    cor;
    marca;
    modelo;
    ano;
    potencia;
    constructor(carro) {
        this.cor = carro.cor;
        this.marca = carro.marca;
        this.modelo = carro.modelo;
        this.ano = carro.ano;
        this.potencia = carro.potencia ?? 3.2;
    }
}
const sedan = new CarroNovo({
    cor: 'Preto',
    marca: 'GM',
    modelo: 'Opala',
    ano: 1980
});
const pickup = new CarroNovo({
    cor: 'Laranja',
    marca: 'Ford',
    modelo: 'Ranger',
    ano: 1970,
    potencia: 2.2
});
pickup.cor = 'Branca';
console.table([sedan, pickup]);
