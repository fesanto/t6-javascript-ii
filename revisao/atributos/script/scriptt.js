const link = document.getElementById("externo");
const artigo = document.querySelector(".article");
const button = document.querySelector(".button");

button.addEventListener("click", function(event){
    event.preventDefault();

    for (let i = 0; i < link.attributes.length; i++){
        let prop = document.createElement("p")
        prop.innerHTML = (`${link.attributes[i].name} : ${link.attributes[i].value}`)

        artigo.appendChild(prop)
    }
})

/*
onclick = "getAttributes()"

const atributos = document.getElementById("externo")
const atributosText = document.querySelector(".atributosText")
const atributosBox = document.createElement("p")

function getAttributes(){
    atributosBox.innerHTML = `<p> A id é ${atributos.id}, o Type é ${atributos.type}, o rel é ${atributos.rel}, o target é ${atributos.target} e o href é ${atributos.href}.`
    atributosText.appendChild(atributosBox)
}
*/