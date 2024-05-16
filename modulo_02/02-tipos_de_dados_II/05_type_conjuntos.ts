type TUsuario = {
    nome: string
    email: string
    idada: number
}

type TEndereco = {
    rua: string
    numero: number | string
    cidade: string
    opcao?: string
}

type TEnderecos = TUsuario & TEndereco

const usuarios: TEnderecos[] = [
    {
        nome: 'Cláucio',
        email: 'clauciofds@gmail.com',
        idada: 50,
        cidade: 'Mogi-Guaçu',
        numero: 100,
        rua: 'Valinhos',
        opcao: 'casa'
    }
]

