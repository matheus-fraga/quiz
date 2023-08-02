// Criar o objeto player, para salvar os dados dos jogadores
export class Player {
    name;
    theme;
    time;
    dateQuiz;
    score;

    constructor(name, theme, time, dateQuiz, score) {
        this.name = name;
        this.theme = theme;
        this.time = time;
        this.dateQuiz = dateQuiz;
        this.score = score;
    }

    toJsonString() {
        return JSON.stringify(this);
    }

    static fromJsonString(jsonString) {
        const data = JSON.parse(jsonString);
        return new Player(data.name, data.theme, data.time, data.dateQuiz, data.score);
    }
}

// Cria a função para salvar o dia em que foi realizado o quiz
export function getDateQuestionary() {
    const dateSubmit = new Date();
    const day = dateSubmit.getDate();
    const month = dateSubmit.getMonth() + 1;
    const year = dateSubmit.getFullYear();

    return (`${day}/${month}/${year}`);
}

// Nossos integrantes para popular a página
let Dantas = new Player(
    "Gabriel Dantas",
    "JavaScript",
    50.0,
    getDateQuestionary(),
    8
);
let Riberi = new Player(
    "Gabriel Riberi Koa",
    "HTML",
    50.0,
    getDateQuestionary(),
    9
);
let Fraga = new Player(
    "Matheus Fraga",
    "CSS",
    50.0,
    getDateQuestionary(),
    8
);
let Quilante = new Player(
    "Gustavo Quilante",
    "JavaScript",
    50.0,
    getDateQuestionary(),
    10
);
let Roberto = new Player(
    "Douglas Roberto",
    "HTML",
    50.0,
    getDateQuestionary(),
    9
);
let Lucas = new Player(
    "Lucas Silva",
    "CSS",
    50.0,
    getDateQuestionary(),
    7
);

let Ana = new Player(
    "Ana Souza",
    "JavaScript",
    50.0,
    getDateQuestionary(),
    6
);

let Pedro = new Player(
    "Pedro Santos",
    "HTML",
    50.0,
    getDateQuestionary(),
    9
);

let Julia = new Player(
    "Julia Oliveira",
    "CSS",
    50.0,
    getDateQuestionary(),
    10
);

let Mariana = new Player(
    "Mariana Almeida",
    "HTML",
    50.0,
    getDateQuestionary(),
    7
);

let Felipe = new Player(
    "Felipe Pereira",
    "CSS",
    50.0,
    getDateQuestionary(),
    8
);

let Isabela = new Player(
    "Isabela Lima",
    "HTML",
    50.0,
    getDateQuestionary(),
    9
);

let Guilherme = new Player(
    "Guilherme Carvalho",
    "HTML",
    50.0,
    getDateQuestionary(),
    10
);

let Laura = new Player(
    "Laura Rodrigues",
    "JavaScript",
    50.0,
    getDateQuestionary(),
    8
);

let Victor = new Player(
    "Victor Oliveira",
    "CSS",
    50.0,
    getDateQuestionary(),
    7
);

// Criar array com os usuários
export let resultsArray = [Dantas, Riberi, Fraga, Quilante, Roberto, Lucas, Ana, Pedro, Julia, Mariana, Felipe, Isabela, Guilherme, Laura, Victor];