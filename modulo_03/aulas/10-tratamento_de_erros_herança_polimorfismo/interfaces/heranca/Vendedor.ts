import Funcionario from "./Funcionario";

export default class Vendedor extends Funcionario {
    comissao: number

    constructor(nome: string, salario: number) {
        super(nome, salario)
        this.comissao = 0
    }

    obterSalarioComComissao() {
        return this.comissao + this.obterSalario()
    }

    adicionarComissão(valor: number) {
        this.comissao += valor
    }
}