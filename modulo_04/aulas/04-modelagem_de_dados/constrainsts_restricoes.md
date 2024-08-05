# Constraints ou Restrições

Para cada coluna em uma tabela, podemos aplicar regras específicas para garantir que os dados armazenados sejam sempre consistentes e corretos segundo o modelo. Seguem definições para cada termo de restrição que temos.

- **Primary Key**: representa a chave primária em uma tabela, responsável por armazenar um identificador único para cada registro.
- **Foreign Key**: representa a chave estrangeira em uma tabela, responsável por armazenar um identificador primário de uma outra tabela e criar uma relação entre as duas.
- **Unique**: define o valor de um campo como único. Ou seja, não é possível ter repetição daquele dado no mesmo campo dentro de uma mesma área de registros.
- **Not Null**: impede que um campo receba valores nulos. Ou seja: toda vez que um registro é lançado naquela coluna deve ser informado algum valor.
- **Check**: permite definir condições específicas que devem ser atendidas pelo campo antes de aceitar um valor nele inserido.
- **Restrictions**: podem ser combinadas com outras cláusulas como por exemplo uma coluna que deve receber um valor único e obrigatório.
