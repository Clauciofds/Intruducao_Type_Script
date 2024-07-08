import Funcionario from "./Funcionario";
import Gerente from "./Gerente";
import Programador from "./Programador";
import Vendedor from "./Vendedor";

const funcionario = new Funcionario('Guido', 140000)

const gerente = new Gerente('1234', 'Claucio', 1200000)

const vendedor = new Vendedor('Cleiton', 1200000)

const programador = new Programador('Nicolas', 1340000, ['Pytho', 'Typescript'])

console.log(`Eu sou um ${funcionario.nome} e sou um funcionário qualquer`)
console.log(`Eu sou um ${gerente.nome} e sou um gerente. Minha senha é: ${gerente.senha}`)
console.log(`Eu sou ${vendedor.nome} e sou um vendedor. Meu salário completo é: ${vendedor.obterSalario()}`)
console.log(`Eu sou ${programador.nome} e sou um programador. Sei programar em ${programador.oberLinguagens()}`)
