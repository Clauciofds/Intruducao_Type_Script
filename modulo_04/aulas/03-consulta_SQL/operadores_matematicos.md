## Operadores Matemáticos em SQL
Os operadores matemáticos possibilitam criar expressões matemáticas em uma consulta para manipular e retornar valores entre os campos de uma tabela. Aqui estão as funções dos operadores:

- **+ (SOMA):** Soma valores.
- **- (SUBTRAÇÃO):** Subtrai valores.
- **`*` (MULTIPLICAÇÃO)**: Multiplica valores.
- **/ (DIVISÃO):** Divide valores.
- **% (MÓDULO):** Retorna o resto da divisão entre dois valores.  

Exemplo de consulta:

```SQL
select * from produtos where price <> (price + 0.1) * 80;