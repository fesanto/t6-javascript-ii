const selectInputArea = document.getElementById("selectInputArea");
const selectButton = document.querySelector(".select__button");

selectButton.addEventListener("click", function (event) {
    event.preventDefault();

    selectInputArea[selectInputArea.selectedIndex].remove()
})
