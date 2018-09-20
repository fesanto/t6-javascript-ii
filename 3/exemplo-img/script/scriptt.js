const links = document.querySelector(".gallery__nav");

console.log(links);
console.log(links.children); //children traz apenas as tags'a' .. childNode traz todos os nós

for (let i = 0; i < links.children.length; i++){
    // console.log(links.children.length[i]);

    links.children[i].addEventListener("click", function(){
        const img = this.dataset.image;
        console.log(img);
        document.querySelector(".gallery__image").src = img;

    })
}