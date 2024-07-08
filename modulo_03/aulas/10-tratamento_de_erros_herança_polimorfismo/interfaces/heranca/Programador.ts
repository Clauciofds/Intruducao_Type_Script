import Funcionario from "./Funcionario";

export default class Programador extends Funcionario {
    linguagens: string[]

    constructor(nome: string, salario: number, linguagens: string[]) {
        super(nome, salario)
        this.linguagens = linguagens
    }

    oberLinguagens(){
        return this.linguagens
    }
}