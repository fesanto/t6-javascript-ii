const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(event){
    event.preventDefault();

    // createElement - cria novos elementos. Aqui criou um <span></span>
    const resposta = document.createElement("span");

    // createTextNode - cria nós de texto. Aqui criou o texto "email cadastrado com sucesso!"
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");

    // appendChild - insere item dentro de um elemento. Aqui inseriu o texto dentro da <span>
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    // insertBefore - insere item dentro de um elemento, mas antes de um item estabelecido. Aqui inseriu a <span> dentro de um array antes do índice 0.
    newsForm.insertBefore(resposta, newsForm.childNodes[0]);
});
