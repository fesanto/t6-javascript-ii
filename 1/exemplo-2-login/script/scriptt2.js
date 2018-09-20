const input = document.getElementById("loginInputEmail");
const loginButton = document.querySelector(".login__button");

loginButton.addEventListener("click", function(evento){
    evento.preventDefault();

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Aguarde! Você será direcionado(a) em instantes...");
    resposta.appendChild(respostaMensagem);
    const loginForm = document.querySelector(".login__form-group");
    loginForm.insertBefore(resposta, loginForm.childNodes[0]);
});