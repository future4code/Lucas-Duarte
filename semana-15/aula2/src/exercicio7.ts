enum TYPE_OF_CLOTHE {
    SUMMER = "Verão",
    WINTER = "Inverno",
    BATHING = "Banho",
    UNDERWEAR = "Íntima"
}

type product = {
    name: string,
    price: number,
    category: TYPE_OF_CLOTHE,
    discountPrice?: number
}

function blackFridayValue (products: product[]) : product[] {
    
    const newProducts = products.map( (item) => {
        const { price, category } = item 

        switch(category) {
            case "Verão":
                return {...item , discountPrice: price*(100-5)/100}
            case "Inverno":
                return {...item, discountPrice: price*(100-10)/100}
            case "Banho":
                return {...item, discountPrice: price*(100-4)/100}
            case "Íntima":
                return {...item, discountPrice: price*(100-7)/100}
            default:
                return item
        }
    })

    return newProducts
}


// Exemplo:

const brusinha: product = {
    name: "brusinha",
    price: 50,
    category: TYPE_OF_CLOTHE.WINTER,
}

const cueca: product = {
    name: "cueca",
    price: 20,
    category: TYPE_OF_CLOTHE.UNDERWEAR
}

const calcinha: product = {
    name: "calcinha",
    price: 15,
    category: TYPE_OF_CLOTHE.UNDERWEAR
}

const itens = [brusinha, cueca, calcinha]

console.log(blackFridayValue(itens))