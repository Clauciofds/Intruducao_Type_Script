/* 
    Uppercase<TipoString>
    Lowercase<TipoString>
    Capitalize<TipoString>
*/

type TTransacaoCredito = 'Credito'
type TTransacaoDebito = 'debito'

type TTransacao1 = TTransacaoCredito | TTransacaoDebito

type TTransacao2 = Uppercase<TTransacaoCredito> | Uppercase<TTransacaoDebito>

type TTransacao3 = Lowercase<TTransacaoCredito> | Lowercase<TTransacaoDebito>

type TTransacao4 = Capitalize<TTransacao3>
