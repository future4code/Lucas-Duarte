// TIPAGEM:

type prato = {
    nome: string,
    custo: number,
    preco: number,
    ingredientes: string[]
}

type venda = {
    prato: string,
    cliente: string,
}

// ARRAYS GLOBAIS:

let produtos: prato[] = [
    {nome: "Coxinha vegana",custo: 2, preco: 8, ingredientes: ["jaca", "farinha", "óleo"]},
    {nome: "Hambúrguer de soja",custo: 3, preco: 10, ingredientes: ["soja", "pão", "maionese"]},
    {nome: "Cachorro quente",custo: 4, preco: 15, ingredientes: ["salsicha", "pão"]},
]

let vendas: venda[] = [
    {prato: "Coxinha vegana", cliente: "Rob"},
    {prato: "Coxinha vegana", cliente: "Parry"},
    {prato: "Coxinha vegana", cliente: "Parry"},
    {prato: "Coxinha vegana", cliente: "Ugo"},
    {prato: "Coxinha vegana", cliente: "Laila"},
    {prato: "Hambúrguer de soja", cliente: "Sheila"},
]

// FUNÇÕES

function cadastroDeProduto(produto:prato): void {
    produtos.push(produto)
}

function vendaRealizada(venda:venda): void{
    vendas.push(venda)
}

function achaPreco (nome: string): number | undefined {
    
    if (nome === undefined) {
        return
    }

    const produtoEscolhido = produtos.find(
        (produto: prato)  => {
            return produto.nome === nome
        }
    )

    if (!produtoEscolhido) {
        return
    }

    return produtoEscolhido.preco
}

function achaCusto (nome: string): number | undefined {
    
    if (nome === undefined) {
        return
    }

    const produtoEscolhido = produtos.find(
        (produto: prato)  => {
            return produto.nome === nome
        }
    )

    if (!produtoEscolhido) {
        return
    }

    return produtoEscolhido.custo
}

function determinaLucro (vendas: venda[]):number {
    const listaDeLucro: number[] = vendas.map( (venda) => {
        return Number(achaPreco(venda.prato)) - Number(achaCusto(venda.prato))
    })

    let lucro = 0

    for (let i = 0; i < listaDeLucro.length; i++) {
        lucro += Number(listaDeLucro[i])
    }

    return lucro
}

console.log(determinaLucro(vendas))

// console.log(achaPreco("Hambúrguer de soja"))



