//focando todos os campos de input e o botão
const feedbackInputName = document.getElementById("feedbackInputName");
const feedbackInputCity = document.getElementById("feedbackInputCity");
const feedbackInputData = document.getElementById("feedbackInputData");
const feedbackButton = document.querySelector(".feedback__button");

feedbackButton.addEventListener("click", function (event) {
    event.preventDefault();

    //validando se todos os campos estão preenchidos para, então, o botão de enviar ser clicado
    if (feedbackInputName.value === undefined || feedbackInputName.value === null || feedbackInputName.value === "" || feedbackInputName.value === " ") {
        feedbackInputName.focus();
        return false;
    } else if (feedbackInputCity.value === undefined || feedbackInputCity.value === null || feedbackInputCity.value === "" || feedbackInputCity.value === " ") {
        feedbackInputCity.focus();
        return false;
    } else if (feedbackInputData.value === undefined || feedbackInputData.value === null || feedbackInputData.value === "" || feedbackInputData.value === " ") {
        feedbackInputData.focus();
        return false;
    }

    //focando o local para onde irão os dados inputados na tabela
    const respostasTable = document.querySelector(".respostas__table")

    //criando linha da tabela
    const row = document.createElement("tr");

    //criando colunas da tabela
    const columnName = document.createElement("td");
    const inputName = document.createTextNode(feedbackInputName.value);

    const columnCity = document.createElement("td");
    const inputCity = document.createTextNode(feedbackInputCity.value);

    const columnData = document.createElement("td");
    const inputData = document.createTextNode(feedbackInputData.value);

    //inserindo os valores nas colunas
    columnName.appendChild(inputName);
    columnCity.appendChild(inputCity);
    columnData.appendChild(inputData);

    //inserindo as colunas na linha
    row.appendChild(columnName);
    row.appendChild(columnCity);
    row.appendChild(columnData);

    //inserindo a linha na tabela
    respostasTable.appendChild(row);

    //COMO LIMPAR CAMPO?????
});