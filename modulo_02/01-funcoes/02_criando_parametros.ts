const usuarios = []

// function cadastrarUsuario(nome, email, idade) {
//     usuarios[usuarios.length] = {
//         nome, email, idade
//     }
// }

// cadastrarUsuario('Claucio', 'clauciofds@gmail.com', 50)

function cadastrarUsuario(usuario) {
    usuarios[usuarios.length] = {
        nome: usuario.nome,
        email: usuario.email,
        idade: usuario.idade
    }
}

cadastrarUsuario({
    nome: 'Claucio',
    email: 'clauciofds@gmail.com',
    idade: 65
})

const maria = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 21
}

cadastrarUsuario(maria)

console.log(usuarios);