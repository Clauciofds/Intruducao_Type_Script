"Além dos operadores matemáticos, temos as funções matemáticas que podem ser usadas em um campo para manipulação de valores específicos.

Funções matemáticas:

- **ABS:** 0btem o valor absoluto de um número.
- **CEIL:** arredonda o valor absoluto de um número.
- **FLOOR:** arredonda para o próximo inteiro inferior.
- **ROUND:** arredonda para o inteiro mais próximo.
- **SQRT:** obtém a raiz quadrada.  

Imagine que a avaliação do produto seja um número inteiro e não podemos nos preocupar com o valor da avaliação nesse caso. Consultamos arredondar o retorno da nota de acordo com a regra da consulta usando uma das funções acima.

```SQL
select *, round(rating) from products; 