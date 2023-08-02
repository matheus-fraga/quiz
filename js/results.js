import { resultsArray } from "./databaseResults.js";

// Função para adicionar os resultados na tabela
export function showResults() {
    var tabela = document.querySelector("#results_Users");
    tabela.innerHTML = "";

    for (let user of resultsArray) {
        tabela.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.theme}</td>
            <td>${user.time}</td>
            <td>${user.dateQuiz}</td>
            <td>${user.score}</td>
        </tr>
        `;
    }
}

// Função que printa as 5 melhores notas
export function findTopFive() {
    //Criar variáveis com as notas de cada tema do quiz
    var listHTML = resultsArray.filter(function (player) {
        return player.theme === "HTML";
    });
    var listCSS = resultsArray.filter(function (player) {
        return player.theme === "CSS";
    });
    var listJS = resultsArray.filter(function (player) {
        return player.theme === "JavaScript";
    });

    // Função para organizar cada uma das listas
    function compare(a, b) {
        return b.score - a.score;
    }
    listHTML.sort(compare);
    listCSS.sort(compare);
    listJS.sort(compare);

    // Adiciona na tabela os resultados
    if (listHTML.length >= 5) {
        var tabelaHTML = document.querySelector(".theme1");
        for (let i = 0; i < 5; i++) {
            tabelaHTML.innerHTML += `
            <ul>
                <li>${listHTML[i].name} : Nota: ${listHTML[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tabelaHTML = document.querySelector(".theme1");
        for (let i = 0; i < listHTML.length; i++) {
            tabelaHTML.innerHTML += `
            <ul>
                <li>${listHTML[i].name} : Nota: ${listHTML[i].score}</li>
            </ul>
            `;
        }
    }

    if (listCSS.length >= 5) {
        var tabelaCSS = document.querySelector(".theme2");
        for (let i = 0; i < 5; i++) {
            tabelaCSS.innerHTML += `
            <ul>
                <li>${listCSS[i].name} : Nota: ${listCSS[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tabelaCSS = document.querySelector(".theme2");
        for (let i = 0; i < listCSS.length; i++) {
            tabelaCSS.innerHTML += `
            <ul>
                <li>${listCSS[i].name} : Nota: ${listCSS[i].score}</li>
            </ul>
            `;
        }
    }

    if (listJS.length >= 5) {
        var tabelaJS = document.querySelector(".theme3");
        for (let i = 0; i < 5; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tabelaJS = document.querySelector(".theme3");
        for (let i = 0; i < listJS.length; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].score}</li>
            </ul>
            `;
        }
    }
}