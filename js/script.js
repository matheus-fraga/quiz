import { toggleMusic } from './musicPlayer.js';
import { toQuiz, toResults, toggleTheme } from "./changeScreen.js";

// Criando variáveis do HTML principal
var background = true;
const h1 = document.querySelector("h1");
const bodyMain = document.querySelector("main");
const bodyFooter = document.querySelector("footer");
const iconTheme = document.getElementById("iconTheme");
const themeStylesheet = document.getElementById("themeStylesheet");

// Função do botão para iniciar a troca de cores
const toggleThemeButton = document.getElementById("toggleThemeButton");
toggleThemeButton.addEventListener("click", () => {
    background = !background;
    toggleTheme(iconTheme, background, themeStylesheet);
});

// Função para começar e parar a música
const playPauseButton = document.getElementById("playPauseButton");
playPauseButton.addEventListener("click", toggleMusic);

// Função do botão para login para quiz
const iniciar = document.querySelector("#iniciarQuiz");
iniciar.addEventListener("click", function () {
    var nomeUsuario = document.getElementById("nome");
    var mensagemErro = document.getElementById("mensagemErro");

    if (nomeUsuario.value.replaceAll(" ", "") != null && nomeUsuario.value.replaceAll(" ", "") !== "") {
        var themeSelect = document.querySelector("#tema");
        var selectedValue = themeSelect.value;
        toQuiz(background, bodyMain, bodyFooter, selectedValue);
        setTimeout(buttonReset, 500);
        setTimeout(buttonResults, 500);
        mensagemErro.style.display = "none";
    }
    else {
        mensagemErro.style.display = "block"; // Exibe a mensagem de erro se o campo de nome estiver vazio
        console.log("Sem nome!");
    }
});

// Função do botão de resetar a página
function buttonReset() {
    const buttonReturn = document.querySelector(".restart");
    buttonReturn.addEventListener("click", () => {
        location.reload();
    });
}

// Função do botão avançar para os resultados
function buttonResults() {
    const buttonAdvance = document.querySelector(".next");
    buttonAdvance.addEventListener("click", () => {
        toResults(background, h1, bodyMain, bodyFooter);
        setTimeout(buttonReset, 500);
    });
}