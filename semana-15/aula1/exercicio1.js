// EXERCÍCIO 1

const name = process.argv[2]
const age = Number(process.argv[3])

if(name && age) {
    console.log("\x1b[33m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}.`)
} else {
    console.log("Passe como primeiro parâmetro o NOME e como segundo sua IDADE atual")
}