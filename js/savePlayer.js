import { newPlayer } from "./script.js";
import { Player, resultsArray } from "./databaseResults.js";

// Função para salvar os dados de nome e escolha de tema
export function saveNameTheme(name, theme) {
    newPlayer.name = name;
    newPlayer.theme = theme;
}

// Função para salvar o tempo, data e pontos totais do usuário
export function saveTimeDatePoints(time, date, points) {
    newPlayer.time = time;
    newPlayer.dateQuiz = date;
    newPlayer.score = points;
    resultsArray.push(newPlayer);

    localStorage.setItem(localStorage.length + 1, newPlayer.toJsonString())
}

// Função para puxar o histórico de partidas do usuário
export function loadLocalStorage() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const valueString = localStorage.getItem(key);
        const oldPlayer = Player.fromJsonString(valueString);
        resultsArray.push(oldPlayer);
    }
}