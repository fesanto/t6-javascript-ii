const galleryNav = document.querySelector(".gallery__nav");

for(let i = 0; i < galleryNav.children.length; i++){

    galleryNav.children[i].addEventListener("click", function(event){
        event.preventDefault();

        const img = this.dataset.image;
        document.querySelector(".gallery__image").src = img;

        const titl = this.dataset.title;
        document.querySelector(".gallery__caption").textContent = titl;

    })
}

