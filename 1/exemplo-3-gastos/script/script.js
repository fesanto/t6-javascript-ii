const transacaoButton = document.querySelector(".transacao__button");

const iNome = document.getElementById("transacaoInputName");
const iValor = document.getElementById("transacaoInputMoney");
const iData = document.getElementById("transacaoInputDate")

transacaoButton.addEventListener("click", function(event){
    event.preventDefault();
    const extratoTable = document.querySelector(".extrato__table");
    
    // createElement - cria linha da tabela
    const linha = document.createElement("tr");
    

    // createElement / createTextNode - cria 3 colunas e os textos
    const colunaNome = document.createElement("td");
    const inputNome = document.createTextNode(iNome.value);

    const colunaValor = document.createElement("td");
    const inputValor = document.createTextNode(iValor.value);

    const colunaData = document.createElement("td");
    const inputData = document.createTextNode(iData.value);

    // apendChild - insere os valores nas colunas
    colunaNome.appendChild(inputNome);
    colunaValor.appendChild(inputValor);
    colunaData.appendChild(inputData);

    // appendChild - insere as colunas na linha
    linha.appendChild(colunaNome);
    linha.appendChild(colunaValor);
    linha.appendChild(colunaData);

    // appendChild - insere a linha na tabela
    extratoTable.appendChild(linha);
    console.log(linha);

});


