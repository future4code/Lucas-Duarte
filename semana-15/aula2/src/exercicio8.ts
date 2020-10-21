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
    {prato: "Hambúrguer de soja", cliente: "Sheila"},
    {prato: "Cachorro quente", cliente: "Vânia"}
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


console.log(achaPreco("Hambúrguer de soja"))

//


