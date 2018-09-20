const loginButton = document.querySelector(".login__button");
const buttonClose = document.querySelector(".login-modal__button-close");

loginButton.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".login-modal").style.display = "flex";
})

buttonClose.addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector(".login-modal").style.display = "none";
})

