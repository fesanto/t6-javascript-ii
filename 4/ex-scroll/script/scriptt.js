const button = document.getElementById("arrowTop");
    console.log("button");

button.addEventListener("click", function(){
    console.log("clicou");
    window.scrollTo(pageYOffset, 0);
})

window.addEventListener("scroll", function(){
    // console.log("rolou");
    console.log(pageYOffset);
    if(pageYOffset > 450){
        button.hidden = false;
        return false;
    }
    button.hidden = true;
})