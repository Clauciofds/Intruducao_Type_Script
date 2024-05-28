// Exclude<UniãoTipos, ItensExcleuido>
// Extract<UniãoTipos, ItensExtraidos>

type T1 = Exclude<'a' | 'b' | 'c', 'b'>

type TTransacao = 'Credito' | 'Debito' | 'Boleto' | 'Pix'

type TBanco1 = Exclude<TTransacao, 'Credito'>

type TBanco2 = Exclude<TTransacao, 'Pix'>

type T2 = Extract<'a' | 'b' | 'c', 'b' | 'a'>

type Banco1Extract = Extract<TTransacao, 'Debito' | 'Boleto' | 'Pix'>

type Banco2Extract = Extract<TTransacao, 'Credito' | 'Debito'>
