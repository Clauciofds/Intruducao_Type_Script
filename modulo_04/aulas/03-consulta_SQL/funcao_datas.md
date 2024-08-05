# Manipulação de datas e horas

Frequentemente trabalhamos com dados que incluem datas e horas. Vamos dar uma olhada nos tipos de data e algumas funções relacionadas:

## Tipos de data:

- **TIMESTAMP**: Representa data e hora sem fuso horário (exemplo: `2021-05-20 12:30:45`).
  
- **TIMESTAMPTZ**: Representa data e hora com fuso horário (exemplo: `2021-05-20 12:30:45+03`).
  
- **DATE**: Representa apenas a data, sem a hora do dia (exemplo: `2021-05-20`).
  
- **TIME**: Representa apenas a hora do dia, sem a data (exemplo: `12:30:45`).

## Funções relacionadas a datas e intervalos:

- **GET_DATE_PART**: Extrai uma parte específica da data ou hora.
  
- **NOW**: Obtém a data atual de um banco de dados.
  
- **EXTRACT**: Extrai uma parte específica de uma data ou hora.

## Funções de conversão de data:

Para entender melhor como funciona uma função que trata TIMEZONE, consulte a documentação relevante.

Claro! Vamos transcrever o conteúdo da imagem em markdown:


# Funções com Datas

Vejamos alguns exemplos de manipulação de datas.

## Obtendo a data atual do banco de dados:  
```SQL
select now();
```

## Extraindo o ano da data de criação de cada registro na tabela produtos:
```SQL
select *, extract(year from created_at) from products;
```

## Obtendo a data no time zone "America/Sao_Paulo":
```SQL
select *, created_at at time zone "America/Sao_Paulo" from products;
```

Esses trechos de código SQL demonstram diferentes funções para manipular datas dentro de um banco de dados. O primeiro bloco obtém a data atual, o segundo extrai o ano da data de criação de registros em uma tabela de produtos e o terceiro obtém a data no fuso horário "America/Sao_Paulo". Essas informações são relevantes para quem está aprendendo SQL e deseja entender como trabalhar com datas e fusos horários em bancos de dados. Se tiver mais alguma dúvida, estou à disposição! 😊

¹: Imagem fornecida pelo usuário.

Fonte: conversa com o Copilot, 26/07/2024
(1) https://www.linkedin.com/pulse/meu-caso-de-amor-mayara-marques. https://www.linkedin.com/pulse/meu-caso-de-amor-mayara-marques.
(2) https://medium.com/@davidsodrelins/javascript-imprimindo-todos-os-elementos-do-vetor.... https://medium.com/@davidsodrelins/javascript-imprimindo-todos-os-elementos-do-vetor-com-join-30a81bb98326.
(3) https://comofaz.site/chat-gpt-automacao-de-testes. https://comofaz.site/chat-gpt-automacao-de-testes/.
(4) https://www.guiadoexcel.com.br/como-usar-chatgpt-no-excel. https://www.guiadoexcel.com.br/como-usar-chatgpt-no-excel/.
(5) https://www.kingsms.com.br/blog/kingsms-inicode. https://www.kingsms.com.br/blog/kingsms-inicode/.