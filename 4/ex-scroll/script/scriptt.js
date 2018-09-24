const button = document.getElementById("arrowTop");
    console.log("button");

//clica o botão e rola toda a pagina para o topo, posição 0
button.addEventListener("click", function(){
    console.log("clicou");
    window.scrollTo(pageYOffset, 0);
})

window.addEventListener("scroll", function(){
    console.log("rolou");
    console.log(pageYOffset);
    if(pageYOffset > 200){
        button.hidden = false;
        return false;
    }
    button.hidden = true;
})