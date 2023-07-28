// Criar o objeto player, para salvar os dados dos jogadores
class Player {
    name;
    bestTheme;
    time;
    dateQuiz;
    scoreHTML;
    scoreCSS;
    scoreJavaScript;

    constructor(name, bestTheme, time, dateQuiz, scoreHTML, scoreCSS, scoreJavaScript) {
        this.name = name;
        this.bestTheme = bestTheme;
        this.time = time;
        this.dateQuiz = dateQuiz;
        this.scoreHTML = scoreHTML;
        this.scoreCSS = scoreCSS;
        this.scoreJavaScript = scoreJavaScript;
    }
}

// Cria o objeto dataAtual, para salvar o dia em que foi realizado o quiz
let dataAtual = new Date();
// Nossos integrantes para popular a página
let Dantas = new Player(
    "Gabriel Dantas",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    8,
    6,
    7
);
let Riberi = new Player(
    "Gabriel Riberi Koa",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    9,
    8,
    9
);
let Fraga = new Player(
    "Matheus Fraga",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    8,
    9,
    7
);
let Quilante = new Player(
    "Gustavo Quilante",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    10,
    8,
    6
);
let Roberto = new Player(
    "Douglas Roberto",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    9,
    5,
    10
);
let Lucas = new Player(
    "Lucas Silva",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    7,
    9,
    8
);

let Ana = new Player(
    "Ana Souza",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    6,
    7,
    9
);

let Pedro = new Player(
    "Pedro Santos",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    9,
    8,
    6
);

let Julia = new Player(
    "Julia Oliveira",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    10,
    9,
    9
);

let Mariana = new Player(
    "Mariana Almeida",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    7,
    7,
    8
);

let Felipe = new Player(
    "Felipe Pereira",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    8,
    6,
    9
);

let Isabela = new Player(
    "Isabela Lima",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    9,
    8,
    7
);

let Guilherme = new Player(
    "Guilherme Carvalho",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    10,
    9,
    9
);

let Laura = new Player(
    "Laura Rodrigues",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    8,
    7,
    8
);

let Victor = new Player(
    "Victor Oliveira",
    "",
    50.0,
    dataAtual.getDate() +
    "/" +
    (dataAtual.getMonth() + 1) +
    "/" +
    dataAtual.getFullYear(),
    7,
    6,
    9
);

// Criar array com os usuários
export let resultsArray = [Dantas, Riberi, Fraga, Quilante, Roberto, Lucas, Ana, Pedro, Julia, Mariana, Felipe, Isabela, Guilherme, Laura, Victor];