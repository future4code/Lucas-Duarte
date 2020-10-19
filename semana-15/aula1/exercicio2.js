// EXERCÍCIO 2

const operation = process.argv[2].toLowerCase()
const number1 = Number(process.argv[3])
const number2 = Number(process.argv[4])

const showError = () => {
    const errorText = "Passe como primeiro parâmetro a OPERAÇÃO MATEMÁTICA (add, sub, mult ou div) e NÚMEROS como segundo e terceiro parâmetros."

    console.log(errorText)
}

if (!(operation && number1 && number2)) {
    showError()
} else if (operation === "add") {
    console.log("\x1b[33m", `Resposta da soma: ${number1 + number2}`)
} else if (operation === "sub") {
    console.log("\x1b[33m", `Resposta da subtração: ${number1 - number2}`)
} else if (operation === "mult") {
    console.log("\x1b[33m", `Resposta da multiplicação: ${number1 * number2}`)
} else if (operation === "div") {
    console.log("\x1b[33m", `Resposta da divisão: ${number1 / number2}`)
} else {
    showError()
}

