import { resultsArray } from "./databaseResults.js";

// Função para adicionar os resultados na tabela
export function showResults() {
    var table = document.querySelector("#results_Users");
    table.innerHTML = "";

    for (let user of resultsArray) {
        table.innerHTML += `
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

export function showAverage() {
    let averageRN = 0;
    let averageWN = 0;
    for (let i = 0; i < resultsArray.length; i++) {
        averageRN += resultsArray[i].score;
    }
    averageRN = averageRN / resultsArray.length;
    averageRN = averageRN * 10;
    for (let i = 0; i < resultsArray.length; i++) {
        averageWN += 10 - resultsArray[i].score;
    }
    averageWN = averageWN / resultsArray.length;
    averageWN = averageWN * 10;

    let averageRight = document.querySelector("#ok");
    let averageWrong = document.querySelector("#not-ok");
    averageRight.innerText = `Media de Acertos: ${averageRN.toFixed(2)}%`;
    averageWrong.innerText = `Media de Erros: ${averageWN.toFixed(2)}%`;
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
        var tableHTML = document.querySelector(".theme1");
        for (let i = 0; i < 5; i++) {
            tableHTML.innerHTML += `
            <ul>
                <li>${listHTML[i].name} : Nota: ${listHTML[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tableHTML = document.querySelector(".theme1");
        for (let i = 0; i < listHTML.length; i++) {
            tableHTML.innerHTML += `
            <ul>
                <li>${listHTML[i].name} : Nota: ${listHTML[i].score}</li>
            </ul>
            `;
        }
    }

    if (listCSS.length >= 5) {
        var tableCSS = document.querySelector(".theme2");
        for (let i = 0; i < 5; i++) {
            tableCSS.innerHTML += `
            <ul>
                <li>${listCSS[i].name} : Nota: ${listCSS[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tableCSS = document.querySelector(".theme2");
        for (let i = 0; i < listCSS.length; i++) {
            tableCSS.innerHTML += `
            <ul>
                <li>${listCSS[i].name} : Nota: ${listCSS[i].score}</li>
            </ul>
            `;
        }
    }

    if (listJS.length >= 5) {
        var tableJS = document.querySelector(".theme3");
        for (let i = 0; i < 5; i++) {
            tableJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].score}</li>
            </ul>
            `;
        }
    }
    else {
        var tableJS = document.querySelector(".theme3");
        for (let i = 0; i < listJS.length; i++) {
            tableJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].score}</li>
            </ul>
            `;
        }
    }
}