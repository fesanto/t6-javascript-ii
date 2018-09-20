
const iEmail = document.getElementById("loginInputEmail");
const iPass = document.getElementById("loginInputPassword");
const loginButton = document.querySelector(".login__button");

loginButton.addEventListener("click", function(evento){
    evento.preventDefault();
    const email = iEmail.value;
    const pass = iPass.value;

    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `Login efetuado com sucesso! Não esqueça: seu e-mail é ${email} e sua senha é ${pass}.`;
    // alert(`Login efetuado com sucesso! Não esqueça: seu e-mail é ${email} e sua senha é ${pass}.`)
    console.log(`Login efetuado com sucesso! Não esqueça: seu e-mail é ${email} e sua senha é ${pass}.`)
});
