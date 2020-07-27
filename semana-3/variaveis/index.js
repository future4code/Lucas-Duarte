/* Exercícios de interpretação de código

EXERCÍCIO ESCRITO 1
Será impresso no console:
- 10 (o primeiro valor de b)
- 10, 5 (o valor de a, e o segundo valor atribuído a b) 

EXERCÍCIO ESCRITO 2
Será impresso no console:
- 10, 10, 10 (já que as variáveis b e c tem o valor de a)

*/

// PROGRAMA 1
let nome
let idade

console.log(typeof(nome))
console.log(typeof(idade))
// O tipo impresso foi undefined, justamente porque elas não possuem valores.

nome=prompt("Qual é o seu nome?")
idade=prompt("Qual é a sua idade?")

console.log(typeof(nome), typeof (idade))
// O tipo impresso foi string

console.log("Olá, " + nome + "! Você tem " + idade + " anos")

//PROGRAMA 2
let nomeDoPet
let nomeDaMae
let nomeDoPai
let filmePreferido
let livroPreferido

nomeDoPet=prompt("Qual é o nome do seu pet?")
nomeDaMae=prompt("Qual o nome da sua mãe?")
nomeDoPai=prompt("Qual o nome do seu pai?")
filmePreferido=prompt("Qual o nome do seu filme preferido?")
livroPreferido=prompt("Qual seu livro preferido?")


console.log ("1. Nome do pet: " + nomeDoPet + " 2. Nome da mãe: " + nomeDaMae + " 3. Nome do pai: " + nomeDoPai + " 4. Filme preferido: " + filmePreferido + " 5. Livro preferido: " + livroPreferido)

//PROGRAMA 3

let array = ["milho","pipoca","paçoca","bolo de fubá","pé de moleque"]

console.log(array)
console.log("Essas são minhas comidas preferidas:" + array)

let comidaNova
comidaNova=prompt("Qual sua comida preferida?")
console.log(array[0], comidaNova, array[2], array[3], array[4])



let arrayPerguntas = ["Ontem choveu?", "Você está vivo?", "O céu é vermelho?"]
let arrayRespostas = [false, true, false]

console.log(arrayPerguntas[0], arrayRespostas[0], arrayPerguntas[1], arrayRespostas[1], arrayPerguntas[2], arrayRespostas[2])