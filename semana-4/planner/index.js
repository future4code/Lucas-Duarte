function criarTarefa() {
    const inputTarefa = document.getElementById("tarefa")
    let nomeTarefa = document.getElementById("tarefa").value
    inputTarefa.value = ""

    let diaSemana = document.getElementById("dias-semana").value

    const colunaDomingo = document.getElementById("domingo")
    const colunaSegunda = document.getElementById("segunda")
    const colunaTerca = document.getElementById("terca")
    const colunaQuarta = document.getElementById("quarta")
    const colunaQuinta = document.getElementById("quinta")
    const colunaSexta = document.getElementById("sexta")
    const colunaSabado = document.getElementById("sabado")

    if (nomeTarefa ==="") {
        alert("Digite um nome pra sua tarefa!")
    } else {
        switch (diaSemana) {
            case "domingo":
                colunaDomingo.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "segunda":
                colunaSegunda.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "terca":
                colunaTerca.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "quarta":
                colunaQuarta.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "quinta":
                colunaQuinta.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "sexta":
                colunaSexta.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
            case "sabado":
                colunaSabado.innerHTML += `<li onclick="riscarTarefa(event)">${nomeTarefa}</li>`
            break
        }
    }
}

function riscarTarefa(event) {
    event.target.classList.toggle("tarefa-riscada") 
}


function limparTarefas() {
    let todasTarefas = document.getElementsByTagName("li")
    console.log(todasTarefas)
    // for (let item of todasTarefas) {
    //     item.remove();
    //   }
    for (var i = todasTarefas.length - 1; i >= 0; --i) {
        todasTarefas[i].remove();
      }
}