const texto: string = `   Eleve sua carreira com o nosso curso de Java,
abrangendo desde o básico até técnicas avançadas,
numa metodologia inovadora.   `

console.log(texto.replace('Java', 'Java Script')) // o Replace só substitui a primeira ocorrencia.

console.log(texto.replace(' o ', '---'))

console.log(texto.replaceAll('o', '...'))
