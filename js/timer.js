var timerInterval;

// Função para formatar o tempo em minutos e segundos no formato "mm:ss"
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

// Começar o cronômetro
function startTimer(timeSeconds, element) {
    let interval = setInterval(function () {
        timeSeconds++;
        element.textContent = formatTime(timeSeconds);
    }
        , 1000);
    return interval;
}

// Terminar a contagem
function stopTimer(interval) {
    clearInterval(interval);
    return Date.now();
}

// Função principal do cronômetro
export function start() {
    // Selecionar os elementos HTML
    const timerElement = document.getElementById('timer');

    // Declaração de variáveis para controle do cronômetro e do quiz
    let timeInSeconds = 0;

    // Iniciar o cronômetro
    timerInterval = startTimer(timeInSeconds, timerElement);
}

export function end(start) {
    let timeNoFormat = stopTimer(timerInterval);
    let end = Math.floor((timeNoFormat - start) / 1000)
    return formatTime(end);
}