// /////////// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ///////////

// /* 1. Essa função 1)recebe um valor, 2)pede via prompt um novo valor ao usuário, que será a cotação do dólar, 3)retorna o resultado da multiplicação do valor recebido e do valor digitado no prompt.

// IMPRESSO NO CONSOLE: "R$[100 x cotação do dólar inserida no prompt]"*/

// /* 2. A função recebe 2 parâmetros e inicia declarando uma variável valorAposInvestimento. É a usada a condicional switch para oferecer um valor diferente para essa variável de acordo com o valor da string do primeiro parâmetro. O segundo parâmetro é multiplicado por um denominador diferente, dependendo do valor do primeiro.

// IMPRESSO NO CONSOLE1: 165
// IMPRESSO NO CONSOLE2: TIPO DE INVESTIMENTO INFORMADO INCORRETO
// */

// /* 3. São 3 arrays. O primeiro com vários valores, o segundo e o terceiro vazios. É feita uma iteração sobre o primeiro array, com uma condicional: os números pares serão inseridos no segundo array, e os ímpares no terceiro.

// IMPRESSO NO CONSOLE1: Quantidade total de números 14
// IMPRESSO NO CONSOLE2: [quantidade de números pares]
// IMPRESSO NO CONSOLE3: [quantidade de números ímpares]
// */

// /* 4. A iteração sobre o array determina que numero1 será o menor número do array e numero 2 será o maior número do array.

// IMPRESSO NO CONSOLE1: -10
// IMPRESSO NO CONSOLE2: 1590
// */





// /////////// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO /////////// 

// // 1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.

// // lista = [0, 10, 20, 30, 40, 50, 60, 70]

// // for (let number of lista) {
// //     console.log(number)
// // }

// // for (let i=0; i < lista.length; i++) {
// //     const resultado = lista[i]
// //     console.log(resultado)
// // }

// // let a = 0
// // while (a < lista.length) {
// //     console.log(a)
// //     a++
// // }

// //2. Para este exercício considere as seguintes variáveis:

// // const booleano1 = true
// // const booleano2 = false
// // const booleano3 = !booleano2 //true
// // const booleano4 = !booleano3 //false

// // Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

// // a) booleano1 && booleano2 && !booleano4
// // FALSE

// // b) (booleano1 && booleano2) || !booleano3
// // FALSE

// // c) (booleano2 || booleano3) && (booleano4 || booleano1)
// // TRUE

// // d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
// // TRUE

// // e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// //  TRUE

// //3. Você tem que escrever um código que, dado um número N, ele imprima (no console) os N primeiros números pares.

// // const N = 3
// // let i = 1
// // while(i <= N) {
// //   console.log(i*2)
// //   i++
// // }

// //4.Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.

// // function tipoTriangulo(a, b, c) {

// //     if (a === 0 || a === undefined || b === 0 || b === undefined || c === undefined || c === undefined) {
// //         return "Não dá pra existir triângulo com lado igual a ZERO!"
// //     } else if (a === b && a === c && b === c) {
// //         return "Equilátero"
// //     } else if (a === b || a === c || b === c ) {
// //         return "Isósceles"
// //     } else if (a !== b && a !== c && b !== c) {
// //         return "Escaleno"
// //     }
// // }

// // console.log(tipoTriangulo(10,10,10))


// // 5. Faça um programa que, dados dois números:

// // numero1 = prompt("Digite um número")
// // numero2 = prompt("Digite outro número")

// //I. indique qual é o maior
// // function indicaMaior (numero1, numero2) {
// //     if (numero1 > numero2) {
// //         return `${numero1} é maior que ${numero2}`
// //     } else 
// //     return `${numero2} é maior que ${numero1}`
// // }
// // console.log(indicaMaior(numero1, numero2))

// // II. determine se eles são divisíveis um pelo outro
// // function eDivisivel (numero1, numero2) {
// //     if (numero1%numero2 === 0) {
// //         return `${numero1} é divisível por ${numero2}`
// //     } else
// //     return `${numero1} não é divisível por ${numero2}`
// // }
// // console.log(eDivisivel(numero1, numero2))

