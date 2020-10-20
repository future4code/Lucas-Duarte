type numberStats = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: numberStats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type dataSample = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => numberStats
}


const amostraDeIdades: dataSample = {
    numeros: [21, 18, 65, 44, 15, 18],
	obterEstatisticas
}

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))