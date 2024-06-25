// Omit<Tipo, Propriedade

type TCarro = {
    marca: string
    modelo: string
    ano: number
    portas: number
}

type TNovCarro = Omit<TCarro, 'marca' | 'modelo'>

type TCompra = {
    id: string;
    id_usuario: string;
    id_evento: string;
  };

type TDelle = Omit<TCompra, 'id'>