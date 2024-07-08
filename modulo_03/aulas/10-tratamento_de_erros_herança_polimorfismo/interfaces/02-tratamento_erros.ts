// function nome(texto: any) {
//     texto.split('/')
// }

// try {
//     // tenta fazer tudo que está aqui
//     console.log('Claucio')
//     nome(123)
//     console.log('depois do erro')
// } catch (erro) {
//     // caso algum erro aconteça, ele é capturado aqui
//     if (erro instanceof TypeError) {
//         console.log(erro.message)
//     }
//     // console.log('Erro desconhecido')
// } finally {
//     // independe de acontecer um erro ou não , esse bloco será executado
//     console.log('sempre será executado')
// }

try {
    console.log('Antes de lançar um erro')

    // lança erro
    // throw 'Um erro criado por mim
    throw new Error('Um erro do javascript')

    console.log('alguma coisa')
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message)
    }
    
}