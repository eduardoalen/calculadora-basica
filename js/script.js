const botoes = document.querySelectorAll("button");

const campoInput = document.getElementById("resultado");

for(let i = 0; i < botoes.length; i++){
    botoes[i].addEventListener("click", ()=>{
        const valorBotao = botoes[i].textContent;
        if(valorBotao === "C"){
            limparResultado();
        } else if (valorBotao === "=") {
            calcularResultado();
        } else {
            acrecentarValor(valorBotao);
        }
    });
}

function limparResultado() {
    campoInput.value = ""
}

function calcularResultado() {
    campoInput.value = eval(campoInput.value) //eval: calcula o valor que está dentro
}

function acrecentarValor(valorBotao) {
    campoInput.value += valorBotao;
}