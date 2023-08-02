import { end } from "./timer.js";
import { getDateQuestionary } from "./databaseResults.js";
import { saveTimeDatePoints, loadLocalStorage } from "./savePlayer.js";

export function verifyQuestions(theme) {

    //Referenciando os componentes HTML
    const nextPageButton = document.querySelector(".next");
    const doneButton = document.querySelector(".done");
    const restartButton = document.querySelector(".restart");
    const questionForm = document.querySelector(".questionary-form");
    const questionContainers = document.querySelectorAll(".question-container");

    //contador do tempo
    let startTime = Date.now();
    let endTime;
    //contador para as respostas concluidas
    let respondedQuestionsCount = 0;
    //contador total de acertos 
    let totalPoints = 0;
    //funcao do botao concluir questionario.
    doneButton.addEventListener("click", function (event) {
        event.preventDefault();

        const formData = new FormData(questionForm);
        questionContainers.forEach((question, index) => {

            const correctAnswer = theme[index].answer; // pega a posição da resposta correta referenciado no objeto
            const checkedValue = formData.get(`question${index}`); // pega o valor da resposta inserida pelo usuário

            if (checkedValue == correctAnswer) {
                handleCorrectAnswer(question, index);
                totalPoints++; //soma os pontos do usuário
            } else if (!checkedValue) {
                question.classList.add("warning");
            } else {
                handleWrongAnswer(question, index);
            }

            if (respondedQuestionsCount === questionContainers.length) {
                enableNextPage();
                endTime = end(startTime)
            }
        });
    });

    //funcao que muda o campo como a resposta correta
    function handleCorrectAnswer(question, index) {
        question.classList.add("success");
        respondedQuestionsCount++;
        disableQuestionInputs(index, question);
    }
    //funcao que muda o campo como a resposta errada
    function handleWrongAnswer(question, index) {
        question.classList.add("wrong");
        respondedQuestionsCount++;
        disableQuestionInputs(index, question);
    }
    //funcao que retira os botoes de resetar e concluir e adicionar o seguir.
    function enableNextPage() {
        doneButton.style.display = "none";
        restartButton.style.display = "none";
        nextPageButton.style.display = "block";
    }

    function disableQuestionInputs(index, question) {
        const questionInputs = question.querySelectorAll(`input[name="question${index}"]`);
        questionInputs.forEach(input => {
            input.disabled = true;
        });
    }

    nextPageButton.addEventListener("click", () => {
        loadLocalStorage();
        saveTimeDatePoints(endTime, getDateQuestionary(), totalPoints);
    });
}
