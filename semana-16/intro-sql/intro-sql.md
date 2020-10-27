## Exercício 1

```SQL
CREATE TABLE Actors (
 id VARCHAR(255) PRIMARY KEY,
 name VARCHAR(255)  NOT NULL,
 salary FLOAT NOT NULL,
 birth_date DATE NOT NULL,
 gender VARCHAR(6) NOT NULL
);
```

#### a)

_CREATE TABLE_ cria a tabela e as linhas seguintes, criam as colunas da tabela, com o tipo de cada uma e sua obrigatoriedade.

- _VARCHAR(n)_ é usado para declarar o id, o nome e o gênero, pois esta é uma forma de declarar strings com um número variável de caracteres (n representando o número máximo de caracteres).

- _DATE_ representa uma data (no formato AAAA-MM-DD).
- _PRIMARY KEY_ identifica que a coluna ID precisa conter valores únicos.
- _NOT NULL_ indica que os demais campos não podem ser deixados vazios.

#### b)

- **SHOW DATABASES** mostrou os bancos de dados presentes no sistema: jackson-lucas-duarte e information_schema.
- **SHOW TABLES** me mostrou todas as tabelas criadas. No caso, apenas a Actors até agora.

#### c)

O comando **DESCRIBE** descreve a tabela com os campos e os tipos e cada campo.

## Exercício 2

#### a)

```SQL
INSERT INTO Actor(id, name, salary, birth_date, gender)
VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female")
```

#### b)

_Error: Duplicate entry '002' for key 'PRIMARY'_.

O erro aconteceu porque a coluna ID tem uma chave primária, ou seja, a tabela não aceita dois itens com o mesmo ID.

#### c)

_Erro: Contagem de colunas não corresponde com contagem de valores_.

Essa query não funciona porque tenta atribuir 5 valores a 3 colunas.

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("003", "Fernanda Montenegro", 300000, "1929-10-19", "female");
```

#### d)

_Erro: Campo nome não possui um valor padrão_.

Essa query não funciona porque o campo nome não pode ser null.

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("004", "Antônio Fagundes", 400000, "1949-04-18", "male");
```

#### e)

_Erro: Valor de data incorreto_.

Essa query não funciona porque o valor da coluna data não está numa string.

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("005", "Juliana Paes", 719333.33, "1979-03-26", "female");
```

#### f)

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES("006", "Pedro Cardoso", 50000, "1962-12-31", "male");
```

## Exercício 3

#### a)

```SQL
SELECT * from Actor WHERE gender = "female";
```

#### b)

```SQL
SELECT salary from Actor WHERE name = "Tony Ramos";
```

#### c)

```SQL
SELECT * from Actor WHERE gender = "invalid"
```

#### d)

```SQL
SELECT id, name, salary from Actor WHERE salary <= 500000
```

#### e)

O erro aconteceu porque estavam escrito "nome" e não "name".

```SQL
SELECT id, name from Actor WHERE id = "002"
```

## Exercício 4

```SQL
SELECT * from Actor WHERE (name LIKE "a%" OR name LIKE "j%") AND salary > 300000;
```

#### a)

Ela seleciona todos os dados dos atores cujo nome começa com A ou J e possuem o salário maior que 300000.

#### b)

```SQL
SELECT * from Actor Where name NOT LIKE "a%" AND salary > 350000
```

#### c)

```SQL
SELECT * FROM Actor WHERE name LIKE "%g%";
```

#### d)

```SQL
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%g%") AND	salary BETWEEN 350000 AND 900000
```

## Exercício 5

```SQL
CREATE TABLE Film (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  synopsis TEXT NOT NULL,
  release_date DATE NOT NULL,
  rating INT CHECK (rating BETWEEN 0 AND 10) NOT NULL
)
```

Exemplo de Query:

```SQL
INSERT INTO Film (id, name, synopsis, release_date, rating)
VALUES ("002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
        10
)
```

## Exercício 6

#### a)

```SQL
SELECT id, name, rating FROM Film WHERE id = "003";
```

#### b)

```SQL
SELECT * FROM Film WHERE name = "O Auto da Compadecida";
```

#### c)

```SQL
SELECT id, name, synopsis from Film WHERE rating >= 7;
```

## Exercício 7

#### a)

```SQL
SELECT * FROM Film WHERE name LIKE "%vida%"
```

#### b)

```SQL
SELECT * FROM Film WHERE name LIKE "%dois%" OR synopsis LIKE "%dois%"
```

#### c)

```SQL
SELECT * FROM Film

```

### d)

```SQL
SELECT * FROM Film WHERE (name LIKE "%dois%" OR synopsis LIKE "%dois%") AND rating > 7
```
