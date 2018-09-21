//1. focar no botão
const menuButton = document.querySelector(".menu__button");
//2. focar no menu
const sidebarMenu = document.querySelector(".sidebar-menu");

//3. evento click no botão resulta numa função:
menuButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(sidebarMenu.classList)

    if(sidebarMenu.classList.contains("sidebar-menu__visible")){
    sidebarMenu.classList.remove("sidebar-menu__visible");
    sidebarMenu.classList.add("sidebar-menu__hidden");
    } else{
    sidebarMenu.classList.remove("sidebar-menu__hidden");
    sidebarMenu.classList.add("sidebar-menu__visible");
    }
})

//.classList: retona classe de listas passadas para o elemento de html