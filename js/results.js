class Player {
    nome;
    tema;
    tempo;
    dataQuiz;
    pontuacao;

    constructor(nome, tema, tempo, dataQuiz, pontuacao) {
        this.nome = nome;
        this.tema = tema;
        this.tempo = tempo;
        this.dataQuiz = dataQuiz;
        this.pontuacao = pontuacao;
    }
}

var resultsArray = [];

function populateResults(user) {
    resultsArray.push(user);
}

let dataAtual = new Date();

let gabriel1 = new Player(
    "Gabriel Dantas1",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    2
);
let gabriel2 = new Player(
    "Gabriel Dantas2",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    4
);
let gabriel3 = new Player(
    "Gabriel Dantas3",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    6
);
let gabriel4 = new Player(
    "Gabriel Dantas4",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    8
);
let gabriel5 = new Player(
    "Gabriel Dantas5",
    "HTML",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    9
);
let gabriel6 = new Player(
    "Gabriel Dantas6",
    "HTML",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    10
);
let gabriel7 = new Player(
    "Gabriel Dantas7",
    "HTML",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    2
);
let gabriel8 = new Player(
    "Gabriel Dantas8",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    4
);
let gabriel9 = new Player(
    "Gabriel Dantas9",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    5
);
let gabriel10 = new Player(
    "Gabriel Dantas10",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    12
);
let gabriel11 = new Player(
    "Gabriel Dantas11",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    12
);
let gabriel12 = new Player(
    "Gabriel Dantas12",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    12
);
let gabriel13 = new Player(
    "Gabriel Dantas13",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    14
);
let gabriel14 = new Player(
    "Gabriel Dantas14",
    "JS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    15
);
let gabriel15 = new Player(
    "Gabriel Dantas15",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    16
);
let gabriel16 = new Player(
    "Gabriel Dantas16",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    16
);
let gabriel17 = new Player(
    "Gabriel Dantas17",
    "CSS",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    17
);
let gabriel18 = new Player(
    "Gabriel Dantas18",
    "HTML",
    50.0,
    dataAtual.getDate() +
        "/" +
        (dataAtual.getMonth() + 1) +
        "/" +
        dataAtual.getFullYear(),
    18
);

populateResults(gabriel1);
populateResults(gabriel2);
populateResults(gabriel3);
populateResults(gabriel4);
populateResults(gabriel5);
populateResults(gabriel6);
populateResults(gabriel7);
populateResults(gabriel8);
populateResults(gabriel9);
populateResults(gabriel10);
populateResults(gabriel11);
populateResults(gabriel12);
populateResults(gabriel13);
populateResults(gabriel14);
populateResults(gabriel15);
populateResults(gabriel16);
populateResults(gabriel17);
populateResults(gabriel18);

console.log(resultsArray);

function showResults() {
    var tabela = document.querySelector(".result-table");
    console.log(tabela);
    tabela.innerHTML = `<tr>
    <th>Nome</th>
    <th>Tema</th>
    <th>Tempo</th>
    <th>Data Quiz</th>
    <th>Pontuação</th>
</tr>`;
    for (var i = 0; i < resultsArray.length; i++) {
        var result = resultsArray[i];

        tabela.innerHTML += `
        <tr>
        <td>${result.nome}</td>
        <td>${result.tema}</td>
        <td>${result.tempo}</td>
        <td>${result.dataQuiz}</td>
        <td>${result.pontuacao}</td>
    </tr>
        `;
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function findTopFive() {
    //Notas de CSS
    var css = resultsArray.filter(usuario => usuario.tema === "CSS");
    //Notas de HTML
    var html = resultsArray.filter(usuario => usuario.tema === "HTML");
    //Notas de JS
    var js = resultsArray.filter(usuario => usuario.tema === "JS");
    // Verifique se o array tem pelo menos 5 elementos de CSS
    if (css.length < 5) {

        var tabela = document.querySelector(".theme");

        const sortedArray = css.sort((a, b) => b.pontuacao - a.pontuacao);
        for (let i = 0; i < sortedArray.length; i++) {
            tabela.innerHTML += `
        <ul>
        <li>${sortedArray[i].nome} : Nota: ${sortedArray[i].pontuacao}</li>
        </ul>
        `;
        }
    } else {
        const sortedArray = css.sort((a, b) => b.pontuacao - a.pontuacao);
        var tabela = document.querySelector(".theme");
        // Pegue os cinco primeiros elementos (os cinco maiores valores)
        const topFive = sortedArray.slice(0, 5);
        tabela.innerHTML += `
        <ul>
        <li>${topFive[0].nome} : Nota: ${topFive[0].pontuacao}</li>
        <li>${topFive[1].nome} : Nota: ${topFive[1].pontuacao}</li>
        <li>${topFive[2].nome} : Nota: ${topFive[2].pontuacao}</li>
        <li>${topFive[3].nome} : Nota: ${topFive[3].pontuacao}</li>
        <li>${topFive[4].nome} : Nota: ${topFive[4].pontuacao}</li>
    </ul>
        `;
    }

    // Verifique se o array tem pelo menos 5 elementos de HTML
    if (html.length < 5) {
        
        var tabela = document.querySelector(".theme2");

        const sortedArray = html.sort((a, b) => b.pontuacao - a.pontuacao);

        for (let i = 0; i < sortedArray.length; i++) {
            tabela.innerHTML += `
        <ul>
        <li>${sortedArray[i].nome} : Nota: ${sortedArray[i].pontuacao}</li>
        </ul>
        `;
        }
    } else {
        var tabela = document.querySelector(".theme2");
        const sortedArray = html.sort((a, b) => b.pontuacao - a.pontuacao);
        // Pegue os cinco primeiros elementos (os cinco maiores valores)
        const topFive = sortedArray.slice(0, 5);
        tabela.innerHTML += `
        <ol>
        <li>${topFive[0].nome} : Nota: ${topFive[0].pontuacao}</li>
        <li>${topFive[1].nome} : Nota: ${topFive[1].pontuacao}</li>
        <li>${topFive[2].nome} : Nota: ${topFive[2].pontuacao}</li>
        <li>${topFive[3].nome} : Nota: ${topFive[3].pontuacao}</li>
        <li>${topFive[4].nome} : Nota: ${topFive[4].pontuacao}</li>
    </ol>
        `;
    }

    // Verifique se o array tem pelo menos 5 elementos de JS
    if (resultsArray.length < 5) {

        var tabela = document.querySelector(".theme3");

        const sortedArray = js.sort((a, b) => b.pontuacao - a.pontuacao);
        for (let i = 0; i < sortedArray.length; i++) {
            tabela.innerHTML += `
        <ul>
        <li>${sortedArray[i].nome} : Nota: ${sortedArray[i].pontuacao}</li>
        </ul>
        `;
        }
    } else {
        const sortedArray = js.sort((a, b) => b.pontuacao - a.pontuacao);
        var tabela = document.querySelector(".theme3");
        // Pegue os cinco primeiros elementos (os cinco maiores valores)
        const topFive = sortedArray.slice(0, 5);
        tabela.innerHTML += `
        <ul>
        <li>${topFive[0].nome} : Nota: ${topFive[0].pontuacao}</li>
        <li>${topFive[1].nome} : Nota: ${topFive[1].pontuacao}</li>
        <li>${topFive[2].nome} : Nota: ${topFive[2].pontuacao}</li>
        <li>${topFive[3].nome} : Nota: ${topFive[3].pontuacao}</li>
        <li>${topFive[4].nome} : Nota: ${topFive[4].pontuacao}</li>
    </ul>
        `;
    }
}

export { showResults, findTopFive };
