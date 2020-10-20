const obtainStats = (firstNumber:number, secondNumber:number): void => {

    let bigger: number | string = 0

    if (firstNumber > secondNumber) {
        bigger = firstNumber
    } else if (secondNumber > firstNumber) {
        bigger = secondNumber
    } else if (secondNumber === firstNumber) {
        bigger = "Empate, os dois números são iguais!"
    }

    console.log("Soma dos números:", firstNumber + secondNumber)
    console.log("Subtração dos números:", firstNumber - secondNumber)
    console.log("Multiplicação dos números:", firstNumber * secondNumber)
    console.log("Maior número:", bigger)
}

console.log(obtainStats(2, 3))