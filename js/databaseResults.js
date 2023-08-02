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
    return formatDate(dateSubmit);
}
// Formatar data
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
}

let Dantas = new Player(
    "Gabriel Dantas",
    "JavaScript",
    "48:05",
    formatDate(new Date("2023-03-15 12:45")),
    8
);
let Riberi = new Player(
    "Gabriel Riberi Koa",
    "HTML",
    "21:50",
    formatDate(new Date("2023-05-22 09:15")),
    9
);
let Fraga = new Player(
    "Matheus Fraga",
    "CSS",
    "23:07",
    formatDate(new Date("2023-07-10 14:35")),
    8
);
let Quilante = new Player(
    "Gustavo Quilante",
    "JavaScript",
    "36:40",
    formatDate(new Date("2023-04-01 17:45")),
    10
);
let Roberto = new Player(
    "Douglas Roberto",
    "HTML",
    "41:08",
    formatDate(new Date("2023-08-28 10:30")),
    9
);
let Lucas = new Player(
    "Lucas Silva",
    "CSS",
    "15:36",
    formatDate(new Date("2023-06-12 13:20")),
    7
);
let Ana = new Player(
    "Ana Souza",
    "JavaScript",
    "28:13",
    formatDate(new Date("2023-01-20 18:45")),
    6
);
let Pedro = new Player(
    "Pedro Santos",
    "HTML",
    "10:12",
    formatDate(new Date("2023-09-05 11:55")),
    9
);
let Julia = new Player(
    "Julia Oliveira",
    "CSS",
    "09:50",
    formatDate(new Date("2023-11-17 16:10")),
    10
);
let Mariana = new Player(
    "Mariana Almeida",
    "HTML",
    "16:22",
    formatDate(new Date("2023-02-08 08:40")),
    7
);
let Felipe = new Player(
    "Felipe Pereira",
    "CSS",
    "17:20",
    formatDate(new Date("2023-10-03 22:25")),
    8
);
let Isabela = new Player(
    "Isabela Lima",
    "HTML",
    "53:07",
    formatDate(new Date("2023-06-29 19:15")),
    9
);
let Guilherme = new Player(
    "Guilherme Carvalho",
    "HTML",
    "55:14",
    formatDate(new Date("2023-04-17 14:00")),
    10
);
let Laura = new Player(
    "Laura Rodrigues",
    "JavaScript",
    "45:12",
    formatDate(new Date("2023-03-02 07:50")),
    8
);
let Victor = new Player(
    "Victor Oliveira",
    "CSS",
    "14:54",
    formatDate(new Date("2023-07-25 20:30")),
    7
);

// Criar array com os usuários
export let resultsArray = [Dantas, Riberi, Fraga, Quilante, Roberto, Lucas, Ana, Pedro, Julia, Mariana, Felipe, Isabela, Guilherme, Laura, Victor];