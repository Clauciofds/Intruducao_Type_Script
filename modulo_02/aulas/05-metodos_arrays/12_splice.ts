// splice -> alterar um array removendo e/ou adicionando outros elementos
const arrayPaises: string[] = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai', 'Chile']

console.log(arrayPaises.splice(0, 1)) // Removeu [ 'Brasil', 'Argentina' ] => Original [ 'Uruguai', 'Paraguai', 'Chile' ]
// console.log(arrayPaises.splice(0, 2, 'Japão')) // Removeu [ 'Brasil', 'Argentina' ] => Original [ 'Japão', 'Uruguai', 'Paraguai', 'Chile' ]
// console.log(arrayPaises.splice(1, 3, 'Japão')) // Removeu [ 'Argentina', 'Uruguai', 'Paraguai' ] => Original [ 'Brasil', 'Japão', 'Chile' ]
// console.log(arrayPaises.splice(1, 0, 'Japão')) // Removeu [] => Original [ 'Brasil', 'Japão', 'Argentina', 'Uruguai', 'Paraguai', 'Chile' ]


console.log(arrayPaises)