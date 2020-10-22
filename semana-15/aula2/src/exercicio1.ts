// A)
let minhaString: string = "Olá, pessoal"
// minhaString = 0
// RESPOSTA
// a linha em que tento atribuir um número a essa variável já apresenta erro, pois ela é do tipo string!

// B)
let meuNumero: number | string = 10
// RESPOSTA
// adicionando um pipe (|) na tipagem da variável

// C)

const lucas: {nome: string, idade: number, corFavorita: string} = {
    nome: "Lucas",
    idade: 27,
    corFavorita: "vermelho"
}

// D), E)

enum coresDoArcoIris {
    lilas = "lilás",
    azul = "azul",
    verde = "verde",
    amarelo = "amarelo",
    laranja = "laranja",
    vermelho = "vermelho"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresDoArcoIris
}

const natalia: pessoa = {
    nome: "Natalia",
    idade: 27,
    corFavorita: coresDoArcoIris.azul
}

const pollock: pessoa = {
    nome: "Jackson",
    idade: 118,
    corFavorita: coresDoArcoIris.azul
}