// // III. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
// // function determinaDiferenca(numero1, numero2) {
// //         if (numero1 > numero2) {
// //             return `A diferença entre ${numero1} e ${numero2} é ${numero1 - numero2}`
// //         } else if (numero2 > numero1) {
// //             return `A diferença entre ${numero2} e ${numero1} é ${numero2 - numero1}`
// //         } else {
// //             return `Os números são iguais!.`
// //         }
// // }

// // console.log(determinaDiferenca(numero1, numero2))





// /////////// EXERCÍCIOS DE FUNÇÕES /////////// 

// // 1 - Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)


// // let arrayDeNumeros = [10, 290, 300, 40, 52, 63, 70, 83, 92]
// // let novoArray = []
// // let maiorNumero = 0
// // let menorNumero = Infinity

// // const defineMaiorNumero = (array, funcao) => {    
// //     for (let numero of array) {
// //         if (numero > maiorNumero){
// //             maiorNumero = numero
// //         }
// //     }

// //     for (let numero of array) {
// //         if (numero < menorNumero) {
// //             menorNumero = numero
// //         }
// //     }

// //     console.log(`O array original é ${array}`)
// //     console.log(`O maior numero é ${maiorNumero}`)
// //     console.log(`O menor numero é ${menorNumero}`)
// //     funcao(array, maiorNumero, menorNumero)
// // }

// // const criaArraySemMaiorNumero = (array, maiorNumero, menorNumero) => {
// //     let segundoMaior = 0
// //     let segundoMenor = Infinity

// //     for (let numero of array) {
// //         if (numero !== maiorNumero && numero !== menorNumero) {
// //             novoArray.push(numero)
// //         }
// //     }
// //     console.log(`O novo array é ${novoArray}`)

// //     for(let numero of novoArray) {
// //         if (numero > segundoMaior){
// //             segundoMaior = numero
// //         }
// //     }
// //     console.log(`O segundo maior número do array original era ${segundoMaior}`)

// //     for(let numero of novoArray) {
// //         if (numero < segundoMenor) {
// //             segundoMenor = numero
// //         }
// //     }
// //     console.log(`O segundo menor número do array original era ${segundoMenor}`)

// //     return segundoMaior
// // }

// // defineMaiorNumero(arrayDeNumeros, criaArraySemMaiorNumero)


// // 2. Escreva uma função não nomeada que faça um alert("Hello Future4");. Em seguida, invoque essa função.

// // let funcaoNaoNomeada = () => {
// //     alert("Hello Future4")
// // }

// // funcaoNaoNomeada()





// /////////// EXERCÍCIOS DE OBJETOS ///////////

// // 1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
// // - Um array é uma lista.
// // - Um objeto é uma coleção de propriedades, que por sua vez são a associação entre uma chave e um valor.

// // 2. Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados (lado1 e lado2) e retorna um objeto com 4 informações: largura (lado1), altura (lado2), perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).

// // function criaRetangulo(lado1, lado2) {
// //     const retangulo = {
// //         largura: lado1,
// //         altura: lado2,
// //         perimetro: 2 * (lado1+lado2),
// //         area: lado1 * lado2
// //     }
// //     return retangulo
// // }

// // console.log(criaRetangulo(9,8))

// // 3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto: Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.

// // const filmeFavorito = {
// //     titulo: "Sunrise: A Song of Two Humans",
// //     ano: 1927,
// //     diretor: "F. W. Murnau",
// //     elenco: ["George O'Brien", "Janet Gaynor"],
// // }

// // console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.elenco}`)

// // 4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de nome, idade, email e endereco. Crie uma função chamada anonimizarPessoa, que deverá retornar um novo objeto com as mesmas propriedades, mas com a string ANÔNIMO no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

// // const umaPessoaQualquer = {
// //     nome: "Lucas Duarte",
// //     idade: 27,
// //     email: "dolucasduarte@gmail.com",
// //     endereco: "Rua dos Bobos, numero 0"
// // }

// // function anonimizarPessoa(objeto) {
// //     let pessoaAnonima = objeto
// //     pessoaAnonima.nome = "ANÔNIMO"

// //     console.log(pessoaAnonima)
// //     return pessoaAnonima
// // }

// // anonimizarPessoa(umaPessoaQualquer)






// /////////// EXERCÍCIOS DE FUNÇÕES DE ARRAY ///////////


