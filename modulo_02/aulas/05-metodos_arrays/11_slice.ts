// slice -> retorna um cópia de um array de acordo com os indices informados

const arrayPaises: string[] = ['Brasil', 'Argentina', 'Uruguai', 'Paraguai', 'Chile']

console.log(arrayPaises.slice(2)) // [ 'Uruguai', 'Paraguai', 'Chile' ]
console.log(arrayPaises.slice(-2)) // [ 'Paraguai', 'Chile' ]
console.log(arrayPaises.slice(1, 4)) // [ 'Argentina', 'Uruguai', 'Paraguai' ]
console.log(arrayPaises.slice(2, -1)) // [ 'Uruguai', 'Paraguai' ]
