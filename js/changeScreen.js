import { showQuestions } from "./showQuestions.js";
import { showResults, findTopFive } from "./results.js";

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
export function toQuiz(background, main, footer, theme) {
    if (background == false) {
        themeStylesheet.href = "css/quiz-dark.css";
        iconTheme.innerText = "dark_mode";
    } else {
        themeStylesheet.href = "css/quiz-light.css";
        iconTheme.innerText = "light_mode";
    }

    main.innerHTML = `    
        <form class="questionary-form">
            <article name="question1" class="question-container">
                <h2>1. Qual tag é usada para criar um link em HTML?</h2>
                <div class="question-body">
                    <label>
                        <input type="radio" name="question1" value="0">
                        a) &lt;a&gt;
                    </label>
                    <label>
                        <input type="radio" name="question1" value="1">
                        b) &lt;link&gt;
                    </label>
                    <label>
                        <input type="radio" name="question1" value="2">
                        c) &lt;href&gt;
                    </label>
                    <label>
                        <input type="radio" name="question1" value="3">
                        d) &lt;url&gt;
                    </label>
                </div>
            </article>
            <article name="question1" class="question-container success">
                <h2>2. Qual tag é usada para criar um link em HTML?</h2>
                <div class="question-body">
                    <label>
                        <input type="radio" name="question2" value="0">
                        a) &lt;a&gt;
                    </label>
                    <label>
                        <input type="radio" name="question2" value="1">
                        b) &lt;link&gt;
                    </label>
                    <label>
                        <input type="radio" name="question2" value="2">
                        c) &lt;href&gt;
                    </label>
                    <label>
                        <input type="radio" name="question2" value="3">
                        d) &lt;url&gt;
                    </label>
                </div>
            </article>

            <article name="question3" class="question-container wrong">
                <h2>3. Qual tag é usada para criar um link em HTML?</h2>
                <div class="question-body">
                    <label>
                        <input type="radio" name="question3" value="0">
                        a) &lt;a&gt;
                    </label>
                    <label>
                        <input type="radio" name="question3" value="1">
                        b) &lt;link&gt;
                    </label>
                    <label>
                        <input type="radio" name="question3" value="2">
                        c) &lt;href&gt;
                    </label>
                    <label>
                        <input type="radio" name="question3" value="3">
                        d) &lt;url&gt;
                    </label>
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
}

// Função para a página de resultado
export function toResults(background, h1, main, footer) {
    if (background == false) {
        themeStylesheet.href = "css/results-dark.css";
        iconTheme.innerText = "dark_mode";
    } else {
        themeStylesheet.href = "css/results-light.css";
        iconTheme.innerText = "light_mode";
    }

    h1.innerText = "Resultados";

    main.innerHTML = `
        <div class="container-table">
            <table class="result-table">
                <thead>
                    <tr id="result-title">
                        <th>Nome</th>
                        <th>Melhor Tema</th>
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
            <p id="ok">Média de acertos: 6,5</p>
            <p id="not-ok">Média de erros: 4,2</p>
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
    findTopFive();
}