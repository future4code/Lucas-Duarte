// Exercícios de interpretação de código

/* 
EXERCÍCIO 1
a. false
b. false
c. true
e. boolean 

EXERCÍCIO 2
a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9
*/

//PROGRAMA 1

suaIdade=prompt("Qual sua idade?")
idadeAmigo=prompt("Qual a idade do seu melhor amigo?")

Number(suaIdade)
Number(idadeAmigo)

let boolean1 = suaIdade > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?" + boolean1) 


//PROGRAMA 2


numeroPar=prompt("Insira um número par, faz favor")

Number(numeroPar)

let restoNumeroPar = numeroPar%2
console.log("O 'resto' da divisão de", numeroPar, "por 2 é", restoNumeroPar)

// O resto da divisão de um número par por 2 é sempre ZERO
// O resto da divisão de um número ímpar por 1 é sempre 1

// PROGRAMA 3

tarefaUm=prompt("Diga uma tarefa que você precisa fazer hoje")
tarefaDois=prompt("Fala mais uma tarefa de hoje")
tarefaTres=prompt("Última, vai. Mais uma tarefa:")

let listaDeTarefas = [tarefaUm, tarefaDois, tarefaTres]

console.log(listaDeTarefas)

tarefaFeita=prompt("Fale uma tarefa que você já realizou! (0,1 ou 2)")
Number(tarefaFeita)

listaDeTarefas.splice(tarefaFeita, 1)

console.log("Lista atualizada", listaDeTarefas)


// PROGRAMA 4

nome=prompt("Qual seu nome?")
email=prompt("Qual seu email?")

console.log("O email", email, "foi cadastrado com sucesso. Olá,", nome + "!")


// DESAFIO 1
let grausFahrenheit = 77
let converteKelvin = (grausFahrenheit - 32)*5/9 + 273.15

console.log(grausFahrenheit + "°F", "em graus Kelvin é", converteKelvin + "K")


grausCelsius=prompt("Digite uma temperatura em graus Celsius que você gostaria de converter para graus Fahrenheit:")
let converteFahrenheit = grausCelsius *9/5 + 32

console.log(grausCelsius + "°C", "em graus Fahrenheit é", converteFahrenheit +"°F")


// DESAFIO 2

let quilowattHora = 280
let calculo = quilowattHora * 0.05

console.log("a. " + calculo)

let desconto =  calculo * (15/100)
let calculoComDesconto = calculo - desconto

console.log("b. "+ calculoComDesconto)


// DESAFIO 3

let libras = 20
let conversaoLibraKg = libras/2.2046
console.log("a.", libras+"lb", "equivalem a", conversaoLibraKg +"kg")

let oncas = 10.5
let conversaoOncaKg = oncas/35.274
console.log("b.", oncas+"oz", "equivalem a", conversaoOncaKg +"kg")

let milhas = 100
let conversaoMilhasMetros = (milhas * 201168)/125
console.log("c.", milhas+"mi", "equivalem a", conversaoMilhasMetros +"m")

let pes=prompt("Escolha um valor em pés para converter para metros")
let conversaoPesMetros = pes/3.28
console.log("d.", pes+"ft", "equivalem a", conversaoPesMetros +"m")

let galao = 103.56
let conversaoGalaoLitros = galao * 3.785
console.log("e.", galao+"gal", "equivalem a", conversaoGalaoLitros +"l")

let xicara = 450
let conversaoXicarasLitros = xicara * 0.24
console.log("f.", xicara+"xic", "equivalem a", conversaoXicarasLitros+"l")