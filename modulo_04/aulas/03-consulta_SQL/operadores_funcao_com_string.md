# Operadores e Funções com Strings

É possível manipular valores de campos do tipo `string` usando operadores e/ou funções. Algumas funções podem armazenar caracteres em bancos de dados, mas a maioria delas são feitas para o banco de dados.

Funções comuns:

- `||`: concatenação strings.
- `LOWER`: função para converter caracteres para minúscula.
- `CHAR_LENGTH`: retorna a quantidade de caracteres.
- `UPPER`: converte todos os caracteres para maiúscula.

Imagine que no nome de todas as pessoas precisasse ser retornado em uma consulta em maiúsculo. Nesse caso, poderemos usar a função `UPPER`. Exemplo:

```sql
SELECT id, UPPER(nome) as nome, email FROM people;
