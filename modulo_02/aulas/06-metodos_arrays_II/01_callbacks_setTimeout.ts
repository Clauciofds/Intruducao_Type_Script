function imprimir (texto: string) {
    console.log(texto)
}

imprimir('Claucio')

const imprimirTitulo = () =>
    console.log('Aula de arrays')

// executa algo, em um tempo predefinido
setTimeout(imprimirTitulo, 5000)

setTimeout(() => {
    console.log('Aulas de array II'), 4000
})