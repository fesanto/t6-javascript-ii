const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmailConfirm");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputLevel = document.getElementsById("cadatroInputLevel");
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
    } else if (inputNews.checked === false){
        inputNews.focus();
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo :c");
    }

    inputArea.addEventListener("change", function(){
        if (inputArea.selectedIndex === 0){
            document.querySelector("body").style.backgroundColor = "#191970"; 
            document.querySelector(".wrapper").style.backgroundColor = "#4682B4"; 
        } else if (inputArea.selectedIndex === 1){
            document.querySelector("body").style.backgroundColor = "#006400";
            document.querySelector(".wrapper").style.backgroundColor = "#32CD32";
        } else if (inputArea.selectedIndex === 2){
            document.querySelector("body").style.backgroundColor = "#DC143C";
            document.querySelector(".wrapper").style.backgroundColor = "#F08080";
        } else if (inputArea.selectedIndex === 3){
            document.querySelector("body").style.backgroundColor = "#FF4500";
            document.querySelector(".wrapper").style.backgroundColor = "#FFA500";
    } 

    
    if (radioItem.value === "Junior"){
        console.log("0 - 2 anos de experiência;");
    } else if (radioItem.value === "Pleno"){
        console.log("2 - 5 anos de experiência;");
    } else if (radioItem.value === "Senior"){
        console.log("5+ anos de experiência;");
    }


    inputEmailConfirm.addEventListener("paste", function(event){
        event.preventDefault();
        return false;
    })

    return true;

    document.querySelector("body").style.backgroundColor = "#FFFFFF";
    const form = this.closest("form");
    form.submit();
});
