// trim -> remove os espacos do inicio e fim
// trimStart -> remove os espacos do inicio da strg
// trimEnd -> remove os espacos do fim da strg



const texto = '     Meu primeiro texto    '

console.log(texto.length);

texto.trim()

console.log(texto);

const textoTrim = texto.trim()

console.log(textoTrim);

const usuario = {
    email: 'claucio@email.com',
    senha: '1232sdfs'
}

const email = '   claucio@email.com'
const senha = '123sdfs'

console.log(usuario.email === email) // desta forma sera false

console.log(usuario.email === email.trim())

console.log(texto.trimEnd())