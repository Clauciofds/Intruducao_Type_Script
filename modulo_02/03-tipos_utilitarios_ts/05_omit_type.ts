// Omit<Tipo, Propriedade

type TCarro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type TNovCarro = Omit<TCarro, 'marca' | 'modelo'>
