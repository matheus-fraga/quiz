let nomeUsuario = "";

// Função para armazenar o nome do usuário no Local Storage
function salvarNome() {
    nomeUsuario = document.getElementById("nome").value;
}

// Evento ao clicar no botão "Iniciar Quiz"
document.getElementById("iniciarQuiz").addEventListener("click", function (event) {
        event.preventDefault();
        salvarNome();
    });

export { nomeUsuario };
