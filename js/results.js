import { resultsArray } from "./databaseResults.js";

export function showResults() {
    var tabela = document.querySelector("#results_Users");
    tabela.innerHTML = "";

    for (let user of resultsArray) {
        var theme = verifyBestTheme(user);
        var score = verifyScore(user);
        tabela.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${theme}</td>
            <td>${user.time}</td>
            <td>${user.dateQuiz}</td>
            <td>${score.toFixed(2)}</td>
        </tr>
        `;
    }
}

// Função para verificar qual a pontuação final do usuário
function verifyScore(user) {
    var finalScore = (user.scoreHTML + user.scoreCSS + user.scoreJavaScript) / 3;
    return finalScore;
}
// Função para verificar em qual tema, o usuário se sobressaiu
function verifyBestTheme(user) {
    if (user.scoreHTML >= user.scoreCSS && user.scoreHTML >= user.scoreJavaScript) {
        return user.bestTheme = "HTML";
    } 
    else if (user.scoreCSS >= user.scoreHTML && user.scoreCSS >= user.scoreJavaScript) {
        return user.bestTheme = "CSS";
    } 
    else {
        return user.bestTheme = "JavaScript";
    }
}

// Função que printa as 5 melhores notas
export function findTopFive() {
    //Criar variáveis com as notas de cada tema do quiz
    var listHTML = resultsArray.filter(function(player) {
        verifyBestTheme(player);
        return player.bestTheme === "HTML";
    });
    var listCSS = resultsArray.filter(function(player) {
        verifyBestTheme(player);
        return player.bestTheme === "CSS";
    });
    var listJS = resultsArray.filter(function(player) {
        verifyBestTheme(player);
        return player.bestTheme === "JavaScript";
    });
    
    // Função para organizar cara uma das listas
    function compareHTML(a, b) {
        return b.scoreHTML - a.scoreHTML;
    }
    function compareCSS(a, b) {
        return b.scoreCSS - a.scoreCSS;
    }
    function compareJS(a, b) {
        return b.scoreJavaScript - a.scoreJavaScript;
    }
    listHTML.sort(compareHTML);
    listCSS.sort(compareCSS);
    listJS.sort(compareJS);
    console.log(listHTML, listCSS, listJS);

    // Adiciona na tabela os resultados
    if(listHTML.length >= 5){
        var tabelaHTML = document.querySelector(".theme1");
        for (let i = 0; i < 5; i++) {
            tabelaHTML.innerHTML += `
            <ul>
                <li>${listHTML[i].name} : Nota: ${listHTML[i].scoreHTML}</li>
            </ul>
            `;
        }
    }
    else{
        var tabelaJS = document.querySelector(".theme1");
        for (let i = 0; i < listHTML.length; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].scoreHTML}</li>
            </ul>
            `;
        }
    }

    if(listCSS.length >= 5){
        var tabelaCSS = document.querySelector(".theme2");
        for (let i = 0; i < 5; i++) {
            tabelaCSS.innerHTML += `
            <ul>
                <li>${listCSS[i].name} : Nota: ${listCSS[i].scoreHTML}</li>
            </ul>
            `;
        }
    }
    else{
        var tabelaJS = document.querySelector(".theme2");
        for (let i = 0; i < listCSS.length; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].scoreHTML}</li>
            </ul>
            `;
        }
    }

    if(listJS.length >= 5){
        var tabelaJS = document.querySelector(".theme3");
        for (let i = 0; i < 5; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].scoreHTML}</li>
            </ul>
            `;
        }
    }
    else{
        var tabelaJS = document.querySelector(".theme3");
        for (let i = 0; i < listJS.length; i++) {
            tabelaJS.innerHTML += `
            <ul>
                <li>${listJS[i].name} : Nota: ${listJS[i].scoreHTML}</li>
            </ul>
            `;
        }
    }
}