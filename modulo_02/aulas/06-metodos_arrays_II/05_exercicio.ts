/*
    Crie uma função que percorra um array com nomes de arquivo.
    A função deve verificar se possui so menos um arquivo com a extensão ".bat".
    Caso exista, deverá exibir a mensagem "virus encontrado".
*/

const fileList = [
    'ippD.txt',
    'codj.txt',
    'trojan.bat'
]

// const antVirus = fileList.some((f) =>{
//     const fr = f.split('.')
//     console.log(fr)
//     return fr[1] === 'bat' ? 'VIRUS ENCONTRADO' : false

const antVirus = fileList.some((f) =>{
    // console.log(f)
    return f.includes('.bat')
}

console.log(antVirus)
