const frutas: string[] = ["maçã", "banana", "cereja", "laranja", "manga"];

// Extrai elementos do índice 1 (inclusive) ao índice 3 (exclusivo):
const fatiadas1 = frutas.slice(1, 3); // ["banana", "cereja"]

// Extrai do início até o índice 2 (exclusivo):
const fatiadas2 = frutas.slice(0, 2); // ["maçã", "banana"]

// Extrai do índice 2 (inclusive) até o final:
const fatiadas3 = frutas.slice(2); // ["cereja", "laranja", "manga"]

// Extrai elementos alternados, começando do início:
const fatiadas4 = frutas.slice(0-2); // ["maçã", "cereja", "manga"]

// Extrai elementos na ordem inversa (passo decrescente):
const fatiadas5 = frutas.slice(-1); // ["manga"] (extrai o último elemento)
const fatiadas6 = frutas.slice(-2); // ["laranja", "manga"] (extrai os dois últimos elementos)
const copiaFatiada = frutas.slice(); // Cria uma cópia superficial do array inteiro

console.log(fatiadas1);
