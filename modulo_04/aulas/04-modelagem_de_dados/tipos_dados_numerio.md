# Tipos numéricos inteiros

| Nome       | Tamanho | Alcance                                   |
|------------|---------|-------------------------------------------|
| smallint   | 2 bytes | -32768 a +32767                           |
| integer    | 4 bytes | -2147483648 a +2147483647                 |
| bigint     | 8 bytes | -9223372036854775808 a +9223372036854775807|
| serial     |         | Não aceita valores negativos e zero.      |

É possível definir uma coluna com um tipo de dado numérico inteiro, para que seja gerado sequencialmente, de forma automática pelo banco de dados SQL. Os tipos numéricos acima citados são equivalentes aos tipos de dados aritméticos padrão do tipo inteiro e possuem algum tratamento especial que torna mais prático, em alguns casos particulares o seu uso.

- Não aceitam valores negativos ou em ordem sequencial, também conhecido como auto incremento.

# Tipos numéricos de precisão arbitrária

| Nome    | Tamanho | Alcance                                          |
|---------|---------|--------------------------------------------------|
| decimal | Variável| 131072 dígitos inteiros e 16383 dígitos decimais.|
| numeric | Variável| 131072 dígitos inteiros e 16383 dígitos decimais.|

Preciso e exato para armazenar valores com muitas casas após a vírgula. O decimal e o numeric informam o argumento são tipos de dados ponto flutuante de alta precisão que suportam números extremamente grandes ou pequenos, com até o máximo estabelecido de precisão.

```sql
create table produtos (
    valor decimal(7, 4) not null
)
```  
valor numeric(7,4) not null => escala = 4; precisão = 7

# Tipos numéricos de ponto flutuante

| Nome          | Tamanho    | Alcance                         |
|---------------|------------|---------------------------------|
| double        | 8 bytes    | 15 dígitos decimais.            |
| real precision| 4 bytes    | 7 dígitos decimais.             |

Os tipos de dados numéricos de ponto flutuante são tipos de dados não exatos em processamento digital. Isso ocorre porque o modo como os números são armazenados e a aproximação de um valor podem apresentar pequenas variações que interferem no cálculo ou na precisão do mesmo e são chamadas de erro de arredondamento.

## Recomendações

Não é recomendado usar tipos numéricos e valores exatos para contabilizar valores que podem fazer parte do controle monetário, por exemplo, para armazenar valores monetários.

Em algumas situações, comparar a igualdade de dois valores do ponto flutuante nem sempre pode funcionar corretamente.

# TIPOS DE DADOS CARACTERES

| NOME       | ALCANCE |
|------------|---------|
| varchar(n) | Comprimento variável com limite, onde n é o limite suportado. |
| char(n)    | Comprimento fixo com espaço preenchido para o tamanho definido de n caracteres. |
| text       | Comprimento ilimitado sem limite. |

**varchar(n)** - Quando você tentar armazenar uma string em um campo do tipo varchar(n) podendo armazenar até n caracteres. Se houver tentativa de armazenar string com mais de "n" caracteres, o PostgreSQL lançará um erro.
No entanto, se você tentar armazenar uma string menor ou igual ao máximo permitido e essa string contiver espaços extras ao fim, o PostgreSQL irá removê-los antes de armazenar os dados no banco de dados.

**char(n)** - A diferença entre char e varchar é que para campos do tipo char mesmo que não preenchamos todo o espaço requerido até o tamanho máximo de "n" caracteres, vamos preencher aquele espaço com espaços em branco.
Isso significa que se tentarmos inserir a palavra "carro" em um campo do tipo char(8), mesmo que a palavra tenha apenas 5 letras, ela será armazenada como "carro    ", ocupando assim os 8 espaços definidos para aquele campo.
Por outro lado, se tentarmos inserir a palavra “barco” em um campo do tipo char(8), da mesma forma será armazenada como “barco
