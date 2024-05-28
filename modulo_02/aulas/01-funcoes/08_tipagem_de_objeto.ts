type TUsuario = {
    nome: string
    idade: number
    email: string
}

const usuarios: TUsuario[] = []

function cadastrarUsuario(usuario: TUsuario) {
    
    usuarios[usuarios.length] = usuario
    
    return usuario
}

const cadastro = cadastrarUsuario({
    nome: 'Claucio',
    email: 'clauciofds@gmail.com',
    idade: 50
})

console.log(cadastro, usuarios);

