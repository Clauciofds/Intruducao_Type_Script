// Pick<Tipo, Propriedade>

type TCarro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type TNovCarro = Pick<TCarro, 'marca' | 'modelo'>