// // // 1. Considere um array com o seguinte formato:

// // let pessoas = [
// // 	{ nome: "Pedro", idade: 20 },
// // 	{ nome: "João", idade: 10 },
// // 	{ nome: "Paula", idade: 12 },
// //     { nome: "Artur", idade: 89 },
// //     { nome: "Elson", idade: 18}
// // ]

// // a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)

// // const filtrarAdultos = (array) => {
// //     if (array.idade >= 18) {
// //         return true
// //     } else {
// //         return false
// //     }
// // }
   
// // const pessoasAdultas = pessoas.filter(filtrarAdultos)
// // console.log(pessoasAdultas)


// // // b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

// // const pessoasKids = pessoas.filter (filtrarKids = (array) => {
// //     if (array.idade < 18) {
// //         return true
// //     } else {
// //         return false
// //     }
// // })

// // console.log(pessoasKids)



// // //  2. Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere:

// // const arrayNumeros = [1, 2, 3, 4, 5, 6]

// // // // a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2.

// // const arrayDobrado = arrayNumeros.map ((numero, index, array) => {
// //     return numero*2
// // })

// // console.log(arrayDobrado)

// // //  //  b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]` 

// // const arrayTriplicadaEmString = arrayNumeros.map ((numero, index, array) => {
// //     return String(numero*3)
// // })
// // console.log(arrayTriplicadaEmString)

// // //  //   c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]`

// // const arrayParidade = arrayNumeros.map((numero, index, array) => {
// //     let paridade = ""
// //     if (numero%2 === 0) {
// //         paridade = "é par"
// //     } else {
// //         paridade = "é ímpar"
// //     }
// //     return `${numero} ${paridade}`
// // })

// // console.log(arrayParidade)





// // // 3. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

// // const pessoas = [
// // 	{ nome: "Paula", idade: 12, altura: 1.8},
// // 	{ nome: "João", idade: 20, altura: 1.3},
// // 	{ nome: "Pedro", idade: 15, altura: 1.9},
// // 	{ nome: "Luciano", idade: 22, altura: 1.8},
// // 	{ nome: "Artur", idade: 10, altura: 1.2},
// // 	{ nome: "Soter", idade: 70, altura: 1.9}
// // ]

// // // A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

// // // a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo
 
// //  const pessoasPermitidas = pessoas.filter (filtrarPermitidos = (array) => {
// //      if (array.altura >=1.5 && array.idade > 14 && array.idade < 60) {
// //          return true
// //      } else {
// //          return false
// //      } 
// //  })
 
// // console.log(pessoasPermitidas)

// // // b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

// // const pessoasNaoAutorizadas = pessoas.filter (filtrarNaoPermitidos = (array) => {
// //     if (array.altura < 1.5 || array.idade < 14 || array.idade > 60) {
// //         return true
// //     } else {
// //         return false
// //     } 
// // })

// // console.log(pessoasNaoAutorizadas)





// // // 4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

// // A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]

//  const emailArray = consultas.map((consultas) => {
//     let tratativa = ""
//     let enclise = ""

//     if (consultas.genero === "masculino"){
//         tratativa = "Sr."
//         enclise = "lo"
//     } if (consultas.genero === "feminino") {
//         tratativa = "Sra."
//         enclise = "la"
//     }

//     let msgConfirmacao = `Olá, ${tratativa} ${consultas.nome}. Estamos enviando esta mensagem para lembrá-${enclise} da sua consulta no dia ${consultas.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//     let msgCancelamento = `Olá, ${tratativa} ${consultas.nome}. Infelizmente, sua consulta marcada para o dia ${consultas.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`

//     if (consultas.cancelada) {
//         return msgCancelamento
//     } if (!consultas.cancelada) {
//         return msgConfirmacao
//     }
// })

// console.log(emailArray)




// 5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

//A sua tarefa é: faça uma função que receba um array com os objetos do tipo abaixo e atualize o saldo total individual de cada um, sem criar um novo array.

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]

// contas.forEach(conta => {
//     let totalCompras = 0

//     conta.compras.forEach(compra => {
//         totalCompras += compra
//         // totalCompras += compra
//         return totalCompras
//     })

//     return conta.saldoTotal = conta.saldoTotal - totalCompras
// })

// console.log(contas)