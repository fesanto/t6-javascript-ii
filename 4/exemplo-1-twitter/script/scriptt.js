//1. selecionar botao e ver se esta funcionando;
const composerButton = document.querySelector(".tweet-composer__button");

//2. focar na área onde será escrito o tweet;
const tweetComposerInput = document.getElementById("tweetComposerInput");

composerButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log(composerButton);

    //3. validar para evitar clicar caso o campo de input esteja vazio;
    if (tweetComposerInput.value === undefined || tweetComposerInput.value === null || tweetComposerInput.value === "" || tweetComposerInput.value === " "){
        return false;
    }

    //4. criar constante do local onde colocaremos o tweet (div mae, div filha e p);
    const divCorpo = document.querySelector(".tweets-timeline");
    const divMaeTweet = document.createElement("div");
    const divFilhaTweetHeader = document.createElement("div");
    const span1TweetHeader = document.createElement("span");
    const span2TweetHeader = document.createElement("span");
    const span3TweetHeader = document.createElement("span");
    const divFilhaTweet = document.createElement("div");
    const pTweet = document.createElement("p");
    const divFilhaTweetFooter = document.createElement("div");
    const buttonFilhaTweetFooter = document.createElement("button");
    const date = new Date();  //para colocar data através do JS
    const month = date.toLocaleString("pt-br", {month: "short"});
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();

    //5. criar o componente para o texto do tweet;
    const textoTweet = document.createTextNode(tweetComposerInput.value);

    //6. inserir um dentro do outro: texto -> p -> div filha -> div mae;
    divCorpo.appendChild(divMaeTweet);
    divMaeTweet.appendChild(divFilhaTweetHeader);
    divMaeTweet.appendChild(divFilhaTweet);
    divMaeTweet.appendChild(divFilhaTweetFooter);
    divFilhaTweetFooter.appendChild(buttonFilhaTweetFooter);
    divFilhaTweetHeader.appendChild(span1TweetHeader);
    divFilhaTweetHeader.appendChild(span2TweetHeader);
    divFilhaTweetHeader.appendChild(span3TweetHeader);
    divFilhaTweet.appendChild(pTweet);
    pTweet.appendChild(textoTweet);
    
    //7. estilizando com css usando .className;
    divMaeTweet.className = "tweets-timeline__box";
    span1TweetHeader.className = "tweets-timeline__name";
    span2TweetHeader.className = "tweets-timeline__username";
    span3TweetHeader.className = "tweets-timeline__date";
    buttonFilhaTweetFooter.className = "tweets-timeline__footer";
    
    span1TweetHeader.innerHTML = "FeSanto";
    span2TweetHeader.innerHTML = "   @fesanto   ";
    span3TweetHeader.innerHTML = `${day} de ${month} às ${hour}:${minute}`;
    buttonFilhaTweetFooter.innerHTML = "Excluir";

    //8. inserir a div filha como primeiro elemento da div mae;
    divCorpo.insertBefore(divMaeTweet, divCorpo.childNodes[0]);

    //9. configurar botão para excluir tweet;
    tweetComposerInput.value = "";

    buttonFilhaTweetFooter.addEventListener("click", function(event){
        event.preventDefault();
        divMaeTweet.remove();
        console.log("oi")
    })

});

//10. configurar contador de caracteres
tweetComposerInput.addEventListener("keyup", function(){
    // const textBox = this;
    const maxLength = 280;
    const counter = document.getElementById("tweetComposerCounter");

    counter.innerHTML = maxLength - tweetComposerInput.value.length;

    if (maxLength - tweetComposerInput.value.length <= 15) {
        counter.style.color = "red";
    } else {
        counter.style.color = "white";
    }
    
    if (maxLength - tweetComposerInput.value.length < 0) {
        composerButton.disabled = true;
    } else {
        composerButton.disabled = false;
    }

    if (tweetComposerInput.value.length > maxLength){
        tweetComposerInput.value = tweetComposerInput.value.substring(0, maxLength);
    }
})