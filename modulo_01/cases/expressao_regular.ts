/(.).*\1/.test('accidfd')

/*
            Expressões regulares
            
/: Este caractere marca o início e o fim da expressão regular.
(.): Esta sub-expressão captura um único caractere em um grupo de captura denominado 1.
.*: Este quantificador indica que qualquer caractere (incluindo nenhum caractere) pode ocorrer zero ou mais vezes.
\1: Esta backreference se refere ao primeiro grupo de captura, que é o caractere capturado anteriormente por (.).
/: Este caractere marca o final da expressão regular.

console.log(/(.).*\1/.test('aci'))

Outras aplicações:

Esta expressão regular pode ser útil para encontrar padrões de caracteres repetidos em strings. Por exemplo, 
você pode usá-la para identificar palavras com letras duplas ou para validar senhas que exigem caracteres repetidos.

Observações:

A expressão regular pode ser modificada para capturar e verificar diferentes tipos de padrões de repetição. 
Por exemplo, você pode modificá-la para capturar dois caracteres e verificar se eles se repetem pelo menos uma vez.
A expressão regular usa a sintaxe JavaScript para expressões regulares. Se você estiver usando uma linguagem 
diferente, a sintaxe pode ser diferente.
*/
