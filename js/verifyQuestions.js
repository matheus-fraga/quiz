// Função para verificar quais são as respostas corretas, e acumular os pontos gerados pelo usuário
export function verifyQuestions(theme) {
    let totalPoints = 0;


    const submitQuestionary = document.querySelector(".done");
    const returnPage = document.querySelector(".restart");
    const nextPage = document.querySelector(".next");

    submitQuestionary.addEventListener("click", function (event) {
        event.preventDefault();
        const form = document.querySelector(".questionary-form");
        const questions = document.querySelectorAll(".question-container");
        const formData = new FormData(form);
        let isDone = true;
        questions.forEach((question, index) => {

            const checkedValue = formData.get(`question${index}`);

            if (checkedValue == theme[index].answer) {
                question.classList.add("success");
                question.classList.remove("wrong");
                question.classList.remove("warning");
                totalPoints++;
            } else if (checkedValue == undefined) {
                question.classList.add("warning");
                isDone = false;
            } else {
                question.classList.add("wrong");
                question.classList.remove("success");
                question.classList.remove("warning");
            }
        });
        if (isDone) {
            submitQuestionary.style.display = "none";
            returnPage.style.display = "none";
            nextPage.style.display = "block";
        }
    });

    nextPage.addEventListener("click", function () {
        const dateSubmit = new Date();
        const day = dateSubmit.getDate();
        const month = dateSubmit.getMonth() + 1; // Os meses são indexados a partir de 0, por isso adicionamos 1.
        const year = dateSubmit.getFullYear();
        const dateConcat = `${day}/${month}/${year}`;
        console.log(
            "carrega: " +
            "Gustavo " +
            "tema" +
            "CSS" +
            "data" +
            dateConcat +
            "nota: " +
            totalPoints
        );
    });
}
