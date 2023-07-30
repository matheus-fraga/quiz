// Selecionar os elementos HTML pelos seus IDs
const timerElement = document.getElementById('timer'); // Elemento que exibirá o cronômetro
const startBtn = document.getElementById('start-btn'); // Botão para começar o quiz
const endBtn = document.getElementById('end-btn'); // Botão para terminar o quiz
const startTimeElement = document.getElementById('start-time'); // Elemento para exibir a hora de início
const endTimeElement = document.getElementById('end-time'); // Elemento para exibir a hora de término
const totalTimeElement = document.getElementById('total-time'); // Elemento para exibir o tempo total gasto no quiz
const resultTable = document.getElementById('result-table'); // Tabela de resultados do quiz

// Declaração de variáveis para controle do cronômetro e do quiz
let timerInterval; // Variável para armazenar o intervalo do cronômetro
let timeInSeconds = 0; // Variável para armazenar o tempo decorrido em segundos
let quizStarted = false; // Variável para controlar se o quiz já foi iniciado ou não
let startTime; // Variável para armazenar a hora de início do quiz
let endTime; // Variável para armazenar a hora de término do quiz

// Função para formatar o tempo em minutos e segundos no formato "mm:ss"
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const formattedMinutes = String(minutes).padStart(2, '0'); // Garante que sempre tenhamos dois dígitos para os minutos
  const formattedSeconds = String(remainingSeconds).padStart(2, '0'); // Garante que sempre tenhamos dois dígitos para os segundos
  return `${formattedMinutes}:${formattedSeconds}`;
}

// Função para iniciar o cronômetro
function startTimer() {
  timeInSeconds = 0; // Reinicia o tempo decorrido para zero
  timerInterval = setInterval(updateTimer, 1000); // Atualiza o cronômetro a cada segundo (1000 milissegundos)
}

// Função para atualizar o cronômetro a cada segundo
function updateTimer() {
  timeInSeconds++;
  timerElement.textContent = formatTime(timeInSeconds); // Atualiza o elemento HTML que exibe o cronômetro
}

// Função para parar o cronômetro e exibir os resultados do quiz
function stopTimer() {
  clearInterval(timerInterval); // Interrompe o intervalo do cronômetro
  endTime = new Date(); // Registra o horário de término do quiz
  endTimeElement.textContent = endTime.toLocaleTimeString(); // Atualiza o elemento HTML que exibe o horário de término
  totalTimeElement.textContent = formatTime(timeInSeconds); // Atualiza o elemento HTML que exibe o tempo total gasto no quiz
  resultTable.classList.remove('hidden'); // Remove a classe "hidden" para exibir a tabela de resultados
  startBtn.disabled = true; // Desativa o botão de início
  endBtn.disabled = true; // Desativa o botão de término

  // Mostrar a mensagem de parabéns
  const congratulationsMsg = document.getElementById('congratulations-msg');
  congratulationsMsg.classList.remove('hidden'); // Remove a classe "hidden" para exibir a mensagem de parabéns
}

//Obs:  Na mensagem de parabéns incluir a função para chamar o resultado da nota.

// Evento de clique no botão de início do quiz
startBtn.addEventListener('click', () => {
  if (!quizStarted) {
    startTime = new Date(); // Registra o horário de início do quiz
    startTimeElement.textContent = startTime.toLocaleTimeString(); // Atualiza o elemento HTML que exibe o horário de início
    startTimer(); // Inicia o cronômetro
    quizStarted = true; // Define que o quiz foi iniciado
    startBtn.disabled = true; // Desativa o botão de início
    endBtn.disabled = false; // Ativa o botão de término
  }
});

// Evento de clique no botão de término do quiz
endBtn.addEventListener('click', () => {
  if (quizStarted) {
    stopTimer(); // Para o cronômetro e exibe os resultados do quiz
  }
});