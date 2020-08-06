function apertouBotao() {
    const inputTitulo = document.getElementById("titulo-post")
    const inputAutor = document.getElementById("autor-post")
    const inputImagem = document.getElementById("imagem-post")
    const inputConteudo = document.getElementById("conteudo-post")

    // meu objeto <3
    const post = {
        titulo: inputTitulo.value,
        autor: inputAutor.value,
        imagem: inputImagem,
        conteudo: inputConteudo.value,
    }

    // botando o objeto no array
    const listaDePosts = []
    listaDePosts.push(post)

    // botando o post na página ...
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<div><h2>${inputTitulo.value}</h2><h3>${inputAutor.value}</h3><p>${inputConteudo.value}</p><div>`

    //verificando se tem imagem
    if (inputImagem.value.includes(".png") || inputImagem.value.includes(".jpg")){
        container.innerHTML += `<img src=${inputImagem.value} class="post-image">`
    } else {
        console.log("Sem imagem")
    }

     // limpando os campos
     inputTitulo.value = ""
     inputAutor.value = ""
     inputImagem.value = ""
     inputConteudo.value = ""
}
