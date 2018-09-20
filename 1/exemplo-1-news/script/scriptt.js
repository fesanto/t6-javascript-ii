/*  const titulo = document.getElementById("formTitle");
const titulo2 = document.querySelector(".news__title")
console.log(titulo);
console.log(titulo2)
alert(titulo.textContent)   */


//const input = document.getElementById("newsInputEmail");  se utilizar essa variavel dentro da funcao, nao deixa-la aqui fora 
const botao = document.querySelector(".news__button");
console.log(input);
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    // const email = input.value;
    // console.log(`Email ${email} foi cadastrado com sucesso!`)
    const email2 = document.getElementById("newsInputEmail").value;
    alert (`Email ${email2} foi cadastrado com sucesso!`)
    console.log(`Email ${email2} foi cadastrado com sucesso!`)
});
