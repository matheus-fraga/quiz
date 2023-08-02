import { start } from "./timer.js";
import { showQuestions } from "./showQuestions.js";
import { showResults, showAverage, findTopFive } from "./results.js";

// Função para trocar as cores da página, e o ícone
export function toggleTheme(icon, background, theme) {
    if (background == false) {
        theme.href = theme.href.replace("light", "dark");
        icon.innerText = "dark_mode";
    } else {
        theme.href = theme.href.replace("dark", "light");
        icon.innerText = "light_mode";
    }
}

//Função para alterar o conteúdo da página, para a página do quiz
export function toQuiz(background, header, main, footer, theme) {
    if (background == false) {
        themeStylesheet.href = "css/quiz-dark.css";
        iconTheme.innerText = "dark_mode";
    } else {
        themeStylesheet.href = "css/quiz-light.css";
        iconTheme.innerText = "light_mode";
    }

    header.style.display = "block";

    main.innerHTML = `
        <form class="questionary-form">
            <article name="question1" class="question-container">
                <h2></h2>
                <div class="question-body">
                </div>
            </article>
        </form>
    `;

    footer.innerHTML = `
        <button type="button" class="done">Concluir</button>
        <button type="button" class="restart">Reiniciar</button>
        <button type="button" class="next">Avançar </button>
    `;

    // Mostrar questões do tema selecionado
    showQuestions(theme);
    start();
}

// Função para a página de resultado
export function toResults(background, h1, header, main, footer) {
    if (background == false) {
        themeStylesheet.href = "css/results-dark.css";
        iconTheme.innerText = "dark_mode";
    } else {
        themeStylesheet.href = "css/results-light.css";
        iconTheme.innerText = "light_mode";
    }

    h1.innerText = "Resultados";

    header.style.display = "none";

    main.innerHTML = `
        <div class="container-table">
            <table class="result-table">
                <thead>
                    <tr id="result-title">
                        <th>Nome</th>
                        <th>Tema</th>
                        <th>Tempo</th>
                        <th>Data Quiz</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody id = "results_Users">
                </tbody>
            </table>
        </div>
                
        <div class="average">
            <p id="ok"></p>
            <p id="not-ok"></p>
        </div>

        <div class="themes">
            <div class="theme1">
                <h2>HTML</h2>
            </div>
            <div class="theme2">
                <h2>CSS</h2>
            </div>
            <div class="theme3">
                <h2>JavaScript</h2>
            </div>
        </div>
    `;

    footer.innerHTML = `
        <button type="button" class="restart">Reiniciar</button>
    `;

    // Mostrar resultados
    showResults();
    showAverage();
    findTopFive();
}