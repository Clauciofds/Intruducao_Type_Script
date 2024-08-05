É possível converter um tipo de dado de um campo para qualquer outro tipo em uma consulta SQL, usando o operador "!" ou durante a função CAST, caso seja implementado pelo banco de dados em uso. A conversão acontece no momento da consulta e não altera o tipo de dado nativo da coluna.

Visivelmente na consulta nada muda, mas o tipo de dado daquele campo não é mais passa a ser do tipo convertido. Vamos então mudar para o modo de conversão.

Converteremos alguns exemplos de conversão de tipos.

Conversão numérica para um texto usando a função CAST.

```SQL
select *, cast(rating as text) from products;
```
Conversão de texto para número usando a função CAST.
```SQL
select *, cast(price as int) from products;
