## Exercício 1

**a)** Remove a coluna salary.

```sql
ALTER TABLE Actor DROP COLUMN salary;
```

**b)** Altera o nome coluna gender para sex.

```sql
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```

**c)** Altera o limite de caracteres dos valores da coluna gender de 6 para 255.

```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

**d)**

```sql
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

## Exercício 2

**a)**

```sql
UPDATE Actor
SET name = "Deborah Secco", birth_date = "1979-11-26"
WHERE id = "003";
```

**b)**

```sql
UPDATE Actor SET name = "JULIANA PÃES" Where name = "Juliana Paes";
UPDATE Actor SET name = "Juliana Paes" Where name = "JULIANA PÃES";
```

**c)**

```sql

UPDATE Actor
SET
	name = "Lázaro Ramos",
    salary = 10000,
    birth_date = "1978-11-01",
    gender = "male"
WHERE
	id = "005";
```

**d)**

```sql
UPDATE Actor SET hair = "black" WHERE name = "Juliana Paes";
```

Resultado: _unknown column 'hair' in field list_

## Exercício 3

**a)**

```sql
DELETE FROM Actor WHERE name = "Fernanda Torres";
```

**b)**

```sql
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercício 4

**a)**

```sql
SELECT MAX(salary) FROM Actor;
```

**b)**

```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

**c)**

```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

**d)**

```sql
SELECT SUM(salary) FROM Actor;
```

## Exercício 5

_a. Releia a última query. Teste-a. Explique o resultado com as suas palavras_

Ela revela quantos atores são do gênero masculino e quantos do feminino.

_b. Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética_

```sql
SELECT id, name FROM Actor ORDER BY name DESC;
```

_c. Faça uma query que retorne todos os atores ordenados pelo salário_

```sql
SELECT * FROM Actor ORDER BY salary;
```

_d. Faça uma query que retorne os atores com os três maiores salarios_

```sql
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

_e. Faça uma query que retorne a média de salário por gênero_

```sql
SELECT AVG(salary), gender FROM Actor GROUP BY gender;
```

## Exercício 6

**a)**

```sql
ALTER TABLE Film
ADD playing_limit_date DATE;
```

**b)**

```sql
ALTER TABLE Film
CHANGE rating rating FLOAT CHECK (rating BETWEEN 0 AND 10);
```

**c)**

```sql
UPDATE Film
SET playing_limit_date = "2020-10-01" WHERE id = "002";
```

**d)**

```sql
DELETE FROM Film
WHERE id = "004";
```

O resultado veio positivo, mas a tabela não sofreu nenhuma alteração de fato.

## Exercício 7

**a. Quantos filmes em cartaz possuem avaliações maiores do que `7.5`?**

```sql
SELECT * FROM Film WHERE rating > 7.5;
```

**b. Qual a média das avaliações dos filmes?**

```sql
SELECT AVG(rating) FROM Film;
```

**c. Qual a quantidade de filmes em cartaz?**

```sql
SELECT * FROM Film WHERE playing_Limit_date >= CURDATE();
```

**d. Qual a quantidade de filmes que ainda irão lançar?**;\*

```sql
SELECT * FROM Film WHERE release_date > CURDATE();
```

**e. Qual a maior nota dos filmes?**

```sql
SELECT MAX(rating) FROM Film;
```

**f. Qual a menor nota dos filmes?**

```sql
SELECT MIN(rating) FROM Film;
```

## Exercício 8

_a. Retorne todos os filmes em ordem alfabética_

```sql
SELECT * FROM Film ORDER BY name ASC;
```

_b. Retorne os 5 primerios filmes em ordem descrente alfabética_

```sql
SELECT * FROM Film ORDER BY name DESC LIMIT 5;
```

_c. Retorne os 3 filmes mais recentes em cartaz_

```sql
SELECT * FROM Film ORDER BY release_date DESC LIMIT 3;
```

_d. Retorne os 3 filmes melhor avalidos_

```sql
SELECT * FROM Film ORDER BY rating DESC LIMIT 3;
```
