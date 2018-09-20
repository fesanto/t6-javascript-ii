
const feedbackButton = document.querySelector(".feedback__button");
const feedbackInputMessage = document.getElementById("feedbackInputMessage");

feedbackButton.addEventListener("click", function(event){
    event.preventDefault();

    const feedback = document.createElement("p");
    const feedbackMensagem = document.createTextNode(feedbackInputMessage.value);
    feedback.appendChild(feedbackMensagem);
    const testimonialsSubtitle = document.querySelector(".testimonials");
    testimonialsSubtitle.appendChild(feedback);
});

// const button = document.querySelector(".feedback__button");
// const feedback = document.querySelector(".testimonials");
// const inputFeedback = document.querySelector(".feedback__input");

// feedbackButton.addEventListener("click", function(e){
//      e.preventDefault();
//      const newComent = document.createElement("p");
//      newComent.innerHTML = inputFeedback.value;
//      feedback.appendChild(newComent);