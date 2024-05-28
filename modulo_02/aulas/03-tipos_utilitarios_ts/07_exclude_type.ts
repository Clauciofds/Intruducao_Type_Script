// Exclude<UniãoTipos, ItensExcleuido>

type T1 = Exclude<'a' | 'b' | 'c', 'b'>

type TTransacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'

type TBanco1 = Exclude<TTransacao, 'Credito'>

type TBanco2 = Exclude<TTransacao, 'Pix'>

