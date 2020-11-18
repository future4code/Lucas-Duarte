### Exercício 1

**a. Explique o que é uma chave estrangeira**

Uma chave estrangeira (FOREIGN KEY) é uma constraint usada para conectar duas tabelas. Ela é um campo em uma tabela que referencia a chave primária (PRIMARY KEY) de outra tabela.

**b. Crie a tabela e, ao menos, uma avaliação para cada um dos filmes**

```sql
INSERT INTO Rating
VALUES ("003", "Dona Flor cheia de marido e eu não consigo nenhum", 6.5, "003");
```

**c. Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.**

O erro diz que não pode adicionar ou atualizar uma linha filha, e aponta o problema na constraint de chave estrangeira.

**d. Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.**

```sql
ALTER TABLE Film
DROP COLUMN rating;
```

**e. Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.**
O erro diz que não pode deletar ou atualizar uma linha pai, e aponta o problema na constraint de chave estrangeira.

### Exercício 2

```sql
CREATE TABLE FilmCast (
  film_id VARCHAR(255),
  actor_id VARCHAR(255),
  FOREIGN KEY (film_id) REFERENCES Film(id),
  FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

**a. Explique, com as suas palavras, essa tabela**

É uma tabela de relação, que possui duas colunas que são chaves estrangeiras conectadas aos IDs das tabelas de filmes e atores.

**b. Crie, ao menos, 6 relações nessa tabela**

```sql
INSERT INTO FilmCast
VALUES ("002", "004");
```

**c. Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query**

Um erro informa que não é possível atualizar ou adicionar uma linha filha.

**d. Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query**

Não é possível deletar, por ser uma parent row.

### Exercício 3

```sql
SELECT * FROM Film
INNER JOIN Rating ON Film.id = Rating.movie_id;
```

**a. Explique, com suas palavras, a query acima. O que é o operador ON?**

Ela seleciona todos as informações dos dados que possuem correspondentes na tabela de filmes (Film) e de avaliações (Rating).

O operador ON

**b. Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.**

