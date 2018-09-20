const menuButton = document.querySelector(".sidebar-menu__button");

menuButton.addEventListener("click", function(event){
    event.preventDefault();
    if (document.querySelector(".sidebar-menu").style.marginLeft == "-430px"){
    document.querySelector(".sidebar-menu").style.marginLeft = "0px";
    document.querySelector(".sidebar-menu").setAttribute("style", "font-size: 80px; font-style: italic; color:#ff0000;");  //nova formatacao
    } else {
    document.querySelector(".sidebar-menu").style.marginLeft = "-430px";  
    }
})

/*
const button = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

let counter = 1;
button.addEventListener("click", function(event){
    event.preventDefault();

    sidebar.style.left = "-435px";
    counter++
    if (counter % 2 !== 0){
        sidebar.style.left = "0px"
    }
})
*/