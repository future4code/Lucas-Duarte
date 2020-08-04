//Exercícios de interpretação de código

//EXERCÍCIO 1
//a. Os números "10" e "50"
//b. Os cálculos seriam feitos, mas nada seria impresso no console.

//EXERCÍCIO 2
//a. "Darvas" e "Goli"
//b. Os dois valores seriam impressos no console: "Amanda" e "Caio".

// EXERCÍCIO 3
// a. A função multiplica ao quadrado os valores pares do array submetido e cria um novo array com elas.
// b. Um possível nome seria paresAoQuadrado ou multiplicaParesAoQuadrado

// Exercícios de escrita de código

// EXERCÍCIO 4

// parte a.
// function minhasInfosPessoais() {
//     console.log("Eu sou Lucas, tenho 27 anos, moro em São Paulo e sou estudante.")
// }

// parte b.
// function infosPessoais (nome, idade, cidade, estudante) {
//     if (estudante === false) {
//         console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e não sou estudante`)
//     } else if (estudante === true) {
//         console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou estudante`)
//     }
// }
// const resultado = infosPessoais("Lucas", 27, "São Paulo", true)

// EXERCÍCIO 5
// parte a.
// function somaNumeros(number1, number2) {
//     soma = number1 + number2
//     return soma
// }

// const resultado = somaNumeros(599,600)
// console.log(resultado)

//parte b.
// function numeroMaior(number1, number2) {
//     if (number1 > number2) {
//         return true
//     } else if (number2 > number1) {
//         return false
//     }
// }
// const resultado = numeroMaior(30,5)
// console.log("Número 1 é maior que 2?", resultado)

//parte c.
// function imprimeDezVezes(string) {
//     for (i=0; i < 10; i++) {
//         console.log(i, "-", string)
// }
// }

// let animal = "elefante"
// const animalia = imprimeDezVezes(animal)

// EXERCÍCIO 6
//parte a.
// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// function arrayLength(array) {
//     return array.length 
// }
// let resultado = arrayLength(arrayNumeros)
// console.log(`O número de elementos no array é ${resultado}`)

// b. Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function numeroPar(number) {
//     if (number%2 === 0) {
//         return true
//     } else if (number%2 === 1) {
//         return false
//     }
// }
// let inputUser = prompt("Digite um numero")
// let exemplo = numeroPar(inputUser)
// console.log(`O número ${inputUser} é par? Resposta: ${exemplo}`)

// //c. Escreva uma função que receba um array de números e devolva a quantidade de números pares dentro dele

// function quantosPares(array) {
//     let arrayFinal = []
//     for (let number of array) {
//         if (number%2 === 0){
//             arrayFinal.push(number)
//         }
//     }   
//     return arrayFinal.length
// }

// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// let exemplo = quantosPares(arrayNumeros)
// console.log(`O numero de elementos pares no array é ${exemplo}`)

//parte d.
// const arrayNumeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// function numeroPar(number) {
//     if (number%2 === 0) {
//         return true
//     } else if (number%2 === 1) {
//         return false
//     }
// }

// function quantosPares(array) {
//     let arrayFinal = []
//     for (let number of array) {
//         if (numeroPar(number) === true) {
//             arrayFinal.push(number)
//         }
//     }   
//     return arrayFinal.length
// }

// let exemplo = quantosPares(arrayNumeros)
// console.log(`O numero de elementos pares no array é ${exemplo}`)

// DESAFIOS
// DESAFIO 1

// parte 1.
// const arrowFunction = (parametro) => {
//     console.log(parametro)
// }

// let teste = arrowFunction ("string")

// // parte 2.
// const outraArrowFunction = (parametro1, parametro2) => {
//     let soma = parametro1 + parametro2
//     arrowFunction(soma)
// }

// let exemplo = outraArrowFunction("outra string", 007)

// DESAFIO 2

// a. Escreva uma função que receba um array como parâmetro e retorne um array com apenas os números pares e multiplicados por 2.

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

// function umaFuncao(array) {
//     let arrayRetorno =[]
//     for (let number of array)  {
//         if (number%2 === 0) {
//             arrayRetorno.push(number*2)
//         }
//     }
//     return arrayRetorno
//     }

// let exemplo = umaFuncao(numeros)
// console.log(exemplo)

// b. Escreva uma função que receba um array como parâmetro e retorne o maior número deste array.

// function umaFuncao(array) {
//     let maiorNumero = -Infinity
    // for (let number of array) {
    //     if (number > maiorNumero) {
    //         maiorNumero = number
    //     }
    // }
//     return maiorNumero
// }

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let teste = umaFuncao(numeros)
// console.log(teste)

// c. Escreva uma função que receba um array como parâmetro e retorne o índice do maior número deste array.

// W.O

// d. Escreva uma função que recebe um array como parâmetro e retorne este array invertido.

// function inverterArray(array) {
//     let novoArray = []
//     for (let i = array.length-1; i >=0; i--) {
//         novoArray.push(array[i])
//     }
//     return novoArray
// }

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let teste = console.log("O array invertido:", inverterArray(numeros))