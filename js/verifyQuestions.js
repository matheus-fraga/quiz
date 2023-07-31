
export function verifyQuestions(theme) {

    //Referenciando os componentes HTML
    const doneButton = document.querySelector(".done");
    const restartButton = document.querySelector(".restart");
    const nextPageButton = document.querySelector(".next");
    const questionForm = document.querySelector(".questionary-form");
    const questionContainers = document.querySelectorAll(".question-container");

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
            }
        });
    });

    nextPageButton.addEventListener("click", function () {
       console.log("Gustavo",'CSS','2:00',getDateQuestionary(),totalPoints,totalPoints,totalPoints)
       //  results(name, bestTheme, time, dateQuiz, scoreHTML, scoreCSS, scoreJavaScript)
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

    function getDateQuestionary(){
        const dateSubmit = new Date();
        const day = dateSubmit.getDate();
        const month = dateSubmit.getMonth() + 1;
        const year = dateSubmit.getFullYear();

        return(`${day}/${month}/${year}`);
    }
    
}
