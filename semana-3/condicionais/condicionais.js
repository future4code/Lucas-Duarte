// Exercícios de interpretação de código

// EXERCÍCIO 1
// O código realiza o teste de se um número é par ou ímpar. Vão "passar no teste" aqueles que forem par (resto da divisão por 2 é 0) e não passarão os ímpares.

// EXERCÍCIO 2
// a. Para informar ao usuário o preço da fruta desejada.
// b. O preço da fruta Maçã é R$2.25
// c. O preço da fruta Pêra é R$5

// EXERCÍCIO 3
//a. Definindo que o que o usuário digitar no prompt será convertido de string pra number
//b. Digitando 10, no terminal apareceria: "Esse número passou no teste". Digitando -10, nada apareceria.
//c. Não é um erro no console. É que a variável mensagem só recebe valor dentro do escopo da condicional (número>0). O que está fora desse bloco não é afetado, então o último console.log fica sem receber o valor da variável e não imprime nada.

// EXERCÍCIO 4

// let idade = prompt("Digite sua idade pra saber se você pode dirigir!")
// Number(idade)

// if (idade>=18){
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Sinto muito. Você não pode dirigir!")
// }

// EXERCÍCIO 5

// let turno = prompt("Qual é o turno em que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno")

// if(turno === "M") {
//     console.log("Bom dia!")
// } else if(turno === "V") {
//     console.log("Boa tarde!")
// } else if(turno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Turno não identificado!")
// }

// EXERCÍCIO 6
// let turno = prompt ("Qual é o turno em que você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno")

// switch (turno) {
//     case "M":
//     console.log("Bom dia!")
//     break
//     case "V":
//     console.log("Boa tarde!")
//     break
//     case "N":
//     console.log("Boa noite!")
//     break
//     default:
//     console.log("Turno não identificado")
//     break   
// }

// EXERCÍCIO 7

// let genero = prompt("Qual o gênero de filme que vai assistir?")
// let preco = prompt("Qual é o preço do ingresso?")
// Number(preco)

// if (genero === "fantasia" && preco <=15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme")
// }

// DESAFIO 1

// let genero = prompt("Qual o gênero de filme que vai assistir?")
// let preco = prompt("Qual é o preço do ingresso?")
// Number(preco)

// if (genero === "fantasia" && preco <=15) {
//     let snack = prompt("Qual snack vc vai comprar?")
//     console.log("Bom filme e", snack, "!")

// } else {
//     console.log("Escolha outro filme")
// }

// DESAFIO 2

let nome = prompt("Digite seu nome")
let tipoJogo = prompt("Jogo internacional (IN) ou doméstico(DO)?")
let etapaJogo = prompt("Semi-final (SF), Decisão de terceiro lugar (DT) ou Final (FI)?")
let categoria = Number(prompt("Opção 1, 2, 3 ou 4?"))
let quantidade = Number(prompt("Quantos ingressos?"))


console.log("---Dados da compra---")
console.log("Nome do cliente:",nome)
console.log("Tipo do jogo", tipoJogo)
console.log("Etapa do jogo:", etapaJogo)
console.log("Categoria:", categoria)
console.log("Quantidade de Ingressos:", quantidade)
console.log("---Valores---")

let valorIngresso

    if (etapaJogo === "SF" && categoria === 1) {
        valorIngresso = 1320
    } else if (etapaJogo === "SF" && categoria === 2) {
        valorIngresso = 880
    } else if (etapaJogo === "SF" && categoria === 3) {
        valorIngresso = 550
    } else if (etapaJogo === "SF" && categoria === 4) {
        valorIngresso = 220 
    } else if (etapaJogo === "DT" && categoria === 1) {
        valorIngresso = 660
    } else if (etapaJogo === "DT" && categoria === 2) {
        valorIngresso = 440
    } else if (etapaJogo === "DT" && categoria === 3) {
        valorIngresso = 330
    } else if (etapaJogo === "DT" && categoria === 4) {
        valorIngresso = 170
    } else if (etapaJogo === "FI" && categoria === 1) {
        valorIngresso = 1980
    } else if (etapaJogo === "FI" && categoria === 2) {
        valorIngresso = 1320
    } else if (etapaJogo === "FI" && categoria === 3) {
        valorIngresso = 880
    } else if (etapaJogo === "FI" && categoria === 4) {
        valorIngresso = 330 
    } else {
        console.log("Algo deu errado. Reinicie a tela e tente de novo")
    }

    if (tipoJogo === "DO") {
        console.log("Valor do ingresso: R$", valorIngresso)
        let valorTotal = valorIngresso * quantidade
        console.log("Valor total: R$", valorTotal)
    } else if (tipoJogo === "IN") {
        let valorIngressoDolar = valorIngresso/4.1
        console.log("Valor do ingresso: U$", valorIngressoDolar)
        let valorTotal = valorIngressoDolar * quantidade
        console.log("Valor total: U$", valorTotal)
    } else {
        console.log("Algo errado com o tipo de jogo que você selecionou.. Reinicie a tela e tente de novo")
    }



