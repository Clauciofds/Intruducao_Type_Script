/*
    Declare uma variável que armazena um objeto contendo as seguintes
    prorpriedades: nome, idade, altura, temCNG e habilidades.

    Depois, faça um programa que imprime na tela o belo texto abaixo:
    substituindo os daods pessoais pelos dados do objeto:

    Claucio tem 50 anos, 1.73 de altura, possui CNH e as seguintes habilidades:
    - JavaScript
    - PHP
    - Python
    - Java
*/

const usuario = {
    nameUser:'Cláucio',
    ageUser:33,
    heightUser:1.73,
    haveCHN:true,
    habilityUser:['JavaScript', 'PHP', 'Python', 'Java']
}

const temCHN=usuario.haveCHN?'possui CHN':'não possui CNH'

console.log(
`${usuario.nameUser} tem ${usuario.ageUser} anos, ${usuario.heightUser} altura, ${temCHN} e as seguntes habilidades:`,
)
for(let item of usuario.habilityUser) {
  console.log(`- ${item}`)
}
