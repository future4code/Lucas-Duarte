function cadastrarDespesa() {
    // Campos de cadastro
    const inputValor = document.getElementById("valor-despesa")
    const inputTipo = document.getElementById("tipo-despesa")
    const inputDescricao = document.getElementById("descricao-despesa")

    // Cria objeto
    const despesa = {
        valor: inputValor.value,
        tipo: inputTipo.value,
        descricao: inputDescricao.value,
    }

    // Insere objeto no array
    const listaDeDespesas = []
    listaDeDespesas.push(despesa)
    console.log(listaDeDespesas)

    // Validando se todos os campos fora preenchidos
    if (inputValor.value !== "" && inputTipo.value !== ""  &&inputDescricao.value !== "") {
    // Colocando a despesa na página através de callback
        imprimirDespesa(listaDeDespesas)
    } else {
        alert("Por favor, preencha os três campos!")
    }

    // limpando os campos
    inputValor.value = ""
    inputTipo.value = ""
    inputDescricao.value = ""
}

// Função que adiciona a despesa na página a partir de array
const imprimirDespesa = (array) => {
    const containerDespesas = document.getElementById("container-despesas")
    array.forEach((despesa) => {
        containerDespesas.innerHTML +=` <li>
        <p><strong>Valor: R$${despesa.valor}</strong></p>
        <p><em>Tipo de despesa:</em> ${despesa.tipo}</p>
        <p><em>Descrição:</em> ${despesa.descricao}</p>
        </li>`
    })
}

// const clicouFiltrar = () => {
//     // Campos de filtro
//     const filtroTipo = document.getElementById("filtro-tipo-despesa").value
//     const filtroValorMinimo = document.getElementById("valor-minimo").value
//     const filtroValorMaximo = document.getElementById("valor-maximo").value
//     filtrarArray(listaDeDespesas, filtroTipo)
// }

// const filtrarArray = (array, inputTipo) => {
//     array.filter(despesa => {
//         if (despesa.tipo === inputTipo) {
//             return console.log(despesa)
//         }
//     } ) 
// }


// const filtrarDespesas = () => {

// listaDeDespesas.filter((despesa, index, array) => {
//     if (filtroTipo === "Despesa da casa") {
//         return console.log("qqq")
//     } else {
//         console.log("äaaa")
//     }
// })

// function clicouParaFiltrar() {
//     // Campos de filtro
//     const filtroTipo = document.getElementById("filtro-tipo-despesa").value
//     const filtroValorMinimo = document.getElementById("valor-minimo").value
//     const filtroValorMaximo = document.getElementById("valor-maximo").value

//     filtrarDespesas(filtroTipo)
// }
