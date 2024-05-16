// slice -> extrai a parte de um string de acordo com seus indices


const texto: string = `   Eleve sua carreira com o nosso curso de Java,
abrangendo desde o básico até técnicas avançadas,
numa metodologia inovadora.   `

const finalTexto = texto.trim().split(' ')
console.log(finalTexto[finalTexto.length - 1].length)
console.log(texto.length)
console.log(texto.trim().slice(texto.trim().length - finalTexto[finalTexto.length - 1].length));
