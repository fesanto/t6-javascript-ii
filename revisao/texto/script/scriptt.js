const buttonIncrease = document.querySelector(".button__increase");
const buttonDecrease = document.querySelector (".button__decrease");
const arrowTop = document.getElementById("arrowTop");

//clica o botão e rola toda a pagina para o topo, posição 0
arrowTop.addEventListener("click", function(){
    window.scrollTo(pageYOffset, 0);
});

//se rolar para além da linha 250, o botão aparece, senão permanece oculto
window.addEventListener("scroll", function(){
    console.log("rolou");
    console.log(pageYOffset);
    if(pageYOffset > 250){
        arrowTop.hidden = false;
        return false;
    }
    arrowTop.hidden = true;
});


buttonIncrease.addEventListener("click", function(){
    let tamanhoFonte = document.querySelector(".article").style.fontSize;
    tamanhoFonte = tamanhoFonte.replace("px", "");

    if(tamanhoFonte == ""){
        document.querySelector(".article").style.fontSize = "16px";
    } else {
        document.querySelector(".article").style.fontSize = (parseInt(tamanhoFonte)+1)+"px";
    }
});

buttonDecrease.addEventListener("click", function(){
    let tamanhoFonte = document.querySelector(".article").style.fontSize;
    tamanhoFonte = tamanhoFonte.replace("px", "");

    if(tamanhoFonte == ""){
        document.querySelector(".article").style.fontSize = "16px";
    } else {
    document.querySelector(".article").style.fontSize = (parseInt(tamanhoFonte)-1)+"px";
    }
});