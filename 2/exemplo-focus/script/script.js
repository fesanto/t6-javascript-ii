const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementById("cadastroInputLevel");
const inputNews = document.getElementById("cadastroInputNews");
const cadastroButton = document.querySelector(".cadastro__button");

cadastroButton.addEventListener("click", function (event) {
    event.preventDefault();

     const optionSelect = inputArea.options [inputArea.selectedIndex];
     console.log(optionSelect);

     let radioItem;
     for(let i=0; i < inputLevel.length; i++){
        if (inputLevel[i].checked){
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
        }
     }


    if (inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus();
        return false;
    } else if (inputEmail.value == undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus();
        return false;
    } else if (inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value === " ") {
        inputEmailConfirm.focus();
        return false;
    } else if (inputEmail.value !== inputEmailConfirm.value){
        alert("O e-mail inserido deve ser o mesmo!")
    } else if (inputPassword.value === undefined || inputPassword.value === null || inputPassword.value === "" || inputPassword.value === " ") {
        inputPassword.focus();
        return false;
    } else if (inputPassword.value.length < 7){
        alert("A senha deverá ter, pelo menos, 7 dígitos!")
    } else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value === "" || inputPasswordConfirm.value === " ") {
        inputPasswordConfirm.focus();
        return false;
    } else if (inputPassword.value !== inputPasswordConfirm.value){
        alert("A senha inserida deve ser a mesma!")
    } else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus();
        return false;
    } else if (inputArea.selectedIndex === 0){
        document.querySelector("body").style.backgroundColor = "#8A2BE2"; 
        document.querySelector(".wrapper").style.backgroundColor = "#FFD700"; 
    } else if (inputArea.selectedIndex === 1){
        document.querySelector("body").style.backgroundColor = "#FF8C00";
        document.querySelector(".wrapper").style.backgroundColor = "#4682B4";
    } else if (inputArea.selectedIndex === 2){
        document.querySelector("body").style.backgroundColor = "#228B22";
        document.querySelector(".wrapper").style.backgroundColor = "#B22222";
    } else if (inputNews.checked === false){
        inputNews.focus();
        alert("Estás certo de que não deseja receber nossa newsletter? Hein?!");
    }
        alert("Deu certo!")
        return true;
});
