enum typeOfEra {
    AC = "AC",	
    DC = "DC"
}

function whichHistoricPeriod (year:number , era?:typeOfEra) {

    let historicPeriod:string = ''

    if (era === "AC") {
        if (4000 >= year && year > 0) {
            historicPeriod = "Idade antiga"
        } else if (year > 4000 && year <=10000 ) {
            historicPeriod = "Pré-História"
        } else if (year > 100000) {
            return console.log("ERRO! Seres humanos ainda não existiam.")
        } else if (year <= 0) {
            return console.log("ERRO! O ano precisa ser um número positivo")
        }
    }

    if (era === "DC" || era === undefined) {
        if (year > 0 && year < 476) {
            historicPeriod = "Idade antiga"
        } else if (year >= 476 && year < 1453) {
            historicPeriod = "Idade média"
        } else if (year >= 1453 && year < 1789) {
            historicPeriod = "Idade moderna"
        } else if (year >= 1789 && year <= 2020) {
            historicPeriod = "Idade contemporânea"
        } else if (year > 2020) {
            return console.log("ERRO! Anos futuros não podem ser computados.")
        } else if (year <= 0) {
            return console.log("ERRO! O ano precisa ser um número positivo" )
        }
    } 
    
    return historicPeriod

}

console.log(whichHistoricPeriod(Number(process.argv[2])))