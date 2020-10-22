const DNA = "ATTGCTGCGCATTAACGACGCGTA"

function convertDNAtoRNA(DNA: string): string {

    const array = DNA.split('')

    for (let i = 0; i < array.length; i++) {
        if(array[i] === "A") {
            array[i] = "U"
        } else if (array[i] === "T") {
            array[i] = "A"
        } else if (array[i] === "C") {
            array[i] = "G"
        } else if (array[i] === "G") {
            array[i] = "C"
        }
    }

    const RNA = array.join('')
    return RNA
}

console.log("DNA:",DNA)
console.log("RNA:",convertDNAtoRNA(DNA))
